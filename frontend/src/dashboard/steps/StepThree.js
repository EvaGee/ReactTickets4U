'use strict'
import React from 'react'

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      password: '', 
      passwordConfirm: '' 
    }
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(this);
  }

  handlePasswordChanged (event) {
    this.setState({password: event.target.value})
  }

  handlePasswordConfirmChanged (event) {
    this.setState({passwordConfirm: event.target.value})
  }

  render () {
    return (
      <div>

           <fieldset title="3">
                        <legend class="text-semibold">Step 3</legend>
                        <div class="row">
                            <div class="col-lg-4">
                                <ul class="list-inline text-center">
                                    <li>
                                        <a href="#" class="btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom" data-toggle="modal" data-target="#modalcreateticket"><i class="icon-plus3">
                                            Create Ticket Type
                                        </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-8">
                                <span class="text-danger"><p id="show_number">0 Tickets generated</p></span>
                                <ul id="myList"></ul>
                                <input type="text" id="num_ticket_generated" name="num_ticket_generated" value="" hidden required/>
                                <p id="ticket_autogen"></p>
                            </div>
                        </div>

                    </fieldset>
       
      </div>
    )
  }
}
