import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props{
    initialValues?:number
}
function CounterEffect({initialValues=0}:Props){
    const[counter,setCounter] = React.useState(initialValues)
    const counterElement = useRef<HTMLHeadingElement>(null)
    const MAXIMUN_COUNT= 10;
    const increcment = () =>{
        setCounter(prev => Math.min(prev + 1,MAXIMUN_COUNT))
    }
 
    useEffect(() =>{
        if( counter < MAXIMUN_COUNT) return
        const tl = gsap.timeline()
        tl.to(counterElement.current,{y:-10,duration:0.3,ease:'elastic.out'})
        tl.to(counterElement.current,{y:0,duration:1,ease:'bounce.out'})
    },[counter])
    return(
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={increcment}>Agregar</button>
        </>
    )
}

export default CounterEffect;