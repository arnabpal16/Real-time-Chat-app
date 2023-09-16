import React, { useState } from 'react'
import { auth, db } from "../firebase"
import send from "../assets/send.png"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const SendMessage = ({ scroll }) => {
    const [formData, setFormData] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (formData === '') {
            alert('please enter a valid string')
            return
        }
        const user = auth.currentUser;
        if (!user) {
           
            alert('login first to send message');
            return;
        }
        const { uid, displayName } = user
        if (!uid) {
            alert('login first to send message');
            return;
        }
        await addDoc(collection(db, 'messages'), {
            text: formData,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setFormData('')
        // scroll.current.scrollIntoView({ behaviour: 'smooth' })
    }
    return (
        <div className='h-[20%]'>
            <form className='h-12 w-full px-2 justify-center flex text-xl absolute bottom-0 ' onSubmit={sendMessage}>
                <input
                    type='text'
                    placeholder='type here...'
                    value={formData}
                    className= 'w-[100%] px-2 rounded-md'
                    
                    onChange={(e) => {
                        setFormData(e.target.value)
                    }}></input>
                <button type='submit'> <img src={send}  className="bg-yellow-500 rounded-xl p-2 h-12" alt='send-icon'/></button>
            </form>
        </div>
    )
}

export default SendMessage