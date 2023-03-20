import {NavLink} from "react-router-dom";
import { CurrencyTypes } from "../types";

interface StoreItemProps {
    title: string;
    img: string;
    price: number;
    newItem: boolean;
    myUkrainianArray: number[];
    id: number;
}

const StoreItem = ({title, img, price, newItem, myUkrainianArray, id}: StoreItemProps) => {
    return (
        <li className="store-item__cart">
            <NavLink to={`/product/${id}`}>
                <div className="cart__container">
                    {newItem 
                    ? <p className="cart__new">New</p>
                    : <p className="cart__new--fake">New</p>
                    }
                    <h4 className="cart__title">{title}</h4>
                    <img src={img} alt={title} />
                    <p className="cart__price">
                        <img src="./../../images/icons/unitedstates.svg" alt="usd" />
                        {price} $
                    </p>
                    <p className="cart__price">
                        <img src="./../../images/icons/ukraine.svg" alt="usd" />
                        {myUkrainianArray[id]} UAH
                    </p>
                </div> 
            </NavLink>
        </li>
    );
}

export default StoreItem;