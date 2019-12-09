import React, { Component } from 'react';
import table from './table.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Appstyle from './App.css';
import axios from 'axios';
import App from "./App.js";
import Button from '@material-ui/core/Button';
const API_URL = 'http://localhost:8091';

class ForTables extends Component {
    
        constructor(props) {
            console.log("4")
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
          lists: [] ,
           kname:""
        }
        }
      
       
 goHome=(event) => {
            this.props.history.push("/")
        }
 renderTableData() {
             console.log(this.state.lists)
        return this.state.lists.map((list, index) => {
            alert("hai")
           const {firstName, lastName, userName, email } = list //destructuring
           
           return (
  
               
              <tr key={userName}>
                 <td>{firstName}</td>
                 <td>{lastName}</td>
                 <td>{userName}</td>
                 <td>{email}</td>
                 {/* <td><button id={userName}  onClick={this.handleUpdateChange} >Update</button></td>
                  <td><button id={userName}  onClick={this.handleDeleteChange} >Delete</button></td> */}
                  
                      

<td><button type="button" id={userName} class="btn btn-info" onClick= {this.handleUpdateChange}>Update</button></td> 
{/* <td><button type="button"  id={userName} class="btn btn-danger" onClick={this.handleDeleteChange} >Delete</button></td> */}
<td> 
    <button  id={userName} class="btn btn-danger"
     onClick={event =>
        window.confirm("Are you sure you wish to delete this item?") &&
        this.handleDeleteChange(event)    
         }
>
    Delete
</button></td>

              </tr>
              
           )
        })
     }
     
    //  renderTableHeader() {
    //     let header = Object.keys(this.state.lists[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }

     handleUpdateChange = (event) =>{
        
const userName = event.target.id
  console.log(event.target.id);
//    let {user} = this.props; 
  if(userName)
  {
  console.log(userName)
 const url = `${API_URL}/${userName}`;
 console.log(url)
  axios.get(url).then(response => response.data)
  .then((data) => {
      console.log(data)
      const details ={
        firstName:data.firstName,
        lastName:data.lastName,
        userName:data.userName,
        email:data.email
      }

       

      this.props.history.push({pathname:'/UpdateUser',
      state:{response:details}})
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.userName)
    console.log(this.state.email)
    console.log("-----------------")
 
   })
  }
  }
   handleDeleteChange = (event) =>{
       
     let {user} = this.props
     console.log(user)
    alert("delete")
      let userName =event.target.id;
      console.log(userName)
        const adminList = {
            user,userName
        } 

          const urlUpdate = `http://localhost:8091/Delete/${userName}/${user}`;
          console.log(urlUpdate)
          axios.delete(urlUpdate).then(response => response.data)
          .then((data) => {
              console.log(data)
              this.setState({ 
                  lists:data
      
      
              }
              )
           })
        //    .then(response =>{
        //       console.log("response data "+response.data);
        //       this.setState({
        //         lists:data
        //       });
        //       console.log("bool is "+ this.state.bool);
             
        //            this.props.history.push("/ForTables");
               
        //         });  
      
  console.log(event.target.id);
  }
  
       render(){
           
        
        console.log("1")

        let {user} = this.props
           return(
            <MuiThemeProvider>
                <div >
                {/* <AppBar 
           title="Welcome"
         /> */}
         
         <div>
            <nav className="navbar navbar-primary bg-info">
              <a id= "color_login" className="navbar-brand navLogin"> Hi {user}!</a>
                <form className="form-inline">
                  {/* <button id= "pad" className="btn btn-success my-2 my-sm-0" type="submit">Logout</button> */}
                  <Link to='/success' >  <button className="btn btn-success my-2 my-sm-0" type="submit">My Details</button></Link>&nbsp;&nbsp;&nbsp;
                 
                  {/* <button   className="btn btn-success my-2 my-sm-0"
                     onClick={event =>
                     window.confirm("You will be logged out of this page!!!") &&
                     this.goHome(event)}>
                              Logout
                        </button> */}
                        
                
                  <Link to='/home' > 

<button type="button" class="btn btn-outline-dark">Logout</button>
</Link> 


                </form>
            </nav>
        </div>
               <div> 
                <br/>
              <h3 id='title'>List of Users</h3>
              <br/>
              <table id='students'>
                 <thead>
                     <tr>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>User Name</th>
                         <th> Email </th>
                         <th colspan="2" >Action</th>
                         </tr>
                     </thead>
                 <tbody>
                                       
                   {this.renderTableData()}
                 </tbody>
              </table>
           </div>
           </div>
           </MuiThemeProvider>
           );
  
       }

    //    componentDidUpdate(){
    //        console.log("3")
    //        {
   
     
    //         axios.get("http://localhost:8091/Details").then(response => response.data)
    //         .then((data) => {
    //             console.log(data)
    //             this.setState({ 
    //                 lists:data
        
        
    //             }
    //             )
    //          })
    //         }
    //    }
        componentDidMount()  {
            let {user} = this.props
            console.log("2")
            console.log(user)
            console.log("Inside component did mount")
      {
   
     
      axios.get(`http://localhost:8091/Details/${user}`).then(response => response.data)
      .then((data) => {
          console.log(data)
          this.setState({ 
              lists:data
  
  
          }
          )
          console.log(data)
          console.log(this.state.lists)
         
         
       
        console.log("-----------------")
     
       })
      }
    }

};

function mapStateToProps(state) {
    console.log("1")
    return ({
        user: state.formReducers.user,
        name:state.formReducers.items,
        successMsg:state.formReducers.success
  
    });
};
function mapDispatchToProps(dispatch) {
    console.log("2")
    return ({
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(ForTables);
