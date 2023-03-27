import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/hook";
import {StoreProps} from './../types';

import StoreItem from "./../components/StoreItem";
import store from "./../helpers/store";

interface CurrencyTypes {
    myUkrainianArray: number[];
}

const Store = ({myUkrainianArray}: CurrencyTypes) => {
    const items = useAppSelector(state => state.products.products);

    const {name} = useParams();

    const indexes = [0, 1, 2, 3];
    let current: StoreProps | undefined;

    indexes.forEach((id) => {
        if (store[id].title === name) {
            current = store[id];
        }
        return 0;
    });

    return (
        <div className="store-container">
            <div className="container">
                <section className="store-item">
                    {current && <h1 className="store-item__title">Shop {current.title2}</h1>}
                    {current && <p className="store-item__text">{current.text1}</p>}
                    <h3 className="store-item__header">All models. <span>Take your pick.</span></h3>
                    <ul className="store-item__products">
                        {items.map((item) => {
                            if (current) {
                                if (item.title.includes(current.title2)){
                                    return <StoreItem
                                                id={item.id} 
                                                key={item.id}
                                                title={item.title} 
                                                img={item.img} 
                                                price={item.price} 
                                                newItem={item.newItem}
                                                myUkrainianArray={myUkrainianArray}
                                            />
                                }
                            }
                        })}
                    </ul>
                    {current && <p className="store-item__text">{current.text2}</p>}
                    {current && <p className="store-item__text">{current.text3}</p>}
                </section>
            </div>
        </div>
    );
}

export default Store;