import { useState } from "react"

function Hooks() {
    
    const [count,setCount]=useState(0);

    const updateHandler=()=>{
        setCount(count+1)
    }
    function updateValuebyarg(params) {
        
        setCount(count+params)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}} >update counter value </button>
            <button onClick={updateHandler}>this is handler function</button>
            <button onClick={()=>updateValuebyarg(100)}>update value by arg</button>
        </div>
    )
}


export default Hooks