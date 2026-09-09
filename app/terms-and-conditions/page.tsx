import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Knownaxis',
  description:
    'Read the terms of service, engagement policies, deliverables ownership, and conditions governing work with Knownaxis.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 sm:pt-36 pb-20 bg-white dark:bg-[#0b0c10] text-slate-800 dark:text-[#d2d4dc] transition-colors">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-96 w-full max-w-4xl bg-brand/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-grey mb-6">
            <Link href="/" className="hover:text-brand dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-700 dark:text-white/80">Legals</span>
            <span>/</span>
            <span className="text-brand font-medium">Terms and Conditions</span>
          </div>

          {/* Page Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Client Service Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-grey leading-relaxed">
              Effective Date: January 1, 2026 · Last Updated: September 2026
            </p>

            {/* Quick Cross-Link Banner */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 text-xs sm:text-sm">
              <span className="text-slate-600 dark:text-grey">
                Looking for details on how we safeguard your personal & project information?
              </span>
              <Link
                href="/privacy-policy"
                className="font-semibold text-brand hover:underline inline-flex items-center gap-1"
              >
                Read Privacy Policy →
              </Link>
            </div>
          </div>

          {/* Document Content */}
          <article className="mt-10 space-y-10 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-700 dark:text-[#c4c6d0]">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                1. Agreement to Terms
              </h2>
              <p>
                These Terms & Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you or the entity you represent (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Knownaxis (&ldquo;Knownaxis,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p>
                By visiting our website at{' '}
                <strong className="text-slate-900 dark:text-white">knownaxis.com</strong>, booking a discovery consultation, signing a Statement of Work (&ldquo;SOW&rdquo;), or engaging our studio for software engineering, design, or AI automation, you affirm that you have read, understood, and agreed to be bound by these Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                2. Scope of Agency Services
              </h2>
              <p>
                Knownaxis provides bespoke, high-touch digital transformation services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">3D Web Engineering:</strong> WebGL/Three.js interactive web applications, shader development, custom Canvas architectures, and fluid animations.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Brand Architecture & UI/UX:</strong> Comprehensive visual identity systems, typography guidelines, responsive design libraries, and conversion-optimized interfaces.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Autonomous AI Systems & Automation:</strong> Bespoke workflow automations, conversational AI integrations, API orchestration, and automated business ops saving 25+ weekly hours.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">High-Speed Front-End Development:</strong> Full-stack Next.js, React, Astro, and Cloudflare deployments engineered for sub-second page loads and maximum SEO performance.
                </li>
              </ul>
              <p>
                Each project engagement is governed by an agreed Statement of Work or project proposal outlining specific milestones, deliverables, timelines, and commercial consideration.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                3. Discovery Calls & Project Inquiries
              </h2>
              <p>
                When you click &ldquo;Book Free Call&rdquo;, &ldquo;Book Your 30-Min Strategy Call&rdquo;, or &ldquo;Start your project&rdquo;, you are requesting a confidential strategy consultation with our leadership team.
              </p>
              <p>
                Discovery consultations carry zero initial financial obligation. Following the initial call, Knownaxis provides a formal architectural proposal and quote. Project kickoff occurs once the proposal or SOW is countersigned and initial milestone funding is secured.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                4. Client Obligations & Collaboration
              </h2>
              <p>
                Smooth and timely project execution relies on proactive mutual collaboration. The Client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designate a primary decision-maker with authority to review deliverables and approve milestone sprints.</li>
                <li>Provide brand assets, API credentials, copy, or necessary third-party access in a timely manner.</li>
                <li>Provide actionable feedback within the review window (typically 3–5 business days) to prevent timeline slippage.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                5. Intellectual Property & Deliverables Ownership
              </h2>
              <p>
                <strong className="text-slate-900 dark:text-white">Client Ownership:</strong> Upon complete settlement of all agreed fees for the engagement, all bespoke deliverables crafted specifically for the Client (including custom code, designs, illustrations, brand assets, and custom AI prompt workflows) become the exclusive intellectual property of the Client.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Pre-Existing Frameworks:</strong> Knownaxis retains ownership of its pre-existing proprietary tools, starter frameworks, utility libraries, and generalized design patterns utilized across projects. Knownaxis grants the Client an irrevocable, worldwide, royalty-free, perpetual license to use, modify, and host such underlying components as part of their final deliverable.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Portfolio & Showcase Rights:</strong> Unless an explicit mutual Non-Disclosure Agreement (NDA) with strict exclusion is executed, Knownaxis reserves the right to showcase screenshots, case study metrics, and demo previews of completed deliverables in our online portfolio, social channels, and pitch materials.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                6. Fees, Milestones & Payment Terms
              </h2>
              <p>
                Project fees are structured around milestones or fixed sprint schedules (e.g., 50% deposit / 50% upon final deployment, or phased sprint billing). Invoices are payable within 14 calendar days of issuance unless otherwise agreed in writing.
              </p>
              <p>
                Deliverables, final code repositories, and production DNS transfers will be released upon full clearance of final milestone payments.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                7. Confidentiality & Non-Disclosure
              </h2>
              <p>
                Both parties agree that all confidential information—including trade secrets, unreleased product blueprints, financial figures, customer data, and technical specifications—shared during discovery or execution will be held in the strictest confidence and not disclosed to any unauthorized third party.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                8. Warranties & 30-Day Launch Guarantee
              </h2>
              <p>
                Knownaxis warrants that all delivered software and web applications will perform in substantial accordance with the specifications in the agreed SOW.
              </p>
              <p>
                We provide a <strong className="text-slate-900 dark:text-white">30-day post-launch warranty window</strong> during which any unforeseen technical bugs, cross-browser styling discrepancies, or layout errors arising from our original codebase are remediated at zero additional charge.
              </p>
              <p className="text-xs text-slate-500 dark:text-grey">
                The warranty does not cover issues resulting from modifications by third parties, changes to external third-party APIs, or hosting downtime outside our control.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Knownaxis&apos;s total aggregate liability arising under any project agreement shall not exceed the total fees paid by Client under the applicable SOW.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                10. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with applicable governing laws. Both parties agree to attempt to resolve any disagreement through amicable, good-faith consultation before initiating formal dispute resolution.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                11. Contact Information
              </h2>
              <p>
                For inquiries regarding these Terms or to request an architectural proposal, contact us:
              </p>
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 space-y-2">
                <p className="font-bold text-slate-900 dark:text-white text-base">Knownaxis Studio</p>
                <p>
                  Legal & Engagements Email:{' '}
                  <a
                    href="mailto:info@knownaxis.com"
                    className="text-brand hover:underline font-medium"
                  >
                    info@knownaxis.com
                  </a>
                </p>
                <p>Website: knownaxis.com</p>
                <p className="text-xs text-slate-500 dark:text-grey pt-1">
                  General response time: 24–48 hours.
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
