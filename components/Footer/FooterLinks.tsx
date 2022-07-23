import React from 'react';
import Link from 'next/link';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-5 justify-center bg-[#034078] text-white relative items-center pb-20">
      <div>&nbsp;</div>
      <div className="pl-20">
        <h5 className="font-bold text-xl mb-4 border-b">Assets</h5>
        <ul className="list-non mb-0">
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/collections">Collections</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/create">Create</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="pl-20">
        <h5 className="font-bold text-xl mb-4 border-b">Resources</h5>
        <ul className="list-non mb-0">
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/">Help Centre</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/">Platform Status</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/">Partners</Link>
          </li>
        </ul>
      </div>
      <div className="pl-20">
        <h5 className="font-bold text-xl mb-4 border-b">Company</h5>
        <ul className="list-non mb-0">
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/collections">Who we are</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className="text-white hover:text-[#a7b0c4] cursor-pointer">
            <Link href="/termsofservice">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default FooterLinks;
