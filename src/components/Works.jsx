import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                <section className='flex flex-col md:flex-row lg:flex-row gap-10 justify-center'>
                <div class="flex items-center justify-center">
    <a href="https://www.glowjewels.com/" target="_blank" class="w-48 h-48 bg-[#273248] rounded-md flex items-center justify-center shadow-lg shadow-[#040c16] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#82401d] duration-300">
        Glow Jewels
    </a>
</div>
<div class="flex items-center justify-center">
    <a href="https://play.google.com/store/apps/details?id=com.bawarchibiryanis.app" target="_blank" class="w-48 h-48 bg-[#273248] rounded-md flex items-center justify-center shadow-lg shadow-[#040c16] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#82401d] duration-300">
        Bawarchi Biryanis
    </a>
</div>
<div class="flex items-center justify-center">
    <a href="https://www.idestination.online/" target="_blank" class="w-48 h-48 bg-[#273248] rounded-md flex items-center justify-center shadow-lg shadow-[#040c16] font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#82401d] duration-300">
        iDestination
    </a>
</div>
</section>
            </div>
        </div>
    );
};
export default Works;