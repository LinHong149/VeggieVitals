import React from 'react'
import VeggieVitals from "../../assets/VeggieVitals.png"

import {
    Nav,
    Logo,
    Language,
    Container,
    SocialsLink,
    ForumLink
} from './nav.elements'

const nav = () => {
  return (
    <Nav>
        <Logo src={VeggieVitals} alt="" />
        <Container>
            <Language>Language</Language>
            <ForumLink to="/forum">Forum</ForumLink>
        </Container>
    </Nav>
  )
}

export default nav