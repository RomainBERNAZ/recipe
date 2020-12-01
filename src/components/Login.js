import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.css';



const Login = () => {
  
  const history = useHistory();
  
  const [user, setUser]= useState('');
  const [password, setPassword]= useState('');

 

    const login = async (e) => {
      e.preventDefault();
       await axios
            .post('http://localhost:1337/auth/local', {
              identifier: user,
              password: password,
            })
            .then(response => {
              console.log(response.data)
               localStorage.setItem("jwtToken" , response.data.jwt)
               localStorage.setItem("userToken", response.data.user.username)
              // Handle success.
              console.log("Vous êtes bien connecté !");
              history.push("/main")
            })
            .catch(error => {
              // Handle error.
              console.log('An error occurred:', error.response);
              alert('Mauvaise combinaison')
            });

            
    } 

    return (

            <div className="signup">
              <div className="title">
                <h2>LOGIN</h2>
              </div>
              <div className="inputs">
                  <form onSubmit={login} >
                    <p>Username</p><input type="text" onChange={ e => setUser(e.target.value) } required/>
                    <p>Password</p><input type="password" onChange={ e => setPassword(e.target.value)} required/> <br/><br/>
                    <button type="submit">Let's cook</button>
                    </form>
                 <div className="link">
                    <a href="/register">Not registered yet ?</a>
                    </div>
                    </div>
            </div>
    )
}





export default Login; 