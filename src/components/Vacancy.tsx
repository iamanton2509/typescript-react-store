interface VacancyProps {
    id: number;
    title: string;
    description: string;
}

const Vacancy = ({id, title, description}: VacancyProps) => {
    return (
        <div className="vacancy">
            <h2 className="vacancy__title">{id}. {title}</h2>
            <p className="vacancy__description">{description}</p>
        </div>
    );
}

export default Vacancy;