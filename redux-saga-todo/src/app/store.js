import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import toDoListSlice from "../features/ToDoList/slice";
import saga from "../features/ToDoList/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: { toDoList: toDoListSlice },
    middleware,
});

sagaMiddleware.run(saga);

export default store;
