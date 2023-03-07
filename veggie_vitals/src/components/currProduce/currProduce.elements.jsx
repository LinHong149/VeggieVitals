import styled from "styled-components";

export const Current = styled.div`
    width: 40vw;
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    justify-content: start;
    position: relative;
    padding: 2vw;
`

export const CurrentImage = styled.img`
    object-fit: scale-down;
    // border: 1px solid green;
    width: 60vh;
    height: 40vh;
    max-width: 400px;
    max-height: 400px;
`

export const CurrentName = styled.h2`
    font-size: 3rem;
    // border: 1px solid green;
    width: 36vw;
    text-align: start;
    margin: 0;
`

export const CurrentDescription = styled.div`
    // border: 1px solid blue;
    width: 36vw;
`

export const CurrentDescriptionRow = styled.div`
    // border: 1px solid purple;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    margin: 0;
    width: 36vw;

`

export const Buttons = styled.div`
    width: 36vw;
    display: flex;
    gap: 20px;
    max-height: 100px;
    height: 8vh;
    position: absolute;
    bottom: 30px;
`

export const GardenButton = styled.button`
    flex: 4 1;
    padding: 0 20px;
    background-color: #A2B884;
    border: none;
    border-radius: 15px;
    color: #261B1C;
    max-height: 100px;
    height: 8vh;
    font-size: 1.2rem;
`

export const ForumButton = styled.button`
    flex: 1 1;
    padding: 0 20px;
    background-color: #A2B884;
    border: none;
    border-radius: 15px;
    color: #261B1C;
    max-height: 100px;
    height: 8vh;
    font-size: 1.2rem;
`