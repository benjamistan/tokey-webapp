import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const HeroNFTCard = ({ image, collection, nftName }) => {
	console.log('Collection:', { collection });
	return (
		<div className='border-2 shadow-xl rounded-[12px]'>
			<Image src={image} alt='An NFT Image' width={250} height={250} />
			<div className='flex justify-between p-1'>
				<div className='font font-medium hover:text-gray-600 transition-all ease-in'>
					<Link href='/collections'>{collection}</Link>
				</div>
				<div className='font-bold hover:text-gray-600 transition-all ease-in'>
					<Link href='/nft'>99 ETH</Link>
				</div>
			</div>
			<div className='font-bold text-[#0d559d] hover:text-blue-300 transition-all ease-in px-1'>
				<Link href='/nft'>{nftName}</Link>
			</div>
		</div>
	);
};

export default HeroNFTCard;
