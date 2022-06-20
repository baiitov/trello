import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <>
           <div className="loader"></div>
        <div className="row">
          <div className="what">
            <p>Welcome to Trello</p>
            <p className="oh-yes">– Please wait User –</p>
          </div>
        </div>
        <div className="loader r"></div>
        </>
     
        
    );
};

export default Loading;