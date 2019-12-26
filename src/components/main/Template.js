import React from 'react';
import { Element } from 'react-scroll';
import Basic from './Basic';
import Thumb from './Thumb';
import Text from './Text';
import { usePosCategory } from '../../hooks';

const Template = ({data}) => {
	const { content } = usePosCategory(data.name);
	return (
		<li ref={content} className={data.type}>
			<Element name={`works-${data.name}`}>
				{data.type === 'basic' && <Basic data={data} />}
				{data.type === 'thumb' && <Thumb data={data} />}
				{data.type === 'text' && <Text data={data} />}
			</Element>
		</li>
	);
};

export default Template;