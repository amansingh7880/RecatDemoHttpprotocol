import React, { useState } from 'react'

export default function Usestate() {
    const[count,setCount]=useState(0)
    const handelCounter=()=>{
        setCount(pre=>pre+1)
    }
  return (
    <div>
        <h1>UseState Hooks</h1>
        <h2>{count}</h2>
        <button onClick={handelCounter}>Counter</button>
    </div>
  )
}
