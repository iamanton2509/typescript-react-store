import {useAppSelector, useAppDispatch} from "../hooks/hook";
import {NavLink, useNavigate} from "react-router-dom";
import {userActions} from "../store/userSlice";

const User = () => {
    const dispatch = useAppDispatch();

    const d = new Date();
    const hour = d.getHours();
    let greeting: string;
    if (hour >= 21 && hour < 4){
        greeting = 'Good night';
    } else if (hour >= 4 && hour < 12){
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 17){
        greeting = 'Good day';
    } else {
        greeting = 'Good evening';
    }

    const {email, firstname, lastname} = useAppSelector(state => state.user);

    const navigate = useNavigate();

    const logout = () => {
        dispatch(userActions.removeUser());
        navigate('/', {replace: true});
    }

    return (
        <div className="container">
            <header className="user-header">
                <h2 className="user-header__greeting">{greeting} {firstname} {lastname}</h2>
                <p className="user-header__account">Your account is {email}</p>
            </header>
            <main className="user-orders">
                    Your recent orders: 
            </main>
            <button 
                onClick={logout}
                className="user-logout"
            >
                Log out from <br /> {email}
            </button>
        </div>
    );
}

export default User;