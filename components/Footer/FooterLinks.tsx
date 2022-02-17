import React from 'react';
import Link from 'next/link';

const style = {
	footer: `bg-[#034078] text-white relative justify-center flex flex-wrap grid grid-cols-5 items-center text-center`,
	link: `text-white`,
	linksColHeader: `font-bold mb-2.5`,
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
			<div>&nbsp;</div>
		</div>
	);
};

export default FooterLinks;
