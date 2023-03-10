import React from 'react'
import Potato from "../../assets/Potato.png"
import onion from "../../assets/onion.png"
import artichoke from "../../assets/artichoke.png"
import mushroom from "../../assets/mushroom.png"
import pepper from "../../assets/pepper.png"
import asparagus from "../../assets/asparagus.png"
import broccoli from "../../assets/broccoli.png"
import tomato from "../../assets/tomato.png"

import {
  Container, 
  SubContainer,
  Sub, 
  Image,
  Text
} from "./ingredients.elements"

const ingredients = () => {
  return (
    <Container> 
      <SubContainer>
        <Sub>
          <Image src={Potato} alt=""/>
          <Text>Potato</Text>
        </Sub>
        <Sub>
          <Image src={pepper} alt=""/>
          <Text>Red Pepper</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
          <Image src={artichoke} alt=""/>
          <Text>Artichoke</Text>
        </Sub>
        <Sub>
          <Image src={mushroom} alt=""/>
          <Text>Mushroom</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
          <Image src={onion} alt=""/>
          <Text>Onion</Text>
        </Sub>
        <Sub>
          <Image src={asparagus} alt=""/>
          <Text>Asparagus</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
          <Image src={broccoli} alt=""/>
          <Text>Tree</Text>
        </Sub>
        <Sub>
            <Image src={tomato} alt=""/>
            <Text>Tomato</Text>
        </Sub>
      </SubContainer>
    </Container>
  )
}

export default ingredients