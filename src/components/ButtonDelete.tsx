import { useAppDispatch } from '../hooks/hook';
import {deleteProduct} from './../store/storeSlice';

interface ButtonDeleteProps {
    id: number;
}

const ButtonDelete = ({id}: ButtonDeleteProps) => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(deleteProduct(id))}>
            <img src="./../images/icons/delete.svg" alt="delete" />
        </button>
    );
}

export default ButtonDelete;