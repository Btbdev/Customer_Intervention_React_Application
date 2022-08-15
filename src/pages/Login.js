import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="email"
            placeholder="blablabla"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}








const handleSubmit = (email, pass) => {
    //reqres registered sample user
    const loginPayload = {
      email: 'customer1@business.com',
      password: 'password123'
    }
  
    axios.post("https://reqres.in/api/login", loginPayload)
      .then(response => {
        //get token from response
        const token  =  response.data.token;
  
        //set JWT token to local
        localStorage.setItem("token", token);
  
        //set token to axios common header
        setAuthToken(token);
  
 //redirect user to home page
        window.location.href = '/'
      })
      .catch(err => console.log(err));
  };