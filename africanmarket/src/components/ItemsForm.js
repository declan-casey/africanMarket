import axios from "axios"
import * as yup from "yup"
import React, {useEffect, useState} from "react";
import schema from "../registration/itemsFormSchema"
import {useHistory} from "react-router-dom"
const initialFormValues = {
    name : "",
    price : "",
    description : "",
}
const initialFormErrors = {
    name : "",
    price : "",
    description : "",
}
// const initialItem = []
function ItemsForm() {
    // const [item, setItem] = useState(initialItem)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
   const history = useHistory()
    // const inputChange = (obj, value) => {
    //     yup.reach(schema, obj).validate(value)
    //     .then(() => {
    //         setFormErrors({
    //             ...formErrors,
    //             [obj]: "",
    //         })
    //     })
    //     .catch((err) => {
    //         setFormErrors({
    //             ...formValues,
    //             [obj]: err.errors[0]
    //         })
    //     })
    //     setFormValues({
    //         ...formValues,
    //         [obj]: value
    //     })
    // }
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
        console.log("a", formValues)
    };
    const submit = (e) => {
        e.preventDefault();
        console.log('formValues: ', formValues);
        const newPost = {
            owner_id: localStorage.getItem('owner_id'),
            name: formValues.name,
            price: formValues.price,
            description: formValues.description
        }
        axios
      .post(
        "https://bw-african-marketplace-app.herokuapp.com/api/item",
        newPost
      )
     .then((res)=> {
        console.log(res)
         history.push('/dashboard')
     }
     )
      .catch((err) => {
        console.log(err);
      });
    }
    return (
        <div>
           <form onSubmit = {submit}>
               <input 
               placeholder = "Item Name ..."
               type = "text"
               name = "name"
               value = {formValues.name}
               onChange = {handleChange}></input><br></br>
               <input 
               placeholder = "Price ..."
               type = "text"
               name = "price"
               value = {formValues.price}
               onChange = {handleChange}></input><br></br>
               <input 
               placeholder = "Description ..."
               type = "text"
               name = "description"
               value = {formValues.description}
               onChange = {handleChange}></input>
               <button>Submit</button>
           </form>
           <div>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.price}</div>
                    <div>{formErrors.description}</div>
                </div>
        </div>
    )
}
export default ItemsForm