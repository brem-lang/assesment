import React, { useState } from 'react'
import { useAuth } from '../AuthContext/useAuth'

export default function Signup() {
    const{signup} = useAuth();
    const[userEmail,setUserEmail]= useState()
    const[userPassword,setuserPassword]= useState()
    const[userPassword1,setuserPassword1]= useState()

    function handleSubmit(){
        console.log(userEmail)
        console.log(userPassword)
        if(userPassword!=userPassword1){
            console.log("PASSWORD DID NOT MATCH")
        }else{
            console.log("PASSWORD MATCH")
        }
    }
    return (
        <div>
            <input type="email" placeholder='EMAIL' value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}  />
            <input type="password" placeholder='PASSWORD' value={userPassword} onChange={(e)=> setuserPassword(e.target.value)}  />
            <input type="password" placeholder='PASSWORD' value={userPassword1} onChange={(e)=> setuserPassword1(e.target.value)}  />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
