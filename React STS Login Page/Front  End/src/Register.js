import React, { Component } from 'react'
import App from './App.css'
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost} from './Actions/RegisterActions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import {NavLink, Route} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RegisterSuccess from './RegisterSuccess';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;

const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role:''
   
    
 
}

var firstNameError ="";
var lastNameError ="";
var userNameError ="";
var emailNameError ="";
var passwordError ="";
var Invaliderror:""




export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialState,   isSuccess:true,
            role:'User',
            personalData: {  
                    userName: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    role:'User'
           }
           
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange= (event) =>{

        const { name, value } = event.target;
        let { personalData } = this.state;

        let userData = {
          
            ...personalData,
           
            [name]: value,
            
        }

        this.setState({
          
             [name]: value,
             personalData :userData
         })
     
   }


validate =() =>{
    alert("hai")
console.log(this.state.role)
    console.log(this.state.isSuccess)
    console.log(this.state.userName)
 var regx = /^[a-zA-Z0-9\s]+$/;
 var flag = 0;
 var mailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 var specialcharRegex = /[!@#$%^&*(),.?":{}|<>]/; 

 



 // This is first name validation
 if(!this.state.firstName) {

    firstNameError = "firstName is empty "
     this.setState({firstNameError})
     flag = 1;

  }

 else if(this.state.firstName.length > 21){
         alert(" Successfully")
    firstNameError = "First name should be less than 20 characters"
   this.setState({firstNameError})
   flag = 1;
  }
  else {
   firstNameError=" ";
   this.setState({firstNameError})
   
 }
 
// This is last name validation
if(!this.state.lastName) {
    lastNameError = "Last name is empty "
     this.setState({lastNameError})
     flag = 1;
  }
 
 else if(this.state.lastName.length > 21 ){
    lastNameError = "Last name should be less than 20 characters"
   this.setState({lastNameError})
   flag = 1;
  }
 
 else{
    lastNameError="";
   this.setState({lastNameError})
   
 }
 
// This is user name validation
if(!this.state.userName) {
    userNameError = "User name is empty "
     this.setState({userNameError})
     flag = 1;
  }
 
 else if(this.state.userName.length > 21 ){
    userNameError = "User name should be less than 20 characters"
   this.setState({userNameError})
   flag = 1;
  }
  else if((specialcharRegex.test(this.state.userName))){
    console.log("inside anr and username is "+this.state.userName);
    userNameError="Use alphanumeric characters";
    this.setState({userNameError});
    flag=1;
} 

else{
    userNameError="";
   this.setState({userNameError})
 }

// This is password validation
if(!this.state.password) {
    passwordError = "Password is empty "
     this.setState({passwordError})
     flag = 1;
  }
 
 else if(this.state.password.length > 21 ){
    passwordError = "User name should be less than 20 characters"
   this.setState({passwordError})
   flag = 1;
  }
else if(regx.test(this.state.password)){
    passwordError=" User name sholud be alpha numeric"
   this.setState({passwordError})
   flag = 1;
}
else{
    passwordError="";
   this.setState({passwordError})
 }

 //This is for email
 if(!this.state.email) {
    emailNameError="Email is empty "
     this.setState({emailNameError})
     flag = 1;
  }
  else if(!mailregx.test(this.state.email))
  { emailNameError="Invalid E-mail ID"
  this.setState({emailNameError})
  flag = 1;}
  else{
    emailNameError="";
   this.setState({emailNameError})
 }
console.log(flag)
if(flag==1)
   {
     return false;
   }

   else{
    return true

   }
      };
 


handleSubmit = (event) => {
  //  console.log(this.state.firstName.length)
  console.log(this.state.personalData)
  console.log(this.state.role)
  console.log(this.state.radio)
    event.preventDefault()
    const isValid = this.validate();
   console.log(isValid)
  const news = this.state.isSuccess
   console.log(news)
   console.log(this.state.userName)
    const {firstName,lastName,userName,email,password,isSuccess,role}= this.state.personalData;
this.setState({
    isSuccess:this.state.isSuccess
})
console.log(isSuccess) 
    const formValues = {
    firstName:  firstName,
   lastName: lastName,
   userName: userName,
   email: email,
   password: password,
   role:role,
   isSuccess:isSuccess
   }
   console.log(isSuccess)
    console.log(formValues)
   console.log(firstName)
   console.log(userName)
   console.log(lastName)
   console.log(email)
   console.log(password) 

   if(isValid){

       console.log("----------------------------")
       axios({
        method: 'post',
        url: 'http://localhost:8091/Register',
        data: {   firstName:  firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            role:role,
            isSuccess:isSuccess},
        headers: {
            'content-type': `application/json;`
        }
    }).then(response =>{
        console.log(response.data)
        if(response.data){
            alert("Registered Successfully")
            this.props.createPost(formValues)
            this.props.history.push({pathname:'/RegisterSuccess',
            state:{response:formValues}})
        
        }else{
            alert("unsuccessfully")
            Invaliderror = "Invalid Credentials"
            this.setState({
                Invaliderror
            })
        }
    //    if(response.data){
    //        console.log("in response")
    //     console.log(response.data)
    //     this.props.history.push("/Success")
    //    }else {
    //        console.log("unsuccess")
    //     this.props.history.push("/")
    //    }

    });
    //    this.props.createPost(formValues)
    
    //    this.props.history.push({pathname:'/RegisterSuccess',
    //    state:{response:formValues}})
    // this.props.history.push({pathname:'/Home',
    // state:{response:formValues}})
   }

}

    render() {
console.log(this.state.isSuccess)

        let {user} = this.props
        console.log(user)

      
        return (


<div>
<MuiThemeProvider>
  <div>
  <div>
            <nav className="navbar navbar-primary bg-info">
              <a id= "color_login" className="navbar-brand navLogin">Register</a>
                <form className="form-inline">
                 
                  <Link to='/home' >  <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>
                </form>
            </nav>
        </div>
   <div className="margin">

   <TextField
     name="userName"
     type="text"
     hintText="Enter your User Name"
     floatingLabelText="User Name*"
     onChange = {this.handleChange}
     />
       <div style={{fontSize:20,color:"red"}}>{this.state.userNameError} </div> 
   <br/>
   <TextField
     name="firstName"
     type="text"
     hintText="Enter your First Name"
     floatingLabelText="First Name*"
     onChange = {this.handleChange}
     />
    

     <div style={{fontSize:20,color:"red"}}>{this.state.firstNameError} </div> 
     
   <br/>
   
   <TextField
     name="lastName"
     type="text"
     hintText="Enter your Last Name"
     floatingLabelText="Last Name*"
     onChange = {this.handleChange}
     
     />
       <div style={{fontSize:20,color:"red"}}>{this.state.lastNameError} </div> 
   <br/>
   <TextField
      name="email"
     hintText="Enter your Email"
     type="email"
     floatingLabelText="Email*"
     onChange ={this.handleChange}

     />
     
      <div style={{fontSize:20,color:"red"}}>{this.state.emailNameError} </div> 
   <br/>
   <TextField
     name="password"
     type = "password"
     hintText="Enter your Password"
     floatingLabelText="Password*"
     onChange = {this.handleChange}
     />
      <div style={{fontSize:20,color:"red"}}>{this.state.passwordError} </div> 
   <br/>

 {/* <div>
                <label> Role </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select value={this.state.role} onChange={this.handleSelectChange}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                 
                 </select>             
            </div>  */}
            <div name="role"class="input-group mb-3">
  <div name="role" class="input-group-prepend">
    <label name="role" class="input-group-text" for="inputGroupSelect01">Role</label>
  </div>
  <select id="width" name="role" class="custom-selects" id="inputGroupSelect01" value={this.state.role} onChange={this.handleChange}>
   
    <option name="role" value="Admin" selected>Admin</option>
    <option name="role" value="User">User</option>

  </select>
</div>

<br/>


   <div style={{fontSize:20,color:"red"}}>{this.state.Invaliderror} </div> 
   <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit}/>
   
  </div>
  </div>
 </MuiThemeProvider>
</div>
        )
    }
    
}

Register.propTypes = {
    createPost: PropTypes.func.isRequired
  };

function mapStateToProps(state) {
    console.log('7')
    return ({
        user: state.formReducers.items
       
    });
};
function mapDispatchToProps(dispatch) {
    console.log('8')
    return ({
        createPost: (formValues) => {
            dispatch(createPost(formValues))
        }

    });
};
const style = {
    margin: 15,
  };
export default connect(mapStateToProps, mapDispatchToProps)(Register);