import React from 'react';

export const Footer = () => {
	return (
		<footer className="">
			<div
				className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-3 xl:px-10">
				<div className="max-w-sm">
					<div className="mt-7 mb-6 flex h-10 items-center space-x-2">
						<img src="/images/logo.svg" className="h-[64px]"/>
					</div>
					<div className="text-gray-500">
						Help us paint the picture of what the state of software development is really like in Uzbekistan!
					</div>
				</div>
				<div className="">
					<div className="mt-4 mb-2 font-medium xl:mb-4">Community</div>
					<nav aria-label="Guides Navigation" className="text-gray-500">
						<ul className="space-y-3">
							<li>
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/about/"
									target="_blank"
								>
									About Truss
								</a>
							</li>
							<li>
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/careers-at-truss"
									target="_blank"
								>
									Apply for Jobs
								</a>
							</li>
							<li>
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/find-and-hire-global-remote-talent/"
									target="_blank"
								>
									Our Talent and Recruiting Solution
								</a>
							</li>
							<li>
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/guide-to-hiring-in-uzbekistan-with-an-employer-of-record/ "
									target="_blank"
								>
									Uzbekistan Employer of Record Service
								</a>
							</li>
							<li>
								<a
									className="hover:text-purple-600 hover:underline"
									href="https://hiretruss.com/contact-us"
									target="_blank"
								>
									Book a Demo
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="">
					<div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
					<nav aria-label="Footer Navigation" className="text-gray-500">
						<ul className="space-x-3 flex">
							<li>
								<a
									className="bg-purple-600 rounded-full w-8 h-8 flex justify-center items-center"
									href="https://www.facebook.com/hiretruss"
									target="_blank"
								>
									<svg width="16px" height="16px" className="max-w-4 max-h-4 w-4 h-4" viewBox="0 0 320 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" role="img"><title>Our facebook</title><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
								</a>
							</li>
							<li>
								<a
									className="bg-purple-600 rounded-full w-8 h-8 flex justify-center items-center"
									href="https://linkedin.com/company/hiretruss/"
									target="_blank"
								>
									<svg width="16px" height="16px" className="max-w-4 max-h-4 w-4 h-4" viewBox="0 0 448 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" role="img"><title>Our Linkedin</title><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>								</a>
							</li>
							<li>
								<a
									className="bg-purple-600 rounded-full w-8 h-8 flex justify-center items-center"
									href="https://www.instagram.com/hiretruss/"
									target="_blank"
								>
									<svg width="16px" height="16px" className="max-w-4 max-h-4 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" role="img"><title>Our Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="border-t">
				<div
					className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
					<p className="">Made with ❤️ by Geeksblabla Team</p>
					<p className="">
						© {new Date().getFullYear()} Geeksblabla | All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};
