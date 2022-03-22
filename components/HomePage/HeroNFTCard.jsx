import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FaEthereum } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';

const HeroNFTCard = ({ image, collection, nftName, price }) => {
	console.log('Collection:', { collection });
	return (
		<div className='border-2 shadow-xl rounded-[12px] h-min'>
			<Image src={image} alt='An NFT Image' width={250} height={250} />
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
