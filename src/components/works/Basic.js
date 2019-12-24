import React from 'react';
import { usePosCategory } from '../../hooks';

const Basic = ({data}) => {
    const {content} = usePosCategory(data.name);
    return (
        <div ref={content}>
            <div className="title">
                {data.title}
            </div>
            <div className="image" style={{backgroundImage:`url(${data.image})`}}>
                <img src={data.image} alt={data.title} />
            </div>
        </div>
    );
};

export default Basic;