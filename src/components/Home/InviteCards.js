import {Link} from 'gatsby';
import React from 'react';

const reports = [
	{
		title: `Look for Opportunities`,
		// link: `/2022`,
		description: `Explore dynamic remote opportunities in the US and Europe with Truss.`,
		actions: [
			{
				title: `View Open Jobs`,
				link: `https://hiretruss.com/careers-at-truss`,
			},
		],
	},
	{
		title: `Create Your Truss Profile`,
		// link: `/2022`,
		description: `Start your journey by creating your Truss profile to get match directly with employers.`,
		actions: [
			{
				title: 'Sign Up',
				link: 'https://app.hiretruss.com/signup',
			},
		],
	},
	{
		title: `About Truss`,
		// link: `/2022`,
		description: `Uncover the story behind Truss and meet the team driving tech innovation.`,
		actions: [
			{
				title: 'Learn More',
				link: 'https://hiretruss.com/about/',
			},
		],
	},
];

export const InviteCards = () => (
	<section className="bg-purple-500">
		<div className="mx-auto max-w-lg  px-4 py-16 md:max-w-screen-xl md:px-8 lg:grid-cols-3">
			<h2 className="text-4xl font-medium text-white">Ready to elevate your career?</h2>
		</div>
		<div
			className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 pb-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
			{reports.map((report, index) => (
				<ReportCard {...report} key={`report-${index}`}/>
			))}
		</div>
	</section>
);

export const ReportCard = ({title, link, description, actions = []}) => {
	const Root = link ? Link : (props) => <div {...props}/>;
	return (
		<Root className="flex" to={link}>
			<div
				className={`flex flex-col flex-1 border-white/40 border-solid relative border-4 px-4 pt-14 pb-8${link ? ' hover:scale-105 transition duration-200' : ''}`}>
				<div className="absolute -top-8 left-8 bg-purple-500 px-4 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="img"
						width="24"
						height="24"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
						className="h-14 w-14"
					>
						<path
							fill="currentColor"
							d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z"
						/>
						<path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"/>
					</svg>
				</div>
				<p className="mb-3 text-2xl font-medium uppercase text-white">{title}</p>
				<p className="flex-1 text-gray-100/90">{description}</p>
				{actions.map(({title, link}) => (
					<Link to={link} key={title + link}>
						<button
							type="button"
							className={`tooltips focus:outline-4 rounded-xl bg-white px-6 md:px-8 py-3 font-medium  text-purple-600 border-purple-600 mr-2 w-full mt-4${link ? ' hover:scale-105 transition duration-200' : ''}`}
							// className="tooltips focus:outline-4 rounded-xl bg-purple-600 px-8 md:px-10 py-3 font-medium text-white shadow-md outline-white transition hover:bg-purple-500"
						>
							{title}
						</button>
					</Link>
				))}
			</div>
		</Root>
	);
};
