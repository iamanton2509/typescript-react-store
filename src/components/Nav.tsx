import {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    
    const [openButton, setOpenButton] = useState(false);
    const [store, setStore] = useState(false);

    const openNav = () => {
        setOpenButton(true);
    }

    const closeNav = () => {
        setOpenButton(false);
    }

    const togglestore = () => {
        setStore(!store);
    }

    return (
        <nav className="nav">
            <div className="nav-container">

                <nav className={openButton ? "nav-nav open" : "nav-nav"}>
                    <div className="nav-logo">
                        <h1 className="nav-logo__title">The Apple Hub</h1>
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
                    </ul>
                    <div className="nav-items">
                        <img onClick={openNav} src='./../../images/icons/open.svg' alt="open" className="open-button" />
                        <img src='./../../images/icons/close.svg' alt="close" className={openButton ? 'close-button' : 'close-button none'} onClick={closeNav}/>  
                        <div className="nav-items__cart">
                            <NavLink to="/wishlist">
                                <img src='./../../images/icons/heart.svg' alt="wishlist" />
                            </NavLink>
                            <NavLink to="/cart">
                                <img src='./../../images/icons/cart.svg' alt="cart" />
                                {/* <p className="nav-items__cart-title">{total}</p> */}
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div className={store ? "shop-items open" : "shop-items"}>
                    <div className="shop-items__column">
                        <h4 className="shop-items__title">Shop</h4>
                        <NavLink to="/iphone" onClick={togglestore}>iPhone</NavLink>
                        <NavLink to="/mac" onClick={togglestore}>Mac</NavLink>
                        <NavLink to="/applewatch" onClick={togglestore}>Apple Watch</NavLink>
                        <NavLink to="/airpods" onClick={togglestore}>Air Pods</NavLink> 
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
    );
}

export default Nav;