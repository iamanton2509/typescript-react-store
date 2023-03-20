import {useState} from 'react';

import MyModal from './../components/UI/modal/MyModal';
import MyInput from './../components/UI/input/MyInput';

const Contacts = () => {
    const [modal, setModal] = useState(false);

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
                        <MyInput type="text" placeholder="Your firstname" />
                        <MyInput type="text" placeholder="Your lastname" />
                        <MyInput type="text" placeholder="Your question" />
                        <MyInput type="text" placeholder="Where should we call you?" />
                        <button onClick={() => setModal(false)} className="confirm-button">Confirm</button>
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