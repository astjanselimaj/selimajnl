import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
	variable: "--font-host-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Astjan Selimaj | Full Stack Web Developer",
	description: "Full Stack Web Developer | Next.js, React, TypeScript, MongoDB, MySQL",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	<html lang="en">
		<body
		className={`${hostGrotesk.className} antialiased`}
		>
			<div className="bg-gray-900 text-gray-100 w-lvw h-lvh flex justify-center items-center">
				{children}
			</div>
		</body>
	</html>
	);
}
