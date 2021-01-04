import './App.css';
import React from 'react';
import styled from 'styled-components';




/*Styling Using Styled Components*/
const StyledApp = styled.div`
display: flex;
flex-direction:column;
`
const StyledNav = styled.nav`
font-size:25px;
font-weight:bold;
`

const StyledHeadImg = styled.div`
height:10vh;
`

const StyledImg = styled.img `
  background-image: url="./images/banner.jpg";
  height:50vh;

`
const StyledHeaderOne = styled.h1`
color:black;
text-align:center;
background-color:lightgrey;

`

const StyledParagraph = styled.p`
text-align: center;
color:white;
background-color:lightgrey;

`

const ActivateButton = styled.button`
background-color:red;
color:white;
border:none;
border-radius:4px;
display:flex;
margin: 5rem auto 20rem auto;
`

const StyledCenterDiv = styled.div`
color:black;
background-color:lightgrey;

`

const StyledHeaderTwo = styled.h2`
color:white;
background-color:lightgrey;
text-align:center;

`




function App() {

  return (

    <StyledApp >

      <StyledNav>African Marketplace</StyledNav>

        <StyledHeadImg>
          <StyledImg  src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Colorful-Fresh-Fruit-Background.jpg" />
        </StyledHeadImg>

        <StyledHeaderOne>African Marketplace</StyledHeaderOne>

        <StyledParagraph>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN,
TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES
TO GROW OUT OF POVERTY.</StyledParagraph>

        <ActivateButton>ACTIVATE</ActivateButton>




      <StyledCenterDiv>

        <StyledHeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</StyledHeaderTwo>

        <StyledParagraph>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</StyledParagraph>

      </StyledCenterDiv>
      
    </StyledApp>

  );

}

export default App;
