import React, {Component} from 'react';
import Moment from 'moment';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PurchaseTicket from './components/purchaseTicket';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IntersectionWith } from 'react-lodash';
import { assign } from 'react-lodash';
import { cloneDeep } from 'react-lodash'

class App extends React.Component {
	constructor(props){
		super(props)
  this.state = {
    users:[],
    results:[],
    events: [],
    isLoading: true,
    errors: null,
	};
}
	


  // Now we're going to make a request for data using axios
  getPosts() {
    axios
			.get("http://localhost:3210/users")
      .then(response => {
        return response.data.map(user=>({
            event_date: `${user.event_date}`,
            id: `${user.id}`,
            account_id: `${user.account_id}`,
            event_title: `${user.event_title}`,
            event_venue: `${user.event_venue}`,
            event_coodinates: `${user.event_coodinates}`,
            event_free: `${user.event_free}`,
            event_status: `${user.event_status}`,
            end_date: `${user.end_date}`,

        }))
      })
      .then(users => {
        console.log(users)
        this.setState({
          users,
          isLoading: false,
        });
      
      })
      .then(response=>{
          return axios
        .get("http://localhost:3210/data")
        .then(response => {
          return response.data.map(event=> ({
            event_id: `${event.event_id}`,
            id: `${event.id}`,
            cover_image: `${event.cover_image}`,
            event_description: `${event.event_description}`

          }))
        })

        })
        
     
      
      .then(events => {
        console.log(events)
        this.setState({
          events,
          isLoading: false,
        });
        
      })
     
      .catch(error => this.setState({ error, isLoading: false }));   
  }
  
  componentDidMount() {
    this.getPosts();
	}
	
	

  render() {
    const { isLoading, users , events} = this.state;
    var results=[];
    users.forEach(function (o) {
      events.forEach(function (c) {
          if (o.id === c.event_id && o.event_status==1 && Moment()<Moment(o.event_date)) results.push(Object.assign( o, c));
      })
  });
      console.log(results);
    
  
    return (
      <React.Fragment>
        <Router>
        <div>    
          {!isLoading ?
          ( 
            <div>
            
                {results &&
                <Carousel showThumbs={false}>
                {
                   results.map(result=>{
                 return(

                    <div key={result.id}>
                        <img className="mySlides img-responsive" src={result.cover_image} style={{width: "80%", height: 550}}/>
                        <Link to={{pathname: '/purchaseTicket',state: {myEvent:result}} }>
                            <button className="explore">Purchase Ticket</button>
                          </Link>
                      </div>
                  );
                })} </Carousel>}
                {results.length===0 &&
                  <a href="http://dashboard.tickets4u.co.ke/index.php/login">
		            <img className="mySlides img-responsive" src="assets/images/default.jpg"/> 
              </a>
                }
              
            </div> )  :(
            
              <p>loading</p>
          
          )
            }
            <Switch>
              <Route exact path='/home'  />
              <Route path='/purchaseTicket' component={PurchaseTicket} />
              
          </Switch>
        </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default App; 
