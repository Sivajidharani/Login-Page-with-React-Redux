import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';

import History from './History';
import Success from './success';
import Register from './Register';
import UpdateUser from './UpdateUser'
import RegisterSuccess from './RegisterSuccess'
import ForTables from './ForTables';

class Routers extends Component {
    render() {
        return (
            <Router history={History}>
                <div>
              
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Success" component = {Success}/> 
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/UpdateUser" component={UpdateUser} />
                    <Route exact path="/RegisterSuccess" component={RegisterSuccess} />
                    <Route exact path="/ForTables" component={ForTables} />
                </div>
            </Router>
        )
    }
}

export default Routers;