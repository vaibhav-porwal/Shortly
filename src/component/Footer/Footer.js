
import React from 'react';
import Facebook from '../iconcomponents/Facebook';
import Instagram from '../iconcomponents/instagram';
import Pinstret from '../iconcomponents/pinstret';
import Twitter from '../iconcomponents/Twitter';
import {
  FooterContainer,FooterShort,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIcons,
  SocialIconLink, Nalogo
} from './Footer.elements';
import Like from '../iconcomponents/Like';
import { NavLogo } from '../Navbar/Navbar.elements';

function Footer() {
  return (
    <FooterContainer>
  
      <FooterLinksContainer>
   
        <FooterLinksWrapper>
       <Nalogo><Like/></Nalogo>
        <FooterLinkItems>
       
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Features</FooterLinkTitle>
            <FooterLink to='/'>Link Shortening</FooterLink>
            <FooterLink to='/'>Branded Links</FooterLink>
            <FooterLink to='/'>Analytics</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to='/'>Blog </FooterLink>
            <FooterLink to='/'>Developer</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink to='/'>About</FooterLink>
            <FooterLink to='/'>Our team</FooterLink>
            <FooterLink to='/'>Carrer</FooterLink>
            <FooterLink to='/'>Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
             <Facebook/>
            </SocialIconLink>
           
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
            <Twitter/>  
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
             <Pinstret/>
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
          <Instagram/>
            </SocialIconLink>
          </SocialIcons>
          
      </FooterLinksContainer>
   
    </FooterContainer>
  );
}

export default Footer;