import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";
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
    <div className="body">
      <div className="form">
        <form onSubmit={submit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="text"
            name="password"
            value={formValues.passowrd}
            onChange={handleChange}
          />
          <label>
                <div className="label">
                    <h2>Vendor or Customer?</h2>
                </div>
                <select
                    id="roleId"
                    name="roleId"
                    value={formValues.roleId}
                    onChange={handleChange}
                >
                    <option value="">---Choose One---</option>
                    <option value="2">Owner</option>
                    <option value="1">Customer</option>
                </select>
                </label>
                <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
