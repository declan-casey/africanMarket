import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Register from './OwnerRegister';
import Home from './Home';
import Login from './Login';
import About from './About'
// import styled from 'styled-components';
const Menu = styled.div`
align-items:right;
display:flex;
margin:0 0 0 100%;
`

const MainHeader = styled.div`
text-align:left;
padding:2rem;
font-size:36px;
font-weight:bold;
`
const Header = () => {
    return (
        <nav className='navMenu'>
            <MainHeader>AFRICAN MARKET</MainHeader>
            <Menu className='menu'>
                <Hamburger className='hamburger' >
                    <Link className='buttons' to='/'>Home</Link>
                    <Link className='buttons' to='/about'>About</Link>
                    <Link className='buttons' to='/register'>Register</Link>
                    <Link className='buttons' to='/login'>Login</Link>
                </Hamburger>
            </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />
                <Route path='/login' component={Login} />
            </Switch>
        </nav>
    )
}

export default Header;