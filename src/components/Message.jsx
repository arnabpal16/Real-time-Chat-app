import React from 'react'
import { auth } from "../firebase"
import del from "../assets/delete.png"

const style = {
    message:`flex flex-col items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-b-full rounded-tr-full `,
    name : `absolute mt-[-4rem] text-xs`,
    sent : `bg-pink-400 text-yellow-100 flex-row-reverse text-end float-right`,
    received : `text-yellow-100 bg-blue-400  float-left text-start `
}
const Message = ({ message, deletemessage }) => {
    const messageClass = message.uid ===auth.currentUser.uid ? `${style.sent}` : `${style.received}`
    return (
        <div>
            <div className={`${style.message} ${messageClass}`}>

                <div className='flex  items-center'>
                    <div className='{style.message}'>
                        <p className='{style.name}'>
                            {message.name}
                        </p>
                        <p className='text-black break-all whitespace-pre-wrap font-mono font-bold  '>{message.text}</p>
                    </div>
                    {
                        (message.uid ===auth.currentUser.uid) ? (<img className="h-[20px] cursor-pointer w-[20px]" src={del} alt='delete-icon' onClick={() => deletemessage(message.id)} />) : (null)
                    }
                </div>
            </div>
        </div>
    )
}

export default Message
