import React, {useState} from 'react'

export default function Counter() {
    const [value, setvalue]  = useState(0);
    return (
        <div>
            <button className='button' aria-label='Increment value' onClick={() => { setvalue(value + 1) }}> + </button>

            <span className='value'>{value}</span>

            <button className="button" aria-label='Decrement value' onClick={() => { setvalue(value - 1) }}> - </button>
        </div>
    )
}
