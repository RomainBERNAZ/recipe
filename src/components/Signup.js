import React, {useRef} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Signup.css';




const Signup = () => {


  const history = useHistory();
  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  
  
  const register = async (e) => {
    e.preventDefault();
    await axios
    .post('http://localhost:1337/auth/local/register', {
    username: userRef.current.value,
    email: emailRef.current.value,
    password: passRef.current.value,
    
    })
    .then(response => {
      alert('Tout est bon !')
      history.push("/login");
    // Handle success.
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    })
    .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    });
    }



return (

<div className="signup">
  <div className="title">
    <h2>REGISTER</h2>
  </div>
  <form onSubmit={register}>
    <div className="inputs">
      <p>Username</p> <input type="text" ref={userRef} />
      <p>Email</p> <input type="text" ref={emailRef} />
      <p>Password</p> <input type="password" ref={passRef} /> <br /><br />
      <button type="submit">Let's cook</button>
    </div>
  </form>
</div>




)
}





export default Signup;