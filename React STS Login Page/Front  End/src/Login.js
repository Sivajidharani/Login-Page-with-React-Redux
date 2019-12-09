import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import App from './App.css'


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 render() {
  return (
    <div>
      <MuiThemeProvider>
        <div>
        {/* <AppBar
           title="Login"
         /> */}
         <div>
            <nav className="navbar navbar-primary bg-info">
              <a className="navbar-brand navLogin">Login Details</a>
                <form className="form-inline">
                  <button className="btn btn-success my-2 my-sm-0" type="submit">Login</button>
                </form>
            </nav>
        </div>
         <div className="margin" >
         <TextField 
           hintText="Enter your Username"
           floatingLabelText="Username"
           onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
          
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </div>
       </MuiThemeProvider>
    </div>
  );
}
}
const style = {
margin: 15,
};
export default Login;