import { put, takeEvery, all } from "redux-saga/effects";

// returns a Promise that will resolve after a specified number of milliseconds
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
    console.log("Hello Sagas!");
}

// worker Saga - will perform the async increment task (sleeps for 1 second, then dispatches an INCREMENT action)
export function* incrementAsync() {
    // middleware will suspend the Saga until the Promise completes
    yield delay(1000);
    // put is an example of an Effect
    yield put({ type: "INCREMENT" });
}

// watcher Saga - spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    // helper function to listen for dispatched INCREMENT_ASYNC actions and run incrementAsync each time
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// add a rootSaga that is responsible for starting our other Sagas
export default function* rootSaga() {
    yield all([helloSaga(), watchIncrementAsync()]);
}
