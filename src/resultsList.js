import React from 'react';
import BookResult from './bookResult';

function ResultsList(props) {
    return (
        <div>
            {props.titles.map(title=> <BookResult title={title}/>)}
        </div>
    )
}

export default ResultsList;