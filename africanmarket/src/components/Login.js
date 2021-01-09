import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import * as yup from 'yup';

const initialFormValues = {
  username: "",
  password: "",
  roleId: 0
};

const Login = (props) => {
  const history = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  // const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log('wrtwty', formValues);

    const login = {
        username: formValues.username,
        password: formValues.password
    }
    if(formValues.roleId === '2'){
        axios
        .post('https://bw-african-marketplace-app.herokuapp.com/api/login/owner', login)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('owner id', res.data.id)
            history.push('/dashboard')
            console.log(res);    
        })
        .catch(err => {
            console.log(err);
        })
    }
    else if(formValues.roleId === '1') {
        axios
        .post('https://bw-african-marketplace-app.herokuapp.com/api/login/user', login)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard')
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
  };


  return (


    <Form onSubmit={submit}>

          <HeadingContainer>
            <Heading>LOG IN</Heading>
          </HeadingContainer>
         
          <Input
            placeholder="username"
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />

          <Input
            placeholder="password"
            type="text"
            name="password"
            value={formValues.passowrd}
            onChange={handleChange}
          />

              <H2>Vendor or Customer?</H2>
          
                <Select
                    id="roleId"
                    name="roleId"
                    value={formValues.roleId}
                    onChange={handleChange}
                >
                    <option value="">---Choose One---</option>
                    <option value="2">Owner</option>
                    <option value="1">Customer</option>
                </Select>

                <Button>Submit</Button>

                <Social>
                  <Twitter/>
                  <Facebook/>
                  <Instagram/>
                  <Dribbble/>
                  <Email/>
                </Social>
      
        </Form>
  );
};
export default Login;


const Form = styled.form`
  display:flex;
  flex-direction:column;
  background-color:#55AFA5;
`
const Heading = styled.h1`
  border-top:2px solid white;
  border-bottom:2px solid white;
  width:75%;
  padding:2%;
  color:white;
  font-size:45px;
  margin: 5rem auto;
`

const HeadingContainer = styled.div`
  background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
  width:auto;
  padding:15%;
  background-size:cover;
`

const Select = styled.select`
  padding:1.5%;
  margin: 0 auto;
  width:25%;
`

const Input = styled.input`
  padding:1.5% 0;
  margin: 0 auto;
  margin-top:5%;
  width:25%;

`

const H2 = styled.h2`
  border-bottom:1px solid black;
  width:25%;
  margin: 5rem auto 1.5rem auto;
`

const Button = styled.button `
  padding:1.5%;
  width:10%;
  margin: 1.5% auto 4.5% auto;
  background-color:#DE6852;
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