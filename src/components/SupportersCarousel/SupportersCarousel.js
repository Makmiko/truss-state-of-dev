import React from 'react';
import './index.scss';

function SupportersCarousel() {
	return <div className="supporters-slider [--width:500px] [--height:200px] [--quantity:3]">
		<div className="supporters-slider__list">
			<a href="https://www.linkedin.com/in/shavkat/"
			   className="supporters-slider__supporter [--position:0] flex flex-row justify-center items-center gap-8">
				<img className="w-32 rounded-full" src="/images/supporters/ShavkatKarimov.png" alt="Shavkat Karimov"/>
				<div className="flex flex-col gap-4">
					<h3 className="text-purple-600 text-2xl font-bold">Shavkat Karimov</h3>
					<span className="text-purple-600 text-sm font-bold">Head of IT Community of Uzbekistan</span>
				</div>
			</a>
			<a href="https://www.linkedin.com/in/anna-ambrozevich/"
			   className="supporters-slider__supporter [--position:1] flex flex-row justify-center items-center gap-8">
				<img className="w-32 rounded-full" src="/images/supporters/AnnaAmbrozevich.png" alt="Anna Ambrozevich"/>
				<div className="flex flex-col gap-4">
					<h3 className="text-purple-600 text-2xl font-bold">Anna Ambrozevich</h3>
					<span className="text-purple-600 text-sm font-bold">Women in Tech Uzbekistan Director</span>
				</div>
			</a>
			<a href="https://www.linkedin.com/in/otabek-nuritdinov/"
			   className="supporters-slider__supporter [--position:2] flex flex-row justify-center items-center gap-8">
				<img className="w-32 rounded-full" src="/images/supporters/OtabekNuritdinov.png" alt="Otabek Nuritdinov"/>
				<div className="flex flex-col gap-4">
					<h3 className="text-purple-600 text-2xl font-bold">Otabek Nuritdinov</h3>
					<span className="text-purple-600 text-sm font-bold">Head of Business Development at Moneff</span>
				</div>
			</a>
		</div>
	</div>;
}

export default SupportersCarousel;