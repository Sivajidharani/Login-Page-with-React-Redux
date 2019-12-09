import React, { Component } from 'react';
import App from './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost,successMsg} from './Actions/RegisterActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import {NavLink, Route} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RegisterSuccess from './RegisterSuccess';
const API_URL = 'http://localhost:8091';

const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
 
}

var firstNameError ="";
var lastNameError ="";
var userNameError ="";
var emailNameError ="";
var passwordError ="";
var Invaliderror:""


export class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialState,   isSuccess:true,
            myName:''
        }

    }
    componentDidMount() {
        const state = this.props.location.state.response
        console.log(state)
        console.log(state.firstName)
            this.setState({
                myName:state.firstName
            })
        this.setState({
            firstName:state.firstName,
            lastName:state.lastName,
            userName:state.userName,
            email:state.email
        })
        const details = {
                       firstName: this.state.firstName,
                       lastName: this.state.lastName,
                       userName: this.state.userName,
                       email:this.state.email,
                      
                       }
                       console.log(details)
        let {user} = this.props; 
        if(user)
        {
        console.log(user)
       const url = `${API_URL}/Edit/${ user }/`;
       console.log(url)
        axios.put(url,details).then(response => response.data)
        .then((data) => {
            console.log(data)
     
          console.log(this.state.firstName)
          console.log(this.state.lastName)
          console.log(this.state.userName)
          console.log(this.state.email)
          console.log("-----------------")
       
         })
        }
      
    }
//     componentDidMount() {
// alert("in cdm")
//         const state = this.props.location.state.response
//         console.log(state)
//         console.log(state.firstName)
//         const details = {
//             firstName:  state.firstName,
//            lastName: state.lastName,
//            userName: state.userName,
//            email:state.email,
          
//            }
    //     let {user} = this.props; 
    //     if(user)
    //     {
    //     console.log(user)
    //    const url = `${API_URL}/Edit/${ user.userName }/`;
    //    console.log(url)
    //     axios.put(url,details).then(response => response.data)
    //     .then((data) => {
    //         console.log(data)
     
    //       console.log(this.state.firstName)
    //       console.log(this.state.lastName)
    //       console.log(this.state.userName)
    //       console.log(this.state.email)
    //       console.log("-----------------")
       
    //      })
    //     }
    //   }

    handleUsernameChange = (event) =>{
        this.setState({
            userName:event.target.value
        })
      }
      
      handlePasswordChange = (event) =>{
        this.setState({
            password:event.target.value
        })
      }

      handlefnChange = (event) =>{
        this.setState({
            firstName:event.target.value
        })
      }

      handlelnChange = (event) =>{
        this.setState({
            lastName:event.target.value
        })
      }

      handleemailChange = (event) =>{
        this.setState({
            email:event.target.value
        })
      }


validate =() =>{
alert("hai")
    console.log(this.state.isSuccess)
    console.log(this.state.userName)
 var regx = /^[a-zA-Z0-9\s]+$/;
 var flag = 0;
 var mailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 var specialcharRegex = /[!@#$%^&*(),.?":{}|<>]/; 

 



 // This is first name validation
 if(!this.state.firstName) {

    firstNameError = "First name is empty "
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
 


 //This is for email
 if(!this.state.email) {
    emailNameError="Email is empty "
     this.setState({emailNameError})
     flag = 1;
  }
  else if(!mailregx.test(this.state.email))
  { emailNameError="Invalid E-mail ID"
  this.setState({emailNameError})}
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
 
goHome=(event) => {
    this.props.history.push("/")
}

handleSubmit = (event) => {
    
    event.preventDefault()
    const isValid = this.validate();
   console.log(isValid)
  const news = this.state.isSuccess
   console.log(news)
   console.log(this.state.userName)

    const {firstName,lastName,userName,email,password,isSuccess}= this.state;
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
   isSuccess:isSuccess
   }


   const details = {
       firstName:  firstName,
      lastName: lastName,
      email:email,
     
      }
      console.log(details)
   let {user} = this.props; 
   if(user){
    console.log(user)
    const url = `${API_URL}/Edit/${ this.state.userName }`;
   console.log(url)
   axios.put(url,details).then(response => response.data)
   .then((data) => {
      console.log(data)
      if(isValid){
    //   this.props.history.push("/Success")}
    this.props.history.push("/ForTables")}
      console.log(this.state.firstName)
     console.log(this.state.lastName)
     console.log(this.state.userName)
     console.log(this.state.email)
     console.log("-----------------")
    })
   }
   if(isValid){
  // this.props.successMsg(isSuccess)
 //  this.props.history.push("/Success")
}
}



    render() {

        const state = this.props.location.state.response
        console.log(state)
        console.log(state.firstName)
      
            // this.setState({
            //     myName:state.firstName
            // })

        let {user} = this.props
        console.log(user)
        return (


<div>
{/* <div className="form-group">
    <label for="Firstname" className="text-info">First Name:</label><br />
    <input type="text" name="Firstname" id="Firstname" className="form-control" value={this.state.myName} onChange ={this.handleFirstnameChange}/>
    <div style={{fontSize:18, color:"red"}}> {this.state.firstNameError} </div> 
</div>  */}
<MuiThemeProvider>
  <div>
  <div>

            <nav className="navbar navbar-primary bg-info">
              <a id= "color_login" className="navbar-brand navLogin">Edit</a>
                <form className="form-inline">
                <button   className="btn btn-success my-2 my-sm-0"
                  onClick={event =>
                     window.confirm("Are you sure you want to log out?") &&
                     this.goHome(event)                  }>
                              Home
                        </button>
                  {/* <Link to='/home' >  <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link> */}
                </form>
            </nav>
        </div>
     
   <div className="margin">

   <TextField
   
     floatingLabelText="User Name*"
     onChange = {this.handleUsernameChange}
     value={state.userName}
     />
       <div style={{fontSize:20,color:"red"}}>{this.state.userNameError} </div> 
   <br/>
   <TextField
     value= {this.state.firstName}
     floatingLabelText="First Name*"
     onChange = {this.handlefnChange}

     />
    

     <div style={{fontSize:20,color:"red"}}>{this.state.firstNameError} </div> 
     
   <br/>
   
   <TextField
     value={this.state.lastName}
     floatingLabelText="Last Name*"
     onChange = {this.handlelnChange}
     
     />
       <div style={{fontSize:20,color:"red"}}>{this.state.lastNameError} </div> 
   <br/>
   <TextField
     value={this.state.email}
     type="email"
     floatingLabelText="Email*"
   
     onChange ={this.handleemailChange}

     />
     
      <div style={{fontSize:20,color:"red"}}>{this.state.emailNameError} </div> 
   <br/>
   
   <br/>
   <div style={{fontSize:20,color:"red"}}>{this.state.Invaliderror} </div> 
   <RaisedButton label="Update" primary={true} style={style} onClick={this.handleSubmit}/>
   
  </div>
  </div>
 </MuiThemeProvider>
</div>
        )
    }
    
}

UpdateUser.propTypes = {
    createPost: PropTypes.func.isRequired
  };

function mapStateToProps(state) {
    console.log('7')
    return ({
        user: state.formReducers.user,
        name: state.formReducers.items,
       
    });
};
function mapDispatchToProps(dispatch) {
    console.log('8')
    return ({
        createPost: (formValues) => {
            dispatch(createPost(formValues))
        },
        successMsg: (isSuccess) => {
            dispatch(successMsg(isSuccess))
        }

    });
};
const style = {
    margin: 15,
  };
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);

             


