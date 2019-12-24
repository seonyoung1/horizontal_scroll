import React from 'react';

const Intro = ({goWorks, category}) => {
    const {web, seo, front, back, vr, design} = category;
    return (
        <div>
            introduce
            <div className="group">
                <button onClick={() => goWorks(web)}>go web</button><br />
                <button onClick={() => goWorks(seo)}>go seo</button><br />
                <button onClick={() => goWorks(front)}>go front-end</button><br />
                <button onClick={() => goWorks(vr)}>go vr</button><br />
                <button onClick={() => goWorks(design)}>go design</button><br />
                <button onClick={() => goWorks(back)}>go back-end</button>
            </div>
        </div>
    );
};

export default Intro;