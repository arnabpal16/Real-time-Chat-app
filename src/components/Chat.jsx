import React, { useEffect } from 'react'
import { useState, useeffect, useRef } from "react"
import Message from './Message'
import { db } from '../firebase'
import { auth } from 'firebase/auth'
import { query, collection, orderBy, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import SendMessage from './SendMessage'

const Chat = () => {
    const scroll = useRef(null);
    
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    const deletemessage = async (id) => {
        await deleteDoc(doc(db, 'messages', id))
    }

    return (
        <div className='flex flex-col h-full'>
            <main className='flex flex-col h-[80%] overflow-y-scroll mb-2 scroll-'>
                {
                    (messages.length === 0) ? (<p className='flex justify-center mt-24 text-sm text-blue-800  '>No messages yet </p>) :
                    (messages && messages.map((message) => (
                        <Message key={message.id} message={message} deletemessage={deletemessage} />
                    )))
                }
            </main>
            <SendMessage scroll={scroll} />
            {/* <span ref={scroll}></span> */}
        </div>
    )
}

export default Chat