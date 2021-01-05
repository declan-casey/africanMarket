import './App.css';
import React from 'react';
import styled from 'styled-components';
import { slide as Hamburger } from "react-burger-menu";
import GalleryOneImg from './images/pic01.jpg'
import GalleryTwoImg from './images/pic02.jpg'
import GalleryThreeImg from './images/pic03.jpg'




/*Styling Using Styled Components*/
const StyledApp = styled.div`
display: flex;
flex-direction:column;
`

const Nav = styled.nav`
color:white;
display:flex;
align-items:right;

`

const A = styled.a`
color:white;
background-color:blue;
padding:2rem;
font-size:1.6rem;
text-align:right;
`

const Menu = styled.div`
display:flex;
position:right;

`

const NavTitle = styled.nav`
font-size:30px;
font-weight:bold;
color:white;
background-color:#2c333a;
padding:2rem 0rem 2rem 1.5rem;
`

const TopOfPage = styled.div`
background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
width:auto;
padding:0 0 11% 0;
background-size:cover;
`


const HeaderOne = styled.h1`
color:white;
text-align:center;
border-top:solid 3px white;
border-bottom:solid 3px white;
width:60%;
margin:15rem auto 0rem auto;
padding: 1rem 3rem;
background-color:none;
font-weight:bold;
font-size:3rem;

`

const Paragraph = styled.p`
text-align: center;
color:white;
padding-top:3rem;
width:65%;
margin: 0 auto;
font-size:1.6rem;
letter-spacing:2px;

`

const ActivateButton = styled.button`
background-color:#DE6852;
color:white;
border:none;
border-radius:4px;
letter-spacing:2px;
font-size:22px;
padding:1.7rem 4rem;
display:flex;
margin: 5rem auto 20rem auto;

`


const CenterDiv = styled.div`
color:black;
background-color:#55AFA5;
padding:12rem;

`

const HeaderTwo = styled.h2`
color:white;
width:75%;
margin:auto;
text-align:center;
padding-bottom:3rem;
border-bottom: solid 1.5px darkgrey;
font-weight:bold;
font-size:2.5rem;
letter-spacing: 2px;

`

const ParagraphTwo = styled.p`
padding-top:3rem;
text-align: center;
color:white;
width:75%;
margin:auto;
font-size:1.6rem;
letter-spacing:2px;
`

const IconSpan = styled.span`
display:flex;
flex-direction:row;
justify-content:center;
padding-top:3rem;
`

const MidIcons = styled.button`
display:flex;
width:10%;
margin:3%;
padding:1rem;
flex-direction:row;
background-color:#55AFA5;
border:solid slategray 1px;
justify-content:center;

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
height:50vh;
width:auto;
background-position:cover;
`
const GalleryImgThree = styled.img`
height:110vh;
width:auto;
position:static;

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
font-size:1.6rem;
letter-spacing:2px;
width:75%;
`

const GalleryTwo = styled.div`
display:flex;
align-items:center;
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
font-size:1.6rem;
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
font-size:1.6rem;
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

const BottomDivHeadings = styled.h2`
display:flex;
align-items:center;
justify-content:center;
font-size:2.5rem;
letter-spacing: 2px;
color:white;
padding-bottom:2rem;

`

const BottomDivHeading = styled.h2`
display:flex;
align-items:center;
justify-content:center;
font-size:2.5rem;
letter-spacing: 2px;
color:white;
padding-bottom:2rem;
border-bottom:solid 1px #2c333a;
width:75%;
`

const BottomDivPar = styled.p`
display:flex;
align-items:center;
justify-content:center;
font-size:1.6rem;
margin: 2rem auto;
letter-spacing:2px;
color:white;
width:75%;

`

const BottomDivContent = styled.h2`
display:flex;
align-items:center;
flex-direction:row;
flex-wrap:wrap;
letter-spacing: 2px;
justify-content:center;

`

const BottomDivCard = styled.div`
width:45%;
height: 75%;
text-align:center;
background-color:#494a83;
border: solid .1px #535493;
`


const FooterOptions = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding: 3rem;
background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
background-size:cover;
`


const FooterContent = styled.div`
display:flex;
flex-direction:column;
width:25%;
padding:6rem;
margin-right:25%;
color:white;

`
const FooterButtons = styled.div`
display:flex;
margin-left:25%;
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

const ActivateButtonFoot = styled.button`
background-color:#DE6852;
color:white;
border:none;
border-radius:4px;
font-size:22px;
padding:15% 15%;
display:flex;
letter-spacing:2px;
margin: 3rem auto 0rem auto;

`

const LearnButton = styled.button`
background-color:black;
color:white;
border:none;
border-radius:4px;
font-size:22px;
padding:8% 8%;
display:flex;
letter-spacing:2px;
margin: 3rem auto 3rem auto;
border: 2px solid white;

`


const Social = styled.div`
background-color:#16191d;
padding:6rem;
display:flex;
justify-content:center;

`

const Twitter = styled.button`
border:white;
padding:1rem;
margin:5rem;
background-color:white;
`

const Facebook = styled.button`
border:white;
padding:1rem;
margin:5rem;

`

const Instagram = styled.button`
border:white;
padding:1rem;
margin:5rem;
`

const Email = styled.button`
border:white;
padding:1rem;
margin:5rem;
`


function App() {

  return (


    <StyledApp>
      <div>

        <Nav>
          <Menu>
            <Hamburger>
              <A className="menu-item" href="/">Home</A>
              <A className="menu-item" href="/about">About</A>
              <A className="menu-item" href="/team">Meet The Team</A>
              <A className="menu-item" href="/signup">Sign Up</A>
              <A className="menu-item" href="/login">Log In </A>
            </Hamburger>

          </Menu>

        </Nav>

      </div>
      <NavTitle>African Marketplace</NavTitle>


      <TopOfPage>
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

        <IconSpan>
          <MidIcons>One</MidIcons>
          <MidIcons>Two</MidIcons>
          <MidIcons>Three</MidIcons>
        </IconSpan>

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
          <GalleryImgThree src={GalleryThreeImg}/>
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

          <BottomDivCard>
            <BottomDivHeadings>ARCU ACCUMSAN</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>AC AUGUE EGET</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>MUS SCELERISQUE</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>MAURIS IMPERDIET</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>AENEAN PRIMIS</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>TORTOR UT</BottomDivHeadings>
            <BottomDivPar>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</BottomDivPar>
          </BottomDivCard>

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



      <Social>
        <Twitter></Twitter>
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Email></Email>
      </Social>
      


    </StyledApp>

  );

}

export default App;
