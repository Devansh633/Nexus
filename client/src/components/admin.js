import React,{useState} from 'react';
import Sidebar1 from './Sidebar1';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import AdminMenu from './adminmenu'
const Admin = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar1 isOpen={isOpen} toggle={toggle} />
        <Navbar2 toggle={toggle} />
        <AdminMenu />
        <Footer />
    </>
  )
}

export default Admin;