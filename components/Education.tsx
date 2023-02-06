import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { freeCodeCamp, freeCodeCamp2, scrimba } from "./data";

type Props = {};

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
					heading="https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png"
					title="Javascript"
					subtitle="freeCodeCamp"
					skills={freeCodeCamp}
				/>
				<EducationCard
					heading="https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png"
					title="Javascript"
					subtitle="Javascript The Definitive Guide"
					skills={freeCodeCamp}
				/>
				<EducationCard
					heading="https://img.icons8.com/color/256/react-native.png"
					title="React"
					subtitle="freeCodeCamp"
					skills={freeCodeCamp2}
				/>
				<EducationCard
					heading="https://img.icons8.com/color/256/react-native.png"
					title="React"
					subtitle="Scrimba"
					skills={scrimba}
				/>
			</div>
		</motion.div>
	);
}
