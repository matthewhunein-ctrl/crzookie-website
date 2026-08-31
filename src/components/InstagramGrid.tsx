import { links } from "@/lib/site";
import Photo from "./Photo";

const InstaIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" stroke="none" />
  </svg>
);

// 6-cell square grid; pink overlay + Instagram icon on hover.
export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <a
          key={i}
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl"
          aria-label="View on Instagram"
        >
          <Photo
            src={`/images/instagram-${i + 1}.jpg`}
            label={`INSTAGRAM PHOTO ${i + 1}`}
            ratio="1 / 1"
            rounded={false}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-pink/0 opacity-0 transition-all duration-300 group-hover:bg-pink/85 group-hover:opacity-100">
            <InstaIcon />
          </span>
        </a>
      ))}
    </div>
  );
}
