import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function Marketplace({ Component, pageProps }: AppProps) {
	return (
		<div>
			<nav className='border-b p-6'>
				<p className='text-4xl font-bold'>NFTM</p>
				<div className='flex mt-4'>
					<Link href='/'>
						<a className='mr-4 text-pink-500'>Home</a>
					</Link>
					<Link href='/create-item'>
						<a className='mr-6 text-pink-500'>Mint</a>
					</Link>
					<Link href='/dashboard'>
						<a className='mr-6 text-pink-500'>Dashboard</a>
					</Link>
				</div>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}

export default Marketplace;
