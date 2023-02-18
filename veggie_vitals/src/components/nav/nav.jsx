import React from 'react'
import VeggieVitals from "../../assets/VeggieVitals.png"

import {
    Nav,
    Logo,
    Language,
    Container,
    SocialsLink,
} from './nav.elements'

const nav = () => {
  return (
    <Nav>
        <Logo src={VeggieVitals} alt="" />
        <Container>
            <Language>language</Language>
            <SocialsLink href="">ii</SocialsLink>
            <SocialsLink href="">ii</SocialsLink>
            <SocialsLink href="">ii</SocialsLink>
        </Container>
    </Nav>
  )
}

export default nav