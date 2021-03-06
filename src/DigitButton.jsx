import React from 'react'
import { Action } from './App'


export default function DigitButton({ dispatch, digit }) {
    if (digit === "DEL") {
        return (
            <button onClick={() => dispatch({ type: Action.DELETE_DIGIT, payload: { digit: digit } })}>{digit}</button>
        )
    }
    else if (digit === "AC") {
        return (
            <button onClick={() => dispatch({ type: Action.CLEAR, payload: { digit: digit } })} className="span-two">{digit}</button>
        )
    }
    else if (digit === "=") {
        return (
            <button onClick={() => dispatch({ type: Action.EVALUATE, payload: { digit: digit } })} className="span-two">{digit}</button>
        )
    }

    else if (digit === "+" || digit === "-" || digit === "*" || digit === "÷") {
        return (
            <button onClick={() => dispatch({ type: Action.CHOOSE_OPERATION, payload: { digit: digit } })}>{digit}</button>
        )
    }

    else {
        return (
            <button onClick={() => dispatch({ type: Action.ADD_DIGIT, payload: { digit: digit } })}>{digit}</button>
        )
    }
}
