import React,{useState,useEffect} from 'react'
import {Nav,NavContainer,NavLogo,MobileIcon,NavMenu,NavLink,NavItem,NavBtnLink,NavItemBtn,B} from "./Navbar.elements"
import * as FaIcons from "react-icons/fa"
import Like from '../iconcomponents/Like'
import { IconContext } from 'react-icons/lib'
import {Link} from "react-router-dom"
import { Button } from '../../Globalstyle'
const Navbar = () => {
    const [click, setclick] = useState(false);
    const [button, setButton] = useState([])
    const handleclick = ()=>setclick(!click);
    const closeMobileMenu = () => setclick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
    
      
           <Nav>
          <NavContainer>
              <NavLogo to="/">
                 <Like/>
              </NavLogo>
          <MobileIcon onClick ={handleclick} >
              <FaIcons.FaBars/>
              </MobileIcon>
              <NavMenu onClick={handleclick} click={click}>
                  <NavItem>
                      <NavLink  onClick={closeMobileMenu}>Features</NavLink>
                  </NavItem>

                  <NavItem>
                      <NavLink  onClick={closeMobileMenu}>Prices</NavLink>
                  </NavItem>

                  <NavItem>
                      <NavLink  onClick={closeMobileMenu}>Resources</NavLink>
                  </NavItem> 
                  <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/log-in'>
                    <B primary>Login</B>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/log-in'>
                    <B onClick={closeMobileMenu} >
                      Login
                    </B>
                  </NavBtnLink>
                )}
              </NavItemBtn>
                  <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <B >SIGN UP</B>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <B onClick={closeMobileMenu} fontBig primary>
                     Signup
                    </B>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              
              </NavMenu>
         
              
          </NavContainer>
       </Nav>
      
    
    )
}

export default Navbar
