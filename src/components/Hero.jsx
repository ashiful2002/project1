import React, { useRef } from 'react'
import Section from './Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import { BackgroundCircles, BottomLine, Gradient } from '../assets/design/Hero'
import { heroIcons } from '../Constants'
import { ScrollParallax } from 'react-just-parallax'
import Generateing from './Generateing'
import Notification from './Notification'
import CompanyLogos from './CompanyLogos'

const Hero = () => {

    const paralaxRef = useRef(null)


    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" 
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id='hero'

        >
            <div className='container relative' ref={paralaxRef}>
                <div className="relative z-1 
           max-w[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-24 ">
                    <h1 className='h1 mb-6'>Ashiful Islam</h1>
                    <span className='inline-block relative text-2xl mb-5'>
                        Web developer{""}
                        <img src={curve} alt="curve image"
                            className='absolute top-full left-0 w-full xl:mt-2 '
                            width={624}
                            height={28}

                        />
                    </span>
                    <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8
                    
                    '>A passionated front end developer</p>
                    <Button
                        href="/pricing"
                        white


                    >get started</Button>
                </div>

                <div className='relative max-w-96 mx-auto  md:max-w-5xl lg:mb-24'>
                    <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient '>
                        <div className='relative bg-n-8 rounded-[1rem]'>
                            <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                            <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect[688/490]
                            lg:aspect-[1024/490]
                            '>
                                <img
                                    src={robot}
                                    className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%]  lg:-translate-y-[23%]'
                                    width={1024}
                                    height={490}
                                    alt="ai"
                                />

                                <ScrollParallax isAbsolutelyPositioned>
                                    < Generateing className="absolute left-4 right-4 bottom-5
                                md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 
                                "/>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 
                                    bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex
                                    '>
                                        {heroIcons.map((item, index) => (
                                            <li className='p-5 ' key={index} >
                                                <img src={item} alt="icon" height={25} width={24} />
                                            </li>
                                        ))}
                                    </ul>
                                    < Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                        title="Code Generating"
                                    />


                                </ScrollParallax>
                            </div>
                        </div>
                        < Gradient />
                    </div>
                    <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2
                    md:-top-[46%] lg:-top-[104%]
                    '>
                        <img src={heroBackground}
                            className='w-full'
                            width={1440}
                            height={1800}
                            alt="hero image" />
                    </div>

                </div>
                < BackgroundCircles />
                < CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
            </div>
            < BottomLine />
        </Section >
    )
}

export default Hero
