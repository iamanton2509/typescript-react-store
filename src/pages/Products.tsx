import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {sortProducts} from './../store/storeSlice';
import {IProduct} from './../types';

import Product from './../components/Product';
import MySelect from './../components/UI/select/MySelect';
import MyInput from './../components/UI/input/MyInput';

type ProductsProps = {
    searchedProducts: IProduct[];
    search: string;
    setSearch: (str: string) => void;
    myUkrainianArray: number[];
  }

const Products = ({search, setSearch, searchedProducts, myUkrainianArray}: ProductsProps) => {
    const [selectedSort, setSelectedSort] = useState('');

    const items = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    const sortProductsBy = (sort: string) => {
        setSelectedSort(sort);
        dispatch(sortProducts(sort));
    }

    return (
        <>
            <header>
                <div className="container">
                    <h2 className="products-title">Experience convenience and affordability with us. From gadgets to accessories, we offer high-quality products at a low cost. Shop with confidence knowing that our commitment to quality and reliability will exceed your expectations.</h2>
                </div>
            </header>
            <section>
                <div className="container">
                    <MySelect value={selectedSort} onChange={sortProductsBy} options={[
                        {value: 'price-ascending', name: 'Sort by price - ascending'},
                        {value: 'price-descending', name: 'Sort by price - descending'},
                        {value: 'title', name: 'Sort by name'},
                        {value: 'id', name: 'Sort by default'},
                    ]} defaultValue="Sort by" />
                    <MyInput type="text" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder="Search by name"  />
                    <ul className="products">
                        {searchedProducts.map((item) => 
                            <Product 
                                key={item.id} 
                                img={item.img} 
                                title={item.title} 
                                price={item.price} 
                                id={item.id} 
                                sale={item.sale ?? 0}
                                saleColor={item.saleColor ?? ''}
                            />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Products;