import { withPasswordProtect } from '@storyofams/next-password-protect';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../styles/globals.css';

console.log('ENVIRONMENT is', process.env.ENVIRONMENT);

function App({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider desiredChainId={ChainId.Mumbai}>
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
