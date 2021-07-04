import React from "react";
import styled, { css } from "styled-components";
export const Card=styled.div`
display: flex;
flex-direction:row;
place-items: inherit;
align-items: center;
padding-left: 150px;


@media screen and (max-width:760px)
{
  flex-direction: column;
  padding-left: 10px;
}
`
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 20px 30px 0;
 
  width: 270px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
export const Cardimg=styled.div`
border-radius: 100%;
padding-left: 20px;
margin-top: -2px;
   
    
`
export const CardHeader = styled.header`
  padding-top: 32px;
  
`;

export const CardHeading = styled.h1`
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  padding-left: 20px;
`;

export const CardBody = styled.div`


`;

export const CardFieldset = styled.fieldset`

  padding-left: 20px;
  margin: 0;
  border: 0;

`;