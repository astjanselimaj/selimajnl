import Image from "next/image";
import Link from "next/link";

type Contact = [string, string, string];

export default function ContactList({ contacts }: { contacts: Contact[] }) {
	/*return (
		<div className="flex flex-wrap justify-center gap-2 my-5.5">
			{contacts.map(([text, color, iconUrl, linkUrl], i) => (
				<div className={`flex w-3/4 items-center gap-1 p-2 ${color} rounded-md`} key={i}>
					<Image src={iconUrl} alt="GitHub" width={32} />
					<p className="text-lg flex justify-center w-full">{text}</p>
				</div>
			))}
		</div>
	);*/
	return (
		<div className="flex flex-wrap gap-2">
			{contacts.map(([alt, iconUrl, linkUrl], i) => (
				<Link href={linkUrl} className="flex w-fit items-center gap-1 p-2 bg-[#243A60] hover:bg-[#1a2c47] transition-colors duration-200 rounded-full cursor-pointer" key={i}>
					<Image src={iconUrl} alt={alt} width={24} />
				</Link>
			))}
		</div>
	);
}