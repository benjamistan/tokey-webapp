import React, { Component } from 'react';
import { SiGraylog } from 'react-icons/si';
import Select from 'react-select';

const options = [{ type: 'collection', label: 'Naw collection' }];

const customStyles = {};

const CollectionSelect = () => {
	return (
		<div>
			<Select styles={customStyles} menuColor='red' options={options} />
		</div>
	);
};

export default CollectionSelect;
