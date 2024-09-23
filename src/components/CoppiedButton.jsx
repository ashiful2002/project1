import React from 'react'
import { Gradient } from '../assets/design/Hero'
import { GradientLight } from '../assets/design/Benefits'

const CoppiedButton = () => {
    return (
        <div>

            <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden 
                rounded-md bg-green-950 px-6 font-medium text-neutral-50">
                <span class="absolute h-0 w-0 rounded-full bg-green-500 transition-all duration-300 
                    group-hover:h-56 group-hover:w-32">
                </span>
                <span class="relative">

                    Hover me</span>

            </button>
           
        </div>
    )
}

export default CoppiedButton
