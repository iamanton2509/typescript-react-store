import {useForm} from 'react-hook-form';
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, setDoc, doc} from 'firebase/firestore';
import {useAppDispatch} from '../hooks/hook';
import {userActions} from '../store/userSlice'; 
import {IRegister} from '../types';

type PersonWithoutEmail = Omit<IRegister, "firstname" | "lastname">;

const Login = () => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<PersonWithoutEmail>({
        mode: "onBlur"
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    const goUser = () => navigate('/user');

    const onSubmit = (data: PersonWithoutEmail) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({user}) => {
                dispatch(userActions.setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    firstname: '',
                    lastname: ''
                }));
                localStorage.setItem('user', JSON.stringify(user));
                reset();
                goUser();
            })
            .catch(() => alert('Wrong data'));
    }

    const handleGoogleSignIn = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                firstname: user.displayName,
                lastname: ''
            }
            localStorage.setItem('user', JSON.stringify(userData));
            dispatch(userActions.setUser(userData));
            const db = getFirestore();
            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, userData);
            goUser();
        } catch (error: any){
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <section className="register">
                <h2 className="register__title">Log in</h2>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="register__form">
                    <input
                        {...register('email', {
                            required: 'This field cannot be empty',
                            pattern: {
                                value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                message: 'Invalid email'
                            }
                        })}
                        placeholder="Email"
                        className="register__input"
                    />
                    {errors?.email && <small className="register__error">{errors?.email?.message || 'Error'}</small>}
                    <input
                        {...register('password', {
                            required: 'This field cannot be empty',
                            minLength: {
                                value: 8,
                                message: 'The password is too short'
                            },
                            maxLength: {
                                value: 21,
                                message: 'The password is too long'
                            }
                        })}
                        placeholder="Password"
                        type="password"
                        className="register__input"
                    />
                    {errors?.password && <small className="register__error">{errors?.password?.message || 'Error'}</small>}
                    <input type='submit' disabled={!isValid} className="register__submit" value="Log in" />
                    <button onClick={handleGoogleSignIn} className="google-button">Continue with Google</button>
                </form>
                <p className="register__link">Don't have an account? <NavLink to="/register">Register</NavLink></p>
            </section>
        </div>
    );
}

export default Login;