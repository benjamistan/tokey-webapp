import React from 'react';
import { Assets } from '../components/AssetView';

const style = {
	container: 'flex text-center bg-white  pb-40 pl-10',
};

const collections = () => {
	return (
		<div className={style.container}>
			<Assets />
		</div>
	);
};

export default collections;
