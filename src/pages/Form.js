import * as React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Component } from 'react';



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
        const currentBuildings = res.data[0].id
        localStorage.setItem("customerbuilding", currentBuildings)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the batteries of the current user
const getBatteries = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/buildings/1/batteries`, requestOptions);
        const currentBatteries = res.data[0].id
        localStorage.setItem("customerbatteries", currentBatteries)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the columns of the current user
const getColumns = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/batteries/1/columns`, requestOptions);
        const currentColumns = res.data[0].id
        localStorage.setItem("customercolumns", currentColumns)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// To get the elevators of the current user
const getElevators = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/columns/1/elevators`, requestOptions);
        const currentElevators = res.data[0].id
        localStorage.setItem("customerelevators", ...currentElevators)                 
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

    const url = ("https://java-api.codeboxxtest.xyz/interventions/new", requestOptions)

    function handleChange(e) {
        const newinputs = {...inputs}
        newinputs[e.target.id] = e.target.value
        setInputs(newinputs);
        console.log(newinputs);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, {
           author: inputs.author,
           customer: inputs.customer,
           building: inputs.building,
           battery: inputs.battery,
           column: inputs.column,
           elevator: inputs.elevator,
           employee: inputs.employee,
           report: inputs.report        
        })
        .then(res => {
            return res
        })
        .catch((error) => {
            return error;
        });
    }

    return (
        <> 
        <h2>New Intervention</h2>
        <div className='App-wrapper'>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                
                <label> Building:
                    <input type='text'
                    name='building'
                    placeholder='Building'
                    className='form-field'
                    value={localStorage.getItem("customerbuilding") || ""}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                
                <label> Battery:
                    <input type='text'
                    name='battery'
                    placeholder='Battery'
                    className='form-field'
                    value={localStorage.getItem("customerbatteries") || ""}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                <label> Column:
                    <input type='text'
                    name='column'
                    placeholder='Column'
                    className='form-field'
                    value={localStorage.getItem("customercolumns") || ""}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                <label> Elevator:
                    <input type='text'
                    name='elevator'
                    placeholder='Elevator'
                    className='form-field'
                    value={localStorage.getItem("customerelevators") || ""}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                <label> Employee:
                    <select value={"Employee"}>
                    <option value="choose the employee"></option>
                    </select>
                </label>
                <label> Report:
                    <input type='text'
                    name='report'
                    placeholder='Report'
                    className='form-field'
                    value={inputs.report}
                    onChange={(e) => handleChange(e)}
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