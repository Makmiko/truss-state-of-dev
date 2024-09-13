import React from 'react';
import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {Footer} from './Footer';
import '../styles/commons.scss';
import {Header} from './Header';
import {Helmet} from 'react-helmet';

const Head = () => (
	<>
		<Helmet>
			{/*Google Tag Manager*/}
			{/*<script>{(function (w, d, s, l, i) {*/}
			{/*	w[l] = w[l] || [];*/}
			{/*	w[l].push({*/}
			{/*		'gtm.start':*/}
			{/*			new Date().getTime(), event: 'gtm.js',*/}
			{/*	});*/}
			{/*	var f = d.getElementsByTagName(s)[0],*/}
			{/*		j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';*/}
			{/*	j.async = true;*/}
			{/*	j.src =*/}
			{/*		'https://www.googletagmanager.com/gtm.js?id=' + i + dl;*/}
			{/*	f.parentNode.insertBefore(j, f);*/}
			{/*})(window, document, 'script', 'dataLayer', 'GTM-M3JHLB7P')}*/}
			{/*</script>*/}
			{/*End Google Tag Manager*/}
			
			{/*favicon package*/}
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
			<link rel="manifest" href="/favicon/site.webmanifest?v=2.0"/>
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=2.0" color="#420A4A"/>
			<link rel="shortcut icon" href="/favicon/favicon.ico?v=2.0"/>
			<meta name="apple-mobile-web-app-title" content="Truss"/>
			<meta name="application-name" content="Truss"/>
			<meta name="msapplication-TileColor" content="#603cba"/>
			<meta name="theme-color" content="#ffffff"/>
			{/*favicon package*/}
		</Helmet>
		{/*Google Tag Manager (noscript)*/}
		{/*<noscript>*/}
		{/*	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3JHLB7P"*/}
		{/*	        height="0" width="0" style="display:none;visibility:hidden"></iframe>*/}
		{/*</noscript>*/}
		{/*End Google Tag Manager (noscript)*/}
	</>
);

export const Layout = ({children, year = undefined}) => (
	<>
		{year === undefined ? (
			<GatsbySeo
				title="State Of Dev In Uzbekistan"
				description="Help us paint the picture of what the state of software development is really like in Uzbekistan!"
				canonical="https://state-of-dev-uz.com"
				// metaTags={[
				// 	<script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
				// 		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				// 		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				// 		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				// 	})(window,document,'script','dataLayer','GTM-M3JHLB7P');</script>,
				// ]}
				openGraph={{
					url: 'https://state-of-dev-uz.com',
					title: 'State Of Dev In Uzbekistan',
					description:
						'Help us paint the picture of what the state of software development is really like in Uzbekistan!',
					images: [{url: 'https://www.state-of-dev-uz.com/images/truss-SoD-cover.png'}],
					site_name: 'StateOfDevUz',
				}}
			/>
		) : (
			<GatsbySeo
				title={`State Of Dev In Uzbekistan ${year}`}
				description={`State Of Dev In Uzbekistan ${year} | Uzbek developers jobs satisfaction, salaries, and community contribution, how they learn and level up, which tools they’re using, and what they want to learn next. `}
				canonical="https://state-of-dev-uz.com"
				openGraph={{
					url: `https://state-of-dev-uz.com/${year}`,
					title: `State Of Dev In Uzbekistan ${year}`,
					description: `State Of Dev In Uzbekistan ${year} | Uzbek developers jobs satisfaction, salaries, and community contribution, how they learn and level up, which tools they’re using, and what they want to learn next. `,
					images: [{url: 'https://www.state-of-dev-uz.com/images/truss-SoD-cover.png'}],
					site_name: 'StateOfDevUz',
				}}
			/>
		)}
		<Head/>
		<Header/>
		{children}
		<Footer/>
	</>
);
