import type { Metadata } from "next";
import BookAppointmentButton from "../book-appointment-button";
import { SITE_NAME, absoluteUrl } from "../seo";

export const metadata: Metadata = {
    title: "What is Biomechanics?",
    description:
        "Learn who may need a biomechanics assessment, what it includes, and how orthotics can help with foot, ankle, and lower-limb pain.",
    alternates: {
        canonical: "/what-is-biomechanics",
    },
    openGraph: {
        title: `What is Biomechanics? | ${SITE_NAME}`,
        description:
            "A clear guide to biomechanics assessments, orthotics, and treatment options from Footwell Podiatry.",
        url: absoluteUrl("/what-is-biomechanics"),
    },
};

export default function WhatIsBiomechanicsPage() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteUrl("/"),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "What is Biomechanics?",
                item: absoluteUrl("/what-is-biomechanics"),
            },
        ],
    };
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "What is Biomechanics?",
        headline: "What is Biomechanics?",
        description:
            "Who may need a biomechanics assessment, what the assessment includes, and how orthotics may help foot and ankle pain.",
        url: absoluteUrl("/what-is-biomechanics"),
        about: {
            "@type": "MedicalCondition",
            name: "Foot and ankle pain",
        },
        publisher: {
            "@type": "MedicalBusiness",
            name: SITE_NAME,
        },
    };

    return (
        <main className="bg-[radial-gradient(circle_at_12%_16%,#e6f2f0_0,transparent_30%),radial-gradient(circle_at_88%_22%,#f8ece1_0,transparent_26%),linear-gradient(180deg,#f4f8f8_0%,#f8fbfb_46%,#eaf3f3_100%)] pb-20 text-[#12363a]">
            <section className="mx-auto w-full max-w-4xl px-6 pb-8 pt-16 md:pt-20" aria-labelledby="biomechanics-title">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
                    Foot &amp; Lower Limb Care
                </p>
                <h1 id="biomechanics-title" className="text-4xl font-semibold leading-tight md:text-6xl">
                    What is Biomechanics?
                </h1>
            </section>

            <section className="mx-auto grid w-full max-w-4xl gap-10 px-6 text-[#39585c]">
                <article className="space-y-4">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        Who may need a biomechanical assessment?
                    </h2>
                    <p>
                        There is a misconception that biomechanical assessments and gait analysis is
                        for those people with sporting injuries. Anyone, of any age, who is suffering
                        from pain in the foot, ankle, knees, hips or lower back would benefit from this
                        type of assessment.
                    </p>
                    <p>This type of appointment is also useful for the following:-</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>People with high/ low arched feet with foot, ankle, knee, hip or back pain</li>
                        <li>
                            People with diabetes, with high pressure areas on the foot increasing risk
                            of ulceration
                        </li>
                        <li>
                            People experiencing peri/menopausal symptoms (as this can also affect the
                            bones, ligaments and tendons).
                        </li>
                        <li>During pregnancy</li>
                        <li>People diagnosed with arthritic or hypermobile conditions</li>
                        <li>
                            People with a current or history of foot pain including bunions,
                            metatarsalgia, plantar fasciitis, Achilles tendonitis or posterior tibialis
                            tendon dysfunction.
                        </li>
                    </ul>
                    <p>
                        Biomechanical assessments are also helpful if you have concerns regarding your
                        children&apos;s feet, or for patients who are elderly or have poor stability and
                        are at risk of falls.
                    </p>
                    <p>
                        Essentially, if it is foot pain not related to skin and nail issues, this
                        assessment is for you!
                    </p>
                    <p className="font-semibold text-[#12363a]">
                        ** Please note we do NOT specialise in running gait analysis
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        What does the assessment include?
                    </h2>
                    <p>
                        Podiatrists are trained to a high level to understand the anatomy of the foot,
                        ankle and lower limb in order to assess, diagnose and treat musculoskeletal
                        conditions and injuries. They also understand the complex health conditions that
                        can affect the integrity of the structures within the foot.
                    </p>
                    <p>
                        Your podiatrist will assess your foot posture, range of motion and quality of
                        movement within the foot and ankle. Weight baring, non-weight baring, static and
                        dynamic assessments are carried out. Your podiatrist will then undertake an
                        observational assessment of your gait whilst walking to determine whether any
                        biomechanical variations may be contributing to your symptoms.
                    </p>
                    <p>
                        Based upon the results your Podiatrist may carry out further functional tests to
                        assess the strength and stability of the foot and lower limb.
                    </p>
                    <p>
                        Your podiatrist will also undertake a full medical history, ask about lifestyle
                        and activity, discuss footwear and may carry out vascular and neurological
                        testing.
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        How do Podiatrists treat foot and ankle pain?
                    </h2>
                    <p>
                        Once a diagnosis has been reached, your Podiatrist will determine a treatment
                        plan which may include:-
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Making footwear changes.</li>
                        <li>Stretching and strengthening exercises</li>
                        <li>Temporarily offloading using taping/ padding/ semi-custom orthotics</li>
                        <li>
                            Referring for imaging such as X-Ray, MRI or Ultrasound in cases that require
                            additional investigation
                        </li>
                        <li>
                            Advising if orthotics are indicated (which may involve prefabricated/ semi
                            custom or bespoke, or 3D printed orthotics)
                        </li>
                    </ul>
                </article>

                <article className="space-y-4">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        What is the purpose of an Orthotic?
                    </h2>
                    <p>
                        Orthotics can be used temporarily, to enable offloading of specific structures in
                        the foot so they can to recover. Some conditions/ patients may require the use of
                        an orthotic on a permanent basis.
                    </p>
                    <p>
                        The purpose of orthotics is to enhance alignment, offload, redistribute or reduce
                        the forces acting upon the foot and its supporting structures. Orthotics reduce
                        pain by improving function.
                    </p>
                    <p>
                        Orthotics may be used to accommodate and support an unstable foot type, for
                        example in patients with Rheumatoid Arthritis.
                    </p>
                    <p>
                        Orthotics can also be used in the management of the diabetic foot with high
                        pressure areas at risk of ulceration.
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        What is the difference between a prefabricated, semi-custom and custom orthotic?
                    </h2>
                    <p>
                        A prefabricated orthotic or &apos;off-the-shelf&apos; device is a premade orthotic,
                        that sometimes has additions already built in to control certain biomechanical
                        variations. For example, in the pes planus foot (flat feet) there is little
                        evidence to suggest that a custom device is more effective at managing the
                        symptoms associated with this condition.
                    </p>
                    <p>
                        A semi-custom orthotic is a prefabricated device where your Podiatrist may use
                        additions to manage your symptoms and improve foot function. This is usually a
                        temporary measure and can be useful in determining your tolerance to an orthotic
                        and whether any of the additions have been effective in improving your symptoms.
                    </p>
                    <p>
                        A custom device is casted specifically to your foot. Your podiatrist will use a
                        suitable method for capturing your foot profile. In some cases this will be done
                        using a 3D Scan whilst non-weight baring and in others a foam impression may be
                        used if we need to capture the foot in a specific position.
                    </p>
                </article>

                <article className="space-y-4 border border-[#c6dedb] bg-[linear-gradient(150deg,#ffffff_0%,#f4fcfb_70%,#e6f3f1_100%)] p-6 shadow-[0_10px_30px_rgba(20,63,66,0.08)] md:p-8">
                    <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                        The Footwell Standard
                    </h2>
                    <p>
                        At Footwell Podiatry we leading manufacturers of custom made orthotics to ensure
                        comfort, quality and durability! Your prescription is completely bespoke, and we
                        offer a range of materials including PA12, Polypropylene, EVA and Carbon Fibre
                        depending on your needs.
                    </p>
                    <p>
                        We offer 3D foot scanning for custom orthotics (where indicated) and have a range
                        of prefabricated devices in stock designed by experts in the industry that we
                        recommend.
                    </p>
                    <p>We will never sell you orthotics if we do not think you need them.</p>
                    <p>
                        We aim to deliver the best quality orthotics to meet your specific needs. Whilst
                        we do not have a specific policy on returns of custom orthotics, if they have not
                        met your expectations we will offer alterations/refurbishment/ replacement or
                        returns within the first 3 months. Please note this is on a case by case basis as
                        we cannot offer refunds or replacements due to incorrect care. To date we have
                        never had to offer this service!
                    </p>
                    <p>
                        We are all about high quality customer service and achieving great outcomes for
                        you, so if you do have any queries or concerns regarding your orthotics please let
                        us know, we are here to help!
                    </p>
                    <p>
                        It is important to understand that the longevity of a device will vary from person
                        to person but a custom device should last a minimum of 12 months. This is
                        dependant on body weight, activity levels and caring for your orthotics in
                        accordance with instructions provided.
                    </p>
                    <p>
                        We recommend a biomechanical review assessment every 12 months for people
                        requiring orthotics on a permanent basis. Reviews, bespoke treatment plans and
                        rehabilitation exercises will be offered in your appointment. If you require
                        orthotics we will also give you advice on how to build your tolerance to these,
                        how to look after them and when to come back for a review.
                    </p>
                    <p className="font-semibold text-[#12363a]">
                        ** Please note we do not specialise in running gait analysis
                    </p>
                    <div className="pt-2">
                        <BookAppointmentButton />
                    </div>
                </article>
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
        </main>
    );
}
