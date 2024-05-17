import { useState } from "react";


const Counter=()=>{

    const [count,setCount] = useState(10);


    const Increament=()=>{
        setCount(count+10)
    }
    const Decreament=()=>{
        setCount(count-10)
    }

    return(
        <>
        <h1> This is counter Task </h1>
        <h1>Counter : {count}</h1>

        <button onClick={Increament}>Increament</button><span>  </span>
        <button onClick={Decreament}>Decreament</button>
        </>
    )
}
export default Counter;