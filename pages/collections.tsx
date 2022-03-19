import React from 'react';

const style = {
	container: 'text-center h-screen bg-white pt-96',
	text: 'inline-block align-middle text-5xl',
};

const collections = () => {
	return (
		<div className={style.container}>
			<span className={style.text}>Collections screen</span>
		</div>
	);
};

export default collections;
