import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Register from './Register';
// import Home from './Home';
import Login from './Login';
// import styled from 'styled-components';

const Header = () => {
    return (
        <nav>
            <h1>AFRICAN MARKET</h1>
            <Link to='/register'>Register</Link>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/login'>Login</Link>

            <Switch>
                <Route path="/register" component={Register} />
                {/* <Route exact path="/" component={Home} /> */}
                <Route path='/login' component={Login} />
            </Switch>
        </nav>
    )
}

export default Header;