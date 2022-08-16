import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider.js';

import axios from '../api/axios';

const LOGIN_URL = 'https://java-api.codeboxxtest.xyz';

const login = async () => {
    try {
        const headers = {
        headers: {
            accept: '*/*',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          },
        }
        console.log('test avec Marie')
        axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=customer1@business.com&password=password123`, headers)
        .then((response) => 
    
      console.log("res is :", response));
    } catch (error) {
      console.warn("[login] Error:", error)
  
      return null;
    }
  }

const Logintest = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        login();
    }
        
        // try {
        //     const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
        //     console.log("response is:", response),
        //     {
        //         headers: { 'Content-type': 'application/json' },
        //         withCredentials: true
        //     }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
        
    // }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="./Home">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assetlive">{errMsg}</p>
                    
                    <h1>Customer Sign In</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <label htmlFor='username'>Username:</label>
                            <input 
                                type="text"
                                id="username"
                                placeholder='enter your username'
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            </div>
                            <div>
                            <label htmlFor='password'>Password:</label>
                            <input 
                                type="password"
                                id="password"
                                placeholder='enter your password'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            </div>
                            <button className="">Sign In</button>
                        
                        </form>
                    </div>

                </section>
            )}
        </>
    )
}

export default Logintest