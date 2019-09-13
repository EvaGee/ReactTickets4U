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
             
                

                <div className="col-md-4 col-md-offset-4" > 
                 
                
                    <div><img src="assets/images/logo.png" style={{width: 300, height: 75}}/></div>
                        <div className="panel-heading">
                            <div class="row">
                                <div class="col-xs-6">
                                    <a href={'/login'}>Login</a>
                                </div>
                                <div class="col-xs-6">
                                    <a href={'/register'}>Register</a>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    
                
                        <div id="login">
                            <form action="<?php echo base_url(); ?>index.php/login" method="post" >
                                <div class="form-group">
                                    <input type="text" name="login_username" id="username" tabindex="1" class="form-control" placeholder="Email" value="" required/>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="login_password" id="password" tabindex="2" class="form-control" placeholder="Password" required/>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-primary" value="Log In"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="text-center">
                                                <a href={'reset'}>Forgot Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                
                
                
                
                </div>
            







            <Switch>
              <Route exact path='/home'  />
              <Route path='/createEvent' component={CreateEvent} />
              <Route path='/register' component={Register} />
            </Switch>

</Router>
          
            
        )
    }
}


