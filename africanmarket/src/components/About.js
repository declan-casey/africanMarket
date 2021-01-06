import React from 'react';
import styled from 'styled-components';
import { slide as Hamburger } from "react-burger-menu";


const NavTitle = styled.nav`
font-size:30px;
font-weight:bold;
color:white;
background-color:#2c333a;
padding:2rem 0rem 2rem 1.5rem;
text-align:left;
`



const Menu = styled.div`
align-items:right;
display:flex;
margin:0 0 0 100%;
`


const Nav = styled.nav`
color:white;
display:flex;
align-items:right;
`

const A = styled.a`
color:white;
background-color:#21B2A6;
padding:2rem;
font-size:1.6rem;
text-align:left;
text-decoration:none;
border-bottom: solid 1.5px darkgrey;
`

function About (){


    return(

        <div>
            <NavTitle>African Marketplace</NavTitle>
                <div>
                    <Nav>
                    <Menu className='navMenu'>
                        <Hamburger >
                        <A href="/">Home</A>
                        <A href="/about">About</A>
                        <A href="/team">Meet The Team</A>
                        <A href="/signup">Sign Up</A>
                        <A href="/login">Log In </A>
                        </Hamburger>
                    </Menu>
                    </Nav>
                </div>
    </div>


    )
}

export default About;