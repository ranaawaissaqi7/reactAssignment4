import React, { useState } from 'react'

export default function Task3() {
    const [listItems, setListItems] = useState([])
   // const [newToDo, setnewToDo] = useState(null)
    const [item, setItem] = useState(null)

    const onChangHandler=(e)=>{
      setItem(e.target.value)
    }
    const onSubmiHandler=()=>{
      setListItems([...listItems,item])
      console.log("list item => ",listItems)    
    }
    
    const removeToDo=(id)=>{
      console.log("id => ",id)
      const _id=id
      console.log("_id ",_id)
      let newToDo=listItems.filter((items,index)=>{
        console.log("fil id ",index)
        return index!==_id
      })
      console.log("remove => ",newToDo)
      setListItems(newToDo)
    }
   // setListItems(newToDo)
   
  return (
    <>
    <h1>Task 4</h1>
    <input type="text"  placeholder='Enter add todo List' onChange={onChangHandler} />
    <button onClick={onSubmiHandler}>Add todo</button>
    <table>
      <tr>
        <th>ID</th>
        <th>items</th>
        <th>actions</th>
      </tr>
      {
        listItems.map((items,index)=>{
          return <tr>
            <td key={index+1}>{index+1}</td>
            <td key={items}>{items}</td>
            <button onClick={()=>removeToDo(index)}>remove</button>
          </tr>
        })
      }
    </table>
    </>
  )
}
