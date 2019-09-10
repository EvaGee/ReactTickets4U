import React, { Component } from 'react';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
            <Router>
            <div className="jumbotron">
                

<div className="col-md-4 col-md-offset-4" > 
 

	<div><img src="assets/images/logo.png" style={{width: 300, height: 75}}/>
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
        </div>




<div id="register">
<form action="<?php echo base_url(); ?>index.php/signup" method="post">
    <div class="form-group">
        <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Full Name" value=""/>
    </div>
    <div class="form-group">
        <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" required/>
    </div>
        <div class="form-group">
        <input type="number" name="phone" id="phone" tabindex="1" class="form-control" placeholder="Phone Number" value="" required/>
    </div>
    <div class="form-group">
        <input type="password" name="password" id="sign_password"  tabindex="2" class="form-control" onkeyup='check();' placeholder="Password" required/>
    </div>
    <div class="form-group">
        <input type="password" name="confirm-password" id="sign_confirm_password"  tabindex="2" class="form-control" onkeyup='check();' placeholder="Confirm Password" required/>
         <span id='message'></span>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-primary" value="Register Now"/>
            </div>
        </div>
    </div>
</form>
</div>

</div>
</div>
            <Switch>
              <Route exact path='/home'  />
              <Route path='/login' component={Login} />
              
            </Switch>

</Router>
          
            
        )
    }
}


