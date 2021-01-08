import React from 'react';
import styled from 'styled-components';
import { slide as Hamburger } from "react-burger-menu";
import GalleryOneImg from '../images/pic01.jpg'
import GalleryTwoImg from '../images/pic02.jpg'
import GalleryThreeImg from '../images/pic03.jpg'





function Home() {
  
  return (
    
    
    <StyledHome>

      <TopOfPage>
        
        <HeaderOne>AFRICAN MARKETPLACE</HeaderOne>  
        <Paragraph>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN,TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES TO GROW OUT OF POVERTY.</Paragraph>
        <ActivateButton>ACTIVATE</ActivateButton>

      </TopOfPage>



      <CenterDiv>

        <HeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISLEGET AUGUE AMET ALIQUET NISL CEP DONEC</HeaderTwo>
        <ParagraphTwo>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifendfringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</ParagraphTwo>

        <IconSpan>
          <MidIconOne></MidIconOne>
          <MidIconTwo></MidIconTwo>
          <MidIconThree></MidIconThree>
        </IconSpan>

      </CenterDiv>



      <Gallery>

        <GalleryOne>
          <GalleryImg src={GalleryOneImg}/>
          <GalleryTextSpan>
          <GalleryHeadOne>MAGNA PRIMIS LOBORTISSED ULLAMCORPER</GalleryHeadOne>
          <GalleryParOne>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParOne>
          </GalleryTextSpan>
        </GalleryOne>



        <GalleryTwo>
          <GalleryTextSpan>
            <GalleryHeadTwo>TORTOR DOLORE FEUGIATELEMENTUM MAGNA</GalleryHeadTwo>
            <GalleryParTwo>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParTwo>
          </GalleryTextSpan>
            <GalleryImg src={GalleryTwoImg} />
        </GalleryTwo>
      


        <GalleryThree>
          <GalleryImgThree src={GalleryThreeImg} />
          <GalleryTextSpan>
            <GalleryHeadThree>AUGUE ELEIFEND ALIQUETSED CONDIMENTUM</GalleryHeadThree>
            <GalleryParThree>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</GalleryParThree>
          </GalleryTextSpan>
        </GalleryThree>

      </Gallery>



      <BottomDiv>

        <BottomDivHeading>ACCUMSAN MUS TORTOR NUNC ALIQUET</BottomDivHeading>
        <BottomDivPar>ut ex ut augue consectetur interdum. Donec amet imperdiet eleifendfringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</BottomDivPar>
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
        <Twitter/>
        <Facebook/>
        <Instagram/>
        <Dribbble/>
        <Email/>
      </Social>
      


    </StyledHome>

  );

}

export default Home;

    /*Styling Using styled. Components*/


    const StyledHome = styled.div`
    display: flex;
    flex-direction:column;
`
    
    const TopOfPage = styled.div`
    background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
    width:auto;
    padding:15%;
    background-size:cover;
`
    
    
    const HeaderOne = styled.h1`
    color:white;
    text-align:center;
    border-top:solid 3px white;
    border-bottom:solid 3px white;
    width:50%;
    margin:15rem auto 0rem auto;
    padding: 1rem 3rem;
    background-color:none;
    font-weight:bold;
    font-size:45px;
`
    
    const Paragraph = styled.p`
    text-align: center;
    color:white;
    padding-top:3rem;
    width:65%;
    margin: 0 auto;
    font-size:1rem;
    letter-spacing:2px;
`
    
const ActivateButton = styled.button`
    padding:1.5% 2%;
    letter-spacing:2px;
    display:flex;
    margin: 3% auto 3% auto;
    background-color:#DE6852;
    color:white;
    border:none;
    border-radius:4px;
`
    
    
    const CenterDiv = styled.div`
    color:black;
    background-color:#55AFA5;
    padding:1.2%;
`
    
    const HeaderTwo = styled.h2`
    color:white;
    width:75%;
    margin:auto;
    text-align:center;
    padding-bottom:3rem;
    padding-top:5%;
    border-bottom: solid 1.5px darkgrey;
    font-weight:bold;
    font-size:25px;
    letter-spacing: 2px;
`
    
    const ParagraphTwo = styled.p`
    padding-top:3rem;
    text-align: center;
    color:white;
    width:75%;
    margin:auto;
    font-size:18px;
    letter-spacing:2px;
`
    
    const IconSpan = styled.span`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:3%;
    padding-bottom:3%;
`
    
    const MidIconOne = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://img.icons8.com/ios/72/diamond--v1.png') no-repeat;
    background-size:5rem;
`
    
    const MidIconTwo = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://img.icons8.com/ios/72/like--v1.png') no-repeat;
    background-size:5rem;
`
    
    const MidIconThree = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://img.icons8.com/ios/72/code.png') no-repeat;
    background-size:5rem;
`
    
    const Gallery = styled.div`
    display:flex;
    flex-direction:column;
`
    
    const GalleryOne = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:100%;
    background-color:#373f49;
    border-bottom:solid 1px #293037;
    letter-spacing: 2px;
`
    
    const GalleryImg = styled.img`
    height:30vh;
    width:auto;
    background-position:cover;
    position:cover;
`
    const GalleryImgThree = styled.img`
    height:60vh;
    width:auto;
    margin:auto 15% auto auto;
    background-position:cover;
    position:cover;
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
    justify-content:space-between;
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
    justify-content:space-evenly;
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
    padding:8% 1%;
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
    padding:15% 15%;
    letter-spacing:2px;
    display:flex;
    margin: 3% auto 3% auto;
    background-color:#DE6852;
    color:white;
    border:none;
    border-radius:4px;
`
    
    const LearnButton = styled.button`
    padding:8% 8%;
    letter-spacing:2px;
    display:flex;
    margin: 3% auto 3% auto;
    background-color:black;
    color:white;
    border:none;
    border-radius:4px;
`
    
    
    const Social = styled.div`
    background-color:#2c333a;
    padding:6rem;
    display:flex;
    justify-content:center;
    
`
    
    const Twitter = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/twitter--v1.png') center;
    background-size:2rem;
`
    
    const Facebook = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/facebook-new.png') center;
    background-size:2rem;
`
    
    const Instagram = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/instagram-new--v1.png') center;
    background-size:2rem;
`
    
    const Dribbble = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/dribbble-circled--v1.png') center;
    background-size:2rem;
    
`
    
    
    const Email = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/email.png') center;
    background-size:2rem;
`