import React from "react";

interface Props{
    initialValues?:any
}
interface Types{
    counter:number;
    cliks:number;
}
function CounterBy({initialValues=5}:Props){
    //definir tipo de informacion de useState
    const[counter,setCounter] = React.useState<Types>({
        counter:initialValues,
        cliks:0
    })
   
    const increcment = (value:number) =>{
        setCounter(({counter,cliks}) =>(
                {
                    counter:counter + value,
                    cliks:cliks + value
                }
            ))
    }
    return(
        <>
            <h1>Counter: {counter.counter}</h1>
            <span>clicks: {counter.cliks}</span>

            <div>
                <button onClick={() =>increcment(1)}>Agregar 1</button>
                <button onClick={() =>increcment(5)}>Agregar 5</button>
            </div>
        </>
    )
}

export default CounterBy;