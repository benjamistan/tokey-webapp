import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';

import Hero from '../components/HomePage/Hero';
import HotCollections from '../components/HomePage/HotCollections';
import HotNFTs from '../components/HomePage/HotNFTs';

const style = {
	wrapper: ``,
	walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
	button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
	details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
	const { address, connectWallet } = useWeb3();

	const welcomeUser = (walletAddress: string, toastHandler = toast) => {
		toastHandler.success(`Connected to ${walletAddress.slice(1, 7)}...`, {
			style: {
				background: '#04111d',
				color: '#fff',
			},
		});
	};

	useEffect(() => {
		if (!address) return;
		(async () => {
			const userDoc = {
				_type: 'users',
				_id: address,
				userName: 'Unnamed',
				walletAddress: address,
			};

			const result = await client.createIfNotExists(userDoc);
			welcomeUser(result.walletAddress);
		})();
	}, [address]);

	const apiKey = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_POLYGON_MUMBAI}`;
	console.log('apiKey is', apiKey);
	console.log('Current environment is', process.env.NEXT_PUBLIC_ENVIRONMENT);

	return (
		<div className={style.wrapper}>
			<Toaster position='bottom-right' reverseOrder={false} />
			<>
				<Hero />
				<HotCollections />
				<HotNFTs />
			</>
		</div>
	);
}
