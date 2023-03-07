import React from 'react'
import VeggieVitals from "../../assets/VeggieVitals.png"
import pfp_small from "../../assets/pfp_small.png"

import {
    Nav,
    Logo,
    Language,
    Container,
    SocialsLink,
    ForumLink,
    Image
} from './nav.elements'

const nav = () => {
  return (
    <Nav>
        <Logo src={VeggieVitals} alt="" />
        <Container>
            <Language>Language</Language>
            <ForumLink to="/VeggieVitals/forum">Forum</ForumLink>
            <Image src={pfp_small} alt=""/>
        </Container>
    </Nav>
  )
}

export default nav