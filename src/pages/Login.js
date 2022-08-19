import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import AuthContext from '../context/AuthProvider.js';

import axios from '../api/axios';
// import { Link } from 'react-router-dom';

// const LOGIN_URL = 'https://java-api.codeboxxtest.xyz';

const Login = async (navigate, email, password) => {

    try {
        const requestOptions = {
            headers: {
                'content-type': 'application/json',
            },
        }

        console.log("requestOptions are:", requestOptions)

        const res = await axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, requestOptions);

        console.log("res is:", res)

        if (res.status === 200 && res.data.access_token != null) {
            const token = `Bearer ${res.data.access_token}`
            localStorage.setItem("bearerToken", token)

            

            navigate("/home", { replace: true });
            // console.log(localStorage.getItem("bearerToken"));
        }
    } catch (err) {
      console.warn("[login] Error:", err)
    }
}


// const testAuth = async () => {
//     try {
//         const requestOptions = {
//             headers: {
//                 'content-type': 'application/json',
//                 'Authorization': localStorage.getItem('bearerToken')
//             },
//         }

//         console.log("requestOptions are:", requestOptions)

//         const res = await axios.get(`https://java-api.codeboxxtest.xyz/interventions`, requestOptions);

//         console.log("[testAuth] res is:", res)

//     } catch (err) {
//       console.warn("[testAuth] Error:", err)
//     }
// }
  
const Logintest = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    let navigate = useNavigate();
    // const errRef = useRef();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    // const[errMsg, setErrMsg] = useState('');
    // const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        Login(navigate, email, password);
    }
        
    return (
        <section>
            
            <h1>Customer Sign In</h1>
            <div>
                <form onSubmit={handleSubmit} className="App-header">
                    <div>
                        <label htmlFor='username'>Email:</label>
                        <input 
                            type="text"
                            id="username"
                            placeholder='enter your username'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder='enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <button className="">Sign In</button>
                </form>
                
            </div>
        </section>
    )
}

export default Logintest