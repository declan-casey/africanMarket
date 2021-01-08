import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './Home';
import Team from './Team'
import About from './About'
import Register from './OwnerRegister';
import Login from './Login';
import Dashboard from './Dashboard';


  const Header = () => {
      
    return (

        <div>

            <MainHeader>AFRICAN MARKET</MainHeader>
            <Menu  className='menu'>
                <Hamburger className='hamburger' >
                    <Link className='buttons' to='/'>HOME</Link>
                    <Link className='buttons' to='/team'>MEET THE TEAM</Link>
                    <Link className='buttons' to='/about'>ABOUT</Link>
                    <Link className='buttons' to='/register'>REGISTER</Link>
                    <Link className='buttons' to='/login'>LOGIN</Link>
                </Hamburger>
            </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/team" component={Team} />
                <Route path="/register" component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>

        </div>
        
    )
}

export default Header;
    // import styled from 'styled-components';
    const Menu = styled.div`
    text-align:left;
    background:none;
    
`
    
    const MainHeader = styled.div`
    text-align:left;
    padding:2rem;
    background-color:#282c34;
    font-size:36px;
    font-weight:bold;
`