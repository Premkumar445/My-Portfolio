import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-6 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white shadow-sm dark:bg-darkTheme dark:shadow-white/30">
        <p> PK... </p >
        

        <ul className="hidden md:flex items-center gap-5 lg:gap-7 rounded-full px-6 py-2 text-base dark:border-white/50 dark:bg-transparent">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              className="w-6"
            />
          </button>
          <br/>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-md font-Ovo text-sm dark:border-white/10"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-2" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* ----- Mobile Side Menu ----- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-24 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-6 cursor-pointer"
            />
          </div>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">Projects</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
