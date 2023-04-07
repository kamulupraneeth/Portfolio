import React, { useState, useEffect } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Pdf from '../Documents/praneeth-resume.pdf';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setNav(!nav);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const navbarClasses = navbar ? "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff] text-[#333] font-bold transition-all duration-500 ease-in-out" : "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#BC382E] text-gray-300"

    return (
        <div className={navbarClasses}>
            <div>
                <h1 className={navbar ? 'font-bold text-2xl rounded-lg py-[5px] px-[35px] bg-[#ff8000] text-[#fff]' : "font-extrabold text-2xl rounded-lg py-[0] px-[18px]"}>Portfolio</h1>
            </div>
            {/* menu */}
            <ul className={navbar ? "hidden md:flex gap-x-8 tracking-[2px]" : 'hidden md:flex gap-x-8 tracking-[2px] font-semibold'}>
                <li className={navbar ? "hover:text-[#ff8000] navbar-elements" : 'navbar-not-scroll-elements'}>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className={navbar ? "hover:text-[#ff8000] navbar-elements" : 'navbar-not-scroll-elements'}>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className={navbar ? "hover:text-[#ff8000] navbar-elements" : 'navbar-not-scroll-elements'}>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                {/* <li className='navbar-elements'>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li> */}
                <li className={navbar ? "hover:text-[#ff8000] navbar-elements" : 'navbar-not-scroll-elements'}>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#BC382E] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                {/* <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li> */}
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/praneeth-kamulu-3921a8178/' target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/kamulupraneeth/Portfolio' target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='javascript:void(0);kamulupraneeth@gmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={Pdf} target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;