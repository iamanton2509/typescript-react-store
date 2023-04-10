import apple from './../images/icons/apple.svg';

interface ServicesProps {
    title: string;
    description: string;
}

const Services = ({title, description}: ServicesProps) => {
    return (
        <li className="services-item">
            <img src={apple} alt={title} />
            <h4 className="services-item__title">{title}</h4>
            <p className="services-item__text">{description}</p>
        </li>
    );
}

export default Services;