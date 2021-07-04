import styled from 'styled-components';



export const StyledFormWrapper = styled.div`
  display: flex;
  max-width: 100%;
  
  
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding: 0 20px;
  @media screen and (max-width:600px)
   {
     flex-direction: column;
   }
`;
export const StyledFW = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding: 0 10px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  max-width: 1000px;
  padding: 40px;
  background-color: #3b3054;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const StyledF = styled.form`
  width: 100%;
  display: flex;
  max-width: 1000px;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  
`;

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
 
`;
export const StyledOut=styled.div`
display: flex;

`

export const StyledUrl=styled.h2`
display: flex;
font-weight: 500;
font-size: 18px;
width: initial;
text-align: left;
padding-right: 600px;
@media screen and (max-width:900px)
  {
    padding-right:100px ;
  }


`
export const StyledSho=styled.h2`
display: flex;
font-weight: 500;
font-size: 18px;
width: initial;
justify-content: right;
text-align: right;
`



export const StyledButton = styled.button`
  display: block;
width: 150px;;
justify-self: flex-end;
  background-color: #2acfcf;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  
  margin-left: 5px;
`;



export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;


