import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter,FaYoutube} from 'react-icons/fa';
import{
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    SocialIcons,
    SocialIconsLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            {/*<FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/login">How it works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/login">How it works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/login">How it works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/login">How it works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>*/}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        NEXUS
                    </SocialLogo>
                    <WebsiteRights>NEXUS  ©  {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;