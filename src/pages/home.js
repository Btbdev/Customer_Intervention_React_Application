import rocketLogo from '../rocketLogo.png';
import '../App.css';

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
