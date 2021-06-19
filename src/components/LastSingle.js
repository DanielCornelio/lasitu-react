import React from 'react';
import '../assets/styles/LastSingle.css'
import feroz from '../assets/img/albums/feroz.jpg'

const LastSingle = () => {
    return (  
        <div className="lastSingle">
            <div className="single">
                <h1 className="glow">Last Single</h1>
                <img src={feroz} className="portada" alt="feroz"/>

            </div>
        </div>
    );
}
 
export default LastSingle;