import React from 'react'

const Appointment = () => {
  return (
    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>Get an appointment</h3>
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>
      {/* input group */}
      <form className='space-y-[24px] '>
      <input type="text" className='form-control' placeholder='Full Name'/>
      <input type="text" className='form-control' placeholder='Contact Number'/>
      <input type="email" className='form-control' placeholder='Email Address'/>
      <textarea className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary' placeholder='Your Message'></textarea>
      <button className='btn bg-primary hover:bg-primary-hover transition-all'>Send Message</button>
      </form>
    </div>
  )
}

export default Appointment