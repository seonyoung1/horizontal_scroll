import React from 'react';

const Text = ({data}) => {
    return (
        <>
            {data.contents.map((v, idx) =>
                <div className="card" key={idx}>
                    <p className="title">{v.title}</p>
                    <p className="desc">{v.desc}</p>
                </div>
            )}
        </>
    );
};

export default Text;