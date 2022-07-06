import { createSlice } from "@reduxjs/toolkit";
import randomFutureDate from "../../util/randomFutureDate";
import randomMessageId from "../../util/randomMessageId";

const initialState = {
    toDoList: [
        {
            key: randomMessageId(),
            date: randomFutureDate().toLocaleString(),
            msg: "Test message #1.",
        },
        {
            key: randomMessageId(),
            date: randomFutureDate().toLocaleString(),
            msg: "Test message #2.",
        },
    ],
};

const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialState,
    reducers: {
        create: (state, action) => {
            state.toDoList.push(action.payload);
        },
        delete: (state, action) => {
            console.log(action.payload);
            console.log(state.toDoList);
            state.toDoList = state.toDoList.filter(
                (e) => e.key !== action.payload
            );
        },
    },
});

export const toDoListActions = toDoListSlice.actions;

export default toDoListSlice.reducer;
