import './main.css';

type InputProps = React.HTMLProps<HTMLInputElement>;

const MyInput = (props: InputProps) => {
    return (
        <input {...props} className="myInput" />
    );
}

export default MyInput;