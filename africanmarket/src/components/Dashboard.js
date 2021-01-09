import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
import styled from 'styled-components';


const Dashboard = () => {
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axiosWithAuth()
        .get('https://bw-african-marketplace-app.herokuapp.com/api/items')
        .then(res => {
            console.log('res', res);
            setItems(res.data)
        })
        .catch(err => {
            console.log(err);
        })

    };
    useEffect(() => {
        fetchItems();
    }, [])


    return(

        <div>

            <div>

                <h1>What it is?</h1>

            </div>

            {items.map(item => {

                return (

                    <div> {item.item_name}: {item.item_description} </div>

                )

            })}
            
        <Social>
            <Twitter/>
            <Facebook/>
            <Instagram/>
            <Dribbble/>
            <Email/>
        </Social>

        </div>
    )
};

export default Dashboard;


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