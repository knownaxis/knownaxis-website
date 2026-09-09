import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BookingModalProvider } from '@/components/BookingModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://knownaxis.com'),
  title: {
    default: 'Knownaxis | Brand Architecture, 3D Web Apps & Autonomous AI Systems',
    template: '%s | Knownaxis',
  },
  description:
    'Knownaxis is an elite digital engineering & brand architecture studio. We architect distinctive brand identities, interactive 3D web applications, SEO growth engines, and custom AI systems that save 25+ hours weekly.',
  keywords: [
    'Knownaxis',
    '3D Web Engineering',
    'Brand Architecture',
    'UI/UX Design',
    'Next.js Development',
    'Three.js 3D Web',
    'Autonomous AI Workflows',
    'SEO & Digital Growth',
    'Social Media & Content',
    'Data Analysis & Business Insights',
    'Vizbix Profit Intelligence',
    'Digital Product Agency',
  ],
  authors: [{ name: 'Knownaxis Studio', url: 'https://knownaxis.com' }],
  creator: 'Knownaxis',
  publisher: 'Knownaxis',
  alternates: {
    canonical: 'https://knownaxis.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://knownaxis.com',
    siteName: 'Knownaxis',
    title: 'Knownaxis | Brand Architecture, 3D Web Apps & Autonomous AI Systems',
    description:
      'Architecting memorable digital brands, interactive 3D web applications, and autonomous AI systems that save 25+ hours weekly.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Knownaxis - Make your website known',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knownaxis | Brand Architecture, 3D Web Apps & Autonomous AI Systems',
    description:
      'Architecting memorable digital brands, interactive 3D web applications, and autonomous AI systems that save 25+ hours weekly.',
    creator: '@KnownAxis',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://knownaxis.com/#organization',
      name: 'Knownaxis',
      url: 'https://knownaxis.com',
      logo: 'https://knownaxis.com/icon.png',
      sameAs: [
        'https://www.linkedin.com/company/knownaxis/',
        'https://www.instagram.com/knownaxis/',
        'https://x.com/KnownAxis',
        'https://in.pinterest.com/knownaxis/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@knownaxis.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://knownaxis.com/#service',
      name: 'Knownaxis Digital Engineering & Brand Architecture',
      url: 'https://knownaxis.com',
      serviceType: [
        'Design & Branding',
        'Web Development',
        'SEO & Digital Growth',
        'Social Media & Content',
        'Data & Analytics',
        'AI Workflows & Automation',
      ],
      areaServed: 'Global',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Transformation Services',
        itemListElement: [
          { '@type': 'Offer', name: 'Branding, Visual Identity & UI/UX Design' },
          { '@type': 'Offer', name: 'Frontend, Backend & 3D Web Apps' },
          { '@type': 'Offer', name: 'SEO, Analytics & Conversion Optimization' },
          { '@type': 'Offer', name: 'Social Media, Reels, UGC & Content Creation' },
          { '@type': 'Offer', name: 'Data Analysis, Business Insights & Reporting (Powered by Vizbix)' },
          { '@type': 'Offer', name: 'Autonomous AI Workflows & Systems' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://knownaxis.com/#website',
      url: 'https://knownaxis.com',
      name: 'Knownaxis',
      publisher: {
        '@id': 'https://knownaxis.com/#organization',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <BookingModalProvider>
            {children}
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}