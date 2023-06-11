import React, { useState } from 'react'

export default function Task2() {
    const [name, setName] = useState(null);

    const changHandler=(e)=>{
        setName(e.target.value)
    }
  return (
    <>
    <h1>Task 2</h1>
    <input type="text" placeholder='Enter Your Name ' onChange={changHandler}/>
    <h3>Hi Whatsapp {name}</h3>
    <hr />
    </>
  )
}
