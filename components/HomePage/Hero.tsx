import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeroNFTCard from './HeroNFTCard';

function Hero() {
	return (
		<div className='flex justify-center align-middle w-screen h-[600px]'>
			<div className='flex justify-center container mx-auto pt-8'>
				<div className='p-10 w-2/5 mt-10'>
					<p className='text-purple-500 uppercase font-light'>
						tiny text in caps
					</p>
					<p className='text-5xl font-bold pb-5'>
						What will you collect today?
					</p>
					<p className='text-2xl'>
						Lorem ipsum dolor sit amet. Aut impedit sunt aut ipsa dolor est
						rerum asperiores aut deleniti illo?{' '}
					</p>
					<div className='space-x-2'>
						<Link href='/' passHref>
							<button className='rounded mt-5 p-2 px-5 bg-gray-400 hover:bg-gray-300 transition-all ease-in text-xl'>
								Learn More
							</button>
						</Link>
						<Link href='/collections' passHref>
							<button className='rounded bg-[#0d559d] mt-5 p-2 px-5 text-white text-xl hover:bg-blue-300 transition-all ease-in'>
								Get Started
							</button>
						</Link>
					</div>
				</div>

				<div className='flex w-4/5 p-10 mt-10 space-x-2'>
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
