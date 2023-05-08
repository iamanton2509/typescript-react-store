import {useAppSelector} from "./hook";

const useAuth = () => {
    const {email, firstname, lastname} = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        firstname, 
        lastname
    }
}

export default useAuth;