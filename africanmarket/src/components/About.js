import React from 'react';
import styled from 'styled-components';



function About (){
    

    return(

        <StyledAbout>

            <TopOfPage>

                <HeaderOne>ABOUT</HeaderOne>  
                <Paragraph>ALIQUAM UT EX UT INTERDUM DONEC AMET IMPERDIET ELEIFEND</Paragraph>
           
            </TopOfPage>


            <CenterDiv>

                <HeaderTwo>LOREM IPSUM DOLOR</HeaderTwo>
                <ParagraphTwo>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</ParagraphTwo>
                <ParagraphTwo>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</ParagraphTwo>
           
            </CenterDiv>

            <CenterDiv>

                <HeaderTwo>FEUGIAT ALIQUAM</HeaderTwo>
                <ParagraphTwo>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</ParagraphTwo>
                <ParagraphTwo>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</ParagraphTwo>
           
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
    text-align:left;
    padding-bottom:3rem;
    padding-top:5%;
    font-weight:bolder;
    font-size:25px;
    letter-spacing: 2px;
`
    
    const ParagraphTwo = styled.p`
    padding-top:3rem;
    text-align: left;
    color:black;
    width:75%;
    margin:auto;
    font-size:18px;
    letter-spacing:2px;
    padding-bottom:3rem;
`