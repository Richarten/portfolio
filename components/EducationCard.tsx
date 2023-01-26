import React from "react";
import { motion } from "framer-motion";
import { DiCss3, DiHtml5, DiJavascript } from "react-icons/di";

type Props = {};

export default function EducationCard({}: Props) {
	return (
		<article
			className="flex flex-col rounded-lg items-center justify-center space-between space-y-7 
		flex-shrink-0 w-[500px] lg:w-[500px] h-full snap-center bg-[#292929] p-10 
		hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-250 overflow-hidden"
		>
			<div className="px-0 md:px-10">
				<h4 className=" font-light text-3xl ">
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
				<ul className="list-disc space-y-2 ml-5 lg:text-lg">
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
