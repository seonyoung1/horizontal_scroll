import React from 'react';
import Basic from './Basic';
import Thumb from './Thumb';
import Text from './Text';

const Template = ({data}) => {
	return (
		<li className={data.type} data-name={data.name}>
			{data.type === 'basic' && <Basic data={data} />}
			{data.type === 'thumb' && <Thumb data={data} />}
			{data.type === 'text' && <Text data={data} />}
		</li>
	);
};

export default Template;