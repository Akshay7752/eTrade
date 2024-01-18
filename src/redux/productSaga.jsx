import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant'

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data: data })


    // let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // data = await data.json()
    // console.log("action called", data);
}

// function* searchProducts(data) {
//     let result = yield fetch(`https://jsonplaceholder.typicode.com/posts?q=${data.query}`);
//     result = yield result.json();
//     // console.warn(data);
//     yield put({ type: SEARCH_PRODUCT, data: result })
// }

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    // yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga;