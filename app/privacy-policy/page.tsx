import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Knownaxis',
  description:
    'Learn how Knownaxis collects, uses, and safeguards your personal data, inquiries, and project information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 sm:pt-36 pb-20 bg-white dark:bg-[#0b0c10] text-slate-800 dark:text-[#d2d4dc] transition-colors">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-96 w-full max-w-4xl bg-brand/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-grey mb-6">
            <Link href="/" className="hover:text-brand dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-700 dark:text-white/80">Legals</span>
            <span>/</span>
            <span className="text-brand font-medium">Privacy Policy</span>
          </div>

          {/* Page Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Legal Documentation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-grey leading-relaxed">
              Effective Date: January 1, 2026 · Last Updated: September 2026
            </p>

            {/* Quick Cross-Link Banner */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 text-xs sm:text-sm">
              <span className="text-slate-600 dark:text-grey">
                Looking for our terms of engagement and service deliverables?
              </span>
              <Link
                href="/terms-and-conditions"
                className="font-semibold text-brand hover:underline inline-flex items-center gap-1"
              >
                Read Terms & Conditions →
              </Link>
            </div>
          </div>

          {/* Document Content */}
          <article className="mt-10 space-y-10 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-700 dark:text-[#c4c6d0]">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                1. Introduction & Overview
              </h2>
              <p>
                Knownaxis (&ldquo;Knownaxis,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an elite digital engineering and brand architecture studio. We design high-performance websites, interactive 3D web applications, custom software, and autonomous AI automation workflows for visionary founders and businesses globally.
              </p>
              <p>
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and protect your information when you visit our website{' '}
                <strong className="text-slate-900 dark:text-white">knownaxis.com</strong>, request a strategy discovery call, submit a project inquiry, or communicate with our engineers and strategists.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We only collect information that is strictly necessary to evaluate your project, respond to your inquiries, deliver our digital architecture services, and fulfill client commitments:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">Contact & Inquiry Information:</strong> When you click &ldquo;Book Free Call&rdquo;, &ldquo;Start your project&rdquo;, or submit our booking forms, we collect your full name, telephone / WhatsApp number, work email address, and project requirements.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Project & Technical Details:</strong> Information regarding your business model, current technology stack, UI/UX brand guidelines, timelines, and commercial goals shared during strategy consultations.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Automated Usage Data:</strong> Anonymized technical data such as browser type, operating system, IP address, referral sources, and interaction metrics on our website (including 3D canvas interaction benchmarks) to continuously optimize site speed and performance.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                3. How We Use Your Information
              </h2>
              <p>
                Your data is never sold, leased, or monetized. We process information for the following legitimate purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To schedule and conduct 1-on-1 strategy sessions and discovery calls.</li>
                <li>To prepare accurate architectural blueprints, scopes of work, and project estimates.</li>
                <li>To communicate project milestones, deliverables, and service updates.</li>
                <li>To protect our infrastructure against cyber threats, automated scraping, and unauthorized intrusions.</li>
                <li>To comply with applicable legal obligations and financial reporting requirements.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                4. Data Protection & Confidentiality
              </h2>
              <p>
                We treat all client project disclosures with strict confidentiality. All client assets, proprietary business logic, design files, and trade secrets shared with Knownaxis are protected under industry-standard non-disclosure practices.
              </p>
              <p>
                Our infrastructure implements end-to-end Transport Layer Security (TLS 1.3), rigorous access controls, multi-factor authentication, and encrypted data storage. Only team members directly assigned to your engagement are granted access to your project records.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                5. Third-Party Service Providers
              </h2>
              <p>
                We may engage trusted third-party cloud infrastructure and technology vendors solely to facilitate our operations:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">Hosting & Edge Networks:</strong> Enterprise platforms (e.g. Vercel, Cloudflare, AWS) ensuring low-latency delivery of 3D assets and static builds.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Calendar & Scheduling:</strong> Secure calendar tooling (e.g. Cal.com) when you schedule strategy sessions directly.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Communication Tools:</strong> Encrypted email, Slack, and WhatsApp channels for rapid client liaison.
                </li>
              </ul>
              <p>
                All third parties are bound by strict data processing and security compliance obligations.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                6. Cookies & Tracking Preferences
              </h2>
              <p>
                Knownaxis maintains a minimal-cookie policy. We utilize essential session tokens and local storage preferences (such as dark/light mode preference and cached form status). We do not deploy invasive third-party cross-site behavioral tracking cookies or third-party advertising trackers.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                7. Your Data Rights
              </h2>
              <p>
                Depending on your location and jurisdiction (including GDPR, UK Data Protection Act, and CCPA/CPRA), you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request the rectification or correction of inaccurate information.</li>
                <li>Request the permanent deletion of your inquiry records and submitted data (&ldquo;Right to be Forgotten&rdquo;).</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us directly at{' '}
                <a
                  href="mailto:info@knownaxis.com"
                  className="font-semibold text-brand underline hover:opacity-90"
                >
                  info@knownaxis.com
                </a>
                . Requests are processed within 30 days without fee.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                8. Contact Information
              </h2>
              <p>
                If you have questions, feedback, or privacy concerns regarding this policy, please reach out to our team:
              </p>
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 space-y-2">
                <p className="font-bold text-slate-900 dark:text-white text-base">Knownaxis Studio</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:info@knownaxis.com"
                    className="text-brand hover:underline font-medium"
                  >
                    info@knownaxis.com
                  </a>
                </p>
                <p>Website: knownaxis.com</p>
                <p className="text-xs text-slate-500 dark:text-grey pt-1">
                  Response SLA: Inquiries answered within 24–48 business hours.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
