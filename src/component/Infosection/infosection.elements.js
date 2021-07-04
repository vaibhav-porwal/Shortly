import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  align-content:column;
  margin-bottom: 0px;
`;

export const InfoRow = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  align-items: center;
  display: column;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-start" : 'row')};
`;

export const InfoColumn = styled.div`

  padding-right: 15px;
  padding-left: 15px;

  flex: 0.5;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    padding-left: 2px;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
 
  @media screen and (max-width: 768px) {
    
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  padding-left: 8px;
  justify-content: ${({ start }) => (start ? 'flex-end' : 'flex-start')};
  @media screen and(max-width:750px)
   {
    justify-self: flex-start;
   }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  
`;



export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 55px;
  line-height: 1.1;

  font-weight: 700;
  color: #9e9aa7;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;