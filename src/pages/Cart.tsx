import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {NavLink} from 'react-router-dom';
import {sortProducts} from './../store/storeSlice';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';
import Title from './../components/Title';
import CartHeader from './../components/CartHeader';
import CartProducts from './../components/CartProducts';
import CartFooter from './../components/CartFooter';
import ButtonOrder from './../components/ButtonOrder';
import MyModal from './../components/UI/modal/MyModal';
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

    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].cart) {
            counter += 1;
        }
    }

    const productsInCart = items.filter(product => product.cart);

    const [total, setTotal] = useState({
        count: productsInCart.reduce((previous, current) => previous + current.count, 0),
        price: productsInCart.reduce((previous, current) => previous + current.totalPrice, 0)
    });

    useEffect(() => {
        setTotal({
            count: productsInCart.reduce((previous, current) => previous + current.count, 0),
            price: productsInCart.reduce((previous, current) => previous + current.totalPrice, 0)
        })
    }, [items]);

    const db = getFirestore();
    const email = JSON.parse(String(localStorage.getItem('user'))).email;

    const createOrder = async () => {
        try {
            const orderRef = collection(db, 'orders');
            const newOrderDoc = await addDoc(orderRef, {
                email: email,
                totalPrice: total.price,
                totalCount: total.count,
                products: productsInCart
            });
            return newOrderDoc.id;
        } catch (error: any) {
            console.error(error.message);
        }
    };

    const handleOrder = () => {
        createOrder();
        setModal(true)
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
                    ]} defaultValue='Sort by' /> }
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
                            <ButtonOrder onClick={handleOrder} />
                        }
                        {localStorage.getItem('user') 
                        ? <MyModal visible={modal} setVisible={setModal}>
                                <div className="modal-content">
                                    <h3 className="modal-content__title">Success! Our manager is contacting you soon</h3>
                                    <div className="modal-content__input">
                                        <p className="modal-content__header">Your order</p> 
                                        <table>
                                            <tr>
                                                <th>Name</th>
                                                <th>Count</th>
                                                <th>Price</th>
                                            </tr>  
                                        {productsInCart.map(item => 
                                            <tr>
                                                <td>{item.title}</td>
                                                <td>{item.count}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        )} 
                                        <tr>
                                            <th>Result</th>
                                            <th>{total.count}</th>
                                            <th>{total.price}</th>
                                        </tr>
                                        </table> 
                                    </div>
                                    <h3 className="modal-content__title">You can make a payment with</h3>
                                    <div className="modal-content__payment">
                                    <button className="payment-btn">
                                        <img src={mastercard} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={visa} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={applepay} />
                                    </button>
                                    {/* <button  className="payment-btn">
                                        <img src={googlepay} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={paypal} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={amazon} />
                                    </button> */}
                                </div>
                            </div>
                        </MyModal>
                        : <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h1>You have to be signed in to make orders</h1>
                                <p><NavLink to="/login">Log In </NavLink> <NavLink to="/register">Register</NavLink></p>
                            </div>
                        </MyModal>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;