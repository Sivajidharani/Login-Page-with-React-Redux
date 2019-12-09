import React, { Component } from 'react'
import App from './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

export class RegisterSuccess extends Component {
    render() {
        const state = this.props.location.state.response
        console.log(state)
        return (
           
        <MuiThemeProvider>
             <div>
            <nav className="navbar navbar-primary bg-info">
              <a id= "color_login" className="navbar-brand navLogin">See yu Again!</a>
                <form className="form-inline">
                 
                  <Link to='/home' >  <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>
                </form>
            </nav>
        </div>
            <div className="textCenter">
           
               <div> You have successfully Registered</div>
               <br/>
               <div>  Thank you for Registering.</div>
                <br/>
           <div > Click here to <a href="/home">login  </a> </div>
            </div>
            </MuiThemeProvider>
        )
    }
}

export default RegisterSuccess
