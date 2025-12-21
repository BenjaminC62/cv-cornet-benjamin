import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Benjamin Cornet',
  description: 'CV Éco-conçu de Benjamin Cornet.',
  icons: { icon: 'data:,' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans max-w-4xl mx-auto px-6  min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}