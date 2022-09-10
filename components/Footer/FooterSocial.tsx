import React from 'react';

import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineGithub,
} from 'react-icons/ai';

import { BsDiscord } from 'react-icons/bs';

import {
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaRedditAlien,
  FaTwitter,
} from 'react-icons/fa';

const style = {
  footer: `bg-[#034078] w-screen px-[1.2rem] py-[0.8rem] pt-6 flex text-white relative justify-center flex-wrap items-center`,
  iconAnchor: `rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1`,
  iconAnchorImage: `w-3 h-full mx-auto`,
  iconLinkedIn:
    'text-[#fefcfb] text-4xl font-black px-2 m-1 hover:text-[#a7b0c4] cursor-pointer',
};

const FooterSocial = () => {
  return (
    <div className={style.footer}>
      <a href="https://twitter.com/tokeyapp" type="button">
        <div className={style.iconLinkedIn}>
          <FaTwitter />
        </div>
      </a>

      {/* <a href='https://reddit.com/' type='button'>
				<div className={style.iconLinkedIn}>
					<FaRedditAlien />
				</div>
			</a> */}

      <a href="https://www.linkedin.com/company/tokeyapp" type="button">
        <div className={style.iconLinkedIn}>
          <FaLinkedinIn />
        </div>
      </a>

      <a href="https://github.com/tokeyapp" type="button">
        <div className={style.iconLinkedIn}>
          <FaGithub />
        </div>
      </a>

      <a href="https://discord.gg/hKyxnq8GPX" type="button">
        <div className={style.iconLinkedIn}>
          <FaDiscord />
        </div>
      </a>
    </div>
  );
};

export default FooterSocial;
