import React from 'react'
import { loading } from '../assets'
import { ScrollParallax } from 'react-just-parallax'

const Generateing = ({ className }) => {
    return (
        <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-3xl
        ${className || " "} text-base
        `}>
            <img className='w-5 h-5 mr-4' src={loading} alt="loading" />
                <p>AI is generateing</p>

        </div>
    )
}

export default Generateing
