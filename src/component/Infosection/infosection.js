import React from 'react';
import Info from '../iconcomponents/Info';
import { Link } from 'react-router-dom';
import { Container } from '../../Globalstyle';
import { Button2 } from '../../Globalstyle';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from "./infosection.elements";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <Heading >More than just shorter links </Heading>
                <Subtitle >Build your brand's recoginition and get detailed insights on how  your  linksare performing</Subtitle>
                <Link >
                  <Button2  primary >
                    GetStarted
                  </Button2>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
               <Info/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;