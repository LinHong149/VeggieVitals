import styled from 'styled-components'

export const Garden = styled.div`
    // border: 1px solid white;
    height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2.5vw;
    align-items: center;
    width: 20vw;
`

export const Title = styled.h3`
    font-size: 2rem;
    margin: 0;
    text-align: center;
`

export const ProduceList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: none;
    gap: 2.5vw;
    margin: 0;
    // border: 1px solid green;
`

export const Produce = styled.div`
    // border: 1px solid blue;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: none;

`

export const Actions = styled.div`
    // border: 1px solid black;
`

export const ProduceName = styled.h4`
    font-size: 1rem;
`

export const Forum = styled.button`
    // border: 1px solid white;
    font-size: 0.8rem;
    color: #C6B0AB;
    background: none;
    border: 1px solid rgba(198, 176, 171, 20%);
    border-radius: 30px;
    padding: 6px 18px;
    :hover {
        border: 1px solid transparent;
        background-color: rgb(198, 176, 171);
        color: #261B1C;
    }
`

export const Delete = styled.button`
    color: #E2D5CA;
    background: none;
    border: none;
    font-size: 1.5rem;
    border: 1px solid black;
    align-items: center;
    height: min-content;
`