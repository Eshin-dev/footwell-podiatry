import type { Review } from "../data/reviews";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ReviewCard({ review }: { review: Review }) {
  const initials = getInitials(review.author);

  return (
    <article className="flex flex-col h-full border border-[#d4bfa8] bg-white p-5 shadow-[0_7px_18px_rgba(74,46,26,0.05)]">
      <div
        className="mb-3 text-amber-400"
        aria-label="5 out of 5 stars"
      >
        <span aria-hidden="true">★★★★★</span>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#f0e4d7] text-xs font-semibold text-[#7a5230]"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-1.5">
          <span className="font-semibold text-[#2c1a0f]">{review.author}</span>
          {review.isLocalGuide && (
            <span className="text-xs text-[#5c4033]">· Local Guide</span>
          )}
        </div>
      </div>

      <p className="grow text-sm leading-relaxed text-[#5c4033]">
        {review.text}
      </p>
    </article>
  );
}
