'use strict'
import React from 'react'
import axios from 'axios';


export class StepFour extends React.Component {
  constructor () {
    super()
    this.state = {
      event_description: ''
      
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }
  

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.event_description != userInput.event_description ) { // only update store of something changed
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
      event_descriptionVal:(data.event_description !=0)
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      event_descriptionValMsg: val.event_descriptionVal ? '' : 'Event Description is required',

    }
    return errMsgs;
  }
  clickPost(e){
    e.preventDefault();
    var url = 'http://localhost:3210/data';
    axios.post(url, {
      event_description: this.state.event_description
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
 
  };

  _grabUserInput() {
    return {
      event_description: this.refs.event_description.value,
     
    };
  }

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};


   
    if (typeof this.state.event_descriptionVal == 'undefined' || this.state.event_descriptionVal) {
        notValidClasses.event_descriptionCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.event_descriptionCls = 'has-error col-md-8';
       notValidClasses.vevent_descriptionValGrpCls = 'val-err-tooltip';
    }
    return (
                  <fieldset title="4">
                        <legend class="text-semibold">Step 4</legend>
                        <button class="row">
                          <div class="col-lg-12">
                              <div class="form-group">
                              <div className={notValidClasses.event_descriptionCls}>
                                        <label>Describe Your Event: <span className="text-danger">*</span></label>
                                        <textarea
                                            ref="event_description"
                                            autoComplete="off"
                                            rows="10"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.event_description}
                                            onBlur={this.validationCheck} ></textarea>
                                        <div className={notValidClasses.event_descriptionValGrpCls}>{this.state.event_descriptionValMsg}</div>
                                    </div>
                              </div>
                        </div>
                        <button type="submit" class="btn btn-primary" align="left" onClick={this.clickPost.bind(this)}>Submit <i class="icon-check position-right"></i></button>
                        </button>
                  </fieldset>
      
    )
  }
}
