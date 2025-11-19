import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Commissioner, Roboto_Mono, Rubik_Mono_One, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from './components/navbar/page';

const inter = Inter({ subsets: ['latin'] });

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
      <body>
        <Navbar />
        <div className=''>{children}</div>
      </body>
    </html>
  );
}
