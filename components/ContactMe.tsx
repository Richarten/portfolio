import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:nick.richarte@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					Lets work together... <br />
					<span className="decoration-[#16e91c]/50 underline font-thin">
						How do you take your coffee?
					</span>
				</h4>
				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<FaPhoneAlt className="text-[#16e91c] h-7 w-7 animate-pulse " />
						<p className="text-2xl">512-410-9363</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<FaEnvelope className="text-[#16e91c] h-7 w-7 animate-pulse " />
						<p className="text-2xl">nick.richarte@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<FaMapMarkerAlt className="text-[#16e91c] h-7 w-7 animate-pulse " />
						<p className="text-2xl">Austin, Texas</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="example@gmail.com"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#16e91c]/70 py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#16e91c] active:bg-[#16e91c]/70"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
