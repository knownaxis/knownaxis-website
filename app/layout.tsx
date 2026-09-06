import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Knownaxis — Make your website known',
  description:
    'Custom AI systems and workflows designed to scale your business. Save 25+ hours every week and 3x your output.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
