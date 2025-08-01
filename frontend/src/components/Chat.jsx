import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Chat = () => {
    const [bounce, setBounce] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setBounce(true)
            setTimeout(() => {
                setBounce(false)
            }, 5000) // Bounce every second
        }, 5000)
        return () => clearInterval(interval) // Cleanup on unmount
    }, [])
  return (
    <div className='fixed bottom-4 right-[50px] z-50' onClick={() => navigate('/ai-chat')} >
        <img width={50} height={50} src={assets.chat} className={bounce ? 'animate-bounce' : ''} alt="" />
    </div>
  )
}

export default Chat