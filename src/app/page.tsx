"use client";

import nextjsLogo from "@/../public/nextjs.svg";
import typescriptLogo from "@/../public/typescript.svg";
import reactLogo from "@/../public/react.svg";
import mongodbLogo from "@/../public/mongodb.svg";
import SkillsList from "./components/SkillsList";
import { motion } from "framer-motion";

const skills: [string, string][] = [
	["Next.js", nextjsLogo],
	["TypeScript", typescriptLogo],
	["React", reactLogo],
	["MongoDB", mongodbLogo],
	//["MySQL", mysqlLogo]
];

export default function Home() {
	return (
		<motion.div
			className="flex-col transition-color transition-discrete duration-initial"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
		>
			<h1 className="text-6xl font-light mb-1.5">Astjan Selimaj</h1>
			<p className="text-2xl mb-3.5">Full Stack Web Developer</p>
			<SkillsList skills={skills} />
		</motion.div>
	);
}
