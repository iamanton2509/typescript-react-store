import {useState, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import {sortProducts} from './../store/storeSlice';

import Product from './../components/Product';
import ProductList from './../components/ProductList';
import MySelect from './../components/UI/select/MySelect';
import MyInput from './../components/UI/input/MyInput';

import list from './../images/icons/list.svg';
import table from './../images/icons/table.svg';

const Products = () => {
    const items = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    const [selectedSort, setSelectedSort] = useState('');
    const [search, setSearch] = useState('');

    const searchedProducts = useMemo(() => {
        return items.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, items]);

    const sortProductsBy = (sort: string) => {
        setSelectedSort(sort);
        dispatch(sortProducts(sort));
    }

    const [style, setStyle] = useState(false);

    const [styles, setStyles] = useState([
        ['products', 'product-item', 'product-item__img', 'product-item__description', 'product-item__title', 'product-item__price', 'product-item__sale', ],
        ['products-list', 'product-list-item', 'product-list-item__img', 'product-list-item__description', 'product-list-item__title', 'product-list-item__price', 'product-list-item__sale']
    ]);
    
    return (
        <>
            <header>
                <div className="container">
                    <h2 className="products-title">Experience convenience and affordability with us. From gadgets to accessories, we offer high-quality products at a low cost. Shop with confidence knowing that our commitment to quality and reliability will exceed your expectations.</h2>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="products-header">
                        <MySelect value={selectedSort} onChange={sortProductsBy} options={[
                            {value: 'price-ascending', name: 'Sort by price - ascending'},
                            {value: 'price-descending', name: 'Sort by price - descending'},
                            {value: 'title', name: 'Sort by name'},
                            {value: 'id', name: 'Sort by default'},
                        ]} defaultValue="Sort by" />
                        <MyInput  
                            value={search} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} 
                            placeholder="Search by name"
                            type="text"  
                        />
                        <div style={{display: 'flex', columnGap: 5}}>
                            <button onClick={() => setStyle(false)}>
                                <img src={table} alt="table" />
                            </button>
                            <button onClick={() => setStyle(true)}>
                                <img src={list} alt="list" />
                            </button>
                        </div>
                    </div>
                    <ul className={styles[Number(style)][0]}>
                        {style 
                            ? searchedProducts.map((item) => 
                                <ProductList 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    price={item.price} 
                                    id={item.id} 
                                    sale={item.sale ?? 0}
                                    saleColor={item.saleColor ?? ''}
                                />
                                )
                            : searchedProducts.map((item) => 
                                <Product 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    price={item.price} 
                                    id={item.id} 
                                    sale={item.sale ?? 0}
                                    saleColor={item.saleColor ?? ''}
                                />
                                )
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Products;