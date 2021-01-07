import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

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
        </div>
    )
};

export default Dashboard;