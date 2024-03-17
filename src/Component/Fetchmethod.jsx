import React, { useState } from 'react'
const Fetchmethod = () => {
    const[post,setPost]=useState([])
    const fetchDataclick=()=>{
        const Api="https://jsonplaceholder.typicode.com/posts"
        fetch(Api)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setPost(res)
        })
        .then(err=>console.log(err))
    }
  return (
      <>
      <h1>Fetchmethod</h1>
    <button onClick={fetchDataclick}>FetchApi</button>
    <div>
        {
            post.map((data,ind)=>
            <div key={ind}>
                <h3>{data.id}</h3>
                <p>{data.body}</p>
                <hr />
            </div>
            )
        }
    </div>
    </>
  )
}

export default Fetchmethod