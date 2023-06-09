import {useAppDispatch} from '../hooks/hook';
import {increaseCount, decreaseCount} from './../store/storeSlice';

import up from './../images/icons/up.svg';
import down from './../images/icons/down.svg';

interface CountProps {
    id: number;
    count: number;
}

const Count = ({count, id}: CountProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="count">
            <div className="count__box">
                <input value={count} disabled className="count__input" type="number" min="1" max="100" />
            </div>
            <div className="count__controls">
                <button className="product-controls" onClick={() => dispatch(increaseCount(id))}>
                    <img src={up} alt="increase" />
                </button>
                <button className="product-controls" onClick={() => dispatch(decreaseCount(id))}>
                    <img src={down} alt="decrease" />
                </button>
            </div>
        </div>
    );
}

export default Count;