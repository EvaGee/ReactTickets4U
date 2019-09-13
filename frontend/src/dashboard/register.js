import React, { Component } from 'react';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            user_name:'',
            user_email:'',
            user_phone:'',
            user_password:'',
        };
    } 
   
    clickPost(e){
        e.preventDefault();
        var url = 'http://localhost:3210/register';
        axios.post(url, {

            user_name:this.inputuser_name.value,
            user_email:this.inputuser_email.value,
            user_phone:this.inputuser_phone.value,
            user_password:this.inputuser_password.value
        
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
        this.inputuser_name.value='';
        this.inputuser_email.value='';
        this.inputuser_phone.value='';
        this.inputuser_password.value='';
    
      };
    render() 
    {
        
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
<form>
    <div class="form-group">
        <input 
        type="text" name="username" id="username" tabindex="1" 
        class="form-control" placeholder="Full Name"
        defaultValue={this.state.user_name}
        ref={ inname => this.inputuser_name= inname }/>
    </div>
    <div class="form-group">
        <input type="email" name="email" id="email" tabindex="1" 
        class="form-control" placeholder="Email Address" required
        defaultValue={this.state.user_email}
        ref={ inemail => this.inputuser_email= inemail }
        />
    </div>
    <div class="form-group">
        <input type="number" name="phone" tabindex="1" id="phone" 
        class="form-control" placeholder="Phone Number" required
        defaultValue={this.state.user_phone}
        ref={ inphone => this.inputuser_phone= inphone }/>
    </div>
    <div class="form-group">
        <input type="password" name="password" id="sign_password"  tabindex="2" 
        class="form-control" onkeyup='check();' placeholder="Password" required
        defaultValue={this.state.user_password}
        ref={ inpass => this.inputuser_password= inpass }/>
    </div>
    <div class="form-group">
        <input type="password" name="confirm-password" id="sign_confirm_password"  tabindex="2" 
        class="form-control" onkeyup='check();' placeholder="Confirm Password" required
        defaultValue={this.state.user_confirm_password}
        />
         <span id='message'></span>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <input type="submit" name="register-submit" id="register-submit" 
                tabindex="4" class="form-control btn btn-primary" value="Register Now" onClick={this.clickPost.bind(this)}/>
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


