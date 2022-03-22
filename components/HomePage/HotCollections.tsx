import React from 'react';

import HeroNFTCard from './HeroNFTCard';

function HotCollections() {
	return (
		<div className='inline-block sm:flex justify-center align-middle w-screen h-[600px]'>
			<div className='container align-middle h-1/3 bg-white space-x-4'>
				<div className='text-3xl font-extrabold pb-5'>Hot Collections</div>
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
		</div>
	);
}

export default HotCollections;
