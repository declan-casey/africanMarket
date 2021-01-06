import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`

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

const CenterDiv = styled.div`
color:black;
background-color:white;
padding:3rem;
`

const HeaderTwo = styled.h2`
color:black;
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
color:black;
width:75%;
margin:auto;
font-size:18px;
letter-spacing:2px;
padding-bottom:3rem;
`


function About (){


    return(

        <StyledAbout>

            <TopOfPage>
                <HeaderOne>About</HeaderOne>  
                <Paragraph>ALIQUAM UT EX UT INTERDUM DONEC AMET IMPERDIET ELEIFEND</Paragraph>
            </TopOfPage>


            <CenterDiv>

                <HeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</HeaderTwo>
                <ParagraphTwo>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</ParagraphTwo>

            </CenterDiv>

            <CenterDiv>

                <HeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</HeaderTwo>
                <ParagraphTwo>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</ParagraphTwo>

            </CenterDiv>


            <Social>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <Dribbble/>
                <Email/>
            </Social>

        </StyledAbout>


    )
}

export default About;