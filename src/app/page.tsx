"use client";

import nextjsLogo from "@/../public/nextjs.svg";
import typescriptLogo from "@/../public/typescript.svg";
import reactLogo from "@/../public/react.svg";
import mongodbLogo from "@/../public/mongodb.svg";
import githubLogo from "@/../public/github.svg";
import linkedinLogo from "@/../public/linkedin.svg";
import mailLogo from "@/../public/mail.svg";
import locationIcon from "@/../public/location.svg";
import SkillsList from "./components/SkillsList";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactList from "./components/ContactList";

const skills: [string, string, string][] = [
	["Next.js", "bg-[#000000]", nextjsLogo],
	["TypeScript", "bg-[#3178c6]", typescriptLogo],
	["React", "bg-[#222222]", reactLogo],
	["MongoDB", "bg-[#061621]", mongodbLogo],
	//["MySQL", mysqlLogo]
];

const contacts: [string, string, string][] = [
	["GitHub", githubLogo, "https://github.com/astjanselimaj"],
	["LinkedIn", linkedinLogo, "https://linkedin.com/in/astjan-selimaj/"],
	["Email", mailLogo, "mailto:info@selimaj.nl"]
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
			<p className="text-2xl mb-1.5">Full Stack Web Developer</p>
			<div className="flex items-center gap-1 mb-3.5">
				<Image src={locationIcon} alt="Location" width={16} />
				<p className="text-lg">Amsterdam, The Netherlands</p>
			</div>
			<SkillsList skills={skills} />
			<hr className="text-[#243A60] my-4" />
			<ContactList contacts={contacts} />
		</motion.div>
	);
}
