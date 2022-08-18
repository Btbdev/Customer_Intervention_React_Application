import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import rocketLogo from '../rocketLogo.png';
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

function HomePage() {
    const [interventions, setInterventions] = useState([]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);

    console.log("interventions are:", interventions)

    return (
        <>
            <div className="App">
               
            </div>
            <div>
                <h1>
                    yay
                    {/* 2e section du site <button onClick={interventions()}>Get Interventions</button> */}
                </h1>
            </div>
        </>
    );
}

export default HomePage
