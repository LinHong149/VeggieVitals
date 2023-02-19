import styled from "styled-components"

export const Root = styled.div`
    //border: 1px solid black;
    margin: 0 auto;
    // margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10vh;
    height: 130vh;
`

export const Border = styled.div`
    padding: 30px;
    box-sizing: border-box;
    width: 100%;
    //border: 2px solid white;
    background-color: #7c5457;
    border-radius: 10px;
    max-width: 1400px;
    display: flex;
    justify-items: space-between;
    align-self: center;
    margin-bottom: 20px;
    `

export const Profile = styled.div`
    // border: 1px solid black;
    display: flex;
    padding: 0px;
    align-items: start;
    width: 100%;
    height: fit-content;
    gap: 50px;
`

export const Container = styled.div`
    // border: 1px solid black;
    display: flex;
    padding: 10px;
    align-items: start;
    width: 100%;
    height: fit-content;
    gap: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: min-content;
`
    
export const SideBar = styled.div`
    height: 100px;
    padding-left: 100px;   
    `     

export const Image = styled.img`
    object-fit: scale-down;
    flex: 1 1 1;
    width: 100px;  
    height: 100px;
    // padding-left: 10px;
    height: 35%;
`
export const Image2 = styled.img`
    object-fit: scale-down;
    flex: 1 1 1;
    width: 100px;  
    height: 100px;
    // padding-left: 10px;
    height: 100%;
`

export const ForumButton = styled.button`
    word-wrap: none;
    width: max-content;
    margin-left: 88vw;
    padding: 10px;
    `
    
export const SearchFilters = styled.button`
    word-wrap: none;
    width: max-content;
    margin-left: 88vw;
    padding: 10px;
`
export const Container3 = styled.div`
    // height: 100px;
    // padding: 15px;
    // align-self: right;
    display: flex;
    flex-direction: column;
    gap: 10px;
    // border: 1px solid green;
    height: min-content;
`

export const Name = styled.p`
    // border: 1px solid green;
    margin: 0;
    font-size: 1.5rem;
`

export const Discription = styled.p`
    // border: 1px solid green;
    margin: 0;
`