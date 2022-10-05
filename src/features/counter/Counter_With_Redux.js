import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment ,incrementByAmount } from './CounterSlice';

export default function Counter() {
    const value = useSelector((state)=> state.counter.value)
  const themeColor = useSelector((state)=>state.theme.color)

    const dispatch = useDispatch()
    // const [value, setvalue]  = useState(0);
    return (
        <div>
            <button className='button' aria-label='Increment value' onClick={() => { dispatch(increment()) }}> + </button>

            <span className='value' style={{color: themeColor}}>{value}</span>

            <button className="button" aria-label='Decrement value' onClick={() => { dispatch(decrement()) }}> - </button>
            <button className="button" onClick={() => { dispatch(incrementByAmount(5)) }}> 5 increment </button>
        </div>
    )
}
