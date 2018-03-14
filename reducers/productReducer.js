import { concat, isUndefined, isEmpty, forEach, map } from "lodash";

import { FETCH_PRODUCT, FETCH_MORE_PRODUCT, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED  } from "../actions/actionsTypes";

const initialState = {
    error : '',
    currentlySending: false,
    product: [],
    toast: 0
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentlySending: true, toast:0}
        case FETCH_MORE_PRODUCT:
            return { ...state}
        case FETCH_PRODUCT_SUCCEEDED:
            return { ...state, currentlySending: false, product: action.product}
        case FETCH_MORE_PRODUCT_SUCCEEDED:
            more_product = action.more_product;
            console.log('productReducer---state', state.product);
            console.log('productReducer---action', action);
            
            return { ...state }

            // return { ...state, toast: 2, product: concat(state.product, action.product.data) 
        case FETCH_PRODUCT_FAILED:
            return { ...state, currentlySending: false, error: error}
        default:
            return state;
    }
}

export default productReducer;