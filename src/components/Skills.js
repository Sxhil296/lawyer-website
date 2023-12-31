import React from "react";

//import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="section  pb-32">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">What I do</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
        Navigating the legal landscape can be overwhelming. With a commitment to justice and expertise in various legal domains, I provide tailored solutions that prioritize your rights and interests. Let me guide you through legal complexities, ensuring a smoother path to resolution and peace of mind.
        </p>
        {/* skills grid */}
        <div className="lg:grid lg:grid-cols-3 gap-12">
          {skills.map((item, index)=> {
            const {icon, title, description} = item;
            return <div className="flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0">
              <img src={icon} alt="icons" className="mb-6" />
              <h4 className="text-2xl mb-2 font-primary font-bold">{title}</h4>
              <p className="max-w-[332px] lg:max-w-[350px]">{description}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
