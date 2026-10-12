import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Visual Therapies CIC",
  description:
    "Get in touch with Visual Therapies CIC. We welcome stroke survivors, caregivers, volunteers, and partners.",
};

const contactDetails = [
  {
    label: "Email",
    value: "carl@visualtherapies.co.uk",
    href: "mailto:carl@visualtherapies.co.uk",
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Telephone",
    value: "07806 680842",
    href: "tel:07806680842",
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Bidston, Wirral",
    href: null,
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
          <div className="max-w-2xl">
            <span className="hero-a1 inline-block text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
              Get in Touch
            </span>
            <h1 className="hero-a2 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="hero-a3 text-blue-100 text-xl leading-relaxed">
              Whether you&apos;re a stroke survivor, caregiver, volunteer, or potential
              partner—we&apos;d love to hear from you.
            </p>
          </div>

          <div className="hero-a4 flex flex-wrap gap-4 mt-10">
            <a
              href="mailto:carl@visualtherapies.co.uk"
              className="btn-ghost flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              carl@visualtherapies.co.uk
            </a>
            <a
              href="tel:07806680842"
              className="btn-ghost flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07806 680842
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* Left — details + who can join */}
          <AnimateOnScroll animation="fade-left" className="space-y-8">
            <div>
              <span className="inline-block text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3">
                Contact Details
              </span>
              <div className="w-12 h-0.5 bg-blue-700 mb-6" />
              <div className="space-y-3">
                {contactDetails.map(({ label, value, href, icon }) => (
                  <div
                    key={label}
                    className="contact-row flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-800 font-medium hover:text-blue-700 transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-700 rounded-2xl p-8 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Who can join?</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Our sessions are open to stroke survivors and their caregivers in the Wirral area.
                Sessions are low-cost or free—ensuring everyone who could benefit is welcome.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right — form */}
          <AnimateOnScroll animation="fade-right">
            <ContactForm />
          </AnimateOnScroll>

        </div>
      </section>

    </div>
  );
}
