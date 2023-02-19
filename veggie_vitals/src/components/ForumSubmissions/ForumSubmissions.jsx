import pfp_potato from "../../assets/pfp_potato.png"

import {
    Container,
    Container2,
    ForumBox,
    Border,
    Sub,
    Image,
} from './ForumSubmissions.elements'


const ForumSubmissions = () => {
    return(
        <Border>
            <Container>
                <button href="">Add to Forum</button>
            </Container>
            <Sub>
            <Image src={pfp_potato} alt=""/>
            </Sub>
            <Container2>
                <ForumBox>
                <p>HI</p>
                </ForumBox>
            </Container2>
        </Border>
    )
}
export default ForumSubmissions