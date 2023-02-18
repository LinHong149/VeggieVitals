import styled from "styled-components";


export const Root = styled.div`
    // border: 1px solid white;
    height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2.5vw;
    align-items: center;
`

export const Filter = styled.div`
    // border: 1px solid white;
    padding: 0 2.5vw;
    display: flex;
    flex-direction: column;
    flex-wrap: none;
    gap: 2.5vw;
    margin: 0;
`

export const Title = styled.h3`
    // border: 1px solid white;
    font-size: 2rem;
    margin: 0;
`

export const FilterSection = styled.div`
    // border: 1px solid green;
    width: 20vw;
    // max-width: 300px;
`

export const FilterSectionTitle = styled.h4`
    // border: 1px solid white;
    font-size: 1.2rem;
    text-align: left;
    margin: 0;
`

export const FilterDescription = styled.p`
    // border: 1px solid white;
    font-size: 0.8rem;
    color: #765658;
    text-align: left;
    margin: 10px 0;
`

export const FilterOption = styled.button`
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

export const OptionsContainer = styled.div`
    // border: 1px solid white;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export const SearchButton = styled.button`
    // width: 25vw;
    // width: 100%;÷
    width: 20vw;
    // max-width: 400px;
    background-color: #7B4E3B;
    border: none;
    border-radius: 15px;
    color: #261B1C;
    max-height: 100px;
    height: 8vh;
    font-size: 1.2rem;
    position: absolute;
    bottom: 30px;
`