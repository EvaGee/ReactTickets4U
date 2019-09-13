import React, {Component} from 'react';
import Moment from 'moment';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './components/aboutUs.components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Footer extends React.Component {

    render(){
        return(
    	<Router>
            <footer id="colophon" className="site-footer">
    			<div className="main-footer">
        			<div className="container">
            			<div className="row">
							<div className="col-md-4 footer-1">
								<div className="social clearfix">
									<h3>Stay Connected</h3>
								</div>	
							
								<div className="social clearfix">
										<ul>
											<li className="facebook">
												<a href="#">
													<i className="fa fa-facebook" aria-hidden="true"></i>
														Facebook
												</a>
											</li>
											<li className="twitter">
												<a href="#">
													<i className="fa fa-twitter" aria-hidden="true"></i>
														Twitter
												</a>	
											</li>
											<li >
												<a href="#">
													<i className="fa fa-whatsapp" aria-hidden="true" style={{background:"#00E34A", width: "25px", height: "25px", color:"#fff"}}></i>
													WhatsApp
												</a>
											</li>
											<li className="rss">
												<a href="#">
													<i className="fa fa-rss-square" aria-hidden="true"></i>
														RSS
												</a>
											</li>
										</ul>
								</div>
							</div>
			  			
							<div className="col-md-4 footer-2" id="importantplace">
								<div className="support clearfix">
									<h3>Support and Contact</h3>
								</div>
								<form>
									<div className="form-group">
										<input type="email" name="Email" className="form-control" placeholder="your email" required/>
									</div>
									<div className="form-group">
										<input type="text" name="subject" className="form-control"  placeholder="subject"  required/>
									</div>
									<div className="form-group">
										<textarea name="comment" className="form-control" placeholder="write something..." required></textarea>
									</div>
									<div className="form-group">
										<button type="submit" name="send" className="btn btn-primary" href="#">send</button>
									</div>
								</form>
				
							</div>
			
							<div className="col-md-4 footer-2">
								<div className="footer-dashboard">
									<h3>TICKET4U Dashboard</h3>
									<ul>
											<li>
												<a href="http://dashboard.tickets4u.co.ke/index.php/login">
													<i className="fa fa-user-plus" aria-hidden="true" style={{background:"#00E34A", width: "20px", height: "20px", color:"#fff"}}></i>
														REGISTER
												</a>
											</li>
											<li>
												<a href="http://dashboard.tickets4u.co.ke/index.php/login">
													<i className="fa fa-sign-in" aria-hidden="true" style={{background:"#00E34A", width: "20px", height: "20px", color:"#fff"}}></i>
														LOGIN
												</a>
											</li>
									</ul>	
								</div>
							</div>
            			</div>
        			</div>
					<div className="top-footer">
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<a><img src={logo} alt="logo"/></a>
								</div>
								<div className="tc col-md-4">
									<ul >
										<li><a href="#">Terms of Service</a> |</li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</div>
								<div className="col-md-4">
									<p>&copy; 2019 tickets4u.co.ke. ALL RIGHTS PRESERVED</p>
								</div>
							</div>
						</div>
					</div>	  
				</div>
			</footer>

			<div className="phone-signup">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<table>
							<tbody>
								<tr >
									<td >
										<ul>
											<br></br>
											<li>
												<a id="mobile-signup" href="http://dashboard.tickets4u.co.ke/index.php/login">Sign In / Sign Up</a>	
											</li>
										</ul>
									</td>
									<td>
										<ul >
											<li>
												<a  href="#">
													<i className="fa fa-phone"></i>
														0207655555
														0713129623
												</a>
											</li>
											<li>
												<a  href="#importantplace">
													<i className="fa fa-envelope-o"></i>
													info@tickets4u.co.ke
												</a>
											</li>
										</ul>	
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			</div>
		
			<Switch>
				<Route exact path='/home'  />
				<Route path='/aboutUs' component={AboutUs} />
				
			</Switch>
			
		</Router>
        );
    }
}
export default Footer ;
