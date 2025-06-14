import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [lastScrolly, setLastScrolly] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = () => {
        const currentScrolly = window.scrollY

        if (currentScrolly > lastScrolly && isHeaderVisible) {
            setIsHeaderVisible(false)
        } else if (currentScrolly < lastScrolly && !isHeaderVisible) {
            setIsHeaderVisible(true)
        }

        setLastScrolly(currentScrolly);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrolly, isHeaderVisible])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (

        <header className={`fixed z-10 flex items-center justify-between md:top-2 md:left-40 md:right-40 w-full md:w-auto py-2 md:py-1 px-5 md:px-10 md:rounded-lg bg-second text-fourth
            transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-40'} `}>
            <Link to="/" className='h-10 md:h-auto'>SUA LOGO</Link>
            <nav className='hidden md:flex space-x-10'>
                <Link className='text-h3  text-fourth hover:text-hover p-3' to="/about">Sobre Nós</Link>
            </nav>
            <button onClick={toggleMenu} className='md:hidden focus:outline-none text-fourth' aria-label='Abrir Menu'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {isMenuOpen && (<nav className="absolute top-10 right-0 bg-second text-fourth p-5 shadow-lg flex flex-col space-y-4 md:hidden">
                <Link className='text-h3 hover:text-hover' to="/about">Sobre Nós</Link>
            </nav>)}
        </header>

    )

}

export default Header;
