import React from 'react';
import BookResult from './bookResult';
import './resultsList.css';

function ResultsList(props) {
    const info = props.data.items;
    return (
        <div>
            <div className='resultsList'>
            <BookResult results={info}/>
            {console.log(props.data.items)}
            </div>
        </div>
    )
}

export default ResultsList;