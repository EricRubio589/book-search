import React from 'react';
import './bookResult.css';

function BookResult(props) {
    return (
        <div className="bookResult">
            <p>{props.title}</p>
        </div>
    )
}

export default BookResult;