import type { Metadata } from 'next';
import './globals.css';

import { Commissioner, Roboto_Mono, Rubik_Mono_One, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from './components/Navbar';
import LenisScroll from './components/LenisScroll';
import { GoogleTagManager } from '@next/third-parties/google';

const commissioner = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plusJakartaSans'
})

const rubikMonoOne = Rubik_Mono_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubikMonoOne',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-robotoMono',
});

export const metadata: Metadata = {
  title: 'Alghafary',
  description: 'Rafiialgh Portofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${commissioner.variable} ${rubikMonoOne.variable} ${robotoMono.variable} ${plusJakartaSans.variable}`}
    >
      <GoogleTagManager gtmId="GTM-5QC64ZJ8" />
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <LenisScroll>
        <Navbar />
        <div className=''>{children}</div>
        </LenisScroll>
      </body>
    </html>
  );
}
