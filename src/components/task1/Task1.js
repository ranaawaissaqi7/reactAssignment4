import React from 'react'
import { useState } from 'react'

export default function Task1() {
    const [count, setCount] = useState(0);

    const increamentHandler=()=>{
        setCount(count+1)
    }

    const decreamentHandler=()=>{
        if (count===0) {
            setCount(0)
        } else {
            setCount(count-1)    
        }
        
    }
  return (
    <>
    <h1>Task 1</h1>

    <button onClick={increamentHandler}>Increament</button> {count} <button onClick={decreamentHandler}>Decreament</button>
    <hr />
    </>
  )
}
