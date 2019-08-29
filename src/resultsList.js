import React from 'react';
import BookResult from './bookResult';
import './resultsList.css';

function ResultsList(props) {
    return (
        <div>
            <div className='resultsList'>
            {props.titles.map(title=> <BookResult title={title}/>)}
            {props.authors.map(author=> <>)}
            </div>
        </div>
    )
}

export default ResultsList;