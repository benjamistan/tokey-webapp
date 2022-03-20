import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineSearch } from 'react-icons/ai';

import logo from '../../assets/tokey_logo_white.svg';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
	container: `flex justify-center bg-[#034078] w-[screen] px-[1.2rem] py-[0.8rem] `,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-none mx-[0.8rem] xl:w-[820px] lg:w-[520px] md:w-[420px] sm:w-[120px] items-center bg-[#e5e5e5] rounded-[0.8rem] hover:bg-[#fefcfb]`,
	searchIcon: `text-[#000] mx-3 font-bold text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000] placeholder:text-[#8a939b]`,
	searchButton: `border bg-[#2081e2] font-semibold44sdw cursor-pointer text-black`,
	headerItems: ` flex items-center justify-end`,
	headerItem: `text-white px-4 font-bold text-[#fefcfb] hover:text-white cursor-pointer`,
	headerIcon: `text-[#fefcfb] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Header = () => {
	return (
		<div className={style.container}>
			<Link href='/' passHref>
				<div className={style.logoContainer}>
					<Image
						className={style.logoText}
						src={logo}
						alt='Tokey logo'
						height={39}
						width={120}
					/>
				</div>
			</Link>
			<div className={style.searchBar}>
				<div className={style.searchIcon}>
					<AiOutlineSearch />
				</div>
				<input
					className={style.searchInput}
					placeholder='Search items, collections and accounts'
				/>
				<button className={style.searchButton}>
					<Link href='/search'>Search</Link>
				</button>
			</div>

			<nav className={style.headerItems}>
				<div className={style.headerItem}>
					<Link href='/collections'>Collections</Link>
				</div>
				<div className={style.headerItem}>
					<Link href='/mint'>Mint</Link>
				</div>
				<div className={style.headerItem}>
					<Link href='/dashboard'>Dashboard</Link>
				</div>
				<div className={style.headerIcon}>
					<MdOutlineAccountBalanceWallet />
				</div>
			</nav>
		</div>
	);
};

export default Header;
