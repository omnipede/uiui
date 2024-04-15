import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../modules";
import {addTodo, toggleTodo} from "../modules/todos";
import Todos from "./Todos";

function TodosContainer() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch()
    const onCreate = (text: string) => dispatch(addTodo(text));
    const onToggle = useCallback((id: number) => dispatch(toggleTodo(id)), [dispatch])

    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    )
}


export default TodosContainer;
