import {useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hook";
import {addProductToCart} from "./../store/storeSlice";

import MyModal from "./../components/UI/modal/MyModal";
import MyInput from "./../components/UI/input/MyInput";

interface CurrencyTypes {
    myUkrainianArray: number[];
}

const Accessory = ({myUkrainianArray}: CurrencyTypes) => {
    const accessories = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    const {id} = useParams();
    const accessory = id ? accessories[Number(id)] : undefined;

    const [modal, setModal] = useState(false);
    
    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section__container">
                    <div className="product-section__img">
                        {accessory && <img src={accessory.img} alt={accessory.title} />}
                    </div>
                    <div className="product-section__description">
                        {accessory && <h2 className="product-section__title">{accessory.title}</h2>}
                        {accessory && <h3 className="product-section__price">
                            && <img src="./../images/icons/unitedstates.svg" alt="usd" /> 
                            {accessory.price} $
                        </h3>}
                        {accessory && <h3 className="product-section__price">
                            <img src="./../images/icons/ukraine.svg" alt="uah" /> 
                            {myUkrainianArray[accessory.id]} UAH
                        </h3>}
                        {accessory && <p style={{color: accessory.color}} className="product-section__details">{accessory.description}</p>}
                        <div className="product-section__button">
                            {accessory && <button onClick={() => dispatch(addProductToCart(accessory.id))} className="add-to-cart-button">Add to cart</button>}
                            <button onClick={() => setModal(true)} className="buy-button">Buy</button>
                        </div>
                        <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h3 className="modal-content__title">Fill the form to make an order</h3>
                                <div className="modal-content__input">
                                    <MyInput type="text" placeholder="Your firstname"></MyInput>
                                    <MyInput type="text" placeholder="Your lastname"></MyInput>
                                    <MyInput type="text" placeholder="Your email"></MyInput>
                                    <MyInput type="text" placeholder="Your number"></MyInput>
                                </div>
                                <h3 className="modal-content__title">Pick payment</h3>
                                <div className="modal-content__payment">
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/Mastercard.svg" alt="mastercard" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/Visa.svg" alt="visa" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/ApplePay.svg" alt="applepay" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/GooglePay.svg" alt="googlepay" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/PayPal.svg" alt="paypal" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src="./../images/icons/payment-icons/AmazonPay.svg" alt="amazonpay" />
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

export default Accessory;