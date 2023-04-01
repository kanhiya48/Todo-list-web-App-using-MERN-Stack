import React, { useState } from 'react'
import registerrequest from '../api/registerrequest';
import {  useNavigate } from 'react-router-dom'

const register = () => {
  const navigate=useNavigate();
  const nav=()=>{
    
    navigate('/');
  }


  const [newId,setnewId]=useState();
  const[err,seterr]=useState();

  const regis=async (uniqueId,callback)=>{
 const signal=await registerrequest(uniqueId);
 if(signal==="0")
 callback();
 else
 {

 return 0;
 }

  }
  return (
    <div>register
      <br />
     <label htmlFor="">unique id</label>
     <input type="text" value={newId} onChange={(e)=>{
      setnewId(e.target.value)
    
    
     }} />
     <br />
     <button onClick={async ()=>{
      const a=await regis(newId,nav);
      if(a===0)
      {
        
      seterr("already registered with this ID")   ;
      }
     }}>Register</button>
     <div>{err}</div>


    </div>
  )
}

export default register