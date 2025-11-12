import nextjsLogo from "@/../public/nextjs.svg";
import typescriptLogo from "@/../public/typescript.svg";
import reactLogo from "@/../public/react.svg";
import mongodbLogo from "@/../public/mongodb.svg";
import SkillsList from "./components/SkillsList";

const skills: [string, string][] = [
	["Next.js", nextjsLogo],
	["TypeScript", typescriptLogo],
	["React", reactLogo],
	["MongoDB", mongodbLogo],
	//["MySQL", mysqlLogo]
];

export default function Home() {
	return (
		<div className="flex-col">
			<h1 className="text-6xl font-light mb-1.5">Astjan Selimaj</h1>
			<p className="text-2xl mb-3.5">Full Stack Web Developer</p>
			<SkillsList skills={skills} />
		</div>
	);
}
