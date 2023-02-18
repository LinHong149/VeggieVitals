import styled from "styled-components";

export const Current = styled.div`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0;
    justify-content: start;
`

export const CurrentImage = styled.img`
    object-fit: cover;
    border: 1px solid green;
    width: 50vh;
    height: 50vh;
    max-width: 400px;
    max-height: 400px;
`

export const CurrentName = styled.h2`
    font-size: 3rem;
    border: 1px solid green;
    margin: 0;
`

export const CurrentDescription = styled.div`
    border: 1px solid blue;
`

export const CurrentDescriptionRow = styled.div`
    boder: 1px solid purple;
    display: flex;
    justify-content: space-between;
    width: 50vh;
    max-width: 400px;
`

export const CurrentTopic = styled.p`
    font-size: 1.2rem;
    color: #765658;
`

export const CurrentStats = styled.p`
    font-size: 1.2rem;
    color: #765658;
`

export const CurrentDescriptionLine = styled.hr`
    border-color: #765658;

`

export const CurrentButton = styled.button`
    width: 50vh;
    max-width: 400px;
    background-color: #A2B884;
    border: none;
    border-radius: 15px;
    color: #261B1C;
    max-height: 100px;
    height: 8vh;
    font-size: 1.2rem;
`