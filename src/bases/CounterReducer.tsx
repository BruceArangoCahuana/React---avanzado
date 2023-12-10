import React, { useReducer } from "react";

interface Types {
    counter:number;
    previus:number;
    changes:number;
}
const INITIAL_STATE:Types ={
    counter:15,
    previus:10,
    changes:2
}

type CounterAction = 
    |{type:'increaseBy',payload:{value:number}}
    |{type:'reset'}

const counterReducers = (state:Types, action:CounterAction):Types =>{
    switch (action.type) {
        case 'reset':
            return{
                counter:0,
                previus:0,
                changes:0
            }
        default:
            return state
    }
}

function CounterReducer(){

    const [{counter},setCounter] = useReducer(counterReducers, INITIAL_STATE)
   
    const increcment = () =>{
        setCounter({type:'reset'})
    }
    return(
        <>
            <h1>Counter Reducert: {counter}</h1>
            <button onClick={increcment}>Agregar</button>
        </>
    )
}

export default CounterReducer;