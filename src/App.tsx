import {useAppSelector} from './hooks/hook';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Nav from './components/Nav';
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

import ScrollToTop from './utils/ScrollToTop';

import './css/style.css';

interface CurrencyProduct {
    price: number;
}

const App = () => {
    const products = useAppSelector(state => state.products.products);

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
    // Call convertCurrencies() from another async function
    async function someOtherFunction() {
        const uahArray = await convertCurrencies();

        for (let i = 0; i < uahArray.length; i++) {
            myUkrainianArray.push(uahArray[i]);
        }
    } 
    someOtherFunction();

    return (
        <Router>
            <ScrollToTop />
            <Nav />
            <Routes>  
                <Route path="/" element={<Home /> } />
                <Route path="/products" element={<Products />} />
                <Route path="/:name" element={<Store myUkrainianArray={myUkrainianArray} />} />
                <Route path="/accessories/:name" element={<Accessories myUkrainianArray={myUkrainianArray} />} />
                <Route path="/accessory/:id" element={<Accessory myUkrainianArray={myUkrainianArray} />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />                     
                <Route path="/news/:id" element={<NewsPage />} />     
                <Route path="/product/:id" element={<Product myUkrainianArray={myUkrainianArray} />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/question" element={<Question />} />
                <Route path="/privacy" element={<Privacy />} />             
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;