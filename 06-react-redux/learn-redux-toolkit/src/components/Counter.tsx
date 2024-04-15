import React from "react";
import {useAppDispatch, useAppSelector} from "../modules";
import {decrement, increment} from '../modules/counter'

export default function Counter() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <p> { count } </p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
