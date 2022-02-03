import Head from 'next/head';
import Header from '../components/Header';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';

const style = {
	wrapper: ``,
	walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
	button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
	details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
	const { address, connectWallet } = useWeb3();

	useEffect(() => {
		if (!address) return;
		(async () => {
			const userDoc = {
				_type: 'users',
				_id: address,
				userName: 'Unnamed',
				walletAddress: address,
			};
		})();
	});

	return (
		<div className={style.wrapper}>
			{address ? (
				<>
					<Header />
				</>
			) : (
				<div className={style.walletConnectWrapper}>
					<button
						className={style.button}
						onClick={() => connectWallet('injected')}
					>
						Connect Wallet
					</button>
				</div>
			)}
		</div>
	);
}
