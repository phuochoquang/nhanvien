import { combineReducers } from "redux";

import productReducer from "./productReducer";

const AllReducer = combineReducers({
    product: productReducer,
});

export default AllReducer;
