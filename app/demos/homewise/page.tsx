'use client';

import { useState } from 'react';
import DemoHeader from '@/components/DemoHeader';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  category: 'Villas' | 'Penthouses' | 'Lofts';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  badge: string;
}

const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Bel Air Glass Residence',
    location: 'Bel Air, Los Angeles, CA',
    price: 4850000,
    category: 'Villas',
    beds: 5,
    baths: 6,
    sqft: 6800,
    image: 'linear-gradient(135deg, #1e3a8a, #0284c7)',
    badge: 'Virtual 3D Tour',
  },
  {
    id: '2',
    title: 'Manhattan Sky Penthouse',
    location: 'Tribeca, New York, NY',
    price: 6200000,
    category: 'Penthouses',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    image: 'linear-gradient(135deg, #312e81, #4f46e5)',
    badge: 'Exclusive',
  },
  {
    id: '3',
    title: 'Malibu Coastline Sanctuary',
    location: 'Pacific Coast Hwy, Malibu, CA',
    price: 8900000,
    category: 'Villas',
    beds: 6,
    baths: 7,
    sqft: 8200,
    image: 'linear-gradient(135deg, #065f46, #0d9488)',
    badge: 'Oceanfront',
  },
  {
    id: '4',
    title: 'SoHo Cast Iron Designer Loft',
    location: 'SoHo, New York, NY',
    price: 2950000,
    category: 'Lofts',
    beds: 2,
    baths: 2.5,
    sqft: 2800,
    image: 'linear-gradient(135deg, #701a75, #c026d3)',
    badge: 'High Ceilings',
  },
  {
    id: '5',
    title: 'Aspen Snowpine Mountain Chalet',
    location: 'Red Mountain, Aspen, CO',
    price: 7400000,
    category: 'Villas',
    beds: 5,
    baths: 6,
    sqft: 7100,
    image: 'linear-gradient(135deg, #1e293b, #475569)',
    badge: 'Ski-in / Ski-out',
  },
  {
    id: '6',
    title: 'Brickell Avenue Bay View Penthouse',
    location: 'Brickell, Miami, FL',
    price: 3650000,
    category: 'Penthouses',
    beds: 3,
    baths: 3.5,
    sqft: 3400,
    image: 'linear-gradient(135deg, #0369a1, #06b6d4)',
    badge: 'Private Marina',
  },
];

