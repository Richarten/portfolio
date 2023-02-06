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
				src="https://i.imgur.com/XsgDdL9.jpg"
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
					<Link href="#education">
						<button className="heroButton">Education</button>
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
