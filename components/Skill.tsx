import React from "react";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";

type Props = {
	directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.div
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
			>
				<DiReact className="rounded-full border border-gray-500 text-sky-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out" />
			</motion.div>
		</div>
	);
}
