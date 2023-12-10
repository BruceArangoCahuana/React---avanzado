import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT= 10;
export const useCounter = () =>{
    const[counter,setCounter] = React.useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)
    
    const increcment = () =>{
        setCounter(prev => Math.min(prev + 1,MAXIMUN_COUNT))
    }
 
    useEffect(() =>{
        if( counter < MAXIMUN_COUNT) return
        const tl = gsap.timeline()
        tl.to(counterElement.current,{y:-10,duration:0.3,ease:'elastic.out'})
        tl.to(counterElement.current,{y:0,duration:1,ease:'bounce.out'})
    },[counter])

    return{
        counter,
        increcment,
        counterElement
    }
}