import React, {Component} from 'react';
import Moment from 'moment';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class PurchaseTicket extends Component {
    constructor(props){
        super(props)
        
        const myEvent=this.props.location.state && this.props.location.state.myEvent;
            console.log(myEvent)
        
            this.state = {
                ticketTypes:[],
                results:[],
                eventsTickets: [],
                isLoading: true,
                errors: null,
                };    
}

getTickets() {
    axios
			.get("http://localhost:3210/ticketTypes")
      .then(response => {
        return response.data.map(ticketType=>({
            type_name: `${ticketType.type_name}`,
            typeid: `${ticketType.typeid}`,
            
        }))
      })
      .then(ticketTypes => {
        console.log(ticketTypes)
        this.setState({
          ticketTypes,
          isLoading: false,
        });
      
      })
      .then(response=>{
          return axios
        .get("http://localhost:3210/eventsTickets")
        .then(response => {
          return response.data.map(eventsTicket=> ({
            event_id: `${eventsTicket.event_id}`,
            id: `${eventsTicket.id}`,
            ticket_type: `${eventsTicket.ticket_type}`,
            amount: `${eventsTicket.amount}`,
            total_tickets: `${eventsTicket.total_tickets}`,
            available_tickets: `${eventsTicket.available_tickets}`,
            ticket_close_on: `${eventsTicket.ticket_close_on}`

          }))
          })

        })
        
     
      
      .then(eventsTickets => {
        console.log(eventsTickets)
        this.setState({
          eventsTickets,
          isLoading: false,
        });
        
      })
     
      .catch(error => this.setState({ error, isLoading: false }));   
  }
  
  componentDidMount() {
    this.getTickets();
	}
    
    
	
    render() {
        const { isLoading, ticketTypes , eventsTickets} = this.state;
        var eventId=this.props.location.state.myEvent.event_id;
        var results=[];
        
        ticketTypes.forEach(function (o) {
          eventsTickets.forEach(function (c) {
              if (eventId==c.event_id && c.ticket_type===o.typeid) results.push(Object.assign( o, c));
               })
      });
       
          console.log(results);

        const  ticketnumber = number => {
            let arr = []
            let i = 0;
            let newnumber;
            if (number > 10){
                newnumber = 10
            } else {
                newnumber = number
            }
            for (i =0; i <= newnumber; i++) {
                // let opts = <option>{i}</option>;
                arr.push(i)
            }
            console.log(arr);
            // return arr;
        }

        return (
            <div className="jumbotron">
                <section className="section-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-order-details-event-title">
                                    <div className="section-header">
                                        <h2 className="event-title"><strong>{this.props.location.state.myEvent.event_title}</strong></h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="section-order-details-event-title">   
                                        <img className="event-img" src={this.props.location.state.myEvent.cover_image} alt="event"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="section-order-details-event-info">
                                        <div className="venue-details">
                                            <div className="venue-details-info">
                                                <h3>Venue & Event Information</h3>
                                                <p>Venue:{this.props.location.state.myEvent.event_venue}</p>
                                                <p>From: <span>{this.props.location.state.myEvent.event_date}</span></p>
                              	                <p>To: <span>{this.props.location.state.myEvent.end_date}</span></p>
                                            </div>
                                        </div>
                                        <div className="seat-details">
                                            <div className="seat-details-info">
                                                <h3>Event Information</h3>
                                                <p>{this.props.location.state.myEvent.event_coodinates}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
				<div className="col-md-12">
				<form method="post" action="reviewOrder" acceptCharset="utf-8">
					<div id="book-table" className="section-order-details-event-info">
							<div className="seat-details">
								<h3 className="event-title">Kindly indicate how many tickets you wish to reserve
								</h3>
								
								<div className="seat-details-info" style={{padding:"5px 0px !important"}}>
									<table className="table number-tickets table table-striped">
										<thead>
											<tr>
												<th style={{padding:"0 22px 5px"}}>Ticket</th>
												<th style={{padding:"0 22px 5px"}}>Unit Cost</th>
												<th style={{padding:"0 22px 5px"}}>Quantity</th>
											</tr>
										</thead>
										<tbody>
                                            {results && results.map(result=>
								        	<tr>
                                                <td>
                                                    {result.type_name}
                                                    <input type="hidden" name="" id="" value={result.type_name}/>
                                                </td>
                                                <td>
                                                    KSH.{result.amount}
                                                    <input type="hidden" name="" id="" value={result.amount}/>
                                                </td>
                                                <td>
                                                { 
                                                    result.available_tickets<1 && 
                                                    <span className='label bg-danger'>SOLD OUT</span>
                                                }
                                                { 
                                                    Moment()>Moment(result.ticket_close_on) &&
                                                     <span className='label bg-danger'>SOLD OUT</span>
                                                }
                                                
                                                    { result.available_tickets>1 && Moment()<Moment(result.ticket_close_on)&&
                                                    <select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                        // ticketnumber(result.available_tickets)
                                                        // .forEach(
                                                        //     item => <option key={item.toString()}>{item}</option>
                                                        // )
                                                        // console.log(result.available_tickets)
                                                        
                                                    }
                                                
                                                                                                  
                                                </td>
										    </tr>)}
										</tbody>
									</table>
								</div>

								<div className="seat-details-info-price" style={{border: "0px"}}>
									<table className="table pricing-review">
										<tbody>
											<tr>
												
											</tr>
										</tbody>
										<tfoot>
                                            {results && results.map(result=>
                                            
                                            <tr>
                                              {result.available_tickets<1 || Moment()>Moment(result.ticket_close_on)&&
  
                                              <td className="price" id="totalPrice">Total Price KES 0</td>
                                              }  
                                                
                                                {
                                                    result.available_tickets>1 && Moment()<Moment(result.ticket_close_on)&&
													<td className="price" align="right" id="totalPrice"> Total Price KES
													<button type="submit"  className="primary-link btn btn-large btn-block btn-primary">Buy Ticket </button>
													
													</td>
                                                }
												
											</tr>
                                            )}
										</tfoot>
									</table>
								</div>
							</div>
						</div>
						</form>
					</div>
					</div>
                    </div>
                </section>
            </div>
        )
    }
}