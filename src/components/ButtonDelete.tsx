import { useAppDispatch } from '../hooks/hook';
import {deleteProduct} from './../store/storeSlice';

import del from './../images/icons/delete.svg';

interface ButtonDeleteProps {
    id: number;
}

const ButtonDelete = ({id}: ButtonDeleteProps) => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(deleteProduct(id))}>
            <img src={del} alt="delete" />
        </button>
    );
}

export default ButtonDelete;