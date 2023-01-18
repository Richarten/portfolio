import React from "react";
import { motion } from "framer-motion";
import { DiCss3, DiHtml5, DiJavascript } from "react-icons/di";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-between space-y-7 
		flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
		hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-250 overflow-hidden"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
				src="https://images.unsplash.com/photo-1604866830506-4ffc2d57fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
				alt=""
			/>
			<div className="px-0 md:px-10">
				<h4 className=" font-light text-4xl ">
					JavaScript Algorithm and Data Structures Certification
				</h4>
				<p className="font-bold text-2xl mt-1 ">freeCodeCamp</p>
				<div className="flex flexspace-x-2 my-2">
					<DiHtml5 className="h-10 w-10 rounded-full text-[#f17840]" />
					<DiCss3 className="h-10 w-10 rounded-full text-[#7EDCFB]" />
					<DiJavascript className="h-10 w-10 rounded-full text-[#f9c106]" />
					{/* Tech used */}
					{/* Tech used */}
					{/* Tech used */}
				</div>
				<p className="uppercase py-5 text-gray-300">Skills obtained</p>
				<ul className="list-disc space-y-4 ml-5 lg:text-lg">
					<li>Basic Javascript</li>
					<li>ES6</li>
					<li>Debugging</li>
					<li>Regular Expressions</li>
					<li>Algorithm Scripting</li>
					<li>Functional Programming</li>
				</ul>
			</div>
		</article>
	);
}
