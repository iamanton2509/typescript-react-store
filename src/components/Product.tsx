import {addProductToCart, addToWishlist} from './../store/storeSlice';
import { useAppDispatch } from '../hooks/hook';
import {NavLink} from 'react-router-dom';

interface ProductProps {
    id: number;
    img: string;
    title: string;
    price: number;
    sale?: number;
    saleColor?: string;
}

const Product = ({img, title, price, id, sale, saleColor}: ProductProps) => {
    const dispatch = useAppDispatch();

    const priceColor = {
        color: saleColor,
        fontSize: 17
    };

    return (
        <>
            <svg style={{display: "none"}} xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-cart">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2415 3.81149C9.7702 4.30847 9.5 4.94004 9.5 5.5C9.5 5.77614 9.27614 6 9 6C8.72386 6 8.5 5.77614 8.5 5.5C8.5 4.6398 8.90138 3.77137 9.51588 3.12339C10.1339 2.4717 11.0086 2 12 2C12.9914 2 13.8661 2.4717 14.4841 3.12339C15.0986 3.77137 15.5 4.6398 15.5 5.5C15.5 5.77614 15.2761 6 15 6C14.7239 6 14.5 5.77614 14.5 5.5C14.5 4.94004 14.2298 4.30847 13.7585 3.81149C13.2907 3.31822 12.6655 3 12 3C11.3345 3 10.7093 3.31822 10.2415 3.81149Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.1289 8H6.87112C6.34466 8 5.90835 8.40818 5.87333 8.93348L5.14 19.9335C5.10152 20.5107 5.55932 21 6.13779 21H17.8622C18.4407 21 18.8985 20.5107 18.86 19.9335L18.1267 8.93348C18.0917 8.40818 17.6554 8 17.1289 8ZM6.87112 7C5.81819 7 4.94559 7.81637 4.87555 8.86696L4.14222 19.867C4.06526 21.0213 4.98086 22 6.13779 22H17.8622C19.0192 22 19.9348 21.0213 19.8578 19.867L19.1245 8.86696C19.0544 7.81637 18.1818 7 17.1289 7H6.87112Z" />
                </symbol>
            </svg>

            <svg style={{display: "none"}} xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-heart">
                <path d="M12 19.7501C11.8012 19.7499 11.6105 19.6708 11.47 19.5301L4.70001 12.7401C3.78387 11.8054 3.27072 10.5488 3.27072 9.24006C3.27072 7.9313 3.78387 6.6747 4.70001 5.74006C5.6283 4.81186 6.88727 4.29042 8.20001 4.29042C9.51274 4.29042 10.7717 4.81186 11.7 5.74006L12 6.00006L12.28 5.72006C12.739 5.25606 13.2857 4.88801 13.8883 4.63736C14.4909 4.3867 15.1374 4.25845 15.79 4.26006C16.442 4.25714 17.088 4.38382 17.6906 4.63274C18.2931 4.88167 18.8402 5.24786 19.3 5.71006C20.2161 6.6447 20.7293 7.9013 20.7293 9.21006C20.7293 10.5188 20.2161 11.7754 19.3 12.7101L12.53 19.5001C12.463 19.5752 12.3815 19.636 12.2904 19.679C12.1994 19.7219 12.1006 19.7461 12 19.7501ZM8.21001 5.75006C7.75584 5.74675 7.30551 5.83342 6.885 6.00505C6.4645 6.17669 6.08215 6.42989 5.76001 6.75006C5.11088 7.40221 4.74646 8.28491 4.74646 9.20506C4.74646 10.1252 5.11088 11.0079 5.76001 11.6601L12 17.9401L18.23 11.6801C18.5526 11.3578 18.8086 10.9751 18.9832 10.5538C19.1578 10.1326 19.2477 9.68107 19.2477 9.22506C19.2477 8.76905 19.1578 8.31752 18.9832 7.89627C18.8086 7.47503 18.5526 7.09233 18.23 6.77006C17.9104 6.44929 17.5299 6.1956 17.1109 6.02387C16.6919 5.85215 16.2428 5.76586 15.79 5.77006C15.3358 5.76675 14.8855 5.85342 14.465 6.02505C14.0445 6.19669 13.6621 6.44989 13.34 6.77006L12.53 7.58006C12.3869 7.71581 12.1972 7.79149 12 7.79149C11.8028 7.79149 11.6131 7.71581 11.47 7.58006L10.66 6.77006C10.3395 6.44628 9.95791 6.18939 9.53733 6.01429C9.11675 5.83919 8.66558 5.74937 8.21001 5.75006Z" fill=""/>
                </symbol>
            </svg>

            <li className="product-item">
                <NavLink to={`/product/${id}`}>
                    <img src={img} alt={title} className="product-item__img" />
                </NavLink>
                <div className="product-item__description">
                    {sale 
                    ?   <div>
                            <h4 className="product-item__title">{title}</h4>
                            <p style={priceColor} className="product-item__price">
                                <img src="./../images/icons/unitedstates.svg" alt="usd" />
                                {price} $ <span className="product-item__sale">  {sale} $</span>  
                            </p>
                        </div>
                    :   <div>
                            <h4 className="product-item__title">{title}</h4>
                            <p className="product-item__price">
                                <img src="./../images/icons/unitedstates.svg" alt="usd" />
                                {price} $
                            </p>
                        </div>
                    }
                    <div>
                        <button onClick={() => dispatch(addProductToCart(id))}>
                            <svg className="icon__cart" width="24" height="24">
                                <use href="#icon-cart"></use>
                            </svg>
                        </button>
                        <button onClick={() => dispatch(addToWishlist(id))}>
                            <svg className="icon__heart" width="24" height="24">
                                <use href="#icon-heart"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Product;