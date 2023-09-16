import React from 'react'
import { auth } from "../firebase"
import Signin from './Signin'
import { useAuthState } from 'react-firebase-hooks/auth'
import LogOut from './LogOut'
import logo from "../assets/logo.png"
const Navbar = () => {
    const [user] = useAuthState(auth)
    // console.log(user)
    return (
        <div className="bg-yellow-500 h-20 flex  justify-between items-center p-4">
            <h1 className=' text-blue-700 \ flex flex-row  gap-x-2 '>
                <img src={logo} className='h-[40px] w-[40px] bg-blue-700 rounded-lg  ' />
                <p className='text-3xl font-extrabold font-sans  '>Chat App</p>
            </h1>
            {user ? <LogOut /> : <Signin />}
        </div>
    )
}

export default Navbar