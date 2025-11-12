import Image from "next/image";
import nextjsLogo from "@/../public/nextjs.svg";

export default function Home() {
	return (
		<div className="flex-col">
			<h1 className="text-6xl font-light mb-2">Astjan Selimaj</h1>
			<p className="text-2xl mb-2">Full Stack Web Developer</p>
			<div className="flex gap-2">
				<div className="flex gap-1 pl-1 pr-2 bg-gray-500 rounded-2xl">
					<Image src={nextjsLogo} alt="Next.js" />
					<p>Next.js</p>
				</div>
			</div>
		</div>
	);
}
