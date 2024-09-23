import React from 'react'
import Section from './Section'
import { socials } from '../Constants'

const Footer = () => {
    return (
        <Section crosses
            className="!px-0 !py-0"
        >
            <div className='container flex sm:justify-between justify-center items-center 
           gap-10 max-sm:flex-col 
           '>
                <p className='caption text-n-4 lg:block'>{new Date().getFullYear()} &copy; all right reserved</p>
                <ul className='flex gap-5 flex-wrap'>
                    {
                        socials.map((item, index) => (
                            <a key={index} href={item.url} target='_blank' 
                            className='flex items-center justify-center h-10 w-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'
                            >

                                <img src={item.iconUrl} alt={item.title}
                                    width={16} height={16}
                                />
                               
                            </a>
                        ))
                    }
                </ul>
            </div>
        </Section>
    )
}

export default Footer
