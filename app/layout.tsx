import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Benjamin Cornet',
  description: 'CV Éco-conçu de Benjamin Cornet, développeur web.',
  icons: {
    icon: 'data:,',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-50 antialiased font-sans max-w-4xl mx-auto px-4 sm:px-6 md:px-8 border-x border-slate-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}