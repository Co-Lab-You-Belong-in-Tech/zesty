import React from 'react';
import swal from 'sweetalert'

import './SaveButton.css';

function SaveButton({ text }) {
    const save = () => {
        swal("Success!", "Your Preferences have been saved!", "success")
        // console.log("things happen")
    }

    return (
        <div className="button-wrap">
            <button onClick={save} className="link-button" >
                {text} 
            </button>
        </div>
    );
};

export default SaveButton;
