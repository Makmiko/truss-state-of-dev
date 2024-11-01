import React from 'react';
import './index.scss';

function SupportersCarousel() {
	return <>
		<h2 className=" text-center mt-6 mb-10 text-3xl font-semibold tracking-wide text-gray-800 sm:text-4xl">
			Our Supporters
		</h2>
		<div className="supporters-slider [--width:500px] [--height:200px] [--quantity:4]">
			<div className="supporters-slider__list">
				<a href="https://www.linkedin.com/in/shavkat/"
				   className="supporters-slider__supporter [--position:1] flex flex-row justify-center items-center gap-8">
					<img className="w-32 rounded-full" src="/images/supporters/ShavkatKarimov.png" alt="Shavkat Karimov"/>
					<div className="flex flex-col gap-4">
						<h3 className="text-purple-600 text-2xl font-bold">Shavkat Karimov</h3>
						<span className="text-purple-600 text-sm font-bold">Head of IT Community of Uzbekistan</span>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/anna-ambrozevich/"
				   className="supporters-slider__supporter [--position:2] flex flex-row justify-center items-center gap-8">
					<img className="w-32 rounded-full" src="/images/supporters/AnnaAmbrozevich.png" alt="Anna Ambrozevich"/>
					<div className="flex flex-col gap-4">
						<h3 className="text-purple-600 text-2xl font-bold">Anna Ambrozevich</h3>
						<span className="text-purple-600 text-sm font-bold">Women in Tech Uzbekistan Director</span>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/otabek-nuritdinov/"
				   className="supporters-slider__supporter [--position:3] flex flex-row justify-center items-center gap-8">
					<img className="w-32 rounded-full" src="/images/supporters/OtabekNuritdinov.png" alt="Otabek Nuritdinov"/>
					<div className="flex flex-col gap-4">
						<h3 className="text-purple-600 text-2xl font-bold">Otabek Nuritdinov</h3>
						<span className="text-purple-600 text-sm font-bold">Head of Business Development at Moneff</span>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/ramzcoder/"
				   className="supporters-slider__supporter [--position:4] flex flex-row justify-center items-center gap-8">
					<img className="w-32 rounded-full" src="/images/supporters/RamziddinMakhmudov.png" alt="Ramziddin Makhmudov"/>
					<div className="flex flex-col gap-4">
						<h3 className="text-purple-600 text-2xl font-bold">Ramziddin Makhmudov</h3>
						<span className="text-purple-600 text-sm font-bold">Frontend Engineer at Businessolver</span>
					</div>
				</a>
			</div>
		</div>
	</>;
}

export default SupportersCarousel;