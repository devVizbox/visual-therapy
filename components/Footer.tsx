import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand column */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-xl font-bold text-white tracking-tight">
              Visual Therapies CIC
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Supporting stroke survivors and caregivers in Bidston, Wirral through community
            connection, modern rehabilitation, and VR technology.
          </p>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full">
            Community Interest Company
          </span>
        </div>

        {/* Navigation column */}
        <div className="space-y-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest">
            Navigation
          </h3>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 group-hover:bg-blue-400 transition-colors duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="space-y-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest">
            Contact
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:info@visualtherapiescic.org"
                className="group flex items-start gap-3 hover:text-white transition-colors duration-200"
              >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-700 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">info@visualtherapiescic.org</span>
              </a>
            </li>
            <li>
              <a
                href="tel:07806680842"
                className="group flex items-start gap-3 hover:text-white transition-colors duration-200"
              >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-700 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">07806 680842</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm">Bidston, Wirral</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {year} Visual Therapies CIC. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Registered Community Interest Company &middot; England &amp; Wales
          </p>
        </div>
      </div>

    </footer>
  );
}
