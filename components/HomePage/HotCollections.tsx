import React from 'react';

import HeroNFTCard from './HeroNFTCard';

function HotCollections() {
	return (
		<div className='align-middle h-1/3 bg-white py-96 space-x-4'>
			<div className='pl-20'>HotCollections</div>
			<div className='flex justify-center'>
				<HeroNFTCard
					image='ape1.png'
					collection='Fancy Dans'
					nftName='Dave'
					price='43'
				/>
				<HeroNFTCard
					image='ape2.png'
					collection='Fancy Dans'
					nftName='John'
					price='56'
				/>
				<HeroNFTCard
					image='ape3.png'
					collection='Fancy Dans'
					nftName='Maud'
					price='34'
				/>
				<HeroNFTCard
					image='ape4.png'
					collection='Fancy Dans'
					nftName='Bruno'
					price='61'
				/>
				<HeroNFTCard
					image='ape1.png'
					collection='Fancy Dans'
					nftName='Dave'
					price='43'
				/>
				<HeroNFTCard
					image='ape2.png'
					collection='Fancy Dans'
					nftName='John'
					price='56'
				/>
				<HeroNFTCard
					image='ape3.png'
					collection='Fancy Dans'
					nftName='Maud'
					price='34'
				/>
				<HeroNFTCard
					image='ape4.png'
					collection='Fancy Dans'
					nftName='Bruno'
					price='61'
				/>
			</div>
		</div>
	);
}

export default HotCollections;
