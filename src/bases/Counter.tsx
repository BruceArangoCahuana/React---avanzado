import React from "react";

interface Props{
    initialValues:number
}
function Counter({initialValues=0}:Props){
    const[counter,setCounter] = React.useState(initialValues)
   
    const increcment = () =>{
        setCounter(prev => prev +1)
    }
    return(
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increcment}>Agregar</button>
        </>
    )
}

export default Counter;