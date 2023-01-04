import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hello, I'm Nick Richarte",
			"Self-taught-developer.tsx",
			"<CoffeeAficionado />",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			<BackgroundCircles />
			<h1>
				<span>{text}</span>
			</h1>
		</div>
	);
}

export default Hero;
