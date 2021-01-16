import {DATA_RECEVIED, OPEN_MODAL, CLOSE_MODAL, PRODUCT_NAME, SENDING_DATA_TO_SERVER} from "./consts";

const initialState = {
    data: null,
    showModalWindow: false,
    product: null,
    dataToServer: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_RECEVIED:
            return {
                ...state,
                data: Object.values(action.payload),
            };
        case OPEN_MODAL:
            return {
                ...state,
                showModalWindow: !state.data.showModalWindow,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModalWindow: false,
            };
        case PRODUCT_NAME:
            return {
                ...state,
                product: action.payload,
            };
        case SENDING_DATA_TO_SERVER:
            console.log("Data to Server from Modal window: ", action.payload);
            return {
                ...state,
                dataToServer: action.payload,
            };
        default:
            return state;
    }
};
