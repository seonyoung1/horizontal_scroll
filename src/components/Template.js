import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import {useSelector} from 'react-redux';
import Basic from './works/Basic';
import Thumb from './works/Thumb';
import Text from './works/Text';
import Intro from './intro';
import { useMobile } from '../hooks';

const data = [
	{
		id: 1,
		type: 'basic',
		name: 'web',
		title: 'Lorem Ipsum is simply dummy text',
		desc: 'contents',
		image: 'images/image1.jpg',
	},
	{
		id: 2,
		type: 'thumb',
		name: 'seo',
		title: 'work2',
		contents: [
			{
				title: 'work',
				image: 'images/image5.jpg',
			},
			{
				title: 'work',
				image: 'images/image3.jpg',
			},
		],
	},
	{
		id: 3,
		type: 'text',
		name: 'front',
		title: 'work3',
		contents: [
			{
				title: 'The Extremes of Good and Evil',
				desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			},
			{
				title: 'Where can I get some?',
				desc:
					"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only",
			},
			{
				title: 'injected humour and the like',
				desc:
					'five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
			},
		],
	},
	{
		id: 4,
		type: 'thumb',
		name: 'back',
		title: 'work4',
		contents: [
			{
				title: 'work',
				image: 'images/image2.jpg',
			},
			{
				title: 'work',
				image: 'images/image4.jpg',
			},
		],
	},
	{
		id: 5,
		type: 'basic',
		name: 'vr',
		title: 'making it over 2000 years old',
		desc: 'contents',
		image: 'images/image3.jpg',
	},
	{
		id: 6,
		type: 'text',
		name: 'design',
		title: 'work3',
		contents: [
			{
				title: 'combined with a handful',
				desc: 'more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				title: 'in their exact original form',
				desc: 'Where does it come from?',
			},
			{
				title: 'undoubtable source',
				desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
			},
		],
	},
];

const Template = () => {
	const { isMobile } = useMobile();
	const works = useRef();
	const [posLeft, setPosLeft] = useState(0);
	const { category } = useSelector(state => state.common);
	const gap = 600; // 한칸 이동거리
	const len = data.length;
	let winWidth = window.innerWidth;
	let listWidth = works.current !== undefined ? works.current.clientWidth : gap * (len + 1);
	// const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// console.log(list.current.clientWidth)
		// console.log(`current: ${posLeft}, last: ${listWidth - winWidth}`)
		if (isMobile) {
			if (posLeft !== 0) setPosLeft(0);
		}
	}, [posLeft, isMobile]);

	useEffect(() => {
		resizeWorks();
		window.addEventListener('resize', resizeWorks);
		return () => window.removeEventListener('resize', resizeWorks);
	}, []);

	const resizeWorks = useCallback(() => {
		listWidth = works.current.clientWidth;
		winWidth = window.innerWidth;
		// console.log(listWidth, winWidth);
	}, [listWidth, winWidth]);

	const prevIndex = useCallback(() => {
		if (posLeft < gap) {
			return setPosLeft(0);
		}
		return setPosLeft(posLeft - gap);
	}, [posLeft]);

	const nextIndex = useCallback(() => {
		if (posLeft > listWidth - winWidth - gap) {
			return setPosLeft(listWidth - winWidth);
		}
		return setPosLeft(posLeft + gap);
	}, [posLeft, listWidth, winWidth]);

	const goWorks = (value) => {
		if( value > listWidth - winWidth ){
			return setPosLeft(listWidth - winWidth);
		}
		return setPosLeft(value);
	};

	return (
		<ReactScrollWheelHandler
			upHandler={prevIndex}
			leftHandler={prevIndex}
			downHandler={nextIndex}
			rightHandler={nextIndex}
			customStyle={{ transform: `translateX(-${posLeft}px)` }}
			timeout={400}
			pauseListeners={isMobile}
		>
			<ul className="work_list" ref={works}>
				<li className="intro">
					<Intro goWorks={goWorks} category={category} />
				</li>
				{data.map(v => (
					<li key={v.id} className={v.type} data-name={v.name}>
						{v.type === 'basic' && <Basic data={v} />}
						{v.type === 'thumb' && <Thumb data={v} />}
						{v.type === 'text' && <Text data={v} />}
					</li>
				))}
			</ul>
		</ReactScrollWheelHandler>
	);
};

export default Template;
