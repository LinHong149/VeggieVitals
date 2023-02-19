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
            <ForumButton>Add to Forum</ForumButton>
            <Border>
                <Profile>
                    <Image src={pfp_potato} alt=""/>
                    <Container3>
                        <Name>Sir Potaaaatos</Name>
                        <Discription>My potatoes keep on dying does anyone know why?? :C</Discription>
                    </Container3>
                </Profile>
            </Border>
            <Border>
                <Profile>
                <Image2 src={pfp_woman} alt=""/>
                <Container>
                        <Name>Alice</Name>
                        <Discription>Does anyone know how to grow cherries, mine never sprout.</Discription>
                </Container>
                </Profile>
                </Border>
                <Border>
                <Profile>
                <Image2 src={pfp_man} alt=""/>
                <Container>
                        <Name>Tyler</Name>
                        <Discription>Does potatoes and pepper go well toghether or potatoes and mushrooms?</Discription>
                </Container>
                </Profile>
                </Border>
                <Border>
                <Profile>
                <Image2 src={brocco_bama} alt=""/>
                <Container>
                        <Name>Brocco Bama</Name>
                        <Discription>What temperature should I be cooking my broccoli at? Mine keeps on burning.</Discription>
                </Container>
                </Profile>
                </Border>
        </Root>
    )
}
export default ForumSubmissions