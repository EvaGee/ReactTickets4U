'use strict'
import React from 'react'
import axios from 'axios';


export class StepOne extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          venue: '',
          location: '',
          title: '',
          category:'',
          date:'',
          end_date:'',
          users:[],
        };
    
        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms
    
        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
      }
      getPosts() {
        axios
                .get("http://localhost:3210/category")
          .then(response => {
            return response.data.map(user=>({
                category_name: `${user.category_name}`,
                
            }))
          })
          .then(users => {
            console.log(users)
            this.setState({
              users,
              isLoading: false,
            });
          
          })
          
          .catch(error => this.setState({ error, isLoading: false }));   
      }
      
    
      componentDidMount() {this.getPosts();}
    
      componentWillUnmount() {}
    
      isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        let isDataValid = false;
    
        // if full validation passes then save to store and pass as valid
        if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
            if (this.props.title != userInput.title || this.props.location != userInput.location|| 
                this.props.venue != userInput.venue || this.props.category != userInput.category || 
                this.props.date != userInput.date || this.props.end_date != userInput.end_date
                ) { // only update store of something changed
             // use this to notify step4 that some changes took place and prompt the user to save again
               // Update store here (this is just an example, in reality you will do it via redux or flux)
            }
    
            isDataValid = true;
        }
        else {
            // if anything fails then update the UI validation state but NOT the UI Data State
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
        }
    
        return isDataValid;
      }
    
      validationCheck() {
        if (!this._validateOnDemand)
          return;
    
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
    
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
      }
    
       _validateData(data) {
        return  {
          titleVal:(data.title !=0),
          locationVal:(data.location !=0),
          venueVal:(data.venue !=0),
          categoryVal:(data.category !=0),
          dateVal:(data.date !=0),
          end_dateVal:(data.venue !=0),
        }
      }
    
      _validationErrors(val) {
        const errMsgs = {
          genderValMsg: val.genderVal ? '' : 'A gender selection is required',
          categoryValMsg: val.categoryVal ? '' : 'A valid category is required',
          dateValMsg: val.dateVal ? '' : 'A valid start date is required',
          end_dateValMsg: val.end_dateVal ? '' : 'A valid end date is required',
          titleValMsg: val.titleVal ? '' : 'Event title is required',
          locationValMsg: val.locationVal ? '' : 'Event location is required',
          venueValMsg: val.venueVal ? '' : 'Event venue is required'
        }
        return errMsgs;
      }
    
      _grabUserInput() {
        return {
          location: this.refs.location.value,
          venue: this.refs.venue.value,
          category: this.refs.category.value,
          date: this.refs.date.value,
          end_date: this.refs.end_date.value,
          title: this.refs.title.value
        };
      }
    
      render() {
        const { isLoading, users , events} = this.state;

        // explicit class assigning based on validation
        let notValidClasses = {};
    

        if (typeof this.state.categoryVal == 'undefined' || this.state.categoryVal) {
            notValidClasses.categoryCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.categoryCls = 'has-error col-md-8';
           notValidClasses.categoryValGrpCls = 'val-err-tooltip';
        }
         if (typeof this.state.dateVal == 'undefined' || this.state.dateVal) {
            notValidClasses.dateCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.dateCls = 'has-error col-md-8';
           notValidClasses.dateValGrpCls = 'val-err-tooltip';
        }
         if (typeof this.state.end_dateVal == 'undefined' || this.state.end_dateVal) {
            notValidClasses.end_dateCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.end_dateCls = 'has-error col-md-8';
           notValidClasses.end_dateValGrpCls = 'val-err-tooltip';
        }
        if (typeof this.state.titleVal == 'undefined' || this.state.titleVal) {
            notValidClasses.titleCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.titleCls = 'has-error col-md-8';
           notValidClasses.titleValGrpCls = 'val-err-tooltip';
        }
      
        if (typeof this.state.locationVal == 'undefined' || this.state.locationVal) {
            notValidClasses.locationCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.locationCls = 'has-error col-md-8';
           notValidClasses.locationValGrpCls = 'val-err-tooltip';
        }
        if (typeof this.state.venueVal == 'undefined' || this.state.venueVal) {
            notValidClasses.venueCls = 'no-error col-md-8';
        }
        else {
           notValidClasses.venueCls = 'has-error col-md-8';
           notValidClasses.venueValGrpCls = 'val-err-tooltip';
        }
    return (
            
                    <fieldset title="1">
                        <legend className="text-semibold">Step 1</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className={notValidClasses.titleCls}>
                                        <label>Event Title: <span className="text-danger">*</span></label>
                                        <input
                                            ref="title"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="event title"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.title}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.titleValGrpCls}>{this.state.titleValMsg}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className={notValidClasses.locationCls}>
                                        <label>Event location: <span className="text-danger">*</span></label>
                                        <input
                                            ref="location"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="event location"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.location}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.locationValGrpCls}>{this.state.locationValMsg}</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <div className={notValidClasses.venueCls}>
                                        <label>Event Venue: <span className="text-danger">*</span></label>
                                        <input
                                            ref="venue"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="event venue"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.venue}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.venueValGrpCls}>{this.state.venueValMsg}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <div className={notValidClasses.categoryCls}>
                                        <label>Event Category: <span className="text-danger">*</span></label>
                                        <select
                                            ref="category"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="event category"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.category}
                                            onBlur={this.validationCheck} >
                                                <option value="">Select Category</option>
                                                {users && users.map(user=>
                                                    <option>{user.category_name}</option>)}
                                                
                                            </select>
                                        <div className={notValidClasses.categoryValGrpCls}>{this.state.categoryValMsg}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <div className={notValidClasses.dateCls}>
                                        <label>Event Start Date: <span className="text-danger">*</span></label>
                                        <input
                                            ref="date"
                                            autoComplete="off"
                                            type="date"
                                            placeholder="event date"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.date}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.dateValGrpCls}>{this.state.dateValMsg}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <div className={notValidClasses.end_dateCls}>
                                        <label>Event End Date: <span className="text-danger">*</span></label>
                                        <input
                                            ref="end_date"
                                            autoComplete="off"
                                            type="date"
                                            placeholder="event end date"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.end_date}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.end_dateValGrpCls}>{this.state.end_dateValMsg}</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </fieldset>  
            
    )
  }
}