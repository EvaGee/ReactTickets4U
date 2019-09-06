'use strict'
import React from 'react'

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      emailConfirm: ''
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  handleEmailConfirmChanged (event) {
    this.setState({emailConfirm: event.target.value})
  }

  render () {
    return (
      <div>
                  <form class="stepy-validation" id="myform" action="<?php echo base_url(); ?>index.php/create-event" method="post" enctype="multipart/form-data">

          <fieldset title="2">
                        <legend class="text-semibold">Step 2</legend>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Event Video: <span class="text-danger"> (or past events video)</span></label>
                                    <input type="text" name="video_link" placeholder="enter youtube link" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Event Sponsor Logo:</label>
                                    <input type="file" name="file_sponsor" class="file-styled" id="file_sponsor" onchange="sponsor_logo(this.value);"/>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Slideshow Image: <span class="text-danger">*</span></label>
                                    <input name="slider_images" id="file_slider" type="file" class="file-styled required" onchange="slider_image(this.value);"/>>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Event Banner Image: <span class="text-danger">*</span></label>
                                    <input name="banner_images" id="file_banner" type="file" class="file-styled required" onchange="banner_image(this.value);"/>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    </form>
        
      </div>
    )
  }
}
