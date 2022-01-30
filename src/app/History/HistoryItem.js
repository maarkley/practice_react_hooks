import React from 'react';
import WikipediaIcon from '../../assets/wikipedia.svg';
import ArticleIcon from '../../assets/article.svg';
import RedditIcon from '../../assets/reddit.svg';
import { Link } from 'react-router-dom';

const HistoryItem = (props) => {
    const date = new Date(props.item.event_date_utc)
    let slug = props.item.mission_name.replace(/\s/g, '-').toLowerCase()
    return (
        <div className="history-item">
            <div className="history-item--background-image">
                <img src={props.item.links.flickr_images[0]}/>
            </div>
            {/* <div className="history-item--number">{props.item.flight_number}.</div> */}
            <div className="history-item--date">{props.item.launch_year}</div>
            <h2 className="history-item--title">{props.item.mission_name}</h2>
            {/* <p className="history-item--description">{props.item.details ? props.item.details : 'No description'}</p> */}
            <Link className="primary-button primary-button--small" to={"/history/" + slug}>
                <div className="primary-button--text">READ MORE</div>
            </Link>
        </div>
    )
}


export default HistoryItem