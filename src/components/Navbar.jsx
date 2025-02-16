import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Pdf from "../Documents/resume.pdf";

const Navbar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [nav, setNav] = useState(false);

  const [navbar, showNavbar] = useState(false);

  const [navbarBackground, setNavbarBackground] = useState(false);

  let lastScrollY = 50;

  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
    setNav(!nav);
  };

  const changeBackground = () => {
    if (window.scrollY > lastScrollY) {
      showNavbar(true);
      if (window.scrollY >= 200) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    } else {
      if (window.scrollY === 0) {
        setNavbarBackground(false);
      }
      showNavbar(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const navbarClasses = `fixed w-full h-[80px] flex justify-between items-center px-4 font-bold z-10 navbar ${
    navbarBackground ? "bg-[#080f11] text-[#fff]" : "bg-transparent text-white"
  } ${
    navbar
      ? "opacity-0 -translate-y-full"
      : "opacity-100 -translate-y-0 border-b border-[#a5a5a5]"
  }`;

  return (
    <div>
      <section className={navbarClasses}>
        <div>
          <h1 className="text-2xl ml-2">Portfolio</h1>
        </div>
        {/* menu */}
        <ul
          className={
            navbar
              ? "hidden md:flex gap-x-8 tracking-[2px]"
              : "hidden md:flex gap-x-8 tracking-[2px] font-semibold"
          }
        >
          <li
            className={
              navbar
                ? "hover:text-[#ff8000] navbar-elements"
                : "navbar-not-scroll-elements"
            }
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            className={
              navbar
                ? "hover:text-[#ff8000] navbar-elements"
                : "navbar-not-scroll-elements"
            }
          >
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            className={
              navbar
                ? "hover:text-[#ff8000] navbar-elements"
                : "navbar-not-scroll-elements"
            }
          >
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li
            className={
              navbar
                ? "hover:text-[#ff8000] navbar-elements"
                : "navbar-not-scroll-elements"
            }
          >
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li
            className={
              navbar
                ? "hover:text-[#ff8000] navbar-elements"
                : "navbar-not-scroll-elements"
            }
          >
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 p-12">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#BC382E] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-10">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/praneeth-kamulu-3921a8178/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/kamulupraneeth/Portfolio"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Pdf}
              target="_blank"
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
