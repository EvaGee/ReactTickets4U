'use strict'
import React from 'react'

export class StepFour extends React.Component {
  constructor () {
    super()
    this.state = { 
      checked: '' 
    }
    this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
  }

  handleCheckedChanged (event) {
    this.setState({checked: event.target.checked})
  }

  render () {
    return (
      <div>
                  <form class="stepy-validation" id="myform" action="<?php echo base_url(); ?>index.php/create-event" method="post" enctype="multipart/form-data">

           <fieldset title="4">
                        <legend class="text-semibold">Step 4</legend>

                        <div class="row">
                        <div class="col-lg-12">
                        
                                <div class="form-group"><label>Describe Your Event: <span class="text-danger">*</span></label>
                                    <textarea name="event_description"  id="event_description" rows="10"  class="form-control"></textarea>
                                </div>
                        </div>
                        </div>
                                        
                    </fieldset>
                    </form>
                    <button type="submit" class="btn btn-primary stepy-finish">Submit <i class="icon-check position-right"></i></button>
        
      </div>
    )
  }
}
