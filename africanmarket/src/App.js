import './App.css';
import React from 'react';
import styled from 'styled-components';




/*Styling Using Styled Components*/
const StyledApp = styled.div`
display: flex;
flex-direction:column;
`
const Nav = styled.nav`
font-size:25px;
font-weight:bold;
`

const HeadImg = styled.div`
height:10vh;

`

const ImgTop = styled.img `
  height:50vh;


`
const HeaderOne = styled.h1`
color:black;
text-align:center;
border-top:solid 3px black;
border-bottom:solid 3px black;
width:50%;
margin:0 auto;
background-color:lightgrey;

`

const Paragraph = styled.p`
text-align: center;
color:black;
width:65%;
margin: 0 auto;

`

const ActivateButton = styled.button`
background-color:red;
color:white;
border:none;
border-radius:4px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
margin: 5rem auto 20rem auto;

`


const CenterDiv = styled.div`
color:black;
background-color:#00FFFF;

`

const HeaderTwo = styled.h2`
color:white;
width:65%;
margin: 0 auto;
text-align:center;
border-bottom: solid 1.5px darkgrey;

`

const ParagraphTwo = styled.p`
text-align: center;
color:white;
width:65%;
margin: 0 auto;

`

const Gallery = styled.div`
display:flex;
flex-direction:column;

`

const GalleryOne = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
background-color:lightgrey;

`

const GalleryTwo = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
background-color:darkgrey;

`

const GalleryThree = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
background-color:darkslategray;
`

const BottomDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const BottomDivHeading = styled.h2`
display:flex;
align-items:center;
justify-content:center;
`

const BottomDivPar = styled.p`
display:flex;
align-items:center;
justify-content:center;
`

const BottomDivContent = styled.h2`
display:flex;
align-items:center;
justify-content:center;

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

`

const FooterPar = styled.p`

`

const LearnButton = styled.button`
background-color:black;
color:white;
border:none;
border-radius:4px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
margin: 3rem auto 3rem auto;
border: 2px solid white;

`
const ActivateButtonFoot = styled.button`
background-color:red;
color:white;
border:none;
border-radius:4px;
font-size:15px;
padding:1rem 1.5rem;
display:flex;
margin: 3rem auto 0rem auto;

`
const Social = styled.div`

`

function App() {
  return (
    <StyledApp >

      <Nav>African Marketplace</Nav>

        <HeadImg>
          {/* <ImgTop  src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Colorful-Fresh-Fruit-Background.jpg" /> */}
        </HeadImg>

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
          <h2>MAGNA PRIMIS LOBORTIS
SED ULLAMCORPER</h2>
<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </GalleryOne>

        <GalleryTwo>
          <h2>TORTOR DOLORE FEUGIAT
ELEMENTUM MAGNA</h2>
<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
        </GalleryTwo>
      
        <GalleryThree>
        `<h2>AUGUE ELEIFEND ALIQUET
SED CONDIMENTUM</h2>
<p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
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

      <LearnButton>Learn More</LearnButton>

        </FooterButtons>

      </FooterOptions>


      <Social></Social>

    </StyledApp>

  );

}

export default App;
