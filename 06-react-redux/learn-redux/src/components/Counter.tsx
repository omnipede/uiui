import React from "react";

type CounterProps = {
    number: number,
    diff: number,
    onIncrease: any,
    onDecrease: any,
    onSetDiff: any
}

function Counter(props: CounterProps) {
    const { number, diff, onIncrease, onDecrease, onSetDiff} = props;

    // TODO type of event?
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetDiff(parseInt(e.target.value, 10))
    }

    return (
        <div>
            <h1>{ number }</h1>
            <div>
                <input type="number" value={diff} min={"1"} onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter
