import React from 'react';
import { Assets } from '../components/HomePage';

import Link from 'next/link';

const style = {
	container: 'text-center bg-white pt-96',
	text: 'inline-block align-middle text-5xl',
};

const collections = () => {
	const collectionId = '0x4b94B8077da9db887a37a8814dAc0CFAD22B5A99';

	return (
		<div>
<<<<<<< HEAD
			<Assets />
=======
			<div className={style.container}>
				<span className={style.text}>Collections</span>
				<Link href={'/collections/' + collectionId} passHref>
					<div>0x4b94B8077da9db887a37a8814dAc0CFAD22B5A990</div>
				</Link>
			</div>
>>>>>>> main
		</div>
	);
};

export default collections;
