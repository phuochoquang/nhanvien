import { FETCH_PRODUCT, FETCH_MORE_PRODUCT, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { HomeApi } from "./api/home";

function* fetchProduct() {
    try {
        const product = yield HomeApi.getTopProductFromApi();
        yield put({ type: FETCH_PRODUCT_SUCCEEDED, product })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT_FAILED, error });
    }
}

function* fetchMoreProduct(action) {
    try {
        const more_product = yield HomeApi.getTopMoreProductFromApi(action.product);
        yield put({ type: FETCH_MORE_PRODUCT_SUCCEEDED, more_product })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT_FAILED, error });
    }
}

export function* watchFetchProduct() {
    yield takeLatest(FETCH_PRODUCT, fetchProduct);
}

export function* watchFetchMoreProduct() {
    yield takeLatest(FETCH_MORE_PRODUCT, fetchMoreProduct);
}