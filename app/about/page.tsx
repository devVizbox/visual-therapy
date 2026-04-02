import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "About Us | Visual Therapies CIC",
  description:
    "Learn more about Visual Therapies CIC and our mission to support stroke survivors and caregivers in Bidston, Wirral.",
};

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Connection",
    text: "Bringing survivors and caregivers together in a warm, welcoming community space.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: "Innovation",
    text: "Integrating cutting-edge VR technology to power modern stroke rehabilitation.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "Community",
    text: "Volunteer-led and shaped by members, rooted in the real needs of Wirral.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-animated-bg">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="hero-a1 inline-block text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
              Our Story
            </span>
            <h1 className="hero-a2 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              About Visual<br />Therapies CIC
            </h1>
            <p className="hero-a3 text-blue-100 text-lg leading-relaxed mb-10 max-w-lg">
              Visual Therapies CIC is a community interest company based in Bidston, Wirral. We
              exist to improve quality of life for stroke survivors and the people who care for
              them—through connection, innovation, and community.
            </p>
            <div className="hero-a4">
              <Link
                href="/contact"
                className="btn-primary inline-block bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:bg-blue-50"
              >
                Get Involved
              </Link>
            </div>
          </div>

          <div className="hero-img relative h-[400px] rounded-2xl overflow-hidden shadow-2xl img-zoom-wrap">
            <div className="absolute inset-0 img-zoom">
              <Image
                src="/images/people-2557399_1280.jpg"
                alt="Group session at Visual Therapies CIC"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-blue-900/30" />
            <div className="hero-badge animate-float absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4">
              <p className="text-white text-sm font-semibold">Community-led Recovery</p>
              <p className="text-blue-100 text-xs mt-0.5">Bidston, Wirral</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map(({ icon, label, text }, i) => (
              <AnimateOnScroll key={label} animation="fade-up" delay={i * 120}>
                <div className="pillar-card flex flex-col items-start bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full">
                  <div className="pillar-icon w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          <AnimateOnScroll animation="fade-left" className="space-y-6">
            <div>
              <span className="inline-block text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </span>
              <div className="w-12 h-0.5 bg-blue-700 mb-6" />
              <p className="text-slate-600 leading-relaxed text-lg">
                Our sessions bring people together in a warm, inclusive environment where survivors
                and caregivers alike can find support, respite, and a sense of purpose. We combine
                the social power of community with cutting-edge virtual reality rehabilitation tools
                to offer a truly modern approach to stroke recovery.
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We are committed to keeping our sessions low-cost or free, and to letting our
              members shape the direction of the group through regular feedback and co-creation
              opportunities.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
            <div className="bg-blue-700 rounded-2xl p-10 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                To build a volunteer-led, community-driven network that supports long-term recovery
                and well-being for stroke survivors and caregivers in Wirral—powered by technology,
                empathy, and partnership.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <AnimateOnScroll className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to get involved or find out more?</h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a survivor, caregiver, volunteer, or partner—we&apos;d love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:bg-blue-800"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@visualtherapiescic.org"
              className="btn-outline border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50"
            >
              info@visualtherapiescic.org
            </a>
          </div>
        </AnimateOnScroll>
      </section>

    </div>
  );
}
