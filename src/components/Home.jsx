import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll";

const Home = ({ content }) => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#BC382E]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        {content?.fields.landing_caption}
                        {/* I'm a Full Stack Web Developer */}
                    </h2>
                    <p className="text-[#fff] py-4 max-w-md">
                        {content?.fields.landing_main_details}
                        {/* I have 4 years of experience in graphics design and web development.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next.js and Mongodb. */}
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
                <div className='hidden'>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;