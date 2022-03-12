import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { withPasswordProtect } from '@storyofams/next-password-protect';

const supportedChainIds = [80001];
const connectors = {
	injected: {},
};

function App({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebWeb3Provider
			supportedChainIds={supportedChainIds}
			connectors={connectors}
		>
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
		</ThirdwebWeb3Provider>
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
