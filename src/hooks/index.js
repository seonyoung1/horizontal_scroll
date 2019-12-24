import { useState, useEffect, useCallback } from 'react';

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
