import './App.css';
import React from 'react'
import styled from 'styled-components'
import banner from './images/banner.jpg'


/*Styling Using Styled Components*/
const StyledHeadDiv = styled.div`
background-image: url(banner);
background-size:cover;
height:100vh;

`

const StyledHeaderOne = styled.h1`
color:white;
background-color:black;
text-align:center;
`

const StyledParagraph = styled.p`
text-align: center;
`

const ActivateButton = styled.button`
background-color:darkorange;
color:white;
border:none;
border-radius:4px;
display:flex;
margin:0 auto;
`
const StyledHeaderTwo = styled.h2`
color:white;
background-color:black;
text-align:center;
`




function App() {

  return (

    <div>
      <StyledHeadDiv>
        <nav>African Marketplace</nav>

        <StyledHeaderOne>African Marketplace</StyledHeaderOne>

        <StyledParagraph>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN,
TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES
TO GROW OUT OF POVERTY.</StyledParagraph>

        <ActivateButton>ACTIVATE</ActivateButton>

        {/* <button>LEARN MORE</button> */}
      
      </StyledHeadDiv>

      <div>
        <StyledHeaderTwo>ARCU ALIQUET VEL LOBORTIS ATA NISL
EGET AUGUE AMET ALIQUET NISL CEP DONEC</StyledHeaderTwo>
        <StyledParagraph>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</StyledParagraph>
      </div>

    </div>

  );

}

export default App;
