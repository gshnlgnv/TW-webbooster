import {DATA_RECEVIED, OPEN_MODAL, CLOSE_MODAL, PRODUCT_NAME,SENDING_DATA_TO_SERVER} from './consts';

export const getData = () => {
    return dispatch => {
        fetch('product.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch(fetchDataRecevied(data));
            })
            .catch(err => {
                console.error('Smthng is wrong...');
            })
    }
};

function fetchDataRecevied(data) {
    return {
        type: DATA_RECEVIED,
        payload: data,
    }
}

export const openModalWindow = () => {
    return {
        type: OPEN_MODAL,
    }
};

export const closeModalWindow = () => {
    return {
        type: CLOSE_MODAL,
    }
};

export const chosenProductName = (productName) => {
    return {
        type: PRODUCT_NAME,
        payload: productName,
    }
};

export const sendDataToServer = (data) => {
    return {
        type: SENDING_DATA_TO_SERVER,
        payload: data
    }
};