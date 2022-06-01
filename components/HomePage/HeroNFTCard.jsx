import { AlchemyProvider } from '@ethersproject/providers';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

const HeroNFTCard = ({ image, collection, nftName, price }) => {
	const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON_MUMBAI;

	const provider = new AlchemyProvider('maticmum', apiKey);
	console.log('HeroNFTCard: apiKey is ', apiKey);
	//console.log(provider);

	// get NFT contract in form of Thirdweb module
	// const nftModule = useMemo(() => {
	// 	if (!provider) return;
	// 	console.log('fetching nftModule:', provider);

	// 	const sdk = new ThirdwebSDK(provider.getSigner(), apiKey);
	// 	const res = sdk.getNFTModule();
	// 	return;
	// }, [provider]);

	// useEffect for handling NFT module changes

	// Get marketplace module
	const marketplaceModule = useMemo(() => {
		if (!provider) return;
		const sdk = new ThirdwebSDK(provider);
		const res = sdk.getMarketplace(
			'0x254aF607E999D48574c03f520B0637bd07ab81aC'
		);
		//console.log('Marketplace is:', res);
		return res;
	}, []);

	// get collection data from Sanity

	// useEffect for Collection changes

	return (
		<div className='border hover:shadow-2xl rounded-[12px] h-min cursor-pointer hover:bg-slate-300 items-center'>
			<Link href='/nft' passHref>
				<a>
					<Image src={image} alt='An NFT Image' width={250} height={250} />
				</a>
			</Link>
			{/* <div className='flex justify-between px-1'>
				<div className='font font-medium hover:text-gray-600 transition-all ease-in'>
					<Link href='/collections'>{collection}</Link>
				</div>
				<div className='flex align-middle font-bold hover:text-gray-600 transition-all ease-in'>
					<Link href='/nft'>{price}</Link>
					<div className='pt-1 text-[#0d559d]'>
						<SiEthereum />
					</div>
				</div>
			</div>
			<div className='font-bold text-[#0d559d] hover:text-blue-300 transition-all ease-in px-1'>
				<Link href='/nft'>{nftName}</Link>
			</div>
			<div className='border-b-2 border-b-gray-200 pt-4 mb-4 mx-2'></div> */}
		</div>
	);
};

export default HeroNFTCard;
