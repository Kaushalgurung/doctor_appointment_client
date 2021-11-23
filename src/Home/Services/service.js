import React from "react";
import Icon1 from "../../Images/svg-1.svg";
import Icon2 from "../../Images/svg-2.svg";
import Icon3 from "../../Images/svg-3.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./serviceElement";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Lorem Ipsum</ServicesH2>
            <ServicesP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Lorem Ipsum</ServicesH2>
            <ServicesP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Lorem Ipsum</ServicesH2>
            <ServicesP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
