import {useLocation, Navigate} from 'react-router-dom';

interface IPrivate {
    children: any
}

const RequireAuth = ({children}: IPrivate) => {
    const location = useLocation();
    const auth = localStorage.getItem('user');

    if (!auth){
        return <Navigate to='/register' state={{from: location}} /> 
    }

    return children;
}

export default RequireAuth;