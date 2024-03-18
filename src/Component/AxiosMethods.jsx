import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosMethods = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
        const Api="https://jsonplaceholder.typicode.com/users"
        axios.get(Api)
        .then(res=>{
            console.log(res.data)
            setUser(res.data)
        }).then(err=>console.log(err))
    },[])
  return (
    <div>
        <h1>Axios Methods</h1>
        {
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Websiet</th>
                        <th>Add ress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data,ind)=>

<tr key={ind}> 
    <td>{ind+1}</td>
    
    <td>{data.name}</td>                           

   <td>{data.email}</td>                          

   <td>{data.website}</td>                                

   <td>{data.address.city}</td>
 </tr>
                        )
                    }
                </tbody>
            </table>
        }
    </div>
  )
}

export default AxiosMethods