import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import MyModal from './../components/UI/modal/MyModal';
import MyInput from './../components/UI/input/MyInput';

import open from './../images/icons/open.svg';
import close from './../images/icons/close.svg';
import heart from './../images/icons/heart.svg';
import cart from './../images/icons/cart.svg';
import user from './../images/icons/user.svg';

import google from './../images/signup/google.png';
import apple from './../images/signup/apple.png';
import facebook from './../images/signup/facebook.png';
import twitter from './../images/signup/twitter.png';

const Nav = () => {
    const [openButton, setOpenButton] = useState(false);
    const [store, setStore] = useState(false);
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [loginInputs, setLoginInputs] = useState({email: '', password: ''});
    const [signupInputs, setSignupInputs] = useState({firstname: '', lastname: '', email: '', phone: '', password: ''});

    const [loginEmailDirty, setLoginEmailDirty] = useState(false);
    const [loginPasswordDirty, setLoginPasswordDirty] = useState(false);
    const [signupFirstnameDirty, setSignupFirstnameDirty] = useState(false);
    const [signupLastnameDirty, setSignupLastnameDirty] = useState(false);
    const [signupEmailDirty, setSignupEmailDirty] = useState(false);
    const [signupPhoneDirty, setSignupPhoneDirty] = useState(false);
    const [signupPasswordDirty, setSignupPasswordDirty] = useState(false);

    const [loginEmailError, setLoginEmailError] = useState("This field can't be empty");
    const [loginPasswordError, setLoginPasswordError] = useState("This field can't be empty");
    const [signupFirstnameError, setSignupFirstnameError] = useState("This field can't be empty");
    const [signupLastnameError, setSignupLastnameError] = useState("This field can't be empty");
    const [signupEmailError, setSignupEmailError] = useState("This field can't be empty");
    const [signupPhoneError, setSignupPhoneError] = useState("This field can't be empty");
    const [signupPasswordError, setSignupPasswordError] = useState("This field can't be empty");

    const [formValidLogin, setFormValidLogin] = useState(false);
    const [formValidSignup, setFormValidSignup] = useState(false);

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

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
        switch (e.target.name) {
            case "loginEmail":
                setLoginEmailDirty(true);
                break;
            case "loginPassword":
                setLoginPasswordDirty(true);
                break;
            case "signupFirstname":
                setSignupFirstnameDirty(true);
                break;
            case "signupLastname":
                setSignupLastnameDirty(true);
                break;
            case "signupEmail":
                setSignupEmailDirty(true);
                break;
            case "signupPhone":
                setSignupPhoneDirty(true);
                break;
            case "signupPassword":
                setSignupPasswordDirty(true);
                break;
        }
    }

    const emailLoginHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginInputs({...loginInputs, email: e.target.value});
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setLoginEmailError('Invalid email');
        } else {
            setLoginEmailError('');
        }
    }

    const passwordLoginHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginInputs({...loginInputs, password: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setLoginPasswordError('The password cannot consist only of digits');
        } else if (e.target.value.length < 8) {
            setLoginPasswordError('The password must be at least 8 characters');
        } else {
            setLoginPasswordError('');
        }
    }

    const firstnameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupInputs({...signupInputs, firstname: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setSignupFirstnameError('Invald value');
        } else if (e.target.value.length < 2) {
            setSignupFirstnameError('Your firstname must be longer')
        } else {
            setSignupFirstnameError('');
        }
    }

    const lastnameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupInputs({...signupInputs, lastname: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setSignupLastnameError('Your lastname must not have digits');
        } else if (e.target.value.length < 2) {
            setSignupLastnameError('Your lastname must be longer');
        } else {
            setSignupLastnameError('');
        }
    }

    const emailHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupInputs({...signupInputs, email: e.target.value});
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setSignupEmailError('Invalid email');
        } else {
            setSignupEmailError('');
        }
    }

    const phoneHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupInputs({...signupInputs, phone: e.target.value});
        const re = /([0-9]+(-[0-9]+)+)/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setSignupPhoneError('Invalid phone number');
        } else {
            setSignupPhoneError('');
        }
    }

    const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignupInputs({...signupInputs, password: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setSignupPasswordError('The password cannot consist only of digits');
        } else if (e.target.value.length < 8) {
            setSignupPasswordError('The password must be at least 8 characters');
        } else {
            setSignupPasswordError('');
        }
    }

    useEffect(() => {
        if (signupFirstnameError || signupLastnameError || signupEmailError || signupPhoneError || signupPasswordError) {
            setFormValidSignup(false);
        } else {
            setFormValidSignup(true);
        }
    }, [signupFirstnameError, signupLastnameError, signupEmailError, signupPhoneError, signupPasswordError]);

    useEffect(() => {
        if (loginEmailError || loginPasswordError) {
            setFormValidLogin(false);
        } else {
            setFormValidLogin(true);
        }
    }, [loginEmailError, loginPasswordError]);

    const confirmSignup = () => {
        setModal(false);
        setSignupInputs({firstname: '', lastname: '', email: '', phone: '', password: ''});
    }

    const confirmLogin = () => {
        setModal(false);
        setLoginInputs({email: '', password: ''});
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
                                <div onClick={() => setModal(true)}>
                                    <img src={user} alt="user" />
                                </div>
                                <NavLink to="/wishlist">
                                    <img src={heart} alt="wishlist" />
                                </NavLink>
                                <NavLink to="/cart">
                                    <img src={cart} alt="cart" />
                                    {/* <p className="nav-items__cart-title">{total}</p> */}
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
            <MyModal visible={modal} setVisible={setModal}>
                <section className="section-user">
                    <div className="modal-user">
                        <span 
                            onClick={() => setLogin(false)} 
                            className={login ? 'modal-user__header' : 'modal-user__header active'}
                        >
                            Sign up
                        </span>
                        <span 
                            onClick={() => setLogin(true)} 
                            className={login ? 'modal-user__header active' : 'modal-user__header'}
                        >
                            Log in
                        </span>
                    </div>
                    <div className={login ? 'none': ''}>
                        {(signupFirstnameDirty && signupFirstnameError) && <h5>{signupFirstnameError}</h5>}
                        <MyInput
                            value={signupInputs.firstname}
                            onChange={firstnameHandler}
                            onBlur={e => blurHandler(e)}
                            name="signupFirstname" 
                            type="text" 
                            placeholder="Firstname" 
                        />
                        {(signupLastnameDirty && signupLastnameError) && <h5>{signupLastnameError}</h5>}
                        <MyInput
                            value={signupInputs.lastname}
                            onChange={lastnameHandler} 
                            onBlur={e => blurHandler(e)}
                            name="signupLastname" 
                            type="text" 
                            placeholder="Lastname" 
                        />
                        {(signupEmailDirty && signupEmailError) && <h5>{signupEmailError}</h5>}
                        <MyInput
                            value={signupInputs.email} 
                            onChange={emailHandler}
                            onBlur={e => blurHandler(e)}
                            name="signupEmail"
                            type="text" 
                            placeholder="Email" 
                        />
                        {(signupPhoneDirty && signupPhoneError) && <h5>{signupPhoneError}</h5>}
                        <MyInput 
                            value={signupInputs.phone}
                            onChange={phoneHandler}
                            onBlur={e => blurHandler(e)}
                            name="signupPhone"
                            type="text" 
                            placeholder="Phone" 
                        />
                        {(signupPasswordDirty && signupPasswordError) && <h5>{signupPasswordError}</h5>}
                        <MyInput
                            value={signupInputs.password}
                            onChange={passwordHandler}
                            onBlur={e => blurHandler(e)}
                            name="signupPassword" 
                            type="password" 
                            placeholder="Password" 
                        />
                        <button 
                            disabled={!formValidSignup} 
                            onClick={confirmSignup} 
                            className="login-button"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className={login ? '' : 'none'}>
                        {(loginEmailDirty && loginEmailError) && <h5>{loginEmailError}</h5>}
                        <MyInput
                            value={loginInputs.email} 
                            onChange={emailLoginHandler}
                            onBlur={e => blurHandler(e)}
                            name="loginEmail"
                            type="text"
                            placeholder="Email"
                        />
                        {(loginPasswordDirty && loginPasswordError) && <h5>{loginPasswordError}</h5>}
                        <MyInput
                            value={loginInputs.password} 
                            onChange={passwordLoginHandler}
                            onBlur={e => blurHandler(e)}
                            name="loginPassword"
                            type="password"
                            placeholder="Password"
                        />
                        <button 
                            disabled={!formValidLogin} 
                            onClick={confirmLogin} 
                            className="login-button"
                        >
                            Log In
                        </button>
                    </div>
                    <section className="section-buttons">
                        <button className="sign-button">
                            <img src={google} alt="Sign up with Google" />
                        </button>
                        <button className="sign-button">
                            <img src={apple} alt="Sign up with Apple" />
                        </button>
                        <button className="sign-button">
                            <img src={facebook} alt="Sign up with Facebook" />
                        </button>
                        <button className="sign-button">
                            <img src={twitter} alt="Sign up with Twitter" />
                        </button>
                    </section>
                </section>
            </MyModal>
        </>
    );
}

export default Nav;