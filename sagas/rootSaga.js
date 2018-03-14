// import redux-saga
import { all, fork  } from "redux-saga/effects";

// import file

import { watchFetchProduct, watchFetchMoreProduct} from "./porductSagas";


export default function* rootSaga() {
    yield all([
        fork(watchFetchProduct),
        fork(watchFetchMoreProduct),
    ]);
}