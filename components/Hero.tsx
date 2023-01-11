import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
	let timeOfDay;
	const date = new Date();
	const hours = date.getHours();

	if (hours < 12) {
		timeOfDay = "Morning";
	} else if (hours >= 12 && hours < 18) {
		timeOfDay = "Afternoon";
	} else {
		timeOfDay = "Evening";
	}

	const [text, count] = useTypewriter({
		words: [
			`Good ${timeOfDay}, I'm Nick Richarte!`,
			"Self-taught-developer.tsx",
			"<CoffeeAficionado />",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src="https://mail.google.com/mail/u/0?ui=2&ik=1623564f1a&attid=0.1.1&permmsgid=msg-f:1754668931072586345&th=1859d6189efef269&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-NvQja3FjEVjzj2b68pfbgvcTcfSOktZgSNFgtCrIFHd3XZgcjSX3hXhDiHtYO-zLi5nR4v5swM3W5NkaNnD4spvM4dx-Vkpvj58UfH09RY-MmChKTnERzMkk&disp=emb"
				alt=""
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#16e91c" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
