import React from 'react';
import Main from './Main'
import { Route, Redirect } from "react-router-dom";



const PrivateRoute = ({component: Component, ...rest}) => {

    let auth =  localStorage.getItem("jwtToken");

    return(
      <Route {...rest} render={props => (
        auth != null ? 
            <Main {...props}/> 
        :<Redirect to="/"/>
    )}/>
    
  
    );
  }




  export default PrivateRoute;