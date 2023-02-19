import pfp_potato from "../../assets/pfp_potato.png"
import pfp_woman from "../../assets/pfp_woman.png"
import pfp_man from "../../assets/pfp_man.png"
import pfp_small from "../../assets/pfp_small.png"
import brocco_bama from "../../assets/brocco_bama.png"

import {
    Root,
    Border,
    Discription,
    Name,
    Image,
    Container3,
    Profile,
    ForumButton,
    Container,
    Image2,
    SearchFilters
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
            <Border>
                <Profile>
                <Image2 src={pfp_woman} alt=""/>
                <Container>
                        <Name>Swag Lady</Name>
                        <Discription>I really want some FreshAvacado.</Discription>
                </Container>
                </Profile>
                </Border>
                <Border>
                <Profile>
                <Image2 src={pfp_man} alt=""/>
                <Container>
                        <Name>Sigma Chad</Name>
                        <Discription>Protein.</Discription>
                </Container>
                </Profile>
                </Border>
                <Border>
                <Profile>
                <Image2 src={brocco_bama} alt=""/>
                <Container>
                        <Name>Brocco Bama</Name>
                        <Discription>ChatGPT isn't giving me anything funny.</Discription>
                </Container>
                </Profile>
                </Border>
        </Root>
    )
}
export default ForumSubmissions