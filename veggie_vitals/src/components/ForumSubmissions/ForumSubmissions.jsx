import pfp_potato from "../../assets/pfp_potato.png"

import {
    Container,
    Container2,
    ForumBox,
    Border,
    Sub,
    Image,
    Container3,
    ForumButton
} from './ForumSubmissions.elements'


const ForumSubmissions = () => {
    return(
        <div>   
            <ForumButton href="">Add to Forum</ForumButton>
            <Border>
                <Container>
                <Image src={pfp_potato} alt=""/>
                </Container>
                <Container3>
                    <ForumBox>
                    <p>HI</p>
                    </ForumBox>
                </Container3>
            </Border>
        </div>
    )
}
export default ForumSubmissions