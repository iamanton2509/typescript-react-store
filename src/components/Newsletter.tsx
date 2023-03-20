import {useState} from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email.trim().length === 0) {
            setEmailError('This field can not be empty')
        } else if (!re.test(String(email).toLowerCase())) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
    }

    return (
        <div className="newsletter">
            <div className="container">
                <div className="newsletter-container">
                    <div className="newsletter__text">
                        <h3>Newsletter</h3>
                        <p>To subscribe to our newsletter, we kindly request your email address. Your email address will be kept confidential and will only be used to send you our newsletter and other relevant updates. We take your privacy seriously and will not share your information with any third parties. </p>
                    </div>
                    <div className="newsletter__email">
                        {emailError && <div className="error">{emailError}</div>}
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="newsletter__input" 
                            placeholder="Type your email address" 
                        />
                        <button onClick={emailHandler} className="newsletter__button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;