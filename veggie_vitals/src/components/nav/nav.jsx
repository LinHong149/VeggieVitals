import React from 'react'
import VeggieVitals from "../../assets/VeggieVitals.png"

import {
    Nav,
    Logo,
    Language,
    Container,
    SocialsLink,
    Link
} from './nav.elements'

const nav = () => {
  return (
    <Nav>
        <Logo src={VeggieVitals} alt="" />
        <Container>
            <Language>Language</Language>
            <Link>Forum</Link>
        </Container>
    </Nav>
  )
}

export default nav