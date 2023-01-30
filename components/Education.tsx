import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

type Props = {};
const freeCodeCamp: string[] = [
	"Basic Javascript",
	"ES6",
	"Debugging",
	"Regular Expressions",
	"Algorithm Scripting",
	"Functional Programming",
];

export default function Education({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center"
		>
			<h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl pt-5">
				Education
			</h3>
			<div className="w-full h-[800px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#16e91c]/80">
				<EducationCard
					title="Javascript"
					subtitle="freeCodeCamp"
					skills={freeCodeCamp}
				/>
				<EducationCard />
				<EducationCard />
				<EducationCard />
			</div>
		</motion.div>
	);
}
