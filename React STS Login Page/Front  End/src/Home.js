import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import {push} from 'react-router-redux'
import Welcome from './Welcome'
import {changeUserData,sendName,fetchPosts} from './Actions/RegisterActions'
import Typography from '@material-ui/core/Typography';
import { Dispatch } from '../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {login} from './Actions/RegisterActions'
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';



import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



import { makeStyles } from '@material-ui/core/styles';


var Invaliderror:"";
var userError='';
var passwordError='';
var flag=0;


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
        {props.children}
    </Typography>
    );
}

class Home extends React.Component<LoginProps>{
    componentWillMount() {
        this.props.fetchPosts();
      }
   
    constructor(props) {
        super(props)
        this.state = {
            user:{
                userName:'',
                password:''
            }
          
        };
    }

    validate =() =>{
        alert("hai")
            console.log(this.state.isSuccess)
            console.log(this.state.userName)
         var regx = /^[a-zA-Z0-9\s]+$/;
         var flag = 0;
         var mailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         var specialcharRegex = /[!@#$%^&*(),.?":{}|<>]/; 
        
         
        
        
        

         
        // This is last name validation
        if(!this.state.userName) {
            userError = "Username is empty "
             this.setState({userError})
             flag = 1;
           }
         else{
            userError="";
           this.setState({userError})
           
         }
         
        
        // This is password validation
        if(!this.state.password) {
            passwordError = "Password is empty "
             this.setState({passwordError})
             flag = 1;
            }
        else{
            passwordError="";
           this.setState({passwordError})
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

 handleUsernameChange = (event) =>{
    //  let userName='';
                this.setState({
                    userName:event.target.value
                })
                console.log(this.state.userName)
               
              }
           
             
 handlePasswordChange = (event) =>{
                this.setState({
                    password:event.target.value
                })
                console.log(this.state.password)
                
              }
// handleUserChange = (event) => {

//         console.log('2')
//         const { name, value } = event.target;
//         let { user } = this.state;
//         let userData = {
//             ...user,
           
//             [name]: value,
//         }
//         this.setState({
//             [name]: value
//         })
     
//         this.props.changeUserData(userData);
//     }
    
    // validate =() =>{
    //     if(!this.state.userName || !this.state.password ) {

    //         loginError = "Username or Password should not be empty"
    //          this.setState({loginError})
    //          flag=1;
        
    //       }
    //       else{
    //         loginError = ""
    //         this.setState({loginError})
    //           flag=0;
    //       }
    // }

//     validate =() =>{

//       if(!this.state.userName) {
//         userError = "Username should not be empty "
//      this.setState({userError})
//      flag = 1;
//   }
//  else{
//     userError=" ";
//    this.setState({userError})
//  }
//  if(!this.state.password) {
//     passwordError = " password should not be empty "
//     this.setState({passwordError})
//     flag = 1;
// }
// else{
//     userError="";
//    this.setState({userError})
//  }
        
          
   
//     if(flag==1){
//         return false
//     }else{
//         return true
//     }
// }



handleUserSubmit = async (e) => {

this.props.changeUserData(this.state.userName);

  console.log(this.state.userName)


 console.log(this.state.password) 
 const valid = this.validate()
 console.log(valid)
        console.log('3')
        e.preventDefault();
if(valid){
       alert("success")     
        //  const userName = this.state.user.userName;
        //  const password = this.state.user.password;
        const userName = this.state.userName;
        const password = this.state.password;
         const userValue= {userName,password}
         console.log(userValue)

        console.log(userName)


        axios({
            method: 'post',
            url: 'http://localhost:8091/login',
            data: {userName,password},
            headers: {
                'content-type': `application/json;`
            }
        })

        .then(response =>{ 
      
            console.log(response.data)
            console.log(response.data.role)
           if(response.data == "Admin" ){
               console.log("in response")
            console.log(response.data)
            // this.props.history.push("/Success")
            this.props.history.push("/ForTables")
           }
           else if(response.data == "User"){
            this.props.history.push("/Success")
           }
           else {
               alert("invalid creden")
               console.log("unsuccess")
            this.props.history.push("/")
            Invaliderror = "Invalid Credentials"
            this.setState({
                Invaliderror
            })
            console.log(Invaliderror)
        
        }
        }
                // .then(response =>{
        //     console.log(response.data)
        //     console.log(response.data.userName)
        //    if(response.data){
        //        console.log("in response")
        //     console.log(response.data)
        //     // this.props.history.push("/Success")
        //     this.props.history.push("/ForTables")
        //    }else {
        //        console.log("unsuccess")
        //     this.props.history.push("/")
        //     Invaliderror = "Invalid Credentials"
        //     this.setState({
        //         Invaliderror
        //     })
        //    }
    
        // });
        // .then((data) =>{
        //     console.log(response.data)
        //     console.log(response.data.role)
        //    if(response.data == "Admin" ){
        //        console.log("in response")
        //     console.log(response.data)
        //     // this.props.history.push("/Success")
        //     this.props.history.push("/ForTables")
        //    }
        //    else if(response.data == "User"){
        //     this.props.history.push("/Success")
        //    }
        //    else if(response.data === "invalid") {
        //        alert("invalid creden")
        //        console.log("unsuccess")
        //     this.props.history.push("/")
        //     Invaliderror = "Invalid Credentials"
        //     this.setState({
        //         Invaliderror
        //     })
        //    }
    
        // }
    );
    }
    
    }

// componentDidUpdate(previousProps, previousState) {
   
//         console.log('5')
//         let {user}=this.props;
//         console.log(user)
//         if (previousProps.user !== user) {
//             this.setState({
//                 user
//             });
//         };
      

//     };



    render() {

        // const state = this.props.location.state.response
        // console.log(state)
        
        const {user}=this.state
        let{name}=this.props
        console.log(name)
      
       // console.log(name.isSuccess)
        // const state = this.props.location.state.response
        // console.log(state)
    //   const suc=  state.isSuccess
    //   console.log(suc)
    //   const error = state.isSuccess ? ("You details Registered Successfully") :("")
      
           
          return (

        <MuiThemeProvider>
        <div >
        
        <AppBar 
           title="Login"
         />
       
         <div className="margin" >
        <div>
            
            </div>

         <br/>
         <TextField 
           name='userName'
           hintText="Enter your Username"
           floatingLabelText="Username"
        
           onChange = {this.handleUsernameChange}
           />
         <br/>
         <div style={{fontSize:20,color:"red"}}>{this.state.userError} </div> 
           <TextField
           name='password'
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {this.handlePasswordChange}
             />
           <br/>
           <div style={{fontSize:20,color:"red"}}>{this.state.passwordError} </div> 
        
        <div>
        <div style={{fontSize:20,color:"red"}}>{this.state.Invaliderror} </div> 
        <div style={{fontSize:20,color:"red"}}>{this.state.loginError} </div> 
            </div>
      <br/>
           <RaisedButton label="Submit" primary={true}  onClick={this.handleUserSubmit}/>
           <br/>
           <br/>
           <div>Not have an account   <Link to='/Register' >Register</Link> here </div>
         
       </div>
       </div>
       </MuiThemeProvider>
   
          )
        }
      }

      Home.propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        name: PropTypes.array.isRequired,
        name: PropTypes.object
      };
      
  function mapStateToProps(state) {
          console.log("1")
        return ({
            user: state.formReducers.user,
            name:state.formReducers.items
            
        });
    };

    function mapDispatchToProps( dispatch) {
        console.log("2")
        return (
            {
            changeUserData: (user) => {
                dispatch(changeUserData(user))
            },
            sendName:(userValue) => {
                dispatch(sendName(userValue))
            },
            fetchPosts:()=>{
                dispatch(fetchPosts())
            }
     


        }


    );
    };
    
    const style = {
        margin:20,
        };



    export default connect(mapStateToProps, mapDispatchToProps)(Home);
    
