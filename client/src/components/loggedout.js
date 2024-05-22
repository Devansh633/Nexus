import React,{useState} from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import {
  homeObj1,
  homeObj2,
  homeObj3 } from './InfoSection/Data';
import Services from './Services';
import Footer from './Footer';


const LoggedOut = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObj1}/>
        <InfoSection {...homeObj2}/>
        <Services />
        <InfoSection {...homeObj3}/>
        <Footer />
        

    </>
    
  );
};


export default LoggedOut;