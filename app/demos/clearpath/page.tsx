'use client';

import { useState } from 'react';
import DemoHeader from '@/components/DemoHeader';

export default function ClearpathDemoPage() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [annualBilling, setAnnualBilling] = useState(true);
  const [simulating, setSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runSimulation = () => {
    setSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => setSimStep(3), 2400);
    setTimeout(() => {
      setSimStep(4);
      setSimulating(false);
    }, 3600);
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 flex flex-col font-sans">
      {/* Top Demo Showcase Bar */}
      <DemoHeader
        title="Clearpath AI Autonomous Pipeline"
        category="SaaS & AI · Next.js 14"
        device={device}
        onDeviceChange={setDevice}
      />

      {/* Responsive Device Wrapper */}
      <div className="flex-1 flex justify-center items-start bg-[#0b0d14]/70 py-4 sm:py-8 px-2 sm:px-4">
        <div
          className={`w-full transition-all duration-300 bg-[#080a10] rounded-2xl shadow-2xl overflow-hidden border border-slate-800 ${
            device === 'mobile'
              ? 'max-w-[390px] min-h-[750px] ring-8 ring-slate-800'
              : device === 'tablet'
              ? 'max-w-[768px] min-h-[850px] ring-8 ring-slate-800'
              : 'max-w-7xl'
          }`}
        >
          {/* Clearpath Header */}
          <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-[#080a10]/90 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500" />
              <span className="font-extrabold tracking-tight text-white text-base">CLEARPATH AI</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-xs text-slate-400 font-medium">
              <span className="text-white">Pipeline</span>
              <span className="hover:text-white cursor-pointer transition-colors">Integrations</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
              <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
            </div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-1.5 text-xs transition-colors"
            >
              Request Access
            </a>
          </nav>

          {/* Hero Section */}
          <header className="relative px-6 py-16 sm:py-24 text-center overflow-hidden border-b border-slate-800/80">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18)_0%,transparent_70%)]" />

            <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-[11px] font-semibold text-indigo-400 mb-4">
              AUTONOMOUS B2B REVENUE AGENT
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Triage Every Inbound Lead in Under 90 Seconds.
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Autonomous AI agent pipeline that enriches firmographic data, scores enterprise intent, and books meetings with the right AE.
            </p>

            {/* Interactive Live AI Pipeline Simulator */}
            <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-[#101322] to-[#0a0c16] p-6 text-left shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Interactive Pipeline Tester</span>
                </div>
                <button
                  onClick={runSimulation}
                  disabled={simulating}
                  className="rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-3 py-1 text-xs transition-colors"
                >
                  {simulating ? 'Simulating Agent...' : '▶ Run Test Inbound'}
                </button>
              </div>

              {/* Simulation Steps */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className={`p-3 rounded-xl border transition-all ${simStep >= 1 ? 'border-indigo-500/60 bg-indigo-950/30 text-white' : 'border-slate-800/60 text-slate-500'}`}>
                  <div className="flex justify-between items-center">
                    <span>1. Inbound Submission</span>
                    <span>{simStep >= 1 ? '✓ Form Detected' : 'Idle'}</span>
                  </div>
                  {simStep >= 1 && <p className="text-[11px] text-slate-400 mt-1 font-sans">Lead: Acme Corp (500-1000 employees, Cloud Security)</p>}
                </div>

                <div className={`p-3 rounded-xl border transition-all ${simStep >= 2 ? 'border-cyan-500/60 bg-cyan-950/30 text-white' : 'border-slate-800/60 text-slate-500'}`}>
                  <div className="flex justify-between items-center">
                    <span>2. Autonomous AI Enrichment</span>
                    <span>{simStep >= 2 ? '✓ Enriched in 1.2s' : 'Waiting...'}</span>
                  </div>
                  {simStep >= 2 && <p className="text-[11px] text-slate-400 mt-1 font-sans">Fetched ARR ($42M), Tech Stack (Snowflake, AWS), Funding (Series C)</p>}
                </div>

                <div className={`p-3 rounded-xl border transition-all ${simStep >= 3 ? 'border-emerald-500/60 bg-emerald-950/30 text-white' : 'border-slate-800/60 text-slate-500'}`}>
                  <div className="flex justify-between items-center">
                    <span>3. Intent Scoring & Propensity</span>
                    <span>{simStep >= 3 ? '✓ 96/100 Tier-1 Account' : 'Waiting...'}</span>
                  </div>
                  {simStep >= 3 && <p className="text-[11px] text-emerald-400 mt-1 font-sans">High Intent Flag: Inbound matches ICP tier-1 buyer triggers.</p>}
                </div>

                <div className={`p-3 rounded-xl border transition-all ${simStep >= 4 ? 'border-amber-500/60 bg-amber-950/30 text-white' : 'border-slate-800/60 text-slate-500'}`}>
                  <div className="flex justify-between items-center">
                    <span>4. Instant Routing SLA</span>
                    <span>{simStep >= 4 ? '✓ Routed to Calendar (< 90s)' : 'Waiting...'}</span>
                  </div>
                  {simStep >= 4 && <p className="text-[11px] text-amber-300 mt-1 font-sans">Meeting auto-booked with Senior Strategic AE. Slack alert triggered.</p>}
                </div>
              </div>
            </div>
          </header>

          {/* Pricing Tiers Section */}
          <section className="px-6 py-16">
            <div className="text-center max-w-lg mx-auto mb-10">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">FLEXIBLE INFRASTRUCTURE</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Simple, Transparent Pricing</h2>
              <div className="mt-4 inline-flex items-center rounded-full border border-slate-800 bg-slate-900 p-1 text-xs font-semibold">
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`rounded-full px-4 py-1.5 transition-all ${!annualBilling ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`rounded-full px-4 py-1.5 transition-all flex items-center gap-1.5 ${annualBilling ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                >
                  <span>Annual</span>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 text-[10px]">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg">Growth</h3>
                  <p className="text-xs text-slate-400 mt-1">For fast-growing B2B startups.</p>
                  <div className="my-4">
                    <span className="text-3xl font-extrabold text-white">${annualBilling ? 299 : 375}</span>
                    <span className="text-xs text-slate-400"> / month</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    <li>✓ Up to 1,500 inbound leads/mo</li>
                    <li>✓ Real-time CRM sync (HubSpot, Salesforce)</li>
                    <li>✓ Standard email & Slack alerts</li>
                  </ul>
                </div>
                <button className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-800 text-white py-2.5 text-xs font-semibold hover:bg-slate-700 transition-colors">
                  Start 14-Day Free Trial
                </button>
              </div>

              {/* Scale (Featured) */}
              <div className="rounded-2xl border border-indigo-500/60 bg-gradient-to-b from-indigo-950/30 to-slate-900/70 p-6 flex flex-col justify-between shadow-xl shadow-indigo-500/10 relative">
                <span className="absolute -top-3 right-6 rounded-full bg-indigo-500 text-white px-3 py-0.5 text-[10px] font-bold">
                  MOST POPULAR
                </span>
                <div>
                  <h3 className="font-bold text-white text-lg">Scale</h3>
                  <p className="text-xs text-slate-400 mt-1">For scaling enterprise revenue teams.</p>
                  <div className="my-4">
                    <span className="text-3xl font-extrabold text-white">${annualBilling ? 699 : 875}</span>
                    <span className="text-xs text-slate-400"> / month</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    <li>✓ Up to 10,000 inbound leads/mo</li>
                    <li>✓ Custom LLM scoring prompt engineering</li>
                    <li>✓ Automated multi-rep calendar round-robin</li>
                    <li>✓ Dedicated Slack Connect channel</li>
                  </ul>
                </div>
                <button className="mt-6 w-full rounded-xl bg-indigo-600 text-white py-2.5 text-xs font-semibold hover:bg-indigo-500 shadow-lg transition-colors">
                  Start 14-Day Free Trial
                </button>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg">Enterprise</h3>
                  <p className="text-xs text-slate-400 mt-1">For custom SLA & dedicated pipelines.</p>
                  <div className="my-4">
                    <span className="text-3xl font-extrabold text-white">Custom</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    <li>✓ Unlimited inbound throughput</li>
                    <li>✓ Custom VPC / On-Premise deployment</li>
                    <li>✓ Dedicated AI pipeline architect</li>
                    <li>✓ 99.99% uptime SLA</li>
                  </ul>
                </div>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-800 text-center text-white py-2.5 text-xs font-semibold hover:bg-slate-700 transition-colors block"
                >
                  Contact Sales →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
