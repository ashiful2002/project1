import React, { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { brainwave } from '../assets'
import { navigation } from '../Constants/index'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { HambugerMenu } from '../assets/design/Header'
const Header = () => {

    const [openNavigation, setOpentavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpentavigation(false);
            enablePageScroll()
        } else {
            setOpentavigation(true);
            disablePageScroll()
        }
        // setOpentavigation(!openNavigation)
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll()
        setOpentavigation(false)
    }
    const pathName = useLocation()
    return (

        <div className={`fixed top-0 l-0 w-full z-50 border-b border-n-6
         lg:border-n-8/90 lg:backdrop:blur-sm ${openNavigation ? "bg-n-8" : " bg-n-8/90 lg:backdrop:blur-sm"}`}>
            <div className='flex items-center px-5 lg:px-7.5 max-lg:py-4 '>
                <a className='flex items-center px-5 lg:px-7.5' href='#'>
                    <img src={brainwave} width={190} height={40} alt='brainwave' />
                </a>



                <nav className={`${openNavigation ? "flex" : "hidden"}   fixed top-[5rem] left-0 right-0
            bottom-0 bg-n-8 lg:static lg:flex lg:m-auto lg:bg-transparent
            `}>

                    <div className="relavive z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {
                            navigation.map((item) => {
                                return <a
                                    onClick={handleClick}
                                    className={`block relative font-code text-2xl uppercase
                                                 text-n-1 transition-colors hover:text-color-1 
                                                 ${item.onlyMobile ? "lg:hidden" : " "}  
                                                 px-6 py-6 md:py-8 lg:-mr-0.25 
                                                 lg:text-xs lg:font-semibold  
                                                 ${item.url === pathName.hash ? "z-2 lg:text-n-1"
                                            : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
                                    href={item.url} key={item.id}>
                                    {item.title}
                                </a>

                            })
                        }

                    </div>
                    < HambugerMenu />
                </nav>
                <a href="#signup" target="_blank"
                    className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
                >New account</a>
                <Button
                    className="hidden lg:flex " href="#login"
                    onClick={toggleNavigation}
                >sign in</Button>
                <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                    < MenuSvg openNavigation={openNavigation} />
                </Button>
            </div >
        </div>
    )
}

export default Header
