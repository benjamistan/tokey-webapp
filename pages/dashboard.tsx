import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';

import { nftmarketaddress, nftaddress } from '../config';

import Market from '../artifacts/contracts/Market.sol/NFTMarket.json';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';

export default function Dashboard() {
	const [userSaleNfts, setUserSaleNfts] = useState<Token[]>([]);
	const [userOwnedNfts, setUserOwnedNfts] = useState<Token[]>([]);
	const [sold, setSold] = useState<Token[]>([]);
	const [loadingState, setLoadingState] = useState('not-loaded');

	interface Token {
		tokenId: any;
		price: number;
		itemId: any;
		seller: string;
		owner: string;
		image: string;
		name: string;
		description: string;
		sold: boolean;
	}

	useEffect(() => {
		loadNFTs();
		loadUserOwnedNFTs();
	}, []);

	async function loadNFTs() {
		console.log('Getting UserSaleNFTs');
		const web3Modal = new Web3Modal({
			network: 'mainnet',
			cacheProvider: true,
		});
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		const marketContract = new ethers.Contract(
			nftmarketaddress,
			Market.abi,
			signer
		);
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
		const data = await marketContract.fetchItemsCreated();

		const items = await Promise.all(
			data.map(async (i: Token) => {
				const tokenUri = await tokenContract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					sold: i.sold,
					image: meta.data.image,
				};
				return item;
			})
		);
		/* create a filtered array of items that have been sold */
		const soldItems = items.filter((i) => i.sold);
		setSold(soldItems);
		setUserSaleNfts(items);
		setLoadingState('loaded');
	}

	async function loadUserOwnedNFTs() {
		console.log('Getting UserOwnedNFTs');
		const web3Modal = new Web3Modal({
			network: 'mainnet',
			cacheProvider: true,
		});
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		const marketContract = new ethers.Contract(
			nftmarketaddress,
			Market.abi,
			signer
		);
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
		const data = await marketContract.fetchMyNFTs();

		const items: Token[] = await Promise.all(
			data.map(async (i: Token) => {
				const tokenUri = await tokenContract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
				};
				return item;
			})
		);
		setUserOwnedNfts(items);
		setLoadingState('loaded');
	}

	return (
		<div>
			<div className='p-4'>
				<h2 className='text-2xl py-2'>Items On Sale</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
					{userSaleNfts.map((nft, i) => (
						<div key={i} className='border shadow rounded-xl overflow-hidden'>
							<img src={nft.image} className='rounded' />
							<div className='p-4 bg-black'>
								<p className='text-2xl font-bold text-white'>
									Price - {nft.price} Eth
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='px-4'>
				{Boolean(sold.length) && (
					<div>
						<h2 className='text-2xl py-2'>Items sold</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
							{sold.map((nft, i) => (
								<div
									key={i}
									className='border shadow rounded-xl overflow-hidden'
								>
									<img src={nft.image} className='rounded' />
									<div className='p-4 bg-black'>
										<p className='text-2xl font-bold text-white'>
											Price - {nft.price} Eth
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className='px-4'>
				<h2 className='text-2xl py-2'>Items Owned</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
					{userOwnedNfts.map((nft, i) => (
						<div key={i} className='border shadow rounded-xl overflow-hidden'>
							<img src={nft.image} className='rounded' />
							<div className='p-4 bg-black'>
								<p className='text-2xl font-bold text-white'>
									Price - {nft.price} ETH
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
