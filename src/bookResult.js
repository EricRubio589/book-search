import React from 'react';
import './bookResult.css';

function BookResult(props) {
    const titles = props.results.map(result => result.volumeInfo.title);
    const authors = props.results.map(result => result.volumeInfo.authors);
    const images = props.results.map(result => result.volumeInfo.imageLinks.thumbnail);
    const info = props.results.map(result => result.volumeInfo.description);

    const togheter = titles.map((title, index) => {
        const author = authors[index];
        const image = images[index];
        const textInfo = info[index];
        return (
            <div className="bookResult">
                <div className="imgContainer">
                <img src={image} alt='Book cover'/>
                </div>
                <div className="bookResultInfo">
                    <h2>Title: {title}</h2>
                    <h2>Author: {author}</h2>
                    <p>{textInfo}</p>
                </div>
                {console.log(props)}
            </div>
        )
    })

    return (
        <div>
            {togheter}
        </div>
    )
}

BookResult.defaultProps = {
 results: [],
 togheter: []
}

export default BookResult;