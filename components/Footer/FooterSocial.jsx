import React from 'react';

import {
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiOutlineGithub,
} from 'react-icons/ai';

const style = {
	iconAnchor: `rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1`,
	iconAnchorImage: `w-3 h-full mx-auto`,
	iconLinkedIn:
		'text-[#fefcfb] text-4xl font-black px-2 hover:text-[#a7b0c4] cursor-pointer',
};

const FooterSocial = () => {
	return (
		<div className={style.footer}>
			<a href='https://twitter.com/' type='button'>
				<div className={style.iconLinkedIn}>
					<AiFillTwitterSquare />
				</div>
			</a>

			<a href='https://linkedin.com' type='button'>
				<div className={style.iconLinkedIn}>
					<AiFillLinkedin />
				</div>
			</a>

			<a href='https://github.com/' type='button'>
				<div className={style.iconLinkedIn}>
					<AiOutlineGithub />
				</div>
			</a>
		</div>
	);
};

export default FooterSocial;
