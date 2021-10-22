import React from 'react';
// import { Link } from 'react-router-dom';

import './PageLinkButton.css';

function PageLinkButton({ text }) {
    const save = () => {
        alert("Success! Your preferences have been saved!")
    }

    return (
        <div className="button-wrap">
            {/* <Link to="/"> */}
                <button onClick={save} className="link-button" >
                    {text} 
                </button>
            {/* </Link> */}
        </div>
    );
};

export default PageLinkButton;
