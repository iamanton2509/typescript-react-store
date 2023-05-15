import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {addProductToCart} from './../store/storeSlice';
import MyModal from './../components/UI/modal/MyModal';
import MyInput from './../components/UI/input/MyInput';
import unitedstates from './../images/icons/unitedstates.svg';
import ukraine from './../images/icons/ukraine.svg';

interface CurrencyTypes {
    myUkrainianArray: number[];
}

const Product = ({myUkrainianArray}: CurrencyTypes) => {
    const allProducts = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    let {id} = useParams();
    const product = allProducts[Number(id)];

    const [modal, setModal] = useState(false);

    const textColor = {
        color: product.color
    };

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

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
        switch(e.target.name) {
            case "firstname":
                setFirstNameDirty(true);
                break;
            case "lastname":
                setLastNameDirty(true);
                break;
            case "email":
                setEmailDirty(true);
                break;
            case "phone":
                setPhoneDirty(true);
                break;
        }
    }
    
    const firstNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, firstname: target.value});
        if (Number.isInteger(Number(target.value))) {
            setFirstNameError("Invalid value");
        } else if (target.value.length < 2) {
            setFirstNameError("Too short firstname");
        } else {
            setFirstNameError("");
        }
    }

    const lastNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, lastname: target.value});
        if (Number.isInteger(Number(target.value))) {
            setLastNameError("Invalid value");
        } else if (target.value.length < 2) {
            setLastNameError("Too short lastname");
        } else {
            setLastNameError("");
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
        console.log(emailError);
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

    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section__container">
                    <div className="product-section__img">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="product-section__description">
                        <h2 className="product-section__title">{product.title}</h2>
                        <h3 className="product-section__price">
                            <img src={unitedstates} alt="usd" /> {product.price} $
                        </h3>
                        <h3 className="product-section__price">
                            <img src={ukraine} alt="uah" /> {myUkrainianArray[product.id]} UAH
                        </h3>
                        <p style={textColor} className="product-section__details">{product.description}</p>
                        <div className="product-section__button">
                            <button onClick={() => dispatch(addProductToCart(product.id))} className="add-to-cart-button">Add to cart</button>
                            <button onClick={() => setModal(true)} className="buy-button">Buy</button>
                        </div>
                        <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h3 className="modal-content__title">Fill the form to make an order</h3>
                                <div className="modal-content__input">
                                    {(firstNameDirty && firstNameError) && <div className="error">{firstNameError}</div>}
                                    <MyInput 
                                        type="text" 
                                        value={inputs.firstname}
                                        onChange={(e) => firstNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        name="firstname"
                                        placeholder="Your firstname"
                                    />
                                    {(lastNameDirty && lastNameError) && <div className="error">{lastNameError}</div>}
                                    <MyInput 
                                        type="text" 
                                        value={inputs.lastname}
                                        onChange={(e) => lastNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        name="lastname"
                                        placeholder="Your lastname" 
                                    />
                                    {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                                    <MyInput 
                                        type="text" 
                                        value={inputs.email}
                                        onChange={(e) => emailHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        name="email"
                                        placeholder="Your email"
                                    />
                                    {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>}
                                    <MyInput 
                                        type="text"   
                                        value={inputs.phone}
                                        onChange={(e) => phoneHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        name="phone"
                                        placeholder="Your number" 
                                    />
                                </div>
                                <h3 className="modal-content__title">Pick payment</h3>
                                <div className="modal-content__payment">
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/Mastercard.svg' alt="mastercard" />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/Visa.svg' alt="visa" />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/ApplePay.svg' alt="applepay" />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/GooglePay.svg' alt="googlepay" />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/PayPal.svg' alt="paypal" />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src='./../images/icons/payment-icons/AmazonPay.svg' alt="amazonpay" />
                                    </button>
                                </div>
                            </div>
                        </MyModal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;