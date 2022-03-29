import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import { AlchemyProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';

const style = {
	container: 'text-center h-screen bg-white pt-96',
	text: 'inline-block align-middle text-5xl',
};

const Create = () => {
	const [metamaskPresent, setMetamaskPresent] = useState(false);
	const [isConnected, setIsConnected] = useState(false);
	const [provider, setProvider] = useState<any>({});
	const [signer, setSigner] = useState<any>();

	const windowEthereum = (window as any).ethereum;

	useEffect(() => {
		if (typeof (window as any).ethereum !== 'undefined') {
			setMetamaskPresent(true);
		}
	}, [windowEthereum]);

	async function connect() {
		if (typeof (window as any).ethereum !== 'undefined') {
			try {
				await (window as any).ethereum.request({
					method: 'eth_requestAccounts',
				});
				setIsConnected(true);
				setProvider(new ethers.providers.Web3Provider(windowEthereum));
				setSigner(await provider.getSigner());
			} catch (e) {
				console.log(e);
			}
		} else {
			setIsConnected(false);
		}
	}

	// instantiate Metamask
	// const provider = new ethers.providers.Web3Provider((window as any).ethereum);
	// const signer = provider.getSigner();

	// console.log('Provider is:', provider);
	// console.log('Signer is', signer);
	// console.log('Sanity Client: ', client);

	return (
		<div className={style.container}>
			<span className={style.text}>Create NFT screen</span>
			{/* <div>
				{isConnected ? (
					<div></div>
				) : (
					<button onClick={() => connect()}>Connect</button>
				)}
			</div> */}
		</div>
	);
};

export default Create;
