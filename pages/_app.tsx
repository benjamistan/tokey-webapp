import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

import Header from '../components/Header';

import logo from '../assets/Logo.svg';

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

// nav className = 'border-b p-6' >
// 				<div className='flex mt-4'>
// 					<Link href='/' passHref>
// 						<a>
// 							<Image src={logo} alt='Ownr logo' height={50} width={150}></Image>
// 						</a>
// 					</Link>
// 					<Link href='/create-item'>
// 						<a className='mr-6 text-pink-500'>Mint</a>
// 					</Link>
// 					<Link href='/dashboard'>
// 						<a className='mr-6 text-pink-500'>Dashboard</a>
// 					</Link>
// 				</div>
// 			</nav>
// 			<Component {...pageProps} />
