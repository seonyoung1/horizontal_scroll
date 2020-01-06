import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { scroller } from 'react-scroll';
import { useSelector } from 'react-redux';
import { useMobile } from '../hooks';
import Intro from '../components/main/intro';
import Template from '../components/main/Template';

const data = [
	{
		id: 1,
		type: 'basic',
		name: 'web',
		title: '1 web Lorem Ipsum is simply dummy text',
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
				title: '2 seo work',
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
				title: '3 front The Extremes of Good and Evil',
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
				title: '4 back work',
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
		title: '5 vr making it over 2000 years old',
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
				title: '6 design combined with a handful',
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

const MainContainer = () => {
	const { isMobile } = useMobile();
	const mobileAgent = (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream;
	const works = useRef();
	const [posLeft, setPosLeft] = useState(0);
	const { category } = useSelector(state => state.common);
	const { web, seo, front, back, vr, design } = useSelector(state => state.common.category);
	let winWidth = window.innerWidth;
	let gap = winWidth > 1800 ? 600 : Math.ceil(winWidth / 3); // 한칸 이동거리
	const len = data.length;
	let listWidth = works.current !== undefined ? works.current.clientWidth : gap * (len + 1);
	// const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (isMobile) {
			if (posLeft !== 0) setPosLeft(0);
		}
	}, [isMobile]);

	useEffect(() => {
		resizeWorks();
		window.addEventListener('resize', resizeWorks);
		return () => window.removeEventListener('resize', resizeWorks);
	}, [posLeft]);

	const resizeWorks = () => {
		listWidth = works.current.clientWidth;
		winWidth = window.innerWidth;
		if (posLeft > listWidth - winWidth) {
			return setPosLeft(listWidth - winWidth);
		}
	};

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

	const goWorks = useCallback((value, name) => {
		if (winWidth >= 768) {
			if (value > listWidth - winWidth) {
				return setPosLeft(listWidth - winWidth);
			}
			return setPosLeft(value);
		} else {
			const target = `works-${name}`;
			// console.log(target);
			scroller.scrollTo(target, {
				duration: 500,
				smooth: 'easeInOut',
				offset: -50,
			});
		}
	}, [listWidth, winWidth]);

	return (
		<>
			{isMobile &&
				<div className="group">
					<button onClick={() => goWorks(web, 'web')}>go 1</button>
					<button onClick={() => goWorks(seo, 'seo')}>go 2</button>
					<button onClick={() => goWorks(front, 'front')}>go 3</button>
					<button onClick={() => goWorks(back, 'back')}>go 4</button>
					<button onClick={() => goWorks(vr, 'vr')}>go 5</button>
					<button onClick={() => goWorks(design, 'design')}>go 6</button>
				</div>
			}
			<ReactScrollWheelHandler
				upHandler={!mobileAgent? prevIndex : nextIndex}
				leftHandler={!mobileAgent? prevIndex : nextIndex}
				downHandler={!mobileAgent? nextIndex : prevIndex}
				rightHandler={!mobileAgent? nextIndex : prevIndex}
				customStyle={{ transform: `translateX(-${posLeft}px)` }}
				timeout={400}
				pauseListeners={isMobile}
			>
				<ul className="work_list" ref={works}>
					<li className="intro is-active">
						<Intro goWorks={goWorks} category={category} />
					</li>
					{data.map(v => (
						<Template key={v.id} data={v} posLeft={posLeft} gap={gap} winWidth={winWidth} listWidth={listWidth} />
					))}
				</ul>
			</ReactScrollWheelHandler>
		</>
	);
};

export default MainContainer;
