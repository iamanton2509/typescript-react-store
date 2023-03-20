import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {sortProducts} from './../store/storeSlice';

import Title from './../components/Title';
import CartHeader from './../components/CartHeader';
import CartProducts from './../components/CartProducts';
import CartFooter from './../components/CartFooter';
import ButtonOrder from './../components/ButtonOrder';
import MyModal from './../components/UI/modal/MyModal';
import MyInput from './../components/UI/input/MyInput';
import MySelect from './../components/UI/select/MySelect';

import mastercard from './../images/icons/payment-icons/Mastercard.svg';
import visa from './../images/icons/payment-icons/Visa.svg';
import applepay from './../images/icons/payment-icons/ApplePay.svg';
import googlepay from './../images/icons/payment-icons/GooglePay.svg';
import paypal from './../images/icons/payment-icons/PayPal.svg';
import amazon from './../images/icons/payment-icons/AmazonPay.svg';

const Cart = () => {  
    const items = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    const [selectedSort, setSelectedSort] = useState('');

    const sortProductsBy = (sort: string) => {
        setSelectedSort(sort);
        dispatch(sortProducts(sort));
    }

    const [modal, setModal] = useState(false);

    /* Form validation */
    const [formValid, setFormValid] = useState(false);
    const [inputs, setInputs] = useState({firstname: '', lastname: '', email: '', phone: ''});

    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [firstNameError, setFirstNameError] = useState("This field can't be empty");
    const [lastNameError, setLastNameError] = useState("This field can't be empty");
    const [emailError, setEmailError] = useState("This field can't be empty");
    const [phoneError, setPhoneError] = useState("This field can't be empty");

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'name':
                setFirstNameDirty(true);
                break;
            case 'phone':
                setLastNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'text':
                setPhoneDirty(true);
                break;
        }
    }

    const firstNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, firstname: target.value});
        if (Number.isInteger(Number(target.value))) {
            setFirstNameError("Your firstname must be a string");
        } else if (target.value.length < 2) {
            setFirstNameError("Your firstname must be longer than 1 letter");
        } else {
            setFirstNameError("");
        }
    }

    const lastNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, lastname: target.value});
        if (Number.isInteger(Number(target.value))) {
            setLastNameError("Your lastname must be a string");
        } else if (target.value.length < 2) {
            setLastNameError("Your lastname must be longer than 1 letter")
        }
    }

    const emailHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, email: target.value});
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(String(target.value).toLowerCase())) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
        }
    }

    const phoneHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, phone: target.value});
        const re = /([0-9]+(-[0-9]+)+)/;
        if (!re.test(String(target.value).toLowerCase())) {
            setPhoneError("Invalid phone number");
        } else {
            setPhoneError("");
        }
    }

    useEffect(() => {
        if (firstNameError || lastNameError || emailError || phoneError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    });

    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].cart) {
            counter += 1;
        }
    }

    return (
        <>
            <section className="section-cart">
                <header className="section-cart__header">
                    <div className="cart-container">
                        {counter !== 0 && <Title />}                    
                    </div>
                </header>
                <div className="cart-container">
                    {counter !== 0 && 
                    <MySelect value={selectedSort} onChange={sortProductsBy} options={[
                        {value: 'price-ascending', name: 'Sort by price - ascending'},
                        {value: 'price-descending', name: 'Sort by price - descending'},
                        {value: 'title', name: 'Sort by name'}
                    ]} defaultValue="Sort by" /> }
                </div>
                <div className="section-cart__body">
                    <div className="cart-container">
                        {counter !== 0 &&
                            <CartHeader />
                        }
                            {counter !== 0 ? 
                            items.map((product) => {
                                if (product.cart) {
                                    return <CartProducts
                                                key={product.id}   
                                                id={product.id} 
                                                img={product.img}
                                                title={product.title}
                                                count={product.count}
                                                totalPrice={product.totalPrice}
                                            />
                                }
                            }) : <h1 style={{color: 'rgb(187, 38, 73)', fontSize: 45, textAlign: 'center', margin: '25px 0', fontWeight: 600}}>Your cart is empty</h1>}

                        {counter !== 0 && <CartFooter />}

                        {counter !== 0 &&
                        <ButtonOrder onClick={() => setModal(true)} />
                        }

                        <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h3 className="modal-content__title">Fill the form to make an order</h3>
                                <div className="modal-content__input">
                                    {(firstNameDirty && firstNameError) && <div className="error">{firstNameError}</div>}
                                    <MyInput
                                        value={inputs.firstname}
                                        onChange={(e) => firstNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="firstname" 
                                        placeholder="Your firstname"  
                                    />
                                    {(lastNameDirty && lastNameError) && <div className="error">{lastNameError}</div>}
                                    <MyInput 
                                        value={inputs.lastname}
                                        onChange={(e) => lastNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="lastname" 
                                        placeholder="Your lastname" 
                                    />
                                    {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                                    <MyInput 
                                        value={inputs.email}
                                        onChange={(e) => emailHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text" 
                                        name="email"
                                        placeholder="Your email" 
                                    />
                                    {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>}
                                    <MyInput
                                        value={inputs.phone} 
                                        onChange={(e) => phoneHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="phone" 
                                        placeholder="Your number" 
                                    />
                                </div>
                                <h3 className="modal-content__title">Pick payment</h3>
                                <div className="modal-content__payment">
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={mastercard} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={visa} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={applepay} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={googlepay} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={paypal} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={amazon} />
                                    </button>
                                </div>
                            </div>
                        </MyModal>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;