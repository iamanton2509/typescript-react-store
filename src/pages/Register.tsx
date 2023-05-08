import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, setDoc, doc} from 'firebase/firestore';
import {useAppDispatch} from '../hooks/hook';
import {userActions} from '../store/userSlice';
import {IRegister} from '../types';
import './../firebase';
import 'firebase/firestore';

const Register = () => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<IRegister>({
        mode: "onBlur"
    });
    const dispatch = useAppDispatch();

    const onSubmit = async (data: any) => {
        const auth = getAuth();
        reset();
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const userData = {
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                firstname: data.firstname,
                lastname: data.lastname
            };
            const userDataJSON = JSON.stringify(userData);
            localStorage.setItem('user', userDataJSON);
            const db = getFirestore();
            const userRef = doc(db, 'users', user.uid);
            setDoc(userRef, {
                userData
            });
            dispatch(userActions.setUser(userData));
        } catch(error: any) {
            console.error(error.message);
        }
    }   

    return (
        <div className="container">
            <section className="register">
                <h2 className="register__title">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="register__form">
                    <input
                        {...register('firstname', {
                            required: 'This field cannot be empty',
                            minLength: {
                                value: 3,
                                message: 'The firstname is too short'
                            }
                        })}
                        placeholder="Firstname"
                        className="register__input"
                    />
                    {errors?.firstname && <small className="register__error">{errors?.firstname?.message || 'Error'}</small>}
                    <input
                        {...register('lastname', {
                            required: 'This field cannot be empty',
                            minLength: {
                                value: 3,
                                message: 'The lastname is too short'
                            }
                        })}
                        placeholder="Lastname"
                        className="register__input"
                    />
                    {errors?.lastname && <small className="register__error">{errors?.lastname?.message || 'Error'}</small>}
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
                    <input type='submit' disabled={!isValid} className="register__submit" value="Register" />
                </form>
                <p className="register__link">Already have an account? <NavLink to="/login">Sign in</NavLink></p>
            </section>
        </div>
    );
}

export default Register;