import React from 'react';
import Link from 'next/link';

const style = {
	footer: `bg-[#034078] text-white relative justify-center flex flex-wrap grid grid-cols-5 items-center text-left pb-20`,
	link: `text-white hover:text-[#a7b0c4]`,
	linksColHeader: `font-bold text-xl mb-4 border-b`,
	linksList: `list-non mb-0`,
	linksListItem: `text-white`,
};

const FooterLinks = () => {
	return (
		<div className={style.footer}>
			<div>&nbsp;</div>
			<div>
				<h5 className={style.linksColHeader}>Assets</h5>
				<ul className={style.linksList}>
					<li>
						<a href='/collections' className={style.link}>
							Collections
						</a>
					</li>
					<li className={style.link}>
						<Link href='/create-item'>Mint</Link>
					</li>
					<li className={style.link}>
						<Link href='/dashboard'>Dashboard</Link>
					</li>
				</ul>
			</div>
			<div>
				<h5 className={style.linksColHeader}>Resources</h5>
				<ul className={style.linksList}>
					<li className={style.link}>
						<Link href='/'>Help Centre</Link>
					</li>
					<li className={style.link}>
						<Link href='/'>Platform Status</Link>
					</li>
					<li className={style.link}>
						<Link href='/'>Partners</Link>
					</li>
				</ul>
			</div>
			<div>
				<h5 className={style.linksColHeader}>Company</h5>
				<ul className={style.linksList}>
					<li>
						<a href='/collections' className={style.link}>
							Who we are
						</a>
					</li>
					<li className={style.link}>
						<Link href='/privacy'>Privacy Policy</Link>
					</li>
					<li className={style.link}>
						<Link href='/'>Terms of Service</Link>
					</li>
				</ul>
			</div>
			<div>&nbsp;</div>
		</div>
	);
};

export default FooterLinks;
