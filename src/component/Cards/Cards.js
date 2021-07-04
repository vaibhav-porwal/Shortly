import React from "react";
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,Card,
  Cardimg,
  CardFieldset,
  
} from "./Cards.elements"
import Brand from "../iconcomponents/brand";
import Detail from "../iconcomponents/detail";
import Face from "../iconcomponents/face";


function Cards() {
  return (
  
     <Card>
          <CardWrapper primary>
              <Cardimg>
                  <Brand />
              </Cardimg>
        <CardHeader>
          <CardHeading>Brand Recognition</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
           Boost your Brand recoginition with one Click.Generic links don't mean  a thing.Branded links help instil confidence in your content
          </CardFieldset>

        </CardBody>
      </CardWrapper>
       <CardWrapper>
          <Cardimg>
          <Detail/>
          </Cardimg>
       <CardHeader>
         <CardHeading>Detailed Records</CardHeading>
       </CardHeader>

       <CardBody>
         <CardFieldset>
        Get insigts of who is clicking into the links.Knowing when and where people engage with your content helpsinform better decision
         </CardFieldset>

       </CardBody>
     </CardWrapper>
      <CardWrapper>
      <Cardimg>
                <Face/>
      </Cardimg>
      <CardHeader>
        <CardHeading>Fully Customized</CardHeading>
      </CardHeader>

      <CardBody>
       
        <CardFieldset>
       improve brand awareness and content discoverability through customized links, supercharging audience engageement
        </CardFieldset>

      </CardBody>
    </CardWrapper>
     </Card>
    
      
    
  );
}

export default Cards;