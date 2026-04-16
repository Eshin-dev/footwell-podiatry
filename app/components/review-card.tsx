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
    <article className="flex flex-col border border-[#c6dedb] bg-white p-5 shadow-[0_7px_18px_rgba(21,74,77,0.05)]">
      <div
        className="mb-3 text-amber-400"
        aria-label="5 out of 5 stars"
      >
        <span aria-hidden="true">★★★★★</span>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#e6f2f0] text-xs font-semibold text-[#2f7b79]"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-1.5">
          <span className="font-semibold text-[#12363a]">{review.author}</span>
          {review.isLocalGuide && (
            <span className="text-xs text-[#39585c]">· Local Guide</span>
          )}
        </div>
      </div>

      <p className="line-clamp-5 grow text-sm leading-relaxed text-[#39585c]">
        {review.text}
      </p>

      <p className="mt-3 text-xs text-[#39585c]/70">{review.relativeDate}</p>
    </article>
  );
}
