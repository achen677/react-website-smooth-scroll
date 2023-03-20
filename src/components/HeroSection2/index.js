import React, { useState } from "react";
import Carousel from 'better-react-carousel'

import {
  HeroContainer,
} from "./HeroElements";

import car1 from "../../images/wh1.png";
import car2 from "../../images/wh2.png";
import car3 from "../../images/wh3.png";

function HeroSection2() {
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

export default HeroSection2;
