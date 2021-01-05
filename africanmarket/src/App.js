import './App.css';
import React from 'react';
import styled from 'styled-components';
import BannerImg from './images/banner.jpg'
import GalleryOneImg from './images/pic01.jpg'
import GalleryTwoImg from './images/pic02.jpg'
import GalleryThreeImg from './images/pic03.jpg'




/*Styling Using Styled Components*/
const StyledApp = styled.div`
display: flex;
flex-direction:column;
`
const Nav = styled.nav`
font-size:25px;
font-weight:bold;
`

const HeadImg = styled.img`
height:100vh;
width:100%;

`

const ImgTop = styled.img `
  height:50vh;

`
const HeaderOne = styled.h1`
color:black;
text-align:center;
border-top:solid 3px black;
border-bottom:solid 3px black;
width:60%;
margin:5rem auto 0rem auto;
padding:1rem 0;
background-color:lightgrey;
font-weight:bold;
font-size:4rem;

`

const Paragraph = styled.p`
text-align: center;
color:black;
width:65%;
margin: 0 auto;
font-size:1.2rem;
letter-spacing:2px;

`

const ActivateButton = styled.button`
background-color:#DE6852;
color:white;
border:none;
border-radius:4px;
letter-spacing:2px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
margin: 5rem auto 20rem auto;

`


const CenterDiv = styled.div`
color:black;
background-color:#55AFA5;
padding:5rem;

`

const HeaderTwo = styled.h2`
color:white;
width:65%;
margin: 0 auto;
text-align:center;
border-bottom: solid 1.5px darkgrey;
font-weight:bold;
font-size:2.5rem;
letter-spacing: 2px;

`

const ParagraphTwo = styled.p`
text-align: center;
color:white;
width:65%;
margin: 0 auto;
font-size:1.2rem;
letter-spacing:2px;
`

const Gallery = styled.div`
display:flex;
flex-direction:column;

`

const GalleryOne = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
background-color:#2D343C;
border-bottom:solid 1px #293037;
letter-spacing: 2px;

`

const GalleryImg = styled.img`
height:30vh;
width:auto;

`

const GalleryHeadOne = styled.h2`
color:white;
text-align:left;
font-weight:bold;
font-size:2.5rem;
letter-spacing:2px;
width:25%;
`

const GalleryParOne = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:25%;
`

const GalleryTwo = styled.div`
display:flex;
align-items:left;
justify-content:center;
flex-direction:row;
width:100%;
background-color:#2D343C;
border-bottom:solid 1px #293037;

`

const GalleryHeadTwo = styled.h2`
color:white;
text-align:left;
font-weight:bold;
font-size:2.5rem;
letter-spacing:2px;
width:25%;
`

const GalleryParTwo = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:25%;
`

const GalleryThree = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
background-color:#2D343C;
`

const GalleryHeadThree = styled.h2`
color:white;
text-align:left;
font-weight:bold;
font-size:2.5rem;
letter-spacing:2px;
width:25%;
`

const GalleryParThree = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:25%;
`

const BottomDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color: #51528F;
padding:5rem;
`

const BottomDivHeading = styled.h2`
display:flex;
align-items:center;
justify-content:center;
font-size:2.5rem;
letter-spacing: 2px;
`

const BottomDivPar = styled.p`
display:flex;
align-items:center;
justify-content:center;
font-size:1.2rem;
letter-spacing:2px;

`

const BottomDivContent = styled.h2`
display:flex;
align-items:center;
justify-content:center;
letter-spacing: 2px;
`

const FooterOptions = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding: 3rem;
background-color:black;
`


const FooterContent = styled.div`
display:flex;
flex-direction:column;
width:25%;
color:white;

`
const FooterButtons = styled.div`
display:flex;
flex-direction:column;
`

const FooterHead = styled.h2`
font-weight:bold;
font-size:2.5rem;
letter-spacing: 2px;
`

const FooterPar = styled.p`
font-size:1.2rem;
letter-spacing:2px;
`

const LearnButton = styled.button`
background-color:black;
color:white;
border:none;
border-radius:4px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
letter-spacing:2px;
margin: 3rem auto 3rem auto;
border: 2px solid white;

`

const ActivateButtonFoot = styled.button`
background-color:#DE6852;
color:white;
border:none;
border-radius:4px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
letter-spacing:2px;
margin: 3rem auto 0rem auto;

`

const Social = styled.div`

`

function App() {

  return (

    <StyledApp >

      <Nav>African Marketplace</Nav>

        <HeaderOne>African Marketplace</HeaderOne>

        <Paragraph>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN,
TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES
TO GROW OUT OF POVERTY.</Paragraph>

        <ActivateButton>ACTIVATE</ActivateButton>

      <CenterDiv>

        <HeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</HeaderTwo>

        <ParagraphTwo>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</ParagraphTwo>

      </CenterDiv>

      <Gallery>

        <GalleryOne>

          <GalleryImg src={GalleryOneImg}/>

          <GalleryHeadOne>MAGNA PRIMIS LOBORTIS
SED ULLAMCORPER</GalleryHeadOne>

          <GalleryParOne>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParOne>

        </GalleryOne>

        <GalleryTwo>

          <GalleryHeadTwo>TORTOR DOLORE FEUGIAT
ELEMENTUM MAGNA</GalleryHeadTwo>

          <GalleryParTwo>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParTwo>

          <GalleryImg src={GalleryTwoImg}/>

        </GalleryTwo>
      
        <GalleryThree>

          <GalleryImg src={GalleryThreeImg}/>

          <GalleryHeadThree>AUGUE ELEIFEND ALIQUETSED CONDIMENTUM</GalleryHeadThree>

          <GalleryParThree>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParThree>
          
        </GalleryThree>

      </Gallery>

      <BottomDiv>

        <BottomDivHeading>ACCUMSAN MUS TORTOR NUNC ALIQUET</BottomDivHeading>

        <BottomDivPar>ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</BottomDivPar>
      
      <BottomDivContent>

      </BottomDivContent>

      </BottomDiv>

      <FooterOptions>

        <FooterContent>

        <FooterHead>ARCUE UT VEL COMMODO</FooterHead>

        <FooterPar>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</FooterPar>

        </FooterContent>

        <FooterButtons>
          
      <ActivateButtonFoot>ACTIVATE</ActivateButtonFoot>

      <LearnButton>LEARN MORE</LearnButton>

        </FooterButtons>

      </FooterOptions>


      <Social></Social>

    </StyledApp>

  );

}

export default App;
