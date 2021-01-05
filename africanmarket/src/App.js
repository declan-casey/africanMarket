import './App.css';
import React from 'react';
import styled from 'styled-components';
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
color:white;
`

const TopOfPage = styled.div`
background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
width:100%;
background-size:cover;
`


const HeaderOne = styled.h1`
color:white;
text-align:center;
border-top:solid 3px white;
border-bottom:solid 3px white;
width:60%;
margin:15rem auto 0rem auto;
padding:1rem 0;
background-color:none;
font-weight:bold;
font-size:4rem;

`

const Paragraph = styled.p`
text-align: center;
color:white;
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
background-color:#373f49;
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
width:75%;
`

const GalleryParOne = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:75%;
`

const GalleryTwo = styled.div`
display:flex;
align-items:left;
justify-content:center;
flex-direction:row;
width:100%;
background-color:#2c333a;
border-bottom:solid 1px #2c333a;

`

const GalleryHeadTwo = styled.h2`
color:white;
text-align:left;
font-weight:bold;
font-size:2.5rem;
letter-spacing:2px;
width:75%;
`

const GalleryParTwo = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:75%;
`

const GalleryThree = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
background-color:#21262c;
`

const GalleryHeadThree = styled.h2`
color:white;
text-align:left;
font-weight:bold;
font-size:2.5rem;
letter-spacing:2px;
width:75%;
`

const GalleryParThree = styled.p`
color:white;
text-align:left;
font-size:1.2rem;
letter-spacing:2px;
width:75%;
`

const GalleryTextSpan = styled.span`
display:flex;
flex-direction:column;
margin-left:8rem;
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
background-color:#16191d;

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
      <TopOfPage>
        <Nav>African Marketplace</Nav>
        <HeaderOne>African Marketplace</HeaderOne>  
        <Paragraph>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN,
TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES
TO GROW OUT OF POVERTY.</Paragraph>
        <ActivateButton>ACTIVATE</ActivateButton>
        </TopOfPage>


      <CenterDiv>

        <HeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</HeaderTwo>

        <ParagraphTwo>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</ParagraphTwo>

      </CenterDiv>

      <Gallery>
        <GalleryOne>
          <GalleryImg src={GalleryOneImg}/>
          <GalleryTextSpan>
          <GalleryHeadOne>MAGNA PRIMIS LOBORTIS
SED ULLAMCORPER</GalleryHeadOne>
          <GalleryParOne>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParOne>
          </GalleryTextSpan>
        </GalleryOne>

        <GalleryTwo>
        <GalleryTextSpan>
          <GalleryHeadTwo>TORTOR DOLORE FEUGIAT
ELEMENTUM MAGNA</GalleryHeadTwo>
          <GalleryParTwo>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParTwo>
          </GalleryTextSpan>
          <GalleryImg src={GalleryTwoImg}/>
        </GalleryTwo>
      
        <GalleryThree>
          <GalleryImg src={GalleryThreeImg}/>
        <GalleryTextSpan>
            <GalleryHeadThree>AUGUE ELEIFEND ALIQUETSED CONDIMENTUM</GalleryHeadThree>
            <GalleryParThree>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParThree>
        </GalleryTextSpan>
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
