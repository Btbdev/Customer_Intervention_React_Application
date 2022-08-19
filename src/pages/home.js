import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
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


// à mettre current User dans customer field du form
const getCurrent = async () => {
    try {
        const res = await axios.get(`https://java-api.codeboxxtest.xyz/customers/current`, requestOptions);
        console.log("customer test Mathieu", res);
        const currentUser = res.data.id
        console.log("réussite:", currentUser)
        localStorage.setItem("customerID", currentUser)
        console.log("réussite localStorage?:", currentUser)
        return res;
    } catch (err) {
      console.warn("[testAuth] Error:", err)
    }
}

// à mettre dans les champs du form
// const getBuildings = async ("custoimerid à passer") => {
//     try {
//         const res = await axios.get(`https://java-api.codeboxxtest.xyz/buildings`, requestOptions);

//         return res;
//     } catch (err) {
//       console.warn("[testAuth] Error:", err)
//     }
// }
// const buildings = await getBuildings() //dans un useEffect

function HomePage() {

    const currentUser = getCurrent() 
   
    useEffect(() => {
        getCurrent();
    })





    const [interventions, setInterventions] = useState([]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);   
        
    // console.log("interventions are:", interventions);
    
    // interventions.map((e) => {
    //     console.log('intervention is:', e);
    // })



    const column = [
        { heading: 'ID', value: interventions.length > 0 && interventions[0].id },
        { heading: 'Author', value: 'author' },
        { heading: 'Battery', value: 'battery' },
        { heading: 'Building', value: 'building' },
        { heading: 'Column', value: 'column' },
        { heading: 'Customer', value: 'customer' },
        { heading: 'Company Name', value: 'customer.company_name' },
        { heading: 'Result', value: 'result:' },
    ]
console.log(column)
// à enlever probablement
    const Table = ({ data, column }) => {
        return (
            <table>
                <thead>
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={ item } />)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map((item, index) => <TableRow item={ item } column={ column } />)}
                    </tr>
                </tbody>
            </table>
        )
    }

    const TableHeadItem = ({ item }) => <th>{ item.heading }</th>
    
    const TableRow = ({ item, column }) => {
        // console.log("contenu :", item['result']);
        <tr>
            {column.map((columnItem, index) => {
                // console.log("Mathieu:", columnItem);
                return <td>{ item[`${columnItem.value}`] }</td>
            })}
        </tr>
    }

        return (
            
    <>
            <div>
                <h1>Customer interventions</h1>

                {/* <Table data={interventions} column={column} /> */}

                {interventions.map(item => {
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