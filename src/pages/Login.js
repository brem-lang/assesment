import React, { useState } from 'react'

export default function Login() {
    const[userEmail,setUserEmail]= useState()
    const[userPassword,setuserPassword]= useState()

    function handleSubmit(){
        console.log(userEmail)
        console.log(userPassword)
    }
    return (
        <div>
            <input type="email" placeholder='EMAIL' value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}  />
            <input type="password" placeholder='PASSWORD' value={userPassword} onChange={(e)=> setuserPassword(e.target.value)}  />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
