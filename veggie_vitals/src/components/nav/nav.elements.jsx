import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    height: 10vh;
    // border: 1px solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
`

export const Logo = styled.img`
    // border: 1px solid green;
    height: 8vh;
`

export const Language = styled.button`
    border: none;
    background: none;
    font-size: 1rem;
    height: 8vh;
    color: #E2D5CA;
    // border: 1px solid green;
    height: min-content;
    margin: 0;
`

export const Container = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    
`

export const SocialsLink = styled.div`
    font-size: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ForumLink = styled(Link)`
    border: none;
    background: none;
    font-size: 1rem;
    height: 8vh;
    color: #E2D5CA;
    // border: 1px solid green;
    height: min-content;
    margin: 0;
`