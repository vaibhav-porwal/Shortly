import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #232127;
margin:0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterShort=styled.div`

`
export const Nalogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;


export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;


  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;


  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #2acfcf;
    transition: 0.3s ease-out;
  }
`;

export const SocialLogo = styled(Link)`
   
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

`;


export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;



export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  &:hover {
     color: #2acfcf;
    transition: 0.3s ease-out;
  }
`;

export const SocialIconLink = styled.a`
  color: #2acfcf;
  
`;
