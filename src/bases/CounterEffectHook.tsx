import { useCounter } from "../hooks/useCounter";


interface Props{
    initialValues?:number
}
function CounterEffectHook({initialValues=0}:Props){
    const {counter,counterElement,increcment} = useCounter({
        maxCount:15
    })
    return(
        <>
            <h1>Counter Hook:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={increcment}>Agregar</button>
        </>
    )
}

export default CounterEffectHook;