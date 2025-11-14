"use client";

import locationIcon from "@/../public/location.svg";
import SkillsList from "./components/SkillsList";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactList from "./components/ContactList";
import { data } from "./data";

export default function Home() {
	return (
		<motion.div
			className="flex-col transition-color transition-discrete duration-initial"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
		>
			
			<h1 className="text-6xl font-light mb-1.5">{data.name}</h1>
			<p className="text-2xl mb-1.5">{data.title}</p>
			<div className="flex items-center gap-1 mb-3.5">
				<Image src={locationIcon} alt="Location" width={16} />
				<p className="text-lg">{data.location}</p>
			</div>
			<SkillsList skills={data.skills} />
			<hr className="text-[#243A60] my-4" />
			<ContactList contacts={data.contacts} />
		</motion.div>
	);
}
