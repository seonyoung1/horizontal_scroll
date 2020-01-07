import React from 'react';

const Group = ({goWorks, category}) => {
	const { web, seo, front, back, vr, design } = category;
	return (
		<div className="group">
			<button onClick={() => goWorks(web, 'web')}>go 1</button>
			<button onClick={() => goWorks(seo, 'seo')}>go 2</button>
			<button onClick={() => goWorks(front, 'front')}>go 3</button>
			<button onClick={() => goWorks(back, 'back')}>go 4</button>
			<button onClick={() => goWorks(vr, 'vr')}>go 5</button>
			<button onClick={() => goWorks(design, 'design')}>go 6</button>
		</div>
	);
};

export default Group;