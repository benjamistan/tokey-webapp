import React from 'react';
import { Assets } from '../components/AssetView';

const style = {
	container: 'flex text-center bg-white pt-20 pb-40 pl-40',
};

const collections = () => {
	return (
		<div className={style.container}>
			<Assets />
		</div>
	);
};

export default collections;
