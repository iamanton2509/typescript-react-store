import {useState, useEffect} from 'react';

import MyModal from './../components/UI/modal/MyModal';
import MyInput from './../components/UI/input/MyInput';

const Contacts = () => {
    const [modal, setModal] = useState(false);
    const [inputs, setInputs] = useState({firstname: '', lastname: '', text: '', date: '', phone: '', email: ''});

    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [textDirty, setTextDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    

    const [firstNameError, setFirstNameError] = useState('This field cannot be empty');
    const [lastNameError, setLastNameError] = useState('This field cannot be empty');
    const [textError, setTextError] = useState('This field cannot be empty');
    const [dateError, setDateError] = useState('This field cannot be empty');
    const [phoneError, setPhoneError] = useState('This field cannot be empty');
    const [emailError, setEmailError] = useState('This field cannot be empty');

    const [formValid, setFormValid] = useState(false);

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
        switch (e.target.name){
            case 'firstname':
                setFirstNameDirty(true);
                break;
            case 'lastname':
                setLastNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'text':
                setTextDirty(true);
                break;
            case 'date':
                setDateDirty(true);
                break;
        }
    }

    const firstNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, firstname: target.value});
        if (target.value.length < 2) {
            setFirstNameError('Your must be longer than 1 letter');
        } else if (target.value.length > 20) {
            setFirstNameError('Your firstname must be shorter than 20 letters');
        } else if (Number.isInteger(Number(target.value))) {
            setFirstNameError('Your name must be a string, not a bunch of digits');
        } else {
            setFirstNameError('');
        }
    }

    const lastNameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, lastname: target.value});
        if (Number.isInteger(Number(target.value))) {
            setLastNameError('Your lastname must be a string, not a bunch of digits');
        } else if (target.value.length < 2) {
            setLastNameError('Your lastname must be longer than 1 letter');
        } else if (target.value.length > 25) {
            setLastNameError('Your lastname must be shorter than 25 letters');
        } else {
            setLastNameError('');
        }
    }

    const textHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, text: target.value});
        if (target.value.length < 10) {
            setTextError('Can you write the question more detailed, please?');
        } else {
            setTextError('');
        }
    }

    const dateHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, date: target.value});
        if (target.value.length < 5) {
            setDateError('Invalid date');
        } else {
            setDateError('');
        }
    }

    const phoneHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, phone: target.value});
        const re = /([0-9]+(-[0-9]+)+)/;
        if (!re.test(String(target.value).toLowerCase())) {
            setPhoneError('Invalid phone number');
        } else {
            setPhoneError('');
        }
    }

    const emailHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, email: target.value});
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(String(target.value).toLowerCase())) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
    }

    useEffect(() => {
        if (firstNameError || lastNameError || phoneError || emailError || textError || dateError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [inputs]);

    const confirmBtn = () => {
        if (formValid) {
            setModal(false);
            setFormValid(false);
        }
    }

    return (
        <section className="section">
            <div className="container">
                <h1 className="section-title">Contacts</h1>
                <div className="section-description">
                    <h5 className="section-description__title">Address</h5> 
                    <p>4117 Bridgeport Rd, Santa Maria, California 93455, USA</p>
                    <h5 className="section-description__title">Email</h5>
                    <p>apple@gmail.com</p>
                    <h5 className="section-description__title">Phones</h5>
                    <p>(208) 726-8729</p>
                    <p>(208) 734-9611</p>
                    <p>(530) 257-0914</p>
                </div>
                <MyModal visible={modal} setVisible={setModal}> 
                    <div className="input-container">
                        <h3 className="input-container__title">Let us know that you want us to call you back later</h3>
                        {(firstNameDirty && firstNameError) && <h5 style={{color: 'red'}}>{firstNameError}</h5>}
                        <MyInput
                            value={inputs.firstname} 
                            onChange={e => firstNameHandler(e)}
                            onBlur={e => blurHandler(e)}
                            type="text"
                            name="firstname" 
                            placeholder="Your firstname" 
                        />
                        {(lastNameDirty && lastNameError) && <h5 style={{color: 'red'}}>{lastNameError}</h5>}
                        <MyInput
                            value={inputs.lastname} 
                            onChange={e => lastNameHandler(e)}
                            onBlur={e => blurHandler(e)}
                            type="text"
                            name="lastname" 
                            placeholder="Your lastname" 
                        />
                        {(phoneDirty && phoneError) && <h5 style={{color: 'red'}}>{phoneError}</h5>}
                        <MyInput 
                            value={inputs.phone}
                            onChange={e => phoneHandler(e)}
                            onBlur={e => blurHandler(e)}
                            type="text" 
                            name="phone"
                            placeholder="Your phone" 
                        />
                        {(emailDirty && emailError) && <h5 style={{color: 'red'}}>{emailError}</h5>}
                        <MyInput 
                            value={inputs.email}
                            onChange={e => emailHandler(e)}
                            onBlur={e => blurHandler(e)}
                            type="text"
                            name="email" 
                            placeholder="Your email" 
                        />
                        {(textDirty && textError) && <h5 style={{color: 'red'}}>{textError}</h5>}
                        <MyInput
                            value={inputs.text}
                            onChange={e => textHandler(e)}
                            onBlur={e => blurHandler(e)} 
                            type="text" 
                            name="text"
                            placeholder="Your question" 
                        />
                        {(dateDirty && dateError) && <h5 style={{color: 'red'}}>{dateError}</h5>}
                        <MyInput 
                            value={inputs.date}
                            onChange={e => dateHandler(e)}
                            onBlur={e => blurHandler(e)}
                            type="text" 
                            name="date"
                            placeholder="Where should we call you?" 
                        />
                        <button onClick={confirmBtn} className="confirm-button">Confirm</button>
                    </div>
                </MyModal>
                <div className="button-container">
                    <button onClick={() => setModal(true)} className="modal-button">Have any questions?</button>
                </div> 
            </div>
        </section>
    );
}

export default Contacts;