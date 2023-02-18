import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 30vw;
    // border: 1px solid green;
    justify-self: right;
    display: flex;
    flex-wrap: wrap;
    background: rgb(22,16,17);
    background: linear-gradient(54deg, rgba(22,16,17,1) 0%, rgba(38,27,28,1) 100%);
`

export const SubContainer = styled.div`
    // border: 1px solid red;
    width: 100%;
    height: 25%;
    box-sizing: border-box;
    display: flex;
`


export const Sub = styled.div`
    box-sizing: border-box;
    border: 0.2px solid rgba(198, 176, 171, 20%);
    // padding: 20px;
    flex: 1 1;
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 10px;
`


export const Image = styled.img`
    object-fit: scale-down;
    flex: 1 1 1;
    // width: 150px;  
    // height: 150px;
    // padding-left: 10px; 
    height: 75%;
`

export const Text = styled.p`
    // border: 2px solid green;
    flex: 1 1;
    height: 25%;
    font-size: 0.8rem;
    color: #C6B0AB;
    text-align: center;
`