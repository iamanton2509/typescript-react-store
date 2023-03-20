import {useState, useEffect} from 'react';

import MySelect from './../components/UI/select/MySelect';
import Vacancy from './../components/Vacancy';
import VacancyService from './../API/VacancyService';
import Loader from './../components/UI/loader/MyLoader';

import {useFetching} from './../hooks/useFetching';
import {getPageCount, getPagesArray} from './../utils/pages';

interface IVacancies {
    id: number;
    title: string;
    body: string;
}

const Career = () => {
    const [vacancies, setVacancies] = useState<IVacancies[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);

    const [formValid, setFormValid] = useState(true);
    const [error, setError] = useState(false);
    const [profession, setProfession] = useState('');
    const [area, setArea] = useState('');
    const [contract, setContract] = useState('');

    let pagesArray = getPagesArray(totalPages);

    const [fetchVacancies, isVacanciesLoading, vacancyError] = useFetching(async (limit, page) => {
        const response = await VacancyService.getAll(limit, page);
        setVacancies(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });
      
    const changePage = async (page: number) => {
        setPage(page);
        await fetchVacancies(limit, page);
    };

    useEffect(() => {
        if (profession && area && contract) {
            setFormValid(true);
            setError(false);
        } else {
            setFormValid(false);
            setError(true);
        }
    }, [profession, area, contract]);

    return (
        <section className="section">
            <div className="container">
                <h1 className="section-title">Use your criteria to search all our job offer</h1>
                <div className="section-section">

                    <div className="section-search">
                        <MySelect 
                            value={profession}
                            onChange={(job) => setProfession(job)}
                            options={[
                                {value: 'Communication & events', name: 'Communication & events'},
                                {value: 'Facility management', name: 'Facility management'},
                                {value: 'General management', name: 'General management'},
                                {value: 'Digital', name: 'Digital'},
                                {value: 'Finance', name: 'Finance'},
                                {value: 'Information technology/Information system', name: 'Information technology'},
                                {value: 'Manufacturing', name: 'Manufacturing'},
                                {value: 'Merchandising', name: 'Merchandising'},
                                {value: 'Purchasing', name: 'Purchasing'},
                                {value: 'Sustainable development', name: 'Sustainable development'},
                                {value: 'Hospitality and food & beverage', name: 'Hospitality and food'},
                                {value: 'Research & innovation', name: 'Research & innovation'}
                            ]} defaultValue="Profession" />
                        <MySelect 
                            value={area} 
                            onChange={(geo) => setArea(geo)} 
                            options={[
                                {title: 'America', name: 'America'},
                                {title: 'Asia Pacific', name: 'Asia Pacific'},
                                {title: 'Europe', name: 'Europe'},
                                {title: 'Japan', name: 'Japan'},
                                {title: 'Middle East / Africa', name: 'Middle East / Africa'}
                            ]} defaultValue="Geographical area" />
                        <MySelect 
                            value={contract}
                            onChange={(type) => setContract(type)}
                            options={[
                                {title: 'Permanent job', name: 'Permanent job'},
                                {title: 'Temporary job', name: 'Temporary job'},
                                {title: 'Internship', name: 'Internship'},
                                {title: 'Vie', name: 'Vie'},
                                {title: 'Appreniceship', name: 'Appreniceship'},
                                {title: 'Graduate program', name: 'Graduate program'}
                            ]}
                        defaultValue="Contract type" />
                        <button 
                            disabled={!formValid} 
                            onClick={() => fetchVacancies(limit, page)} 
                            type="submit" 
                            className="confirm-button"
                        >
                        Confirm
                        <span className={error ? "tooltiptext visible" : "tooltiptext"}>Fill all the fields</span>
                        </button>
                    </div>
                    <div className="section-result">
                        {vacancyError && <h1>{vacancyError}</h1>}
                        {isVacanciesLoading 
                            ? <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}><Loader /></div>
                            : vacancies.map((vacancy) => {
                                return <Vacancy key={vacancy.id} id={vacancy.id} title={vacancy.title} description={vacancy.body} />
                            })
                        }
                        <div className="page__wrapper">
                            {pagesArray.map((p) =>
                                <span onClick={() => changePage(p)} key={p} className={page === p ? 'page__current page' : 'page'}>{p}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Career;