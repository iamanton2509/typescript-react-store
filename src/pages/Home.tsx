import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../hooks/hook';
import {fetchServices} from '../store/serviceSlice';
import Product from './../components/Product';
import News from './../components/News';
import Newsletter from './../components/Newsletter';
import Services from './../components/Services';
import Countdown from '../components/Countdown';
import newsList from './../helpers/newsList';
import title from './../images/title.png';

const Home = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.products.products);
    const {services, error} = useAppSelector(state => state.services);

    const [products, setProducts] = useState(items);
    const [news, setNews] = useState(newsList);

    useEffect(() => {
        dispatch(fetchServices());
    }, []);

    return (
        <section className="section">
            <div className="container">
                <section className="section-header">
                    <div className="section-header__text">
                        <h1>Bringing the sweetness of Apple to your doorstep</h1>
                        <p>Welcome to our online store of Apple, your one-stop destination for all things Apple! We offer a wide range of Apple products, including iPhones, iPads, Macs, Apple Watches, and more. Our store is committed to providing the latest Apple products at competitive prices, along with excellent customer service and fast shipping. Shop with us and experience the joy and convenience of Apple products!</p>
                        <div className="link-container">
                            <NavLink to="/products" className="link">Explore now!</NavLink>
                        </div>
                    </div>      
                    <div className="section-header__img" >
                        <img src={title} alt="home" />
                    </div>
                </section>

                <section className="section-sale">
                    <h1 className="section-sale__title"><span style={{color: '#BB2649'}}>Order now</span> and get <span style={{color: '#BB2649'}}>20%</span> off</h1>
                    <Countdown />
                    <ul className="section-sale__products">
                        {products.map((product) => {
                            if (product.sale) {
                                return <Product 
                                            key={product.id} 
                                            img={product.img} 
                                            title={product.title} 
                                            price={product.price} 
                                            id={product.id} 
                                            sale={product.sale}
                                            saleColor={product.saleColor}
                                        />
                            }
                        })}
                    </ul>
                </section>
                <section className="services">
                    <h1 className="services__title">Exploring Your Personalized Preferences and Shopping Experience</h1>
                    {!error ? 
                        <ul className="services-items"> 
                        {services.map(service => 
                            <Services 
                                key={service.id}
                                title={service.title}
                                description={service.description}
                            />
                        )}
                    </ul> : error}
                </section>
                <section className="section-news">
                    <h2 className="news-title">News & blogs</h2>
                    <p className="news-description">Our "News" block is designed to keep you informed about the latest product releases, software updates, promotions, and other important news that may be of interest to you. We believe that staying up-to-date with the latest news and trends in the world of Apple can help you make more informed decisions about the products you buy and use.</p>
                    <section className="news">
                        {news.map(item =>
                            <News 
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                img={item.img} 
                                date={item.date} 
                            />
                        )}
                    </section>
                </section>
                <Newsletter />
            </div>
        </section>
    );
}

export default Home;