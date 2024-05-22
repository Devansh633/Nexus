import React,{useState, useEffect} from 'react';
import { Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    BarIcon} from './NavbarElements';

import { animateScroll as scroll } from 'react-scroll';
    
const Navbar1 = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>NEXUS</NavLogo>
                <MobileIcon onClick={toggle}>
                    <BarIcon />
                </MobileIcon>
                <NavBtn>
                    <h1>User</h1>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="logout">Log out</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    
    </>
  )
}

export default Navbar1;

