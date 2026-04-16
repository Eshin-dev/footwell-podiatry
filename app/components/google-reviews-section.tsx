import { reviews } from "../data/reviews";
import ReviewCard from "./review-card";

export default function GoogleReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-7">
          <h2
            id="reviews-title"
            className="text-3xl font-semibold leading-tight md:text-5xl"
          >
            Hear from our patients
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-2">
          <a
            href="https://www.google.com/search?q=Footwell+Podiatry,+Broughton+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-none border border-[#c6dedb] bg-[#f4faf9] px-4 py-2 font-semibold transition-colors hover:border-[#2f7b79]"
          >
            Read all reviews on Google →
          </a>
          <p className="text-xs text-[#39585c]/60">Reviews from Google</p>
        </div>
      </div>
    </section>
  );
}
