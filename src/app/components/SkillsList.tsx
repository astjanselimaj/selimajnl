import Image from "next/image";

type Skill = [string, string];

export default function SkillsList({ skills }: { skills: Skill[] }) {
	return (
		<div className="flex flex-wrap gap-2 w-3/5">
			{skills.map(([name, iconUrl]) => (
				<div className="flex items-center gap-1 pl-1 pr-2 bg-gray-500 rounded-full" key={name}>
					<div className="rounded-full overflow-hidden">
						<Image src={iconUrl} alt={name} width={16} />
					</div>
					<p>{name}</p>
				</div>
			))}
		</div>
	);
}