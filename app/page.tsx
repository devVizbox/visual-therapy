import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
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
              Bidston, Wirral
            </span>
            <h1 className="hero-a2 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to<br />Visual Therapies CIC
            </h1>
            <p className="hero-a3 text-blue-100 text-lg leading-relaxed mb-10 max-w-lg">
              We are a community interest company dedicated to supporting stroke survivors and their
              caregivers in Bidston, Wirral. Our group offers more than traditional support—combining
              social connection, modern rehabilitation, and opportunities for participants to shape
              their own recovery.
            </p>
            <div className="hero-a4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:bg-blue-50"
              >
                Get in Touch
              </Link>
              <Link
                href="#about"
                className="btn-ghost border border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hero-img relative h-[420px] rounded-2xl overflow-hidden shadow-2xl img-zoom-wrap">
            <div className="absolute inset-0 img-zoom">
              <Image
                src="/images/woman-1845517_1280-2.jpg"
                alt="VR headset rehabilitation"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-blue-900/30" />
            <div className="hero-badge animate-float absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4">
              <p className="text-white text-sm font-semibold">Innovative VR Rehabilitation</p>
              <p className="text-blue-100 text-xs mt-0.5">Cutting-edge technology for stroke recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT OUR GROUP ──────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <AnimateOnScroll className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3">
            About Our Group
          </span>
          <div className="w-12 h-0.5 bg-blue-700 mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a community interest company dedicated to supporting stroke survivors and their
            caregivers in Bidston, Wirral. Our group offers more than traditional support—combining
            social connection, modern rehabilitation, and opportunities for participants to shape their
            own recovery.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ─── FEATURE CARDS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Community Support */}
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="feature-card bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 img-zoom">
                    <Image src="/images/tea-2081920_1280.jpg" alt="Community tea gathering" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="card-icon w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Community Support</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    We bring together stroke survivors and caregivers in a friendly, welcoming
                    environment. Here, like-minded people can connect, share experiences, and reduce
                    feelings of isolation over tea, coffee, and biscuits.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Caregiver Respite */}
            <AnimateOnScroll animation="fade-up" delay={120}>
              <div className="feature-card bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
                <div className="relative h-52 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="card-icon w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Caregiver Respite</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    While survivors engage in group activities, caregivers can take valuable time for
                    themselves, such as shopping in Tesco, knowing their loved ones are in a safe and
                    supportive space.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Inclusive & Accessible */}
            <AnimateOnScroll animation="fade-up" delay={240}>
              <div className="feature-card bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 img-zoom">
                    <Image src="/images/people-2557399_1280.jpg" alt="Group planning session" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="card-icon w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Inclusive &amp; Accessible</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    We strive to make our sessions low-cost or free, ensuring everyone who could
                    benefit is welcome.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ─── VR INNOVATION SPOTLIGHT ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <AnimateOnScroll animation="fade-left" className="space-y-8">
              <div>
                <span className="inline-block text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3">
                  Technology &amp; Innovation
                </span>
                <div className="w-12 h-0.5 bg-blue-700 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
                  Innovative Rehabilitation
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Our group integrates the latest virtual reality (VR) technology for stroke
                  rehabilitation—offering engaging, guided activities that build confidence and
                  support physical and cognitive recovery.
                </p>
              </div>
              <div className="border-l-4 border-blue-700 pl-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Shaping the Future</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Participants can immerse themselves in the latest VR applications, experimenting
                  with innovative tools, environments, and experiences firsthand. They are then
                  invited to share their thoughts, ideas, and suggestions during dedicated
                  &ldquo;Have Your Say&rdquo; sessions. These feedback opportunities not only give
                  members a voice in shaping the future of the group but also influence how emerging
                  technologies are tested, refined, and developed. By actively involving
                  participants in this cycle of exploration and co-creation, the initiative ensures
                  that new stroke recovery solutions are both user-centered and aligned with the
                  real needs and interests of the community.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-right">
              <div className="relative h-[520px] rounded-2xl shadow-xl img-zoom-wrap">
                <div className="absolute inset-0 img-zoom rounded-2xl overflow-hidden">
                  <Image
                    src="/images/woman-1845517_1280-2.jpg"
                    alt="VR headset rehabilitation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-blue-700 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    VR Rehabilitation
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ─── HOW WE MAKE A DIFFERENCE ─────────────────────────────────────── */}
      <section className="py-24 bg-blue-700">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Make a Difference
            </h2>
            <div className="w-12 h-0.5 bg-blue-300 mx-auto" />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">

            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="diff-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="diff-icon w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white leading-relaxed">
                  Boost confidence and self-worth by encouraging survivors to take an active role
                  in their own recovery and group life.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={120}>
              <div className="diff-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="diff-icon w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-white leading-relaxed">
                  Build a lasting, supportive network rooted in real community needs.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={240}>
              <div className="diff-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="diff-icon w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white leading-relaxed">
                  Regularly assess progress through feedback, group engagement, and VR analytics.
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ─── VISION FOR SUSTAINABILITY ────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <AnimateOnScroll className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3">
              Looking Ahead
            </span>
            <div className="w-12 h-0.5 bg-blue-700 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Our Vision for Sustainability
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
              <p>
                We aim to develop a volunteer-led, partnership-driven group that can attract small
                ongoing contributions, sponsorship, and community support—ensuring long-term impact
                for stroke survivors and caregivers in our area.
              </p>
              <p className="font-semibold text-slate-700">
                Join us to connect, recover, and grow—together.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <AnimateOnScroll className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-lg mb-6">For more information please contact us on</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@visualtherapiescic.org"
              className="btn-primary inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-800 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@visualtherapiescic.org
            </a>
            <a
              href="tel:07806680842"
              className="btn-outline inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Tel: 07806680842
            </a>
          </div>
        </AnimateOnScroll>
      </section>

    </div>
  );
}
