import './globals.css';

import Footer from '@/components/Layout/Footer/Footer';
import Header from '@/components/Layout/Header/Header';
import type { Metadata } from 'next';
import {Montserrat, Orbitron, Roboto} from 'next/font/google';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
	title: 'Game Haven',
	description: 'The best game store in the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${orbitron.variable} ${roboto.variable} ${montserrat.variable}`}>
			<body className={`${montserrat.className} bg-linear-dark-blue min-h-screen text-light flex flex-col`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
