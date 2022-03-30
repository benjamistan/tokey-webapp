import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/tokey_logo_white.svg';
import Dropdown from './Dropdown';

const Header = () => {
	return (
		<div className='block sm:flex container mx-auto justify-items-end sm:justify-between align-middle bg-[#034078] w-[screen] px-[10rem] py-[0.8rem]'>
			<div>
				<Link href='/' passHref>
					<div className='cursor-pointer'>
						<Logo />
					</div>
				</Link>
			</div>
			<nav className='flex items-center justify-center sm:justify-end'>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/collections'>Collections</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/create'>Create</Link>
				</div>
				<div className='text-white px-4 font-bold hover:text-gray-400 cursor-pointer transition-all pt-3'>
					<Link href='/dashboard'>Dashboard</Link>
				</div>
				<div className='text-[#fefcfb] font-black px-4 transition-all cursor-pointer pt-3'>
					<Dropdown />
				</div>
			</nav>
		</div>
	);
};

export default Header;
