import React from "react";

type Props = {};
import { motion } from "framer-motion";
export default function Skills({}: Props) {
	return (
		<motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen">
			<h3>Skills</h3>
		</motion.div>
	);
}
