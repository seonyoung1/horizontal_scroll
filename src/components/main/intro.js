import React from 'react';

const Intro = ({goWorks, category}) => {
    const {web, seo, front, back, vr, design} = category;
    return (
        <div>
            <p>introduce</p>
            <div className="group">
                <button onClick={() => goWorks(web)}>go 1</button><br />
                <button onClick={() => goWorks(seo)}>go 2</button><br />
                <button onClick={() => goWorks(front)}>go 3</button><br />
                <button onClick={() => goWorks(vr)}>go 4</button><br />
                <button onClick={() => goWorks(design)}>go 5</button><br />
                <button onClick={() => goWorks(back)}>go 6</button>
            </div>
        </div>
    );
};

export default Intro;