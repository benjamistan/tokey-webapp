import React from 'react';
import Link from 'next/link';
import Logo from '../../assets/tokey-logo.svg';

const ClickableLogo = React.forwardRef(({ onClick, href }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<Logo />
		</a>
	);
});

ClickableLogo.displayName = 'ClickableLogo';

function LogoLink() {
	return (
		<Link href='/' passHref>
			<ClickableLogo />
		</Link>
	);
}

export default LogoLink;
