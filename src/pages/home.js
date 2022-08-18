import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import rocketLogo from '../rocketLogo.png';
import '../App.css';
import axios from '../api/axios';



// function makeRequest() {
//     let headers = {}
//     if (localStorage.token) {
//         headers = { 'Authorization': localStorage.token }
//         console.log("Token test?:", localStorage.token);
//     }
    // fetch("/api/echo", { headers: headers })
    //     .then((res) => {
    //         if (res.status == 200) {
    //             return res.text()
    //         } else {
    //             throw Error(res.statusText)
    //         }
    //     }).then(responseText => logResponse("requestResponse", responseText))
    //     .catch(console.error)
    //  }



// const api = `your api here`
// axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
//         .then(res => {
//             console.log(res.data);
//         this.setState({
//             items: res.data,  /*set response data in items array*/
//             isLoaded : true,
//             redirectToReferrer: false
//         });
//     })



// import React, { useState, useEffect } from 'react';

// const interventions = () => {
//     const [id] = useState([]);
//     useEffect(() => {
//         fetch('https://java-api.codeboxxtest.xyz/interventions')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, []);

//     return (
//         <div className="posts-container">
//             {interventions.map((id) => {
//              return (
//                 <div className="post-card" key={interventions.id}>
//                     {/* <h2 className="post-title">{post.title}</h2>
//                     <p className="post-body">{post.body}</p>
//                     <div className="button">
//                     <div className="delete-btn">Delete</div>
//                     </div> */}
//                 </div>
//          );
//       })}
//    </div>
//     );
//     };

// const axios = require('axios').default;

// // Make a request to get all interventions
// axios.get('/interventions')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


function HomePage() {

    function interventions() {
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        //  if (this.readyState == 4 && this.status == 200) {
        //      // Access the result here
        //     console.log(this.responseText)
        //     //  alert(this.responseText);
        //  }
        let headers = {}
        if (localStorage.token) {
                    headers = {
                        'content-type': 'application/json',
                        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo',
                        // 'authenticate': 'email=customer1@business.com password=password123',
                    }
                    console.log("Token test - still there???:", headers);
                }
        
        axios.get('https://java-api.codeboxxtest.xyz/authenticate?email=customer1@business.com&password=password123/interventions', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo').then(
            (response) => {
                //handle success
                console.log(response);  
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            }, []);
    
        
        // xhttp.open("GET", "/interventions", true);
        // xhttp.setRequestHeader("Content-type", "application/json");
        // xhttp.setRequestHeader("Bearer", headers);
        // xhttp.send();
};
    
    interventions()



    return (
        <>
            <div className="App">
               
            </div>
            <div>
                <h1>
                    2e section du site <button onClick={interventions()}>Get Interventions</button>
                </h1>
            </div>
        </>
    );
}

export default HomePage
