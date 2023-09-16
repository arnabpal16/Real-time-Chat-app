import React from 'react'
import { auth } from '../firebase'
import log from "../assets/logout.png"

const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
    return (
        <div onClick={() => auth.signOut()} className='flex'>
            <img src={log} className=' p-1 rounded-lg cursor-pointer transition-all duration-500 transform px-4 py-2 m-4 inline
               bg-white 
               border-2 border-blue-700 hover:border-yellow-500
               hover:shadow-md
               hover:scale-124  '/>
        </div>
    )
}

export default LogOut