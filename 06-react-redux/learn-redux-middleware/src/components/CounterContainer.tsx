import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrease, decreaseAsync, decreaseThunk, increase, increaseAsync, increaseThunk} from "../modules/counter";
import {RootState} from "../modules";
import Counter from "./Counter";


function CounterContainer() {
    const number = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch();

    const onIncrease = () => {
        // @ts-ignore
        dispatch(increaseAsync())
    }

    const onDecrease = () => {
        // @ts-ignore
        dispatch(decreaseAsync())
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer;
