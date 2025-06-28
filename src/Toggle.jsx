import { useState } from "react"

function Toggle() {


    const [check, setCheck] = useState(true)


    return (

        <>
            <span>this is checkbox</span>
            <input type="checkbox" name="" id="" checked={check} onChange={() => setCheck(!check)} />
            {
                check ? <h1>value for this {check}</h1>:<h1>this is closed </h1>
 
            }

        </>
    )


}

export default Toggle