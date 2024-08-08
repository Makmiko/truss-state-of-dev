import React from 'react';
import {Layout, Header} from '../components';
import Share from '../components/Share';

export default function Thanks() {
	return (
		<Layout>
			<div
				className="mx-auto h-full px-4 py-10 lg:py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8 relative">
				<div
					className=" mx-auto mt-4 mb-20 flex w-full flex-wrap items-center flex-col justify-center space-x-4 md:px-10  px-0 py-2">
					{/*<img*/}
					{/*	src="/images/tarbouch.png"*/}
					{/*	className="lg:w-[300px] my-10 sm:w-[200px]"*/}
					{/*/>*/}
					<h1 className="text-4xl text-center font-bold my-2">
						Thank you for participating in this survey
					</h1>
					<p className="my-4">
						Feel free to share this survey with your friends. This way you can help us develop it community in Uzbekistan<br></br>
					</p>
					<Share shareUrl="https://state-of-dev-uz.com/"/>
				</div>
			</div>
		</Layout>
	);
}
