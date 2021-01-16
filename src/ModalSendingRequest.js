import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {openModalWindow, closeModalWindow, sendDataToServer} from './actions';
import "./ModalSendingRequest.css";

function ModalSendingRequest(props) {
    const nameRef = React.createRef();
    const telRef = React.createRef();
    const emailRef = React.createRef();

    const checkingInputs = () => {
        if (nameRef.current.value && telRef.current.value && emailRef.current.value) {
            let dataToServer = {
                name: nameRef.current.value,
                telephone: telRef.current.value,
                email: emailRef.current.value,
            };
            props.sendDataToServer(dataToServer);
            props.closeModalWindow();
        } else {
            alert("Заполните все поля!");
        }
    };

    return (
        <Modal
            isOpen={props.modalWindow}
            onRequestClose={() => props.openModalWindow()}
            onHide={props.modalWindow}
            ariaHideApp={false}
        >
            <div className="modal__main_box">
                <div className="modal__header">
                    <p>Вы выбрали {props.productName}</p>
                    <button onClick={() => props.closeModalWindow()}>х
                    </button>
                </div>
                <div className="modal__forms">
                    <input className="modal__input" placeholder="Напишите своё имя" ref={nameRef}/>
                    <input className="modal__input" placeholder="Введите свой номер телефона" ref={telRef}/>
                    <input className="modal__input" placeholder="Введите свою почту" ref={emailRef}/>
                    <button className="modal__button" onClick={() => {
                        checkingInputs();
                    }}>Отправить
                    </button>
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    modalWindow: state.dataReducer.showModalWindow,
    productName: state.dataReducer.product,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({openModalWindow, closeModalWindow, sendDataToServer}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSendingRequest);
