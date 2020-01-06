import React, {useState, useEffect} from 'react';
import { Element } from 'react-scroll';
import Basic from './Basic';
import Thumb from './Thumb';
import Text from './Text';
import { useMobile, usePosCategory } from '../../hooks';

const Template = ({data, posLeft, gap, winWidth, listWidth}) => {
	const { isMobile } = useMobile();
	const { content } = usePosCategory(data.name);
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		if( isMobile ) return;
		boxActive();
	}, [posLeft]);
	const boxActive = () => {
		// console.log(`posLeft ${posLeft} listWidth ${listWidth} winWidth ${winWidth}`);
		if( posLeft > content.current.offsetLeft - (gap * 2) ){
			setIsActive(true);
		}else if( posLeft >= listWidth - winWidth ){
			setIsActive(true);
		}else{
			setIsActive(false);
		}
	};

	return (
		<li ref={content} className={`${data.type} ${isActive?"is-active":""}`}>
			<Element name={`works-${data.name}`}>
				{data.type === 'basic' && <Basic data={data} />}
				{data.type === 'thumb' && <Thumb data={data} />}
				{data.type === 'text' && <Text data={data} />}
			</Element>
		</li>
	);
};

export default Template;