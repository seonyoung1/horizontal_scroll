import React from 'react';
import { usePosCategory } from '../../hooks';

const Text = ({data}) => {
    const {content} = usePosCategory(data.name);
    return (
        <div ref={content}>
            {data.contents.map((v, idx) =>
                <div className="card" key={idx}>
                    <p className="title">{v.title}</p>
                    <p className="desc">{v.desc}</p>
                </div>
            )}
        </div>
    );
};

export default Text;