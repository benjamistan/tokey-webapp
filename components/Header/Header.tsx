import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { ethers } from 'ethers';

import { AiOutlineSearch } from 'react-icons/ai';

import Logo from '../../assets/tokey_logo_white.svg';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { SiEthereum } from 'react-icons/si';

const chainz = {
	1: 'Mainnet',
	89: 'Polygon',
	13881: 'Mumbai',
};

const Header = () => {
	const [metamaskPresent, setMetamaskPresent] = useState(false);
	const [isConnected, setIsConnected] = useState(false);
	const [provider, setProvider] = useState<any>({});
	const [signer, setSigner] = useState<any>();
	const [chainId, setChainId] = useState<String>();
	const [chainName, setChainName] = useState<any>();

	// Currently Nextjs can't see window.ethereum and TS doesn't like it either
	const windowEthereum = (window as any).ethereum;

	useEffect(() => {
		if (typeof (window as any).ethereum !== 'undefined') {
			setMetamaskPresent(true);
		}
	}, [windowEthereum]);

	useEffect(() => {
		async function getChainId() {
			const chainId: string = await windowEthereum.request({
				method: 'eth_chainId',
			});
			setChainId(chainId);
			console.log('chainId: ', chainId.slice(2));
			const chainName = ethers.providers.getNetwork(Number(chainId.slice(2)));
			setChainName(chainName.name);
			//handleChainChanged(chainId);
		}
		getChainId();
	});

	// Listening for Metamask events
	windowEthereum.on('chainChanged', handleChainChanged);

	function handleChainChanged(_chainId: number) {
		window.location.reload();
	}

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
		console.log('connect() - Connected: ', isConnected);
	}

	async function disconnect() {
		if (typeof (window as any).ethereum !== 'undefined') {
			try {
				setIsConnected(false);
				setProvider(null);
				setSigner(null);
				console.log('disconnect() - Connected:', isConnected);
			} catch (e) {
				console.log(e);
			}
		} else {
			setIsConnected(true);
		}
	}

	return (
		<div className='block sm:flex container mx-auto justify-items-end sm:justify-between align-middle bg-[#034078] w-[screen] px-[10rem] py-[0.8rem]'>
			<div>
				<Link href='/' passHref>
					<div className='cursor-pointer'>
						<Logo />
					</div>
				</Link>
			</div>
			{/* <div className='flex w-56 md:w-1/3 h-10  mx-[0.8rem] items-center bg-[#e5e5e5] rounded-[0.8rem] hover:bg-[#fefcfb]'>
				<div className='text-[#000] mx-3 font-bold text-lg'>
					<AiOutlineSearch />
				</div>
				<input
					className='h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000] placeholder:text-[#8a939b]'
					placeholder='Search items, collections and accounts'
				/>
				<button className='border bg-[#2081e2] rounded-[0.8rem] p-1 mr-2 font-semibold44sdw cursor-pointer text-black'>
					<Link href='/search'>Search</Link>
				</button>
			</div> */}

			<nav className='flex items-center justify-center sm:justify-end'>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/collections'>Collections</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/create'>Create</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/dashboard'>Dashboard</Link>
				</div>
				<div className='text-[#fefcfb] text-3xl font-black px-4 hover:text-gray-400 transition-all cursor-pointer'></div>
				<div>
					{isConnected ? (
						<div>
							<button
								className='text-green-400 text-3xl font-black px-4 hover:text-gray-400 transition-all cursor-pointer align-middle'
								onClick={() => disconnect()}
							>
								<MdOutlineAccountBalanceWallet />
							</button>
						</div>
					) : (
						<div>
							<button
								className='text-[#8b0000] text-3xl font-black px-4 hover:text-gray-400 transition-all cursor-pointer align-middle'
								onClick={() => connect()}
							>
								<MdOutlineAccountBalanceWallet />
							</button>
						</div>
					)}
				</div>
				<div className='block text-white'>
					<div>You are on: </div>
					<div>{chainz.chainId}</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
