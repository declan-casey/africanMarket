import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import registerSchema from "../registration/registerSchema";
import * as yup from "yup";
import styled from 'styled-components';

const initialFormValues = {
    username: "",
    password: "",
};
const initialFormErrors = {
    username: "",
    password: "",
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
    
    if (formValues.roleId === "1") {
      axios
        .post(
          "https://food-truck-trackr-api.herokuapp.com/api/user",
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
              "https://food-truck-trackr-api.herokuapp.com/api/auth/login",
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
    // if (formValues.roleId === "2") {
    //   axios
    //     .post(
    //       "https://bw-african-marketplace-app.herokuapp.com/api/auth/register/owner",
    //       submitValues
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       const loginValues = {
    //         username: submitValues.username,
    //         password: submitValues.password,
    //       };
    //       console.log(loginValues);
    //       axios
    //         .post(
    //           "https://bw-african-marketplace-app.herokuapp.com/api/auth/login",
    //           loginValues
    //         )
    //         .then((res) => {
    //           console.log(res);
    //           localStorage.setItem("roleId", res.data.type);
    //           localStorage.setItem("token", res.data.token);
    //           history.push("/dashboard");
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };
  return (
      
        <div>
            <div>
                <div className="usernameError">{formErrors.roleId}</div>
                <div className="store_nameError">{formErrors.store_name}</div>
                <div className="nameError">{formErrors.username}</div>
                <div className="passwordError">{formErrors.password}</div>
            </div>
            <form onSubmit={submit}>
                <h1>SIGN UP</h1>
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
                <label>
                    <div className="label">
                    <h2>Username:</h2>
                    </div>
                    <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    <div className="label">
                    <h2>Password:</h2>
                    </div>
                    <input
                    placeholder=""
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
                {/* {formValues.roleId ? 2 : <OwnerOnly id='hidden' />} */}
                <OwnerOnly>
                        <div className="label">
                            <h2>Store Name:</h2>
                            <input
                            placeholder="Store Name"
                            type="text"
                            name="store_name"
                            value={formValues.store_name}
                            onChange={handleChange}
                            />
                        </div>
                </OwnerOnly>
                <OwnerOnly>
                    <div className='label'>
                        <h2>Category:</h2>
                        <div className="label">
                            <input
                            placeholder="Store Name"
                            type="text"
                            name="store_category"
                            value={formValues.store_category}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </OwnerOnly>
                
            </form>
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
