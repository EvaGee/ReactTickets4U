'use strict'
import React from 'react'

export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  render () {
    return (
      <div>
        <form className="stepy-validation" id="myform" action="<?php echo base_url(); ?>index.php/create-event" method="post">
                    <fieldset title="1">
                        <legend className="text-semibold">Step 1</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Event Title: <span className="text-danger">*</span></label>
                                    <input type="text" name="title" id="title" className="form-control required" placeholder="event title"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Event Venue: <span className="text-danger">*</span></label>
                                    <input type="text" name="venue" id="venue" className="form-control required" placeholder="event venue"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Event Location: <span className="text-danger">*</span></label>
                                    <input type="text" name="location" id="location" className="form-control required" placeholder="event location"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Event Category: <span className="text-danger">*</span></label>
                                    <select name="category" id="category" className="form-control" required>
                                        <option value="">Select Category</option>
                                        
                                        
                                        <option value="<?php echo($value['id']);?>">  </option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Event Start Date: <span className="text-danger">*</span></label>
                                    <input type="date" name="date" id="date" className="form-control required" placeholder="event date"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Event End Date: <span className="text-danger">*</span></label>
                                        <input type="date" name="end_date" id="end_date" className="form-control required" placeholder="event end date"/>
                                    </div>
                            </div>
                        </div>  
                    </fieldset>  
                    </form>
        </div>
    )
  }
}