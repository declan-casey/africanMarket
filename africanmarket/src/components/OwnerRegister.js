import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import registerSchema from "../registration/registerSchema";
import * as yup from "yup";
import styled from 'styled-components';

const initialFormValues = {
    username: "",
    password: "",
    store_name: "",
    store_category: "",
    roleId: 0
};
const initialFormErrors = {
    username: "",
    password: "",
    store_name: "",
    store_category: "",
    roleId: ''
};

const OwnerRegister = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("The form has recieved a change thru input");
    registerSchema
      .isValid(formValues)
      .then((valid) => {
        setDisabled(!valid);
      })
      .catch((err) => alert(err));
  }, [formValues]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(registerSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const submitValues = {
      username: formValues.username,
      password: formValues.password,
    };
    
    const submitValuesOwner = {
      username: formValues.username,
      password: formValues.password,
      store_name: formValues.store_name,
      store_category: formValues.store_category
    }
    if (formValues.roleId === "1") {
      axios
        .post(
          "https://bw-african-marketplace-app.herokuapp.com/api/register/user",
          submitValues
        )
        .then((res) => {
          console.log(res);
          const loginValues = {
            username: submitValues.username,
            password: submitValues.password,
          };
          console.log(loginValues);
          axios
            .post(
              "https://bw-african-marketplace-app.herokuapp.com/api/login/user",
              loginValues
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("roleId", res.data.type);
              localStorage.setItem("token", res.data.token);
              history.push("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (formValues.roleId === "2") {
      axios
        .post(
          "https://bw-african-marketplace-app.herokuapp.com/api/register/owner",
          submitValuesOwner
        )
        .then((res) => {
          console.log(res);
          const loginValues = {
            username: submitValuesOwner.username,
            password: submitValuesOwner.password,
          };
          console.log(loginValues);
          axios
            .post(
              "https://bw-african-marketplace-app.herokuapp.com/api/login/owner",
              loginValues
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("roleId", res.data.type);
              localStorage.setItem("token", res.data.token);
              history.push("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  return (
      
        <div>

            <div>
                <div className="usernameError">{formErrors.roleId}</div>
                <div className="store_nameError">{formErrors.store_name}</div>
                <div className="nameError">{formErrors.username}</div>
                <div className="passwordError">{formErrors.password}</div>
            </div>

            <Form onSubmit={submit}>

              <HeadingContainer>
                <Heading>SIGN UP</Heading>
              </HeadingContainer>
             
                <TopInputSection>

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

                      <H2>Username:</H2>  

                      <Input
                      placeholder="Username"
                      type="text"
                      name="username"
                      value={formValues.username}
                      onChange={handleChange}
                      />
                    
                      <H2>Password:</H2>
                    
                      <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      />

                  {/* {formValues.roleId ? 2 : <OwnerOnly id='hidden' />} */}

                  

                </TopInputSection>

              <BottomInputSection>

                <OwnerOnly>

                  <H2>Store Name:</H2>

                  <Input
                    placeholder="Store Name"
                    type="text"
                    name="store_name"
                    value={formValues.store_name}
                    onChange={handleChange}
                    />
                    
                </OwnerOnly>

                <OwnerOnly>

                  <H2>Category:</H2>

                    <Input
                      placeholder="Category"
                      type="text"
                      name="store_category"
                      value={formValues.store_category}
                      onChange={handleChange}
                      />

                </OwnerOnly><br></br>
                <Button>Submit</Button>
              </BottomInputSection>

              <Social>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <Dribbble/>
                <Email/>
              </Social>

            </Form>

        </div>

  );

};
let OwnerOnly = styled.label`
    width: 100px;
    #hidden {
      display: none;
    }
`


export default OwnerRegister;


/* Styling Below */

const Form = styled.form`
  display:flex;
  flex-direction:column;

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

const H2 = styled.h2`
  border-bottom:1px solid black;
  width:25%;
  margin: 5rem auto 1.5rem auto;
`

const Select = styled.select`
  padding:1.5%;
  margin: 0 auto;
  width:25%;
`

const Input = styled.input`
  padding:1.5% 0;
  margin: 0 auto;
  width:25%;

`

const Button = styled.button `
  padding:1.5%;
  width:10%;
  margin: 1.5rem auto 1.5rem auto;
  background-color:#DE6852;
  color:white;
  border:none;
  border-radius:4px;
`


const TopInputSection = styled.div`
  background-color:#55AFA5;
  padding-bottom:6%;
  display:flex;
  flex-direction:column;
`
const HeadingContainer = styled.div`
  background:url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Ffruit%2Ffruit-08.jpg&f=1&nofb=1') no-repeat center;
  width:auto;
  padding:15%;
  background-size:cover;
`

const BottomInputSection= styled.div`
  background-color: #51528F;
  padding-bottom:10%;

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