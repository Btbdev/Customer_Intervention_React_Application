import rocketLogo from '../rocketLogo.png';
import '../App.css';
import axios from '../api/axios';



function makeRequest() {
    let headers = {}
    if (localStorage.token) {
        headers = { 'Authorization': localStorage.token }
        console.log("Token test?:", localStorage.token);
    }
    // fetch("/api/echo", { headers: headers })
    //     .then((res) => {
    //         if (res.status == 200) {
    //             return res.text()
    //         } else {
    //             throw Error(res.statusText)
    //         }
    //     }).then(responseText => logResponse("requestResponse", responseText))
    //     .catch(console.error)
    }



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
    return (
        <div className="App">
            <header className="App-header">
                <img src={rocketLogo} className="" alt="logo" width="25%" />
        
        
            Home Page
            </header>
        </div>
    );
}

export default HomePage
