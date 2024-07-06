import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import {ReactTyped} from 'react-typed';
import bgImage from '../assets/bgImage.jpg';

const Home = ({ isMenuOpen }) => {
    return (
        <>
      
        <div
            name="home"
            className="h-screen w-full bg-[#BC382E] sm:w-full"
            style={{backgroundImage:`url(${bgImage})`,backgroundSize:'cover',backgroundPosition:'center'}}
        > 
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row gap-4">
                <div className="flex flex-col justify-center p-8 my-auto">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    <p className={isMenuOpen ? 'hide-cursor' : ''}>
                    <ReactTyped
                        strings={[
                            "I am Kamulu Praneeth",
                            "Expert Front End Developer",
                            "Passionate about Cutting-Edge Technologies",
                            "JavaScript and React Specialist",
                            "Building Seamless User Experiences",
                            "Innovative and Solution-Oriented"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    </p>
                    </h2>           
                    <p className="text-[#fff] py-4 max-w-md lg:max-w-3xl">
                        Let's connect to bring your ideas to life with modern web technologies
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-[20px] py-[10px] my-2 flex items-center text-[18px] rounded-md bg-[#ff8000] cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Home;