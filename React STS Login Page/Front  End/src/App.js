
// const initialState= {
//   username:"",
//   password:"",

// }

//  class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = initialState;
// }

// handleUsernameChange = (event) =>{
//   this.setState({
//       username:event.target.value
//   })
// }

// handlePasswordChange = (event) =>{
//   this.setState({
//       password:event.target.value
//   })
// }

// validate =() =>{
//         let nameError ="";
//         let passwordError ="";
      
//        var me = this.state.username;
//        console.log(me)

// if(!this.state.password) {
//     passwordError = "Password is empty "
//     this.setState({passwordError})
//  }

//  if(this.state.password.length < 6){
//   passwordError = "Password too short"
//   this.setState({passwordError})
//  }

//  // var regx = /([^[a-zA-Z0–9_]])/;
//  var regx = /^[a-zA-Z0-9\s]+$/;
//   if(regx.test(this.state.password)){
//   passwordError=" Password sholud be alpha numeric"
//   this.setState({passwordError})
// }

//   if(!this.state.username){
//     nameError="Name cannot be empty";
//     this.setState({nameError})
//   } 
//   if(nameError || passwordError)
//   {
//     return false;
//   }
//     return true
// };



// handleSubmit=(event)=> {
//   event.preventDefault()
 
//   const isValid = this.validate();
//   console.log(isValid)
//   if(isValid){
//     console.log(this.state)
//   }
//   //clear form
//   this.setState(initialState);
  
// }
//   render() {
//     return (
//       <form  onSubmit={this.handleSubmit}>
//       <div className="App">
//           <h2 id = 'font'> Enter your Credentials </h2>

//                  <div>
//                     <label> Username  </label>
//                     <input type ="text"
//                     placeholder="Enter your name"
//                     value={this.state.username} 
//                     onChange ={this.handleUsernameChange}
//                     />
//                    <div style={{fontSize:20, color:"red"}}> {this.state.nameError} </div> 
                  
//                 </div>
//                 <br/>

//                 <div>
//                     <label>Password  </label>
//                     <input type ="text"
//                     placeholder="Enter your password"
//                     value={this.state.password} 
//                     onChange ={this.handlePasswordChange}
//                     />
//                     <div style={{fontSize:20,color:"red"}}>{this.state.passwordError} </div> 
//                 </div>
//                 <br/>

//                 <div>
//                     {
//                          <button type="submit"> Submit </button> }
//                  </div>
//         </div>
//         </form>
//     )
//   }
// }

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home.js';
import Register from './Register'
import Welcome from './Welcome'
import { Provider } from 'react-redux';
import store from './Store.js';
import Routers from './Routers'
import Login from './Login'
import Registration from './Registeration'
import NewLogin from './NewLogin'
import Headertest from './Headertest';


import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationTextFields from './ValidationTextFields';


export class App extends Component {

  render() {

    return (
//  <div>
//          {/* <Login/>   */}
//        {/*<Registration/> 
//          <NewLogin/>  */}
//          {/* <ForAppBar /> */}
//          {/* <Headertest/> */}
//          <ValidationTextFields />
//   </div> 
  
  <Provider store={store}>
  <Routers />
</Provider>
  
    )
  }
}



export default App



