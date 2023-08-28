import React from "react";

import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact Me
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
        Your legal concerns deserve personalized attention. Reach out to me today to discuss your case and explore the best legal solutions. I'm here to provide clear guidance and support, ensuring your rights are protected and your questions are answered. Let's work together to achieve the results you need.
        </p>
        {/* form */}
        <form
          action=""
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[64px]"
        >
          <input type="text" placeholder="Your Name" className="form-control" />
          <input
            type="email"
            placeholder="Your Email Address"
            className="form-control"
          />
          <textarea className="textarea" placeholder="Your Message"></textarea>
          <button className="btn bg-accent hover:bg-accent-hover">
            Send Message
          </button>
        </form>
        {/* socials */}
        <div className="flex items-center justify-between max-w-[205px] mx-auto">
            {social.map((item, index)=> {
                return (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={item.icon} alt="social" />
                    </a>
            
                )

            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
