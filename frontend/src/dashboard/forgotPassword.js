import React, { Component } from 'react';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
            <Router>
            <div className="jumbotron">
           
                            <form action="<?php echo base_url(); ?>index.php/Login/send_recover_email" method="post">
                                
                            <div className="modal-body">

                                <div className="form-group">
                                    <label for="Email">Email Address</label>
                                    <input type="Email" className="form-control" name="Email" required  placeholder="example@example.com"/>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Send</button>
                            </div>
                            </form>
                        
            </div>
            <Switch>
              <Route exact path='/home'  />
              <Route path='/login' component={Login} />
              
            </Switch>

</Router>
          
            
        )
    }
}