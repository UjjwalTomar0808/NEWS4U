import React from 'react';
import './NewsItems.css';

const Items = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    const DEFAULT_IMAGE_URL = "...";
    imageUrl = imageUrl || DEFAULT_IMAGE_URL;

    return (
        <div className="news-item">
            <div className="badge">{source}</div>
            <img src={imageUrl} alt="News" />
            <div className="content">
                <h5>{title}</h5>
                <p>{description}</p>
                <p className="author">By {!author ? "Unknown" : author} on {new Date(date).toLocaleDateString()}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="read-more">Read More</a>
            </div>
        </div>
    );
}

export default Items;



