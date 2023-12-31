import React from "react";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatsAppChatIcon from "./components/WhatsAppChatIcon";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import DirectCallButton from "./components/DirectCallButton";



const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <About />
      <Skills />
      <Newsletter />
      <Contact/>
      <Footer />
      <WhatsAppChatIcon />
      <BackToTopBtn />
      <DirectCallButton />
    </div>
  );
};

export default App;
