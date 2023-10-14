import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../redux/counter';

function CounterPage() {

    const count = useSelector(state => state.count) 
    const dispatch = useDispatch();

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    )
}

export default CounterPage