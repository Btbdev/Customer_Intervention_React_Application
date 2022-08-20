import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from '../api/axios';


const requestOptions = {
    headers: {
        'content-type': 'application/json',
        'Authorization': localStorage.getItem('bearerToken')
    },
}

const getInterventions = async (setInterventions) => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/interventions`, requestOptions);

        res.status === 200 && setInterventions(res.data);
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}


const getCurrent = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/customers/current`, requestOptions);
        const currentUser = res.data.id
        localStorage.setItem("customerID", currentUser)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}


function HomePage() {

    const currentUser = getCurrent() 
   
    useEffect(() => {
        getCurrent();
    })

    const [interventions, setInterventions] = useState([]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);   

        return (
            
    <>
            <div>
                <h1>Customer interventions</h1>

                {                
                interventions.map(item => {
                    return <p>| ID: {item.id} | Building ID: {item.building} | Battery ID: {item.battery} | Column ID: {item.column}
                    | Elevator ID: {item.elevator} | Result: {item.result} | status: {item.status} |</p>
                })} 
                    
            </div>
           
            <div className="App">    
                <p>             
                    <Link to="/form">Make a new request</Link>
                </p>
            </div>
    </>
       )
    
}

export default HomePage