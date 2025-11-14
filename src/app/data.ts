import { Contact } from "./components/ContactList";
import { Skill } from "./components/SkillsList";

import nextjsLogo from "@/../public/nextjs.svg";
import typescriptLogo from "@/../public/typescript.svg";
import reactLogo from "@/../public/react.svg";
import mongodbLogo from "@/../public/mongodb.svg";
import githubLogo from "@/../public/github.svg";
import linkedinLogo from "@/../public/linkedin.svg";
import mailLogo from "@/../public/mail.svg";

type Data = {
	name: string,
	title: string,
	location: string,
	skills: Skill[],
	contacts: Contact[]
}

export const data: Data = {
	name: "Astjan Selimaj",
	title: "Full Stack Web Developer",
	location: "Amsterdam, The Netherlands",
	skills: [
		["Next.js", "bg-[#000000]", nextjsLogo],
		["TypeScript", "bg-[#3178c6]", typescriptLogo],
		["React", "bg-[#222222]", reactLogo],
		["MongoDB", "bg-[#061621]", mongodbLogo]
	],
	contacts: [
		["GitHub", githubLogo, "https://github.com/astjanselimaj"],
		["LinkedIn", linkedinLogo, "https://linkedin.com/in/astjan-selimaj/"],
		["Email", mailLogo, "mailto:info@selimaj.nl"]
	]
};