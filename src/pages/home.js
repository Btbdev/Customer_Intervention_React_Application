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

function HomePage() {
    const [interventions, setInterventions] = useState([]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);   
        
    console.log("interventions are:", interventions);
    
    const column = [
        { heading: 'Author', value: 'author' },
        { heading: 'Battery', value: 'battery' },
        { heading: 'Building', value: 'building' },
        { heading: 'Column', value: 'column' },
        { heading: 'Customer', value: 'customer' },
        { heading: 'Result', value: 'result' },
    ]

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
    
    const TableRow = ({ item }) => {
        console.log("contenu :", item['result']);
        <tr>
            {column.map((columnItem, index) => {
                return <td>{ item[`${columnItem.value}`] }</td>
            })}
        </tr>
    }

        return (
            
    <>
            <div>
                <h1>test Mathieu</h1>

                <Table data={interventions} column={column} />

                {/* {interventions.map(item => {
                    return <p>{item.id} - {item.intervention_started} - {item.intervention_ended} - {item.battery} - {item.result} </p>
                })}  */}
                    
            </div>
           
            <div className="App">    
                <p>             
                    <Link to="/form">Make your request</Link>
                </p>
            </div>
    </>
       )
    
}

export default HomePage
  

/////////////////////////////////////////////////////////////////////////////////////////////
// Test for automatic table filling

// const column = [
//     { heading: 'Author', value: 'author' },
//     { heading: 'Battery', value: 'battery' },
//     { heading: 'result', value: 'result' },
// ]



// const Table = ({ data, column }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {column.map((item, index) => <TableHeadItem item={ item } />)}
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     {data.map((item, index) => <TableRow item={ item } column={ column } />)}
//                 </tr>
//             </tbody>
//         </table>
//     )
// }

// const TableHeadItem = ({ item }) => <th>{ item.heading }</th>
// const TableRow = ({ item }) => {
//     <tr>
//         {column.map((columnItem, index) => {
//             return <td>{ item[`${columnItem.value}`] }</td>
//         })}
//     </tr>
// }
//     <div>
//         <Table data={interventions} column={column} />
//     </div>
//////////////////////////////////////////////////////////////////////////////////////////////
// test hardcoded table filling

//     const data = React.useMemo(() =>
//         [
        
        
//         { heading: "Author", value: "interventions" },
        
        
//         {
//         name: 'Michele Castillo',
//         address: '637 Kyle Street, Fullerton, NE 68638',
//         date: '07/11/2020',
//         order: '58418278790810',
//         },
//         {
//         name: 'Eric Ferris',
//         address: '906 Hart Country Lane, Toccoa, GA 30577',
//         date: '07/10/2020',
//         order: '81534454080477',
//         },
//         {
//         name: 'Gloria Noble',
//         address: '2403 Edgewood Avenue, Fresno, CA 93721',
//         date: '07/09/2020',
//         order: '20452221703743',
//         },
//         {
//         name: 'Darren Daniels',
//         address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
//         date: '07/07/2020',
//         order: '22906126785176',
//         },
//         {
//         name: 'Ted McDonald',
//         address: '796 Bryan Avenue, Minneapolis, MN 55406',
//         date: '07/07/2020',
//         order: '87574505851064',
//         },
//         ],
//         []
//     )
    
//     const columns = React.useMemo(
//         () => [
//         {
//         Header: 'Customer Intervention',
//         columns: [
//         {
//         Header: 'Author',
//         accessor: 'id',
//         },
//         {
//         Header: 'Battery ID',
//         accessor: 'address',
//         },
//         ],
//         },
//         {
//         Header: 'Order Info',
//         columns: [
//         {
//         Header: 'Date',
//         accessor: 'date',
//         },
//         {
//         Header: 'Elevator ID',
//         accessor: 'elevator.id',
//         },
//         ],
//         },
//         ],
//         []
//     )

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//        } = useTable({ columns, data })

//        return (
// <>

//         <table {...getTableProps()}>
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map(row => {
//               prepareRow(row)
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   })}
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
