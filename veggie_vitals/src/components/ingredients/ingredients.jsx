import React from 'react'
import Potato from "../../assets/Potato.png"
import onion from "../../assets/onion.png"
import artichoke from "../../assets/artichoke.png"
import mushroom from "../../assets/mushroom.png"
import avocado from "../../assets/avocado.png"
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
        <Text>POTAAAAAAATO</Text>
        </Sub>
        <Sub>
          <Image src={avocado} alt=""/>
          <Text>FRESHAVACADO</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
        <Image src={artichoke} alt=""/>
        <Text>CHOKE</Text>
        </Sub>
        <Sub>
          <Image src={mushroom} alt=""/>
          <Text>SHROOOOMS</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
        <Image src={onion} alt=""/>
        <Text>ONIOOONNNN</Text>
        </Sub>
        <Sub>
          <Image src={asparagus} alt=""/>
          <Text>SPRAGUSS</Text>
        </Sub>
      </SubContainer>
      <SubContainer>
        <Sub>
        <Image src={broccoli} alt=""/>
        <Text>TREEEE</Text>
        </Sub>
        <Sub>
          <Image src={tomato} alt=""/>
          <Text>TOESSSS</Text>
        </Sub>
      </SubContainer>
    </Container>
  )
}

export default ingredients