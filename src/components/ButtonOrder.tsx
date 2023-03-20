interface ButtonOrderProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonOrder = (props: ButtonOrderProps) => {
    return (
        <div className="button-container">
            <button {...props} className="button">
                Make an order
            </button>
        </div>
    );
};
  
export default ButtonOrder;