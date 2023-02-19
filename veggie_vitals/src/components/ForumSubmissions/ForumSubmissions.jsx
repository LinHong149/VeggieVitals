import pfp_potato from "../../assets/pfp_potato.png"

import {
    Root,
    Container,
    Container2,
    ForumBox,
    Border,
    Discription,
    Name,
    Image,
    Container3,
    Profile,
    ForumButton
} from './ForumSubmissions.elements'


const ForumSubmissions = () => {
    return(
        <Root>   
            <ForumButton href="">Add to Forum</ForumButton>
            <Border>
                <Profile>
                    <Image src={pfp_potato} alt=""/>
                    <Container3>
                        <Name>Sir Potaaaatos</Name>
                        <Discription>I love potaaaaaaatos!!</Discription>
                    </Container3>
                </Profile>
            </Border>
        </Root>
    )
}
export default ForumSubmissions