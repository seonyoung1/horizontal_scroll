import React from 'react';

const Thumb = ({data}) => {
    return (
        <>
            {data.contents.map((v, idx) =>
                <div className="image" key={idx} style={{backgroundImage:`url(${v.image})`}}>
                    <img src={v.image} alt={v.title} />
                </div>
            )}
        </>
    );
};

export default Thumb;