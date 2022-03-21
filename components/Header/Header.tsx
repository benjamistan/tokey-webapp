import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineSearch } from 'react-icons/ai';

import logo from '../../assets/tokey_logo_white.svg';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const Header = () => {
	return (
		<div className='block sm:flex justify-items-end sm:justify-between align-middle bg-[#034078] w-[screen] px-[10rem] py-[0.8rem]'>
			<div>
				<Link href='/' passHref>
					<div className='cursor-pointer'>
						<Image
							className='text-white font-semibold'
							src={logo}
							alt='Tokey logo'
							height={39}
							width={120}
						/>
					</div>
				</Link>
			</div>
			{/* <div className='flex w-56 md:w-1/3 h-10  mx-[0.8rem] items-center bg-[#e5e5e5] rounded-[0.8rem] hover:bg-[#fefcfb]'>
				<div className='text-[#000] mx-3 font-bold text-lg'>
					<AiOutlineSearch />
				</div>
				<input
					className='h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000] placeholder:text-[#8a939b]'
					placeholder='Search items, collections and accounts'
				/>
				<button className='border bg-[#2081e2] rounded-[0.8rem] p-1 mr-2 font-semibold44sdw cursor-pointer text-black'>
					<Link href='/search'>Search</Link>
				</button>
			</div> */}

			<nav className='flex items-center justify-center sm:justify-end'>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all'>
					<Link href='/collections'>Collections</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all'>
					<Link href='/create'>Create</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all'>
					<Link href='/dashboard'>Dashboard</Link>
				</div>
				<div className='text-[#fefcfb] text-3xl font-black px-4 hover:text-gray-400 transition-all cursor-pointer'>
					<MdOutlineAccountBalanceWallet />
				</div>
			</nav>
		</div>
	);
};

export default Header;
