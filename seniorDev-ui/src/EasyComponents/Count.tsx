import { useState } from 'react';

export default function Count(){

    const [count, setCount] = useState(0);

    const increase = ()=> {
        setCount((prev) => prev + 1);
    }

    const decrease = ()=> {
        setCount((prev) => prev - 1);
    }

    const reset = ()=> {
        setCount(0);
    } 

    
    return (
        <>
        <h1>Counter : {count}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
        </>
    )
}
