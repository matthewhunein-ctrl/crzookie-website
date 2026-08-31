#!/usr/bin/env node
/**
 * Download the full source tree of a Vercel deployment to disk.
 *
 * Usage:
 *   VERCEL_TOKEN=xxxxx node vercel-download.mjs crzookie
 *   VERCEL_TOKEN=xxxxx VERCEL_TEAM_ID=team_xxx node vercel-download.mjs crzookie ./crzookie-web
 *
 * Requires Node 20+.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const API = "https://api.vercel.com";
const TOKEN = process.env.VERCEL_TOKEN;
const TEAM = process.env.VERCEL_TEAM_ID || "";
const PROJECT = process.argv[2];
const OUT_DIR = process.argv[3] || `./${PROJECT || "vercel-source"}`;

// Never worth downloading: build output and installed packages.
const SKIP = new Set(["node_modules", ".next", ".vercel", ".git"]);

if (!TOKEN) {
  console.error("Missing VERCEL_TOKEN. Create one at https://vercel.com/account/tokens");
  process.exit(1);
}
if (!PROJECT) {
  console.error("Usage: VERCEL_TOKEN=xxx node vercel-download.mjs <project-name> [output-dir]");
  process.exit(1);
}

const teamQuery = TEAM ? `teamId=${encodeURIComponent(TEAM)}` : "";

function url(path, params = "") {
  const parts = [params, teamQuery].filter(Boolean).join("&");
  return `${API}${path}${parts ? `?${parts}` : ""}`;
}

async function api(path, params) {
  const res = await fetch(url(path, params), {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} on ${path}\n${await res.text()}`);
  }
  return res;
}

async function latestDeployment() {
  const res = await api("/v6/deployments", `app=${encodeURIComponent(PROJECT)}&limit=1`);
  const { deployments } = await res.json();
  if (!deployments || deployments.length === 0) {
    throw new Error(
      `No deployments found for project "${PROJECT}". ` +
        `If the project lives under a team, set VERCEL_TEAM_ID.`
    );
  }
  return deployments[0];
}

async function fetchFileContents(deploymentId, fileId) {
  const res = await api(`/v7/deployments/${deploymentId}/files/${fileId}`);
  const contentType = res.headers.get("content-type") || "";

  // The API returns either raw file content or a JSON envelope with base64 data,
  // depending on the file. Handle both.
  if (contentType.includes("application/json")) {
    const body = await res.json();
    if (typeof body === "string") return Buffer.from(body, "utf8");
    if (body && typeof body.data === "string") {
      return Buffer.from(body.data, "base64");
    }
    return Buffer.from(JSON.stringify(body, null, 2), "utf8");
  }

  return Buffer.from(await res.arrayBuffer());
}

async function walk(deploymentId, nodes, prefix = "") {
  let count = 0;

  for (const node of nodes || []) {
    if (SKIP.has(node.name)) {
      console.log(`  skipping ${prefix}${node.name}/`);
      continue;
    }

    const relPath = `${prefix}${node.name}`;

    if (node.type === "directory") {
      let children = node.children;

      // Some responses return directories without inlined children.
      if (!children) {
        const res = await api(
          `/v6/deployments/${deploymentId}/files`,
          `path=${encodeURIComponent(relPath)}`
        );
        children = await res.json();
      }

      count += await walk(deploymentId, children, `${relPath}/`);
      continue;
    }

    const target = join(OUT_DIR, relPath);
    await mkdir(dirname(target), { recursive: true });

    try {
      const contents = await fetchFileContents(deploymentId, node.uid);
      await writeFile(target, contents);
      console.log(`  ${relPath}`);
      count += 1;
    } catch (err) {
      console.error(`  FAILED ${relPath}: ${err.message}`);
    }
  }

  return count;
}

const deployment = await latestDeployment();
console.log(`Project:    ${PROJECT}`);
console.log(`Deployment: ${deployment.url}`);
console.log(`Created:    ${new Date(deployment.created).toLocaleString()}`);
console.log(`Writing to: ${OUT_DIR}\n`);

const filesRes = await api(`/v6/deployments/${deployment.uid}/files`);
const tree = await filesRes.json();

const total = await walk(deployment.uid, tree);
console.log(`\nDone. ${total} files written to ${OUT_DIR}`);
