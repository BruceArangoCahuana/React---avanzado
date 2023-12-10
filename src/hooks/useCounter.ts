import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Types{
    maxCount:number;
}

export const useCounter = ({maxCount = 10}:Types) =>{
    const[counter,setCounter] = React.useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)
    const tl = useRef(gsap.timeline());
    
    const increcment = () =>{
        setCounter(prev => Math.min(prev + 1,maxCount))
    }


    useLayoutEffect(() =>{
        if( !counterElement.current) return
            tl.current.to(counterElement.current,{y:-10,duration:0.3,ease:'elastic.out'})
            tl.current.to(counterElement.current,{y:0,duration:1,ease:'bounce.out'})
            tl.current.pause();
    },[])
    useEffect(() =>{
        tl.current.play(0);
    },[counter])

    return{
        counter,
        increcment,
        counterElement
    }
}