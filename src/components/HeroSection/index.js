import React, { useState } from "react";
import Carousel from 'better-react-carousel'

import {
  HeroContainer,
} from "./HeroElements";

import car1 from "../../images/cf1.jpg";
import car2 from "../../images/cf2.jpg";
import car3 from "../../images/cf3.jpg";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <>
      <HeroContainer id="home">
      <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
      <img style={{ width: "50%", height: "85%", alignSelf: 'center'}} src={car1} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ width: "50%", height: "85%", alignSelf: 'center'}} src={car2} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ width: "50%", height: "85%", alignSelf: 'center'}} src={car3} alt="Logo" />
      </Carousel.Item>
      </Carousel>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