export default function HomewiseDemoPage() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [category, setCategory] = useState<string>('All');
  const [searchCity, setSearchCity] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(4850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const loanAmount = homePrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPayment =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : loanAmount / numberOfPayments;

  const filteredProperties = PROPERTIES.filter((p) => {
    const matchesCat = category === 'All' || p.category === category;
    const matchesSearch =
      searchCity === '' ||
      p.location.toLowerCase().includes(searchCity.toLowerCase()) ||
      p.title.toLowerCase().includes(searchCity.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Demo Showcase Bar */}
      <DemoHeader
        title="Homewise Realty Discovery Platform"
        category="Real Estate · Next.js 14"
        device={device}
        onDeviceChange={setDevice}
      />

      {/* Responsive Device Wrapper */}
      <div className="flex-1 flex justify-center items-start bg-slate-900/50 py-4 sm:py-8 px-2 sm:px-4">
        <div
          className={`w-full transition-all duration-300 bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 ${
            device === 'mobile'
              ? 'max-w-[390px] min-h-[750px] ring-8 ring-slate-800'
              : device === 'tablet'
              ? 'max-w-[768px] min-h-[850px] ring-8 ring-slate-800'
              : 'max-w-7xl'
          }`}
        >
          {/* Sample Website: Homewise Realty Header */}
          <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-cyan-500 shadow-sm shadow-cyan-500" />
              <span className="font-extrabold tracking-tight text-white text-lg">HOMEWISE</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-400">
              <span className="text-white">Properties</span>
              <span className="hover:text-white cursor-pointer transition-colors">Neighborhoods</span>
              <span className="hover:text-white cursor-pointer transition-colors">Mortgage Sim</span>
              <span className="hover:text-white cursor-pointer transition-colors">Agents</span>
            </div>
            <button
              onClick={() => setSelectedProperty(PROPERTIES[0])}
              className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-1.5 text-xs transition-colors"
            >
              Schedule Tour
            </button>
          </nav>

          {/* Hero Section */}
          <header className="relative px-6 py-16 sm:py-24 text-center overflow-hidden border-b border-slate-800">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />
            
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-400 mb-4">
              ARCHITECTURAL EXCELLENCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Discover Properties Designed for Living.
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Verified luxury listings, 3D architectural scans, and transparent mortgage modeling.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-2 bg-slate-900/90 border border-slate-800 p-2 rounded-2xl shadow-xl">
              <input
                type="text"
                placeholder="Search city, neighborhood or style..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                <span>Search</span>
                <span>→</span>
              </button>
            </div>
          </header>

          {/* Interactive Property Grid */}
          <main className="px-6 py-12">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl font-bold text-white">Featured Residences</h2>
                <p className="text-xs text-slate-400">Showing {filteredProperties.length} hand-curated residences</p>
              </div>

              <div className="flex gap-2">
                {['All', 'Villas', 'Penthouses', 'Lofts'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      category === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div>
                    {/* Simulated Property Banner Image */}
                    <div
                      className="relative h-48 w-full p-4 flex flex-col justify-between"
                      style={{ background: p.image }}
                    >
                      <span className="self-start rounded-full bg-slate-950/70 border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                        {p.badge}
                      </span>
                      <div className="text-white">
                        <span className="text-xl font-extrabold tracking-tight">${(p.price / 1000000).toFixed(2)}M</span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">{p.category}</span>
                      <h3 className="text-base font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{p.location}</p>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-300">
                        <span>🛏 {p.beds} Beds</span>
                        <span>🚿 {p.baths} Baths</span>
                        <span>📐 {p.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setSelectedProperty(p)}
                      className="w-full rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-semibold py-2.5 transition-all"
                    >
                      Schedule Private Tour
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Mortgage Calculator Widget */}
            <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">FINANCIAL SIMULATOR</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Live Mortgage Scenario Calculator</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Interactive real-time estimation for principal and interest based on current market rates.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>Home Purchase Price</span>
                        <span className="font-bold text-white">${homePrice.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min={1000000}
                        max={12000000}
                        step={100000}
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>Down Payment ({downPaymentPercent}%)</span>
                        <span className="font-bold text-white">${((homePrice * downPaymentPercent) / 100).toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={50}
                        step={5}
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-slate-400 block mb-1">Interest Rate</span>
                        <input
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block mb-1">Loan Term</span>
                        <select
                          value={loanTermYears}
                          onChange={(e) => setLoanTermYears(Number(e.target.value))}
                          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                        >
                          <option value={15}>15 Years Fixed</option>
                          <option value={30}>30 Years Fixed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculation Output Card */}
                <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 p-6 text-center shadow-xl">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Monthly Payment</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300 my-3">
                    ${Math.round(monthlyPayment).toLocaleString()}
                    <span className="text-xs text-slate-400 font-normal"> / mo</span>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1 border-t border-slate-800 pt-3">
                    <div className="flex justify-between">
                      <span>Principal & Interest:</span>
                      <span className="text-white">${Math.round(monthlyPayment).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Property Tax:</span>
                      <span className="text-white">${Math.round((homePrice * 0.012) / 12).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Home Insurance:</span>
                      <span className="text-white">${Math.round((homePrice * 0.0035) / 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Tour Booking Modal (Simulated) */}
          {selectedProperty && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
              <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="font-bold text-white text-base">Schedule Private Showing</h4>
                  <button onClick={() => setSelectedProperty(null)} className="text-slate-400 hover:text-white text-lg">
                    ✕
                  </button>
                </div>
                <div className="py-4">
                  <p className="text-xs text-cyan-400 font-semibold">{selectedProperty.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{selectedProperty.location}</p>
                  <div className="mt-4 space-y-3 text-xs">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-white"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-white"
                    />
                    <input
                      type="date"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2.5 text-white"
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    alert('Showing request simulated! In production, this syncs with your CRM.');
                    setSelectedProperty(null);
                  }}
                  className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 text-xs transition-colors"
                >
                  Confirm Showing Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
