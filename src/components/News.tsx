import {NavLink} from 'react-router-dom';

interface NewsProps {
    title: string;
    img: string;
    date: string;
    id: number;
}

const News = ({title, img, date, id}: NewsProps) => {
    return (
        <div className="news-item">
            <img src={img} alt={title} />
            <h3 className="news-item__title">{title}</h3> 
            <div className="news-item__calendar">
                <img src='./../images/icons/calendar.svg' alt="calendar" />
                <p className="news-item__date">{date}</p>
            </div> 
            <NavLink to={`/news/${id}`} className="news-item__link" style={{textDecoration: 'underline'}}>Click for details</NavLink>   
        </div>
    );
}

export default News;