import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './components/aboutUs.components';
import CreateEvent from './dashboard/createEvent';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Login from './dashboard/login';
import Register from './dashboard/register';
import ForgotPassword from './dashboard/forgotPassword';



class Header extends React.Component {

    render(){
        return(
            
        <Router>
         <div className="container">
        <header className="masthead" className="site-header">

<div className="main-header main-header-bg">
<div className="container">

<div className="row">

  <div className="site-branding col-md-2">
	<h1 className="site-title"><img src={logo} style={{width: "80%", height: 50}}alt="Logo"/></h1>
  </div>

	<div id="right-menu-items" className="col-md-6">
		<nav id="site-navigation" className="navbar">
			<div className="top-left">
				<ul>
					<li>
						<Link to={'/'} >
							<i className="fa fa-phone"></i>
							0207655555/0713129623
						</Link>
					</li>
					<li>
						<Link to={'/createEvent'}>
							<i className="fa fa-envelope-o"></i>
							info@tickets4u.co.ke
						</Link>
					</li>
					<li>
						<a href ={'/aboutUs'}>
							<i className="fa fa-folder-open"></i>
							about us	
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>

<div id="right-menu-items" className="col-md-4">
	<nav id="site-navigation" className="navbar">
		<div className="top-right">
			<ul>
				<li>
					<Link to ={'/login'}>Sign In / Sign Up</Link>
					
				</li>
			</ul>
        </div>
	</nav>
</div>
</div>
</div>
</div>
</header>


<header id="phone" className="site-header">
	<div className="main-header main-header-bg">
		<div className="container">
			<div className="row">
			  <div className="col-md-4"></div>
			  <div className="site-branding col-md-4">
				<h1 className="site-title"><img src={logo} style={{width: "80%", height: 50}}alt="Logo"/></h1>
			  </div>
			  <div className="col-md-4"></div>
			</div>
		</div>
	</div>
</header>
            <Switch>
              <Route exact path='/home'  />
              <Route path='/aboutUs' component={AboutUs} />
			  <Route path='/createEvent' component={CreateEvent} />
			  <Route path='/register' component={Register} />
			  <Route path='/login' component={Login} />
              <Route path='/reset' component={ForgotPassword} />
          </Switch>
        </div>
        </Router>
        );
    }
}
export default Header;
