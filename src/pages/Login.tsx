import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import {IRegister} from '../types';

type PersonWithoutEmail = Omit<IRegister, "firstname" | "lastname">;

const Login = () => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<PersonWithoutEmail>({
        mode: "onBlur"
    });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        reset();
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
                </form>
                <p className="register__link">Don't have an account? <NavLink to="/register">Register</NavLink></p>
            </section>
        </div>
    );
}

export default Login;