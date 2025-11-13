import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://guilhermeillescas.dev'),
  title: {
    default: 'Guilherme Illescas - Senior Software Engineer',
    template: '%s | Guilherme Illescas'
  },
  description: 'Senior Software Engineer specializing in high-performance web applications with exceptional user experiences. Expert in React, Next.js, TypeScript, and modern web technologies.',
  keywords: [
    'Guilherme Illescas',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Frontend Developer',
    'Web Development',
    'JavaScript',
    'Senior Developer',
    'React Native',
    'Node.js'
  ],
  authors: [{ name: 'Guilherme Illescas' }],
  creator: 'Guilherme Illescas',
  publisher: 'Guilherme Illescas',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guilhermeillescas.dev',
    title: 'Guilherme Illescas - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in high-performance web applications with exceptional user experiences. Expert in React, Next.js, TypeScript, and modern web technologies.',
    siteName: 'Guilherme Illescas Portfolio',
    images: [
      {
        url: '/assets/site_screenshot.webp',
        width: 1200,
        height: 630,
        alt: 'Guilherme Illescas - Senior Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Illescas - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in high-performance web applications with exceptional user experiences.',
    images: ['/assets/site_screenshot.webp'],
    creator: '@gui_illescas',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
  alternates: {
    canonical: 'https://guilhermeillescas.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://guilhermeillescas.dev/#person',
        name: 'Guilherme Illescas',
        url: 'https://guilhermeillescas.dev',
        image: {
          '@type': 'ImageObject',
          url: 'https://guilhermeillescas.dev/assets/me.jpg',
          width: 400,
          height: 400,
        },
        jobTitle: 'Senior Software Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'AwSales',
        },
        sameAs: [
          'https://github.com/guiillescas',
          'https://linkedin.com/in/guilherme-illescas',
          'https://instagram.com/gui.illescas',
        ],
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Node.js',
          'Web Development',
          'Frontend Development',
          'Software Engineering',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://guilhermeillescas.dev/#website',
        url: 'https://guilhermeillescas.dev',
        name: 'Guilherme Illescas Portfolio',
        description: 'Senior Software Engineer specializing in high-performance web applications',
        publisher: {
          '@id': 'https://guilhermeillescas.dev/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://guilhermeillescas.dev/#webpage',
        url: 'https://guilhermeillescas.dev',
        name: 'Guilherme Illescas - Senior Software Engineer',
        isPartOf: {
          '@id': 'https://guilhermeillescas.dev/#website',
        },
        about: {
          '@id': 'https://guilhermeillescas.dev/#person',
        },
        description: 'Senior Software Engineer specializing in high-performance web applications with exceptional user experiences.',
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} antialiased`}
      >
        {children}
      </body>

      <Analytics />
    </html>
  );
}
