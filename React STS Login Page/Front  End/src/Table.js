import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Logout from"./Logout";
import Appstyle from './App.css';
import LoginStyle from './Styles/LoginStyle.css';
import { connect } from 'react-redux';
import axios from 'axios';
import Update from "./Update.js"
import App from "./App.js"


 class Table extends React.Component {
      constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        lists: [] ,
         kname:""
      }
      }

       renderTableData() {
      return this.state.lists.map((list, index) => {
         const {firstName, lastName, userName, email } = list //destructuring
        
         return (
            <tr >
            <td>firstName</td>
            <td>lastName</td>
            <td>userName</td>
            <td>email</td>
            <td></td>
             <td> </td>
         </tr>
            <tr >
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{userName}</td>
               <td>{email}</td>
               <td><button id={userName}  onClick={this.handleChange} >Update</button></td>
                <td><button id={userName}  onClick={this.handleDelectChange} >Delect</button></td>
            </tr>

         )
      })
   }
   handleChange = (event) =>{
//   this.setState({
//       firstName:event.target.value
//   })
console.log(event.target.id);
}
 handleDelectChange = (event) =>{
 
    let named =event.target.id;
    console.log(named)
        const urlUpdate = `http://localhost:8091/Delete/${named }/`;
        console.log(urlUpdate)
        axios.delete(urlUpdate) 
         .then(response =>{
            console.log("response data "+response.data);
            this.setState({bool:response.data});
            console.log("bool is "+ this.state.bool);
           
                 this.props.history.push("/Admin");
             
              });  
    
console.log(event.target.id);
}

     render()
     {
         return(
             <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>

         );

     }
      componentDidMount()  {
          console.log("Inside component did mount")
    {
 
   
    axios.get("http://localhost:8091/Details").then(response => response.data)
    .then((data) => {
        console.log(data)
        this.setState({ 
            lists:data


        }
        )
        console.log(data)
       
      console.log(this.state.students)
      console.log("-----------------")
   
     })
    }
  }
 }
 export default Table