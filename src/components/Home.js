import React from 'react'
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'
import { FaBeer } from 'react-icons/fa';
import StarmatchPic from './starmatch.png';
import '../App.css';
import { Link } from "react-scroll";

const Home = () => {
    return (
        
            
 <HomeContainer>
<WelcomeText>
    Välkommen!
</WelcomeText>

<TextWrap>
    
    <ItemSmallText>Klicka för att spela</ItemSmallText>
    {/* <ItemBigText>Starmatch Game</ItemBigText> */}
    <Link className="linkedText"
    activeClass="active"
    to="right"
    spy={true}
    smooth={true}
    offset={-70}
    duration={900}
>Starmatch Game</Link>
    <img  className="starmatchPic"src={StarmatchPic} alt="Logo" />
</TextWrap>

</HomeContainer>
        
    )
}

export default Home


const HomeContainer = styled.div`
height: 100vh;
height: 100vw;
background-image: url("/images/wallpaper.png");
background-size: cover; /* set size to cover */
background-position: center; /* center the image */
background-repeat: no-repeat; /* dont repeat the background */
margin: 0% 0%;


`

const WelcomeText = styled.div`
font-size: 55px;
color: white;
font-family: gilroybold;
`

const TextWrap = styled.div`
width: 500px;
height: 255px;
/* border: 2px solid red; */
margin: 0% 18%;

`

const ItemBigText = styled.div`
font-size: 25px;
color: white;
font-family: gilroybold;
`

const ItemSmallText = styled.div`
font-size: 10px;
color: white;
font-family: gilroylight;
`