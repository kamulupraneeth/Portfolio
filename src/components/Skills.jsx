import React from 'react';

const Skills = ({ content }) => {

    const skills = ['Html5','Css3','Bootstrap 4,5','JavaScript','React Js','React Native','Tailwind Css'];

    return (
        <div name='skills' className='w-full h-screen bg-[#577783] text-gray-300'>
            {/* Container */}
            <div className='skill_section max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>{content?.fields.skill_header}</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skills.map((skill, index) => {
                        return (
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <p className='my-4'>{skill}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default Skills;