import {useParams} from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { StoreProps } from "../types";

import Accessory from "./../components/Accessory";
import store from "./../helpers/store";

interface CurrencyTypes {
    myUkrainianArray: number[];
}

const Accessories = ({myUkrainianArray}: CurrencyTypes) => {
    const accessories = useAppSelector(state => state.products.products);
    
    const {name} = useParams();

    const indexes = [4, 5, 6];
    let current: StoreProps | undefined;

    indexes.forEach((id) => {
        if (store[id].title === name) {
            current = store[id];
        }
        return 0;
    });

    return (
        <div className="container">
            {current && <h1 className="accessories-title">{current.title2}</h1>}
            <section className="section-one">
                <header className="header">
                    <h2 className="header__title">Upgrade your Apple devices with our premium accessories, carefully selected to enhance your productivity, protect your devices, and create a comfortable workspace.</h2>
                    {current && <img src={current.img} alt={current.title2} />}    
                </header>
                {current && <p className="description">{current.text1}</p>}
                <ul className="store-item__products">
                    {accessories.map((accessory) => {
                        if (current && current.main && current.bottom) {
                            if (accessory.id < current.main && accessory.id > current.bottom) {
                                return <Accessory key={accessory.id} title={accessory.title} img={accessory.img} price={accessory.price} id={accessory.id} myUkrainianArray={myUkrainianArray} />
                            }
                        }
                        
                    })}
                </ul> 
                {current &&<p className="description">{current.text2}</p>}
            </section>
            <section className="section-two">
                {current && <h1 className="title-2">{current.title3}</h1>}
                {current && <p className="description">{current.text3}</p>}
                <ul className="store-item__products">
                    {accessories.map((accessory) => {
                        if (current && current.main && current.top) {
                            if (accessory.id >= current.main && accessory.id < current.top) {
                                return <Accessory key={accessory.id} title={accessory.title} img={accessory.img} price={accessory.price} id={accessory.id} myUkrainianArray={myUkrainianArray} />
                            }
                        }
                    })}
                </ul>
                {current && <p className="description" style={{textAlign: 'center'}}>{current.text4}</p>}
            </section>
        </div>
    );
}

export default Accessories;