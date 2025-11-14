import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { data } from "./data";

const hostGrotesk = Host_Grotesk({
	variable: "--font-host-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${data.name} | ${data.title}`,
	description: `${data.title} in ${data.location} | ${data.skills.map(s => s[0]).join(", ")}`
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
