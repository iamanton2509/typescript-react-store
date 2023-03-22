import {useState, useEffect} from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import QuestionList from "./QuestionList";
import plus from "./../images/icons/plus.svg";

interface IQuestions {
    name: string;
    phone: string;
    email: string;
    text: string;
}

const QuestionForm = () => {
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const [inputs, setInputs] = useState({name: '', phone: '', email: '', select: '', text: ''});

    /* Был ли пользователь в инпуте */
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [textDirty, setTextDirty] = useState(false);

    const [nameError, setNameError] = useState("This field can't be empty");
    const [phoneError, setPhoneError] = useState("This field can't be empty");
    const [emailError, setEmailError] = useState("This field can't be empty");
    const [textError, setTextError] = useState("This field can't be empty");
    const [formValid, setFormValid] = useState(false);

    const [selectedQuestion, setSelectedQuestion] = useState('');

    const changeQuestion = (question: string) => {
        setInputs({...inputs, select: question});
        setSelectedQuestion(question);
    }

    const confirmForm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setFormValid(false);
        setQuestions(question => {
            return [
                ...questions, 
                inputs
            ]
        });
        setInputs({name: '', phone: '', email: '', select: '', text: ''});
    }

    /* Функция срабатывает тогда, когда пользователь покинул поле ввода */
    const blurHandler = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
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
        }
    }

    const nameHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        setInputs({...inputs, name: target.value});
        if (Number.isInteger(Number(target.value))) {
            setNameError('Your name must be string');
        } else if (target.value.length < 3) {
            setNameError('Your name must be longer than 2 letters');
        } else {
            setNameError('');
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

    const textHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const target = e.target as HTMLTextAreaElement;
        setInputs({...inputs, text: target.value});
        if (target.value.length < 10) {
            setTextError('Explain your question more detailed');
        } else if (target.value.length > 350) {
            setTextError('Your question is too long');
        } else {
            setTextError('');
        }
    }

    useEffect(() => {
        if (nameError || phoneError || emailError || textError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError, emailError, textError]);

    return (
        <div className="question-section">
            <form className="form-section">
                {(nameDirty && nameError) && <div className="error">{nameError}</div>}
                <MyInput 
                    onBlur={e => blurHandler(e)} 
                    value={inputs.name} 
                    onChange={(e) => nameHandler(e)} 
                    name="name"
                    type="text" 
                    placeholder="Your firstname" 
                />
                {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>}
                <MyInput 
                    onBlur={e => blurHandler(e)} 
                    value={inputs.phone} 
                    onChange={(e) => phoneHandler(e)} 
                    name="phone"
                    type="text" 
                    placeholder="Your phone" 
                />
                {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                <MyInput 
                    onBlur={e => blurHandler(e)} 
                    value={inputs.email} 
                    onChange={(e) => emailHandler(e)} 
                    name="email"
                    type="text" 
                    placeholder="Your email" 
                />
                <MySelect value={selectedQuestion} onChange={changeQuestion} options={[
                    {value: 'delivery', name: 'Delivery'},
                    {value: 'gadgets', name: 'Gadgets'},
                    {value: 'accessories', name: 'Accessories'},
                    {value: 'job', name: 'Careers'}
                ]} defaultValue="You're interested in" />
                {(textDirty && textError) && <div className="error">{textError}</div>}
                <textarea 
                    onBlur={e => blurHandler(e)} 
                    value={inputs.text}
                    onChange={(e) => textHandler(e)} 
                    name="text"
                    rows={5}
                    cols={26}
                    placeholder="Type your question here..." 
                />
                <button disabled={!formValid} onClick={confirmForm} className="form-button">
                    <img src={plus} alt="Plus" />
                </button>
            </form>
            {questions.length < 4 
            ?  questions.map((question) => 
                   <QuestionList key={question.phone} name={question.name} phone={question.phone} email={question.email} text={question.text} />
               )
            : <h1 style={{color: '#bb2649', fontSize: 35, textAlign: 'center'}}>You've answered enough questions</h1>
            }
        </div>
    );
}

export default QuestionForm;