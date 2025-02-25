import React from 'react'
import Section from './Section'
import Heading from './Heading'
import CoppiedButton from './CoppiedButton'
import { check, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons, serviseText2 } from '../Constants'
import Generateing from './Generateing'
import {
    PhotoChatMessage,
    Gradient,
    VideoBar,
    VideoChatMessage
} from '../assets/design/Services'
const Services = () => {
    return (
        <Section id="how-to-use" crosses>
            <div className='container'>
                < Heading title="Generetive AI made for creators."
                    text={serviseText2}
                />

                <div className='relative'>
                    <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border-n-1/10 
                    rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] 
                    '>
                        <div className='absolute top-0 left-0 w-full
                        h-full pointer-events-none md:w-3/5 xl:w-auto 
                        '>
                            <img src={service1}
                                className='w-full '
                                width={800}
                                height={730}
                                alt="smartest AI" />
                        </div>
                        <div className='relative z-1 max-w-[17rem] ml-auto'>
                            <h4 className='h4 mb-4'>Smartest AI</h4>
                            <p className='body-2 mb-12 text-n-3 '>{serviseText2}</p>
                            <ul className='body-2'>{brainwaveServices.map((item, index) => {
                                return <li key={index}
                                    className='flex items-start py-4 border-t border-n-6'
                                >
                                    <img src={check} width={24} height={24} />
                                    <p className='ml-4'>{item}</p>
                                </li>
                            })}</ul>
                        </div>
                        < Generateing className=' absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 
                        lg:right-auto lg:bottom-8 lg:translate-x-1/2 
                        ' />
                    </div>
                    <div className="relative z-1 grid gap-3 lg:grid-cols-2 ">
                        <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden '>
                            <div className='absolute inset-0'>
                                <img src={service2} alt="robote 2"
                                    className='w-full object-cover '
                                    width={630}
                                    height={750}
                                />
                            </div>
                            <div className='absolute inset-0 flex flex-col justify-end 
                            p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15
                            '>
                                <h4 className='h4 mb-4'>Photo Editing</h4>
                                <p className='body-2 mb-12 text-n-3 '>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                            </div>
                            < PhotoChatMessage />
                        </div>
                        <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem ]'>
                            <div className='py-12 px-4 xl:px-8'>
                                <h4 className='h4 mb-4'>video jeneration </h4>
                                <p className='body-2 mb-8 text-n-3'>The world's most powerful AI photo and video art generation engine. What will you create?</p>
                            </div>
                            <ul className='flex items-center justify-between'>
                                {
                                    brainwaveServicesIcons.map((item, index) => (
                                        <li key={index} className={`flex items-center justify-center  rounded-2xl
                                        ${index === 2 ? "w-12 h-12 p-0.3 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] "
                                                : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}
                                        `}>
                                            <div className={index === 2 ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1.3rem]"
                                                : ""} >
                                                <img src={item} width={24} height={24} alt="icon" />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                            <img src={service3}
                                className='w-full h-full object-cover'
                                alt="services robot"
                                height={520}
                                width={400}
                            />
                            < VideoChatMessage />
                            < VideoBar />
                        </div>
                        </div>
                     
                    </div>
                </div>
                < Gradient />
            </div>

        </Section >
    )
}

export default Services
