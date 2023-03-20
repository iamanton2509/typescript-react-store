interface ServicesProps {
    img: string;
    title: string;
    description: string;
}

const Services = ({img, title, description}: ServicesProps) => {
    return (
        <li className="services-item">
            <img src={img} alt={title} />
            <h4 className="services-item__title">{title}</h4>
            <p className="services-item__text">{description}</p>
        </li>
    );
}

export default Services;