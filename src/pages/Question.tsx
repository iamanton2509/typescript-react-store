import QuestionForm from './../components/QuestionForm';

const Question = () => {
    return (
        <div className="question-container">
            <h1 className="question-title">Ask an adviser</h1>
            <QuestionForm />
        </div>
    );
}

export default Question;