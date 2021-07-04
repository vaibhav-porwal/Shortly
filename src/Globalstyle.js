import styled ,{createGlobalStyle} from "styled-components"

const Globalstyle=createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    font-family: Poppins;
    
   
}
`
export const Container=styled.div`
 width:100%;
 z-index: 1;
 margin-right:auto;
 margin-left: auto;
 max-width: 1440px;
 padding-left:80px;
 padding-right: 80px;
 max-width: 1440px;
 @media screen and(max-width:990px)
 {
     padding-left: 30px;
     padding-right: 30px;
     
 }
`
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#2acfcf' : '#3b3054')};
  white-space: nowrap;
  padding: 15px;
  color: #fff;
  font-size: 18px;

  outline: none;
  border: none;
  cursor: pointer;
  border-top-left-radius:20px;
     border-top-right-radius:20px;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
  
  &:hover {
    transition: all 0.3s ease-out;
    
  }
  @media screen and (max-width: 960px) {
    width: 40%;
  }
`;
export const Button2 = styled.button`
border-radius: 8px; 
 background: ${({ primary }) => (primary ? '#2acfcf' : '#3b3054')};
 white-space: nowrap;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;  
  border-top-left-radius:25px;
     border-top-right-radius:25px;
border-bottom-right-radius:25px;
border-bottom-left-radius:25px;

&:hover {
  transition: all 0.3s ease-out;
  
  
}
@media screen and (max-width: 960px) {
  width: 90%;
}
`;
export default Globalstyle;