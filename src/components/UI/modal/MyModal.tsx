import './main.css';

interface IModal {
    visible: boolean;
    setVisible: (bool: boolean) => void;
    children: React.ReactNode;
}

const MyModal = ({children, visible, setVisible}: IModal) => {

    const rootClass = ["myModal"];
    if (visible) {
        rootClass.push("active");
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <div className="myModalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;