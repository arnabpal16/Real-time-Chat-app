import React from 'react'
import google from "../assets/google.png"
import { auth } from '../firebase'
import {GoogleAuthProvider,signInWithRedirect } from "firebase/auth"

const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}
const Signin = () => {
  return (
    <div className='flex bg-slate-50 items-center cursor-pointer transition-all duration-500 transform  border-2 border-blue-700 hover:border-yellow-500
    hover:shadow-md
    hover:scale-124  px-4 py-2 rounded-md gap-1 justify-center ' onClick={googleSignIn}>
        <img src={google} alt='google'/>
        <p className=' font-bold '>Sign In With Google</p>
    </div>
  )
}

export default Signin