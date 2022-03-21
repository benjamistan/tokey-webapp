import React from 'react';

const style = {
	container: 'text-center h-screen bg-white pt-96',
	text: 'inline-block align-middle text-5xl',
};

const nft = () => {
	return (
		<div className={style.container}>
			<span className={style.text}>NFT individual view screen</span>
		</div>
	);
};

export default nft;
