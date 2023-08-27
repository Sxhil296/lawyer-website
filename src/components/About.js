import React from 'react'
import LawyerImage from "../assets/img/aboutLawer.jpeg";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="section bg-[#f8f3eca1] pb-32">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-primary font-extrabold mb-4 lg:pb-10">About Me</h2>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto lg:mt-20'>
        <div className='flex flex-col justify-center md:items-start w-full  px-6 lg:px-0'>
          <img src={LawyerImage} alt="lawyer"  className='w-full' />
        </div>
        <div className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px] flex flex-col lg:ml-20 '>
        <p className=" text-justify  font-primary font-medium leading-[30px] pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consequatur autem ipsum voluptatem dolorem vitae perferendis, unde
          laudantium pariatur nemo voluptatibus molestiae quasi adipisci fugiat
          deleniti alias ipsa quae iste.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus ipsum corrupti expedita error harum asperiores adipisci, ipsam iure assumenda et quo possimus nesciunt atque est. Molestiae consectetur laboriosam nemo.
         
        </p>
        <Link to="contact" smooth={true}><button className='btn bg-primary hover:bg-primary-hover transition-all mt-20'>Contact</button></Link>
        </div>
      </div>
      
     
  
    </div>
  </section>
  )
}

export default About