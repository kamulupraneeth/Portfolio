import React, { useState } from 'react';
import { saveFormData } from '../index';
import { getAnalytics } from "firebase/analytics";
import profile from '../assets/photo.png';

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [submitMessage,setSubmitMessage] = useState('');

    const analytics = getAnalytics(); // 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        if(!name || !email || !phone || !message){
            setSubmitMessage('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        try{
          await saveFormData(name,email,phone,message,analytics);
          setSubmitMessage('Message sent successfully!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');

        }catch(error){  
            setSubmitMessage('Error sending message.Please try again.')
        }finally{
            setIsSubmitting(false);
        }   
    }

    return (
        <form onSubmit={handleSubmit}>
             <div name='contact' className='w-full bg-[#E67402] flex justify-center items-center p-4 relative'>
                <section className='flex flex-col lg:flex-row justify-between w-full max-w-[80%] items-center'>
                   <div className='flex flex-col items-center'>
                    <img src={profile} alt='Profile photo' className='rounded-md transition-transform duration-300 transform hover:scale-110 w-1/2'/>
             <div className='pt-8 flex flex-col text-2xl'>
                    <p className='border-cyan-500 text-gray-300'>Email: kamulupraneeth@gmail.com</p>
                    <p className='text-gray-300 py-4'>Phone: +919966089784</p>
                </div>
                </div>
            <div className='flex flex-col max-w-[600px] w-full contact_main_section'>
            {/* <div className='pb-8 flex flex-col justify-end w-full h-full items-end absolute left--10 top-10 bottom-0'>
                    <p className='text-2xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Email:kamulupraneeth@gmail.com</p>
                    <p className='text-gray-300 py-4'>Phone:+919966089784</p>
                </div> */}
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Send me a message</p>
                </div>
               
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input className='contact_section my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="tel" placeholder='Phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Let's Collaborate"}
                </button>
                
                {submitMessage && <p className='text-green-300 text-center'>{submitMessage}</p>}
               
            </div>
            </section>
        </div>
        </form>
       
    )
}
export default Contact