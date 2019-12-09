import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home.js';
import Register from './Register'
import { Provider } from 'react-redux';
import store from './Store.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route} from 'react-router-dom';//see
import { Success } from './success'


// ReactDOM.render(
//     <Provider store ={store} >
  
 
  
//      <Router>
//     <div>
//          {/* <Route exact path="/Register" component = {Register}/> */}
       
//         <Route exact path="/Success" component = {Success}/> 
//         <Route exact path="/" component = {Home}/>
//         <Route exact path="/Home" component = {Home}/>
        
      
//     </div>
// </Router>  
//   </Provider>, document.getElementById('root'));
 ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
