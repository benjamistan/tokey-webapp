import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeroNFTCard from './HeroNFTCard';

function Hero() {
	return (
		<div className='inline-block sm:flex justify-center align-middle w-screen h-[600px] font-gotham'>
			<div className='inline-block sm:flex justify-center container mx-auto pt-8'>
				<div className='p-10 w-full text-center sm:text-left sm:w-2/5 mt-10'>
					<p className='text-sm sm:text-base text-purple-500 uppercase font-light'>
						TOKEY NFT MARKETPLACE
					</p>
					<p className='text-2xl md:text-3xl xl:text-5xl font-bold pb-5 pt-5'>
						What will you collect today?
					</p>
					<p className='text-sm lg:text-xl xl:text-2xl'>
						Buy and sell NFT tokens on our marketplace.{' '}
					</p>
					<div className='block sm:flex space-x-2'>
						<Link href='/' passHref>
							<button className='text-sm lg:text-xl rounded align mt-5 p-2 pt-5 px-5 bg-gray-400 hover:bg-gray-300 transition-all ease-in'>
								Learn More
							</button>
						</Link>
						<Link href='/collections' passHref>
							<button className='text-sm lg:text-xl rounded bg-[#0d559d] mt-5 p-2 pt-5 px-5 text-white hover:bg-blue-300 transition-all ease-in'>
								Get Started
							</button>
						</Link>
					</div>
				</div>

				<div className='block sm:flex w-full sm:w-4/5 p-10 mt-10 space-x-2'>
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

export default Hero;
