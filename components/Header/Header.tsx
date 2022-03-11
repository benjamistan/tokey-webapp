import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineSearch } from 'react-icons/ai';

import logo from '../../assets/tokey_logo_white_75.svg';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
	wrapper: `bg-[#034078] w-screen px-[1.2rem] py-[0.8rem] flex `,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#e5e5e5] rounded-[0.8rem] hover:bg-[#fefcfb]`,
	searchIcon: `text-[#000] mx-3 font-bold text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000] placeholder:text-[#8a939b]`,
	headerItems: ` flex items-center justify-end`,
	headerItem: `text-white px-4 font-bold text-[#fefcfb] hover:text-white cursor-pointer`,
	headerIcon: `text-[#fefcfb] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Header = () => {
	return (
		<div className={style.wrapper}>
			<Link href='/' passHref>
				<div className={style.logoContainer}>
					<Image className={style.logoText} src={logo} alt='Tokey logo' />
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
			</div>
			<div className={style.headerItems}>
				<div className={style.headerItem}>
					<Link href='/collections/0x77053C5e0cd65Af65f39b58d3e1BCE52DA246bFc'>
						Collections
					</Link>
				</div>
				<div className={style.headerItem}>
					<Link href='/create-item'>Mint</Link>
				</div>
				<div className={style.headerItem}>
					<Link href='/dashboard'>Dashboard</Link>
				</div>
				<div className={style.headerIcon}>
					<CgProfile />
				</div>
				<div className={style.headerIcon}>
					<MdOutlineAccountBalanceWallet />
				</div>
			</div>
		</div>
	);
};

export default Header;
