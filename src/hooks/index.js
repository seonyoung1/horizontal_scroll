import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { POS_CATEGORY } from '../store/common';

export const usePosCategory = name => {
	const content = useRef(null);
	const dispatch = useDispatch();
	// console.log(name);

	useEffect(() => {
		handle();
		window.addEventListener('resize', handle);
		return () => window.addEventListener('resize', handle);
	}, []);

	const handle = () => {
		// console.log(content.current.offsetLeft);
		dispatch({
			type: POS_CATEGORY,
			name,
			value: content.current.offsetLeft,
		});
	};

	return { content };
};

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		isMobileChk();
		window.addEventListener('resize', isMobileChk);
		return () => window.removeEventListener('resize', isMobileChk);
	}, []);
	const isMobileChk = useCallback(() => {
		setIsMobile(window.innerWidth <= 768);
	}, []);
	return { isMobile };
};
