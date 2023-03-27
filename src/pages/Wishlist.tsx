import { useAppSelector } from "../hooks/hook";

import Product from "./../components/Product";

const Wishlist = () => {
    const items = useAppSelector(state => state.products.products);

    let count:number = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].wishlist) {
            count += 1;
        }
    }
    
    return (
        <div className="container">
            <h1 className="wishlist">Wishlist</h1>
            <section className="wishlist-description">
                <h4 className="wishlist__title">Dear valued customers,</h4>
                <p className="wishlist__description">We are excited to introduce our Wishlist feature, which allows you to save products you're interested in for future reference. With our Wishlist page, you can easily track the availability and price changes of your favorite products, so you never miss out on a great deal</p>
                <p className="wishlist__description">On our Wishlist page, you'll find all the products you've saved, along with their images, prices, and other important details. You can even select the quantity of each product you want to add to your cart, and quickly add them to your cart without leaving the page</p>
                <p className="wishlist__description">Thank you for choosing our online store for your shopping needs. We appreciate your business!</p>
                {count 
                    ? ''
                    : <p className="wishlist__info">Now your wishlist is empty</p>
                }
                
            </section>
            <ul className="section-sale__products">
                {items.map((item) => {
                    if (item.wishlist) {
                        return <Product 
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    sale={item.sale}
                                    saleColor={item.saleColor}
                                />
                    } 
                })}
            </ul>
        </div>
    );
}

export default Wishlist;