import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeroNFTCard from './HeroNFTCard';
import NFTCard from './NFTCard';

function Hero() {
  return (
    // <div classNameName='inline-block sm:flex justify-center align-middle w-screen h-[600px] font-gotham'>
    // 	<div classNameName='inline-block sm:flex justify-center container mx-auto pt-8'>
    // 		<div classNameName='p-10 w-full text-center sm:text-left sm:w-2/5 mt-10'>
    // 			<p classNameName='text-sm sm:text-base text-purple-500 uppercase font-light'>
    // 				TOKEY NFT MARKETPLACE
    // 			</p>
    // 			<p classNameName='text-2xl md:text-3xl xl:text-5xl font-bold pb-5 pt-5'>
    // 				What will you collect today?
    // 			</p>
    // 			<p classNameName='text-sm lg:text-xl xl:text-2xl'>
    // 				Buy and sell NFT tokens on our marketplace.{' '}
    // 			</p>
    // 			<div classNameName='block sm:flex space-x-2'>
    // 				<Link href='/' passHref>
    // 					<button classNameName='text-sm lg:text-xl rounded align mt-5 p-2 pt-5 px-5 bg-gray-400 hover:bg-gray-300 transition-all ease-in'>
    // 						Learn More
    // 					</button>
    // 				</Link>
    // 				<Link href='/collections' passHref>
    // 					<button classNameName='text-sm lg:text-xl rounded bg-[#0d559d] mt-5 p-2 pt-5 px-5 text-white hover:bg-blue-300 transition-all ease-in'>
    // 						Get Started
    // 					</button>
    // 				</Link>
    // 			</div>
    // 		</div>

    // 		<div classNameName='block sm:flex w-full sm:w-4/5 p-10 mt-10 space-x-2'>
    // 			<HeroNFTCard
    // 				image='ape1.png'
    // 				collection='Fancy Dans'
    // 				nftName='Dave'
    // 				price='43'
    // 			/>
    // 			<HeroNFTCard
    // 				image='ape2.png'
    // 				collection='Fancy Dans'
    // 				nftName='John'
    // 				price='56'
    // 			/>
    // 			<HeroNFTCard
    // 				image='ape3.png'
    // 				collection='Fancy Dans'
    // 				nftName='Maud'
    // 				price='34'
    // 			/>
    // 			<HeroNFTCard
    // 				image='ape4.png'
    // 				collection='Fancy Dans'
    // 				nftName='Bruno'
    // 				price='61'
    // 			/>
    // 		</div>
    // 	</div>
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <NFTCard />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Tokey eum omnis voluptatem accusantium nemo perspiciatis delectus
              atque autem
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              {' '}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
