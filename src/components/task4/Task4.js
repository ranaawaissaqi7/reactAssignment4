import React, { useState } from 'react'

export default function Task4() {
    const [isOn, setIsOn] = useState(false)

    const onChangeHandler=()=>{
        setIsOn(!isOn)
    }
  return (
    <>
    <h1>Task 4</h1>
    <input type="checkbox" onChange={onChangeHandler} checked={isOn}/>

    
    <p>{isOn ? 'Switch is ON' : 'Switch is OFF'}</p>
    </>
  )
}
