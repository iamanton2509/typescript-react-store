import check from "./../images/icons/check.svg";

interface QuestionListProps {
    name: string;
    phone: string;
    email: string;
    text: string;
}

const QuestionList = ({name, phone, email, text}: QuestionListProps) => {
    return (
        <div className="sent-container">
            <div className="inner-container">
                <h4 className="sent__name">{name}</h4>
                <p className="sent__phone">{phone}</p>
                <div className="email-container">
                    <input type="email" value={email} style={{marginTop: 10, fontSize: 15}} />
                </div>
                <div className="email-container">
                    <textarea value={text} rows={10} cols={20} style={{marginTop: 10, border: '1.5px solid white'}} />
                </div> 
                <div className="sent__icon">
                    <h1 style={{color: '#fff'}}>hello</h1>
                    <img src={check} alt="check" />
                </div>
            </div>
        </div>
    );
}

export default QuestionList;