import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {NavLink, Route} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './App.css';
import axios from 'axios';
const API_URL = 'http://localhost:8091';

 class Success extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            
        };
    }



    componentDidMount() {

        let {user} = this.props; 
        if(user)
        {
        console.log(user)
       const url = `${API_URL}/${user}`;
       console.log(url)
        axios.get(url)
        .then(response => response.data)
        .then((data) => {
            console.log(data)
            this.setState({ 
                firstName:data.firstName,
                lastName:data.lastName,
                userName:data.userName,
                email:data.email
    
            }
            )
          console.log(this.state.firstName)
          console.log(this.state.lastName)
          console.log(this.state.userName)
          console.log(this.state.email)
          console.log("-----------------")
       
         })
        }
      }

      goHome=(event) => {
        this.props.history.push("/")
    }

      UpdateUser =() =>{
        const details = {
            firstName:  this.state.firstName,
           lastName: this.state.lastName,
           userName: this.state.userName,
           email:this.state.email,
          
           }
        this.props.history.push({pathname:'/UpdateUser',
        state:{response:details}})
      }


      handleSubmit = (event) => {
    
        event.preventDefault()
       
    //    console.log(isSuccess)
    //     console.log(formValues)
    //    console.log(firstName)
    //    console.log(userName)
    //    console.log(lastName)
    //    console.log(email)
    //    console.log(password) 
    
    let {user} = this.props;
    console.log(user)
    
      
        console.log(user.userName)
        const url = `${API_URL}/Delete/${ user }`;
       console.log(url)
       axios.delete(url).then(response => response.data)
       .then((data) => {
         
        this.props.history.push("/Home")
    
        })
       }

    render() {
       
let{successMsg}=this.props
console.log(successMsg)


        let {user} = this.props;
        console.log(user)
      

        if(successMsg){
            
        }



       
        

        return (
            <div>
         
                 <div>
            <nav className="navbar navbar-primary bg-info">
              <a id= "color_login" className="navbar-brand navLogin"> Hi {user && user}!</a>
                <form className="form-inline">
                  {/* <button id= "pad" className="btn btn-success my-2 my-sm-0" type="submit">Logout</button> */}
                  {/* <Link to='/home' >  <button className="btn btn-success my-2 my-sm-0" type="submit">Logout</button></Link> */}
                  <button   className="btn btn-success my-2 my-sm-0"
                  onClick={event =>
                     window.confirm("You will be logged out of this page!!!") &&
                     this.goHome(event)                  }>
                              Home
                        </button>
                </form>
            </nav>
        </div>
        {/* <div className="textCenter">
                 <Typography variant="h5" component="h3" >
                               HI
                               
                            </Typography>
           
            
            </div> */}
            <br/>
            <br/> <br/> <br/> 
            <div>
          
            <table class="table">
    <thead class="thead-dark">
        {/* <tr>
            <th>Row</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr> */}
    </thead>
    <tbody>
    <tr>
           
           <th>User Name</th>
           <td> </td>
           <td>{ this.state.userName}</td>
           
       </tr>
        <tr>
           
            <th>First Name</th>
            <td> </td>
            <td>{ this.state.firstName}</td>
        </tr>
        <tr>
           
           <th>Last Name</th>
           <td> </td>
           <td>{ this.state.lastName}</td>
       </tr>
       <tr>
           
           <th>Email</th>
           <td> </td>
           <td>{ this.state.email}</td>
       </tr>

    </tbody>
</table>
<div >
&nbsp;&nbsp;&nbsp;&nbsp;

<button type="button" class="btn btn-info" onClick= {this.UpdateUser}>Edit</button>    

</div>

                </div>
</div>
        )
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(Success);


