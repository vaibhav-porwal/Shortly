  
import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../Globalstyle';


export const Nav = styled.nav`
  
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding-right: 60px;
  padding-left: 60px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;



export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
margin-left: 20px;

    width: 90%;
    height: 60vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3b3054;
  }
`;
export const B = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  padding: 15px;
  color: grey;
  font-size: 18px;
  background-color: #fff;

  outline: none;
  border: none;
  cursor: pointer;
  border-top-left-radius:20px;
     border-top-right-radius:20px;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
  
  &:hover {
    transition: all 0.3s ease-out;
    background-color: '#2acfcf' ;
  }
  @media screen and (max-width: 960px) {
    width: 40%;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    color:black;
   
  }
  @media screen and (max-width: 960px) {
    width: 70%;
    &:hover {
      border: none;
      
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLink = styled(Link)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
        color:black;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;