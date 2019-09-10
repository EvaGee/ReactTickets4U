'use strict'
import React from 'react'

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
        
        video_link: '',
        file_sponsor:'',
        slider_images:'',
        banner_images:'',
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
          if ( this.props.slider_images != userInput.slider_images|| this.props.banner_images != userInput.banner_images
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
        slider_imagesVal:(data.slider_images !=0),
        banner_imagesVal:(data.banner_images !=0),
        
      }
    }
  
    _validationErrors(val) {
      const errMsgs = {
       
        slider_imagesValMsg: val.slider_imagesVal ? '' : 'Image required',
        banner_imagesValMsg: val.banner_imagesVal ? '' : 'Image required',
      }
      return errMsgs;
    }
  
    _grabUserInput() {
      return {
        video_link: this.refs.video_link.value,
        slider_images: this.refs.slider_images.value,
        file_sponsor: this.refs.file_sponsor.value,
        banner_images: this.refs.banner_images.value
      };
    }
  
    render() {
      // explicit class assigning based on validation
      let notValidClasses = {};
  
    
      if (typeof this.state.slider_imagesVal == 'undefined' || this.state.slider_imagesVal) {
          notValidClasses.slider_imagesCls = 'no-error col-md-8';
      }
      else {
         notValidClasses.slider_imagesCls = 'has-error col-md-8';
         notValidClasses.slider_imagesValGrpCls = 'val-err-tooltip';
      }
    
     
      if (typeof this.state.banner_imagesVal == 'undefined' || this.state.banner_imagesVal) {
          notValidClasses.banner_imagesCls = 'no-error col-md-8';
      }
      else {
         notValidClasses.banner_imagesCls = 'has-error col-md-8';
         notValidClasses.banner_imagesValGrpCls = 'val-err-tooltip';
      }
    return (
      
                <fieldset title="2">
                    <legend class="text-semibold">Step 2</legend>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Event Video: <span class="text-danger"> (or past events video)</span></label>
                                    <div>
                                        <input
                                            ref="video_link"
                                            autoComplete="off"
                                            type="text"
                                            placeholder="enter youtube link"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.video_link}
                                             />
                                    </div>
                                </div>
                            </div>         

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Event Sponsor Logo:</label>
                                    <div>
                                        <input
                                            ref="file_sponsor"
                                            autoComplete="off"
                                            type="file"
                                            placeholder="enter youtube link"
                                            className="form-control"
                                            required
                                            defaultValue={this.state.file_sponsor}
                                             />
                                    </div>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Slideshow Image: <span class="text-danger">*</span></label>
                                    <div className={notValidClasses.slider_imagesCls}>
                                        <input
                                            ref="slider_images"
                                            autoComplete="off"
                                            type="file"
                                            placeholder="enter youtube link"
                                            className="file-styled required"
                                            required
                                            defaultValue={this.state.slider_images}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.slider_imagesValGrpCls}>{this.state.slider_imagesValMsg}</div>
                                    </div>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="display-block">Event Banner Image: <span class="text-danger">*</span></label>
                                    <div className={notValidClasses.banner_imagesCls}>
                                        <input
                                            ref="banner_images"
                                            autoComplete="off"
                                            type="file"
                                            placeholder="enter youtube link"
                                            className="file-styled required"
                                            required
                                            defaultValue={this.state.banner_images}
                                            onBlur={this.validationCheck} />
                                        <div className={notValidClasses.banner_imagesValGrpCls}>{this.state.banner_imagesValMsg}</div>
                                    </div>
                                    <span class="help-block">Accepted formats: pdf, doc. Max file size 2Mb</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
               
        
      
    )
  }
}
