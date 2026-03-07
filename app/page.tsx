import Image from "next/image";
import Link from "next/link";
import { CLINIKO_BOOKING_URL } from "./booking";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="bg-[radial-gradient(circle_at_12%_16%,#e6f2f0_0,transparent_30%),radial-gradient(circle_at_88%_22%,#f8ece1_0,transparent_26%),linear-gradient(180deg,#f4f8f8_0%,#f8fbfb_46%,#eaf3f3_100%)] text-[#12363a]">
      <section
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${basePath}/main-background-foot.webp')` }}
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-[#f4f8f8]/85" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-6xl justify-center px-6 pb-16 pt-24 md:pb-20 md:pt-28">
          <div className="w-full max-w-5xl text-center">
            <div className="flex justify-center">
              <Image
                className="mb-6 block h-auto w-[min(560px,68vw)] max-w-full md:w-[min(560px,44vw)]"
                src={`${basePath}/footwell_logo.webp`}
                alt="Footwell Podiatry logo"
                width={560}
                height={179}
                sizes="(max-width: 768px) 68vw, (max-width: 900px) 44vw, 560px"
                priority
              />
            </div>
            <h1
              id="hero-title"
              className="mx-auto max-w-[16ch] text-center text-4xl font-semibold leading-tight md:text-6xl"
            >
              Expert foot care with a calm, personal approach.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#39585c] md:text-xl">
              We help you move comfortably, treat pain early, and protect long-term
              foot health with evidence-based podiatry care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-none bg-[#2f7b79] px-4 py-2 font-semibold text-[#f8fffe] transition-colors hover:bg-[#266866]"
                href={CLINIKO_BOOKING_URL}
                data-book-appointment="true"
              >
                Book an appointment
              </a>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-none border border-[#c6dedb] bg-[#f4faf9] px-4 py-2 font-semibold transition-colors hover:border-[#2f7b79]"
                href="/services"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
              Services
            </p>
            <h2 id="services-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              Podiatry care tailored to your needs
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="border border-[#c6dedb] bg-white p-5 shadow-[0_7px_18px_rgba(21,74,77,0.05)]">
              <h3 className="mb-2 text-lg font-semibold">General Foot Health</h3>
              <p className="text-[#39585c]">
                Assessment and treatment for common concerns including corns,
                calluses, thickened nails, and skin discomfort.
              </p>
            </article>
            <article className="border border-[#c6dedb] bg-white p-5 shadow-[0_7px_18px_rgba(21,74,77,0.05)]">
              <h3 className="mb-2 text-lg font-semibold">Biomechanics & Pain</h3>
              <p className="text-[#39585c]">
                Gait and movement assessments to support heel pain, forefoot pain,
                and recurring strain from everyday activity.
              </p>
            </article>
            <article className="border border-[#c6dedb] bg-white p-5 shadow-[0_7px_18px_rgba(21,74,77,0.05)]">
              <h3 className="mb-2 text-lg font-semibold">Diabetic Foot Checks</h3>
              <p className="text-[#39585c]">
                Preventive reviews and risk monitoring to help reduce complications
                and keep you safely active.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#d7e8e6] bg-[#eef7f5] py-16 md:py-20"
        aria-labelledby="approach-title"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
              Our Approach
            </p>
            <h2 id="approach-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              Clear advice, thoughtful treatment, lasting results
            </h2>
          </div>
          <div className="space-y-4 text-[#39585c]">
            <p>
              Every appointment starts with listening. We explain findings in plain
              language, outline options, and create a treatment plan that suits your
              lifestyle.
            </p>
            <p>
              Whether your goal is pain relief, injury prevention, or confidence in
              daily movement, we focus on outcomes that make day-to-day life easier.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        aria-labelledby="meet-podiatrist-title"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="overflow-hidden border border-[#c6dedb] bg-white shadow-[0_10px_30px_rgba(20,63,66,0.08)]">
            <Image
              src={`${basePath}/meet_rachel.png`}
              alt="Rachel Rayner, HCPC registered podiatrist"
              width={925}
              height={1439}
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2
              id="meet-podiatrist-title"
              className="text-3xl font-semibold leading-tight md:text-5xl"
            >
              Meet Rachel, your HCPC Registered Podiatrist
            </h2>
            <div className="mt-6 space-y-4 text-[#39585c]">
              <p>Allow me to introduce myself!</p>
              <p>
                I am Rachel Rayner, HCPC registered Podiatrist and owner of
                Footwell Podiatry in Broughton, Preston.
              </p>
              <p>
                I qualified as a Podiatrist in 2022 after completing my degree in
                Podiatry at Salford University, where I proudly graduated with a
                First Class Honours (blood sweat and tears included).
              </p>
              <p>
                My journey into Podiatry began by chance. I was a carer providing
                services to elderly and vulnerable clients around my home town of
                Preston. When my children went off to school I has always intended
                on pursuing a career in health care, I just wasn&apos;t sure what I
                wanted to do!
              </p>
              <p>
                I had always seen a Podiatrist from being 15 years old due to my
                own foot pain and problems, but at the time I had no idea how much
                there was to know about feet, or the problems that can come with
                them. When I discovered the Podiatry degree at Salford university, I
                just knew this was my calling.
              </p>
              <p>
                I started my degree in 2019, and here I am 7 years later running my
                own clinic in Broughton.
              </p>
              <p>
                I have nothing but pure passion and dedication to delivering the
                best service and expert foot care solutions to the people in and
                around my community of Preston.
              </p>
              <p>
                As a qualified Podiatrist I treat a range of conditions affecting
                the foot and lower limb, including foot pain, plantar fasciitis,
                ingrown toe nails, fungal infections, verrucae and diabetic foot
                problems and so much more!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="visit-title">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
              Plan Your Visit
            </p>
            <h2 id="visit-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              What to expect
            </h2>
          </div>
          <ol className="grid list-none gap-4 p-0 md:grid-cols-3">
            <li className="border border-[#c6dedb] bg-[#f5faf9] p-4">
              <h3 className="mb-1 text-lg font-semibold">1. Initial Assessment</h3>
              <p className="text-[#39585c]">We discuss your symptoms, history, and goals.</p>
            </li>
            <li className="border border-[#c6dedb] bg-[#f5faf9] p-4">
              <h3 className="mb-1 text-lg font-semibold">2. Clinical Examination</h3>
              <p className="text-[#39585c]">
                We examine foot health, posture, and movement where relevant.
              </p>
            </li>
            <li className="border border-[#c6dedb] bg-[#f5faf9] p-4">
              <h3 className="mb-1 text-lg font-semibold">3. Personal Care Plan</h3>
              <p className="text-[#39585c]">
                You leave with a clear treatment plan and practical next steps.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="contact" className="pb-24 pt-16 md:pt-20" aria-labelledby="contact-title">
        <div className="mx-auto grid w-full max-w-6xl gap-5 border border-[#c6dedb] bg-[linear-gradient(150deg,#ffffff_0%,#f4fcfb_70%,#e6f3f1_100%)] p-8 shadow-[0_10px_30px_rgba(20,63,66,0.08)] md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
              Contact
            </p>
            <h2 id="contact-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              Ready to feel comfortable on your feet again?
            </h2>
            <p className="mt-3 text-[#39585c]">
              Call us to book, or send an email and our team will get back to you.
            </p>
          </div>
          <address className="grid gap-3 not-italic text-[#39585c]">
            <p>
              <strong className="text-[#12363a]">Phone:</strong>{" "}
              <a className="text-[#0f5f5e] underline underline-offset-2" href="tel:+441234567890">
                01234 567890
              </a>
            </p>
            <p>
              <strong className="text-[#12363a]">Email:</strong>{" "}
              <a
                className="text-[#0f5f5e] underline underline-offset-2"
                href="mailto:hello@footwellpodiatry.co.uk"
              >
                hello@footwellpodiatry.co.uk
              </a>
            </p>
            <p>
              <strong className="text-[#12363a]">Clinic:</strong> 14 Well Lane,
              Yourtown
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
