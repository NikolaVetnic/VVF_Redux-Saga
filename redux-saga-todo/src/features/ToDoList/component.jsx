import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";

import BasicCard from "../../components/BasicCard/component";

export default function ToDoList() {
    const dispatch = useDispatch();

    const toDoList = useSelector((state) => state.toDoList);

    const createHandler = () => {
        dispatch({ type: "CREATE" });
    };

    return (
        <div>
            <Button variant="outlined" onClick={createHandler}>
                Create New
            </Button>
            <hr></hr>
            {toDoList.toDoList.map((toDo) => (
                <BasicCard key={toDo.key} content={toDo} />
            ))}
        </div>
    );
}
