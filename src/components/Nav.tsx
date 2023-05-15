import {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useAppSelector} from '../hooks/hook';
import open from './../images/icons/open.svg';
import close from './../images/icons/close.svg';
import heart from './../images/icons/heart.svg';
import cart from './../images/icons/cart.svg';
import user from './../images/icons/user.svg';

const Nav = () => {
    const [openButton, setOpenButton] = useState(false);
    const [store, setStore] = useState(false);
    const email = useAppSelector(state => state.user.email);

    const openNav = () => {
        setOpenButton(true);
        setStore(false);
    }

    const closeNav = () => {
        setOpenButton(false);
        setStore(false);
    }

    const togglestore = () => {
        setStore(!store);
    }
    
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <nav className={openButton ? "nav-nav open" : "nav-nav"}>
                        <div className="nav-logo">
                            <NavLink to="/" className="nav-logo"><h1 className="nav-logo__title">The Apple Hub</h1></NavLink>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/" className="nav-list__link" onClick={closeNav}>Home</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/products" className="nav-list__link" onClick={closeNav}>Products</NavLink>
                            </li>
                            <li className="nav-list__item nav-shop" onClick={togglestore}>Store
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/about" className="nav-list__link" onClick={closeNav}>About</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/cart" className="nav-list__link" onClick={closeNav}>Cart</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/wishlist" className="nav-list__link nav-list__wishlist" onClick={closeNav}>Wishlist</NavLink>
                            </li>
                        </ul>
                        <div className="nav-items">
                            <img onClick={openNav} src={open} alt="open" className="open-button" />
                            <img src={close} alt="close" className={openButton ? 'close-button' : 'close-button none'} onClick={closeNav}/>  
                            <div className="nav-items__cart">
                                <div>
                                    <Link to="/user">
                                        <img src={user} alt="user" />
                                    </Link> 
                                </div>
                                <NavLink to="/wishlist">
                                    <img src={heart} alt="wishlist" />
                                </NavLink>
                                <NavLink to="/cart">
                                    <img src={cart} alt="cart" />
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                    <div className={store ? "shop-items open" : "shop-items"}>
                        <div className="shop-items__column">
                            <h4 className="shop-items__title">Shop</h4>
                            <NavLink to="/shop/iphone" onClick={togglestore}>iPhone</NavLink>
                            <NavLink to="/shop/mac" onClick={togglestore}>Mac</NavLink>
                            <NavLink to="/shop/applewatch" onClick={togglestore}>Apple Watch</NavLink>
                            <NavLink to="/shop/airpods" onClick={togglestore}>Air Pods</NavLink> 
                        </div>
                        <div className="shop-items__column">
                            <h4 className="shop-items__title">Accessories</h4>
                            <NavLink to="/accessories/iphone" onClick={togglestore}>iPhone Accessories</NavLink>
                            <NavLink to="/accessories/mac" onClick={togglestore}>Mac Accessories</NavLink>
                            <NavLink to="/accessories/applewatch" onClick={togglestore}>Apple Watch Straps</NavLink>
                        </div>
                        <div className="shop-items__column">
                            <h4 className="shop-items__title">Quick links</h4>
                            <NavLink to="/" onClick={togglestore}>Find a store</NavLink>
                            <NavLink to="/" onClick={togglestore}>Order status</NavLink>
                            <NavLink to="/" onClick={togglestore}>Financing</NavLink>
                        </div>  
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;