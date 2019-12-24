import React from 'react';
import { usePosCategory } from '../../hooks';

const Thumb = ({data}) => {
    const {content} = usePosCategory(data.name);
    return (
        <div ref={content}>
            {data.contents.map((v, idx) =>
                <div className="image" key={idx} style={{backgroundImage:`url(${v.image})`}}>
                    <img src={v.image} alt={v.title} />
                </div>
            )}
        </div>
    );
};

export default Thumb;