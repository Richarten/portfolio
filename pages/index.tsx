import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Projects from "../components/Projects";
import { RiHomeLine } from "react-icons/ri";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#16e91c]/80">
			<Head>
				<title>Nick's Portfolio</title>
			</Head>

			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="education" className="snap-center">
				<Education />
			</section>

			<section id="projects" className="snap-start">
				<Projects />
			</section>

			<section id="contact" className="snap-start">
				<ContactMe />
			</section>
			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer ">
					<div className="flex items-center justify-center">
						<RiHomeLine className="h-5 w-5 hover:h-8 hover:w-8 active:w-7 active:h-7" />
					</div>
				</footer>
			</Link>
		</div>
	);
}
