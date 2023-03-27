import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0">
			<h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl pt-5">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#16e91c]/80">
				{projects.map((project, i) => (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
					>
						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
							alt=""
						/>

						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#16e91c]/50 ">
									Case Study {i + 1} of {projects.length}:
								</span>{" "}
								E-commerce platform
							</h4>
							<p className="text-lg text-center md:text-left">
								I am a experienced Massage Therapist with a passion for web development. While massage therapy has taught me much about meeting the needs of clients, identifying and solving problems, and expanding on my abilities, I am excited to pivot to a career in software development that will allow me to develop these soft skills. 
							</p>
						</div>
					</motion.div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#16e91c]/10 left-0 h-[500px] -skew-y-12 " />
		</div>
	);
}
