import React,{useState} from 'react';
import Sidebar1 from './Sidebar1';
import Navbar1 from './Navbar1';
import Footer from './Footer';
import Dashboard from './Dashboard';
const User = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar1 isOpen={isOpen} toggle={toggle} />
        <Navbar1 toggle={toggle} />
        <Dashboard />
        <Footer />
    </>
  )
}

export default User;