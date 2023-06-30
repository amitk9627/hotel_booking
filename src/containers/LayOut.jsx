import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'
const LayOut = (props) => {
    const Navigate=useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
           
            if(user==null){
                Navigate("/");

            }
        });
    },[Navigate])
   
  return (
    <>
    <Navbar />
    {props.children}
      
    </>
  )
}

export default LayOut
