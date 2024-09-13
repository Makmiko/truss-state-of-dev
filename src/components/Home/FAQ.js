import React from 'react';

export const FAQ = () => (
	<div className="relative mx-auto w-full px-5 py-16 text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
		<h2 className="text-center mt-6 mb-10 text-3xl font-semibold tracking-wide text-gray-800 sm:text-4xl">
			Have Questions? Checkout these FAQs
		</h2>
		<p className="mb-12 text-center text-lg text-gray-600">
			We have written down answers to some of the frequently asked questions.
			But, if you still have any queries, feel free to get in touch with us.
		</p>
		<ul className="divide-y divide-gray-200">
			<li className="text-left">
				<label htmlFor="accordion-1" className="flex flex-col">
					<input className="peer hidden" type="checkbox" id="accordion-1"/>
					<div
						className="before:absolute before:-left-6 before:block before:text-xl before:text-purple-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
						<h3 className="text-sm lg:text-base font-bold">
							Who runs this survey?
						</h3>
					</div>
					<div className="peer-checked:hidden pr-2">
						<div className="pb-5">
							<p className="text-sm">
								State of Dev Uzbekistan is a community initiative led by&nbsp;
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/"
									target="_blank"
								>
									Truss
								</a>.
								After we found the Geeksblabla team created this project in Morocco, we instantly knew we had to do the
								same in Uzbekistan!
							</p>
						</div>
					</div>
				</label>
			</li>
			<li className="text-left">
				<label htmlFor="accordion-2" className="flex flex-col">
					<input
						className="peer hidden"
						type="checkbox"
						id="accordion-2"
						defaultChecked={true}
					/>
					<div
						className="before:absolute before:-left-6 before:block before:text-xl before:text-purple-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
						<h3 className="text-sm lg:text-base font-bold">
							How will this data be used?
						</h3>
					</div>
					<div className="peer-checked:hidden pr-2">
						<div className="pb-5">
							<p className="text-sm">
								All data collected will be released publicly. It will then
								become a resource for developers to check the last trends in
								Uzbekistan as well as companies to check the current state of the
								Uzbek developer community.
							</p>
						</div>
					</div>
				</label>
			</li>
			{/*<li className="text-left">*/}
			{/*	<label htmlFor="accordion-4" className="flex flex-col">*/}
			{/*		<input*/}
			{/*			className="peer hidden"*/}
			{/*			type="checkbox"*/}
			{/*			id="accordion-4"*/}
			{/*			defaultChecked={true}*/}
			{/*		/>*/}
			{/*		<div*/}
			{/*			className="before:absolute before:-left-6 before:block before:text-xl before:text-purple-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">*/}
			{/*			<h3 className="text-sm lg:text-base font-bold">*/}
			{/*				How can i contribute ?*/}
			{/*			</h3>*/}
			{/*		</div>*/}
			{/*		<div className="peer-checked:hidden pr-2">*/}
			{/*			<div className="pb-5">*/}
			{/*				<p className="text-sm">*/}
			{/*					The project is open source and hosted on Github. You can*/}
			{/*					contribute by opening issues or pull requests. You can also help*/}
			{/*					us by sharing the survey with your friends or write about the*/}
			{/*					results on social media to help us understand the Uzbek*/}
			{/*					developer community better.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</label>*/}
			{/*</li>*/}
		</ul>
	</div>
);
