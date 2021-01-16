import React from 'react';
import {connect} from "react-redux";
import './Card.css';
import {bindActionCreators} from "redux";
import {openModalWindow, chosenProductName} from "./actions";
import ModalSendingRequest from './ModalSendingRequest';

function Card(props) {

    const mappingData = () => {
        if (props.data !== null) {
            let [newData] = props.data;

            return newData.map( (elem, index) => {
                return(
                        <div key={index} className="card__content">
                            <img alt="product_image" src={elem.img}/>
                            <div>
                                {elem.name}
                            </div>
                            <div className="card__price">
                                {elem.price} <svg className="svg__rub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440"><path d="M232.522 242.428c63.913 0 115.91-54.382 115.91-121.227C348.432 54.37 296.435 0 232.522 0H120.568v282.428h-29v30h29V440h30V312.428h101.955v-30H150.568v-40h81.954zM150.568 30h81.955c47.371 0 85.91 40.912 85.91 91.201 0 50.303-38.539 91.227-85.91 91.227h-81.955V30z"/></svg>
                            </div>
                            <button className="card__button" onClick={ ()=> {
                                props.chosenProductName(elem.name);
                                props.openModalWindow();
                            } }>Купить</button>
                        </div>
                )
            });
        }
    };

    return(
        <div className="card__mainbox">
            {mappingData()}
            <ModalSendingRequest isOpen={props.showModalWindow}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.dataReducer.data,
    showModalWindow: state.dataReducer.showModalWindow,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({openModalWindow, chosenProductName}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);