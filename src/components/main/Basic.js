import React from 'react';

const Basic = ({ data }) => {
	return (
		<>
			<div className="title">{data.title}</div>
			<div className="image" style={{ backgroundImage: `url(${data.image})` }}>
				<img src={data.image} alt={data.title} />
			</div>
		</>
	);
};


export default Basic;
