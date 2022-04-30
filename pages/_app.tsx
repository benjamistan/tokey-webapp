import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThirdwebProvider } from '@thirdweb-dev/react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { withPasswordProtect } from '@storyofams/next-password-protect';

// const supportedChainIds = [4, 80001];
// const connectors = {
// 	injected: {},
// 	walletlink: {
// 		appName: 'thirdweb - demo',
// 		url: 'https://thirdweb.com',
// 		darkMode: false,
// 	},
// };

function App({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider desiredChainId={800001}>
			<div>
				<Head>
					<title>Tokey NFT Marketplace</title>
				</Head>
				<Header />
				<Component {...pageProps} />
			</div>
			<div>
				<Footer />
			</div>
		</ThirdwebProvider>
	);
}

export default process.env.PASSWORD_PROTECT
	? withPasswordProtect(App, {
			loginApiUrl: '/api/login',
			checkApiUrl: '/api/passwordCheck',
			loginComponentProps: {
				buttonBackgroundColor: '#0d559d',
				buttonColor: '#ffffff',
				logo: 'tokey_logo_262x724.png',
			},
	  })
	: App;
