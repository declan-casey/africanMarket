import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Register from './OwnerRegister';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
// import styled from 'styled-components';

const Header = () => {
    return (
        <nav>
            <h1>AFRICAN MARKET</h1>
            <Link to='/register'>Register</Link>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>

            <Switch>
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </nav>
    )
}

export default Header;