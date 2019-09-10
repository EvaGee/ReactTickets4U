import React, { Component } from 'react';
import CreateEvent from './createEvent';
import Register from './register';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
            <Router>
                
            <Switch>
              <Route exact path='/home'  />
              <Route path='/createEvent' component={CreateEvent} />
              <Route path='/register' component={Register} />
            </Switch>

</Router>
          
            
        )
    }
}


