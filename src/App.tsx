import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/hook';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/Nav';
import User from './pages/User';
import Career from './pages/Career';
import Store from './pages/Store';
import Accessories from './pages/Accessories';
import Accessory from './pages/Accessory';
import NewsPage from './pages/NewsPage';
import Contacts from './pages/Contacts';
import Question from './pages/Question';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Footer from './components/Footer';
import {userActions} from './store/userSlice';
import ScrollToTop from './utils/ScrollToTop';
import './css/style.css';

interface CurrencyProduct {
    price: number;
}

const App = () => {
    const products = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = JSON.parse(String(localStorage.getItem('user')));
        if (user) {
            dispatch(userActions.setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                firstname: user.firstname,
                lastname: user.lastname
            }));
        }
    }, []);

    let myUkrainianArray:number[] = [];
    async function convertCurrencies() {
        const uahArray = await Promise.all(products.map(currencyConverter));
        return uahArray;
    }
    async function currencyConverter(index: CurrencyProduct) {
        const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        const data = await response.json();
        const dollar = data[1]['sale'];
        return index.price * dollar;
    } 
    
    async function someOtherFunction() {
        const uahArray = await convertCurrencies();

        for (let i = 0; i < uahArray.length; i++) {
            myUkrainianArray.push(uahArray[i]);
        }
    } 
    someOtherFunction();

    if (localStorage.getItem('user')){
        return (
            <Router>
                <ScrollToTop />
                <Nav />
                    <Routes>  
                        <Route path="/" element={<Home /> } />
                        <Route path="/products" element={<Products />} />
                        <Route path="/shop/:name" element={<Store myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/accessories/:name" element={<Accessories myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/accessory/:id" element={<Accessory myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />                     
                        <Route path="/news/:id" element={<NewsPage />} />     
                        <Route path="/product/:id" element={<Product myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/question" element={<Question />} />
                        <Route path="/privacy" element={<Privacy />} /> 
                        <Route path="*" element={<Navigate to="/" />} />           
                    </Routes>
                <Footer />
            </Router>
        );
    } else {
        return (
            <Router>
                <ScrollToTop />
                <Nav />
                    <Routes>  
                        <Route path="/" element={<Home /> } />
                        <Route path="/products" element={<Products />} />
                        <Route path="/shop/:name" element={<Store myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/accessories/:name" element={<Accessories myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/accessory/:id" element={<Accessory myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />                     
                        <Route path="/news/:id" element={<NewsPage />} />     
                        <Route path="/product/:id" element={<Product myUkrainianArray={myUkrainianArray} />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/question" element={<Question />} />
                        <Route path="/privacy" element={<Privacy />} /> 
                        <Route path="*" element={<Navigate to="/register" />} />           
                    </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;