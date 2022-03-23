import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SiEthereum } from 'react-icons/si';

// Alchemy api key to talk to Thirdweb contracts on Mumbai
const apiKey = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_POLYGON_MUMBAI}`;

// get NFT contract in form of Thirdweb module

// useEffect for handling NFT module changes

// get Marketplace contract in form of Thirdweb module

// useEffect for Marketplace module changes

// get collection data from Sanity

// useEffect for Collection changes

const HeroNFTCard = ({ image, collection, nftName, price }) => {
	return (
		<div className='border hover:shadow-2xl rounded-[12px] h-min cursor-pointer hover:bg-slate-300'>
			<Link href='/nft' passHref>
				<Image src={image} alt='An NFT Image' width={250} height={250} />
			</Link>
			<div className='flex justify-between px-1'>
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
			<div className='border-b-2 border-b-gray-200 pt-4 mb-4 mx-2'></div>
		</div>
	);
};

export default HeroNFTCard;
