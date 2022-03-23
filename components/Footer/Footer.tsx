import React from 'react';
import FooterSocial from './FooterSocial';
import NewsletterSignup from './NewsletterSignup';
import FooterLinks from './FooterLinks';

import Link from 'next/link';

const style = {
	footer: `bg-[#034078] w-screen px-[1.2rem] py-[0.8rem] pt-6 flex text-white relative justify-center flex-wrap items-center`,
	logoText: ``,
	textAnchor: ``,
};

const Footer = () => {
	return (
		<>
			<div className={style.footer}>
				<NewsletterSignup />
			</div>

			<div>
				<FooterLinks />
			</div>
			<div className={style.footer}>
				<FooterSocial />
			</div>
			<div className={style.footer}>
				<div className='flex justify-center m-1 ml-[0.8rem] text-white text-sm'>
					<span className='m-1'>&copy;2022 Tokey Ltd</span>
					<span className='hover:text-gray-300 m-1 cursor-pointer'>
						<Link href='/privacy'>| Privacy Policy</Link>
					</span>
					<div className='hover:text-gray-300 m-1 cursor-pointer'>
						<Link href='/termsofservice'>| Terms of Service</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
