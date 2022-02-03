import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';

import logo from '../assets/Logo.svg';

function Marketplace({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Ownr NFT Marketplace</title>
			</Head>
			<Header />
			<Component {...pageProps} />
		</div>
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
