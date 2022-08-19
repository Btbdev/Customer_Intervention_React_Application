import * as React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const requestOptions = {
    headers: {
        'content-type': 'application/json',
        'Authorization': localStorage.getItem('bearerToken')
    },
}

// To get the buildings of the current user
const getBuildings = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/buildings/current`, requestOptions);
        console.log("customer building Mathieu", res);
        const currentBuildings = res.data[0].id
        console.log("réussite:", currentBuildings)
        localStorage.setItem("customerbuilding", currentBuildings)
        console.log("réussite localStoragebuilding?:", currentBuildings)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the batteries of the current user
const getBatteries = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/buildings/1/batteries`, requestOptions);
        console.log("customer battery Mathieu", res);
        const currentBatteries = res.data[0].id
        console.log("réussite:", currentBatteries)
        localStorage.setItem("customerbatteries", currentBatteries)
        console.log("réussite localStoragebattery?:", currentBatteries)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the columns of the current user
const getColumns = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/batteries/1/columns`, requestOptions);
        console.log("customer column Mathieu", res);
        const currentColumns = res.data[0].id
        console.log("réussite:", currentColumns)
        localStorage.setItem("customercolumns", currentColumns)
        console.log("réussite localStoragecolumn?:", currentColumns)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the elevators of the current user
const getElevators = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/columns/1/elevators`, requestOptions);
        console.log("customer elevators Mathieu", res);
        const currentElevators = res.data
        console.log("réussite:", currentElevators)
        localStorage.setItem("customerelevators", currentElevators)
        console.log("réussite localStorageelevators?:", currentElevators)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}


function Form() {

    const currentBuildings = getBuildings()
   
    useEffect(() => {
        getBuildings();
    })

    const currentBatteries = getBatteries()
   
    useEffect(() => {
        getBatteries();
    })

    const currentColumns = getColumns()
   
    useEffect(() => {
        getColumns();
    })

    const currentElevators = getElevators()
   
    useEffect(() => {
        getElevators();
    })
  
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${inputs}`)
    }


    return (
        <> 
        <div className='App-wrapper'>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <label> Author:
                    <select value={"Author"}>
                    <option value="choose the author"></option>
                    </select>
                </label>
                <label> Customer:
                    <input type='text'
                    name='customer'
                    placeholder='Customer'
                    className='form-field'
                    value={localStorage.getItem("customerID") || ""}
                    onChange={handleChange}
                    />
                </label>
                
                <label> Building:
                    <select>
                        <option value="1">One</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                    </select>
                    
                </label>
                
                <label> Battery:
                    <input type='text'
                    name='battery'
                    placeholder='Battery'
                    className='form-field'
                    value={localStorage.getItem("customerbatteries") || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Column:
                    <input type='text'
                    name='column'
                    placeholder='Column'
                    className='form-field'
                    value={localStorage.getItem("customercolumns") || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Elevator:
                    <input type='text'
                    name='elevator'
                    placeholder='Elevator'
                    className='form-field'
                    value={localStorage.getItem("customerelevators") || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Employee:
                    <select value={"Author"}>
                    <option value="choose the author"></option>
                    </select>
                </label>
                <label> Report:
                    <input type='text'
                    name='report'
                    placeholder='Report'
                    className='form-field'
                    value={""}
                    onChange={handleChange}
                    />
                </label>
                <input type='submit' />
            </fieldset>
            </form>
        </div>                   
                            
                    
                    
        <p>       
            <Link to="/home">Back to Home Page</Link>
        </p>
        </> 
               
    );

}

export default Form