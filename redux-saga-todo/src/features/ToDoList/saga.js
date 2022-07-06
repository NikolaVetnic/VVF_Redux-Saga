import { put, takeEvery } from "redux-saga/effects";
import randomFutureDate from "../../util/randomFutureDate";
import randomMessageId from "../../util/randomMessageId";

import { toDoListActions } from "./slice";

export function* createSaga() {
    try {
        yield put(
            toDoListActions.create({
                key: randomMessageId(),
                date: randomFutureDate().toLocaleString(),
                msg: `Random test message.`,
            })
        );
    } catch (err) {
        yield put({ type: "CREATE_FAILED" });
    }
}

export function* deleteSaga(payload) {
    try {
        yield put(toDoListActions.delete(payload.key));
    } catch (err) {
        yield put({ type: "DELETE_FAILED" });
    }
}

export default function* rootSaga() {
    yield takeEvery("CREATE", createSaga);
    yield takeEvery("DELETE", deleteSaga);
}
