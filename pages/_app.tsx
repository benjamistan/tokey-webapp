import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainIds = [80001];
const connectors = {
	injected: {},
};

function Marketplace({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebWeb3Provider
			supportedChainIds={supportedChainIds}
			connectors={connectors}
		>
			<div>
				<Head>
					<title>Ownr NFT Marketplace</title>
				</Head>
				<Component {...pageProps} />
			</div>
		</ThirdwebWeb3Provider>
	);
}

export default Marketplace;
