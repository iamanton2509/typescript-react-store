import Count from './Count';
import ButtonDelete from './ButtonDelete';

import priceFormatter from './../utils/priceFormatter';

interface CartProductsProps {
    id: number;
    img: string;
    count: number;
    title: string;
    totalPrice: number;
}

const CartProducts = ({id, img, count, title, totalPrice}: CartProductsProps) => {
    return (
        <section className="product">
            <div className="product__image">
                <img src={img} alt={title} />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count count={count} id={id} />
            </div>
            <div className="product__price">{priceFormatter.format(totalPrice)} $</div>
            <div className="product__controls">
                <ButtonDelete id={id} />
            </div>
        </section>
    );
}

export default CartProducts;