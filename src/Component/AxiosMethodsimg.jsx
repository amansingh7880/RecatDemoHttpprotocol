import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosMethodsimg = () => {
    const[gallery,setGallery]=useState([])
    useEffect(()=>{
        const Api="https://dummyapi.online/api/social-profiles";
        axios.get(Api)
        .then(res=>{
            console.log(res.data);
            setGallery(res.data);
        }).then(err=>console.log(err))
    },[])
  return (
    <div>
        <h1>AxiosMethodsimg</h1>
        {
            gallery.map((data,ind)=>
            <div>
                <h3>{data.userId}</h3>
            <img src={data.profilePic} alt="" />
            </div>
            
            )
        }
    </div>
  )
}

export default AxiosMethodsimg