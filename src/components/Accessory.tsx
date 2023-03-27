import {NavLink} from "react-router-dom";
import usa from './../images/icons/unitedstates.svg';
import ukraine from './../images/icons/ukraine.svg';

interface StoreItemProps {
    title: string;
    img: string;
    price: number;
    newItem?: boolean;
    myUkrainianArray: number[];
    id: number;
}

const Accessory = ({id, title, img, price, myUkrainianArray}: StoreItemProps) => {
    return (
        <li className="store-item__cart">
            <NavLink to={`/product/${id}`}>
                <div className="cart__container">
                    <h4 className="cart__title">{title}</h4>
                    <img src={img} alt={title} />
                    <p className="cart__price">
                        <img src={usa} alt="usd" />
                        {price} $
                    </p>
                    <p className="cart__price">
                        <img src={ukraine} alt="usd" />
                        {myUkrainianArray[id]} UAH
                    </p>
                </div> 
            </NavLink>
        </li>
    );
}

export default Accessory;