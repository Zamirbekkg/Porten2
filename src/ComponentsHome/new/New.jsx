import React from 'react';
import './new.scss'
import Card from '../Card/Card';

const New = () => {
    
    const posts = new Array(8).fill(null);

    return (
        <div className='New'>
            <h1>новые поступления</h1>
            <div className="line"></div>
            <div className="grup">
                {posts.map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
}

export default New;
