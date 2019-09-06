import React, { Component } from 'react';
import { steps } from './steps/steps';
import MultiStep from 'react-multistep';
import StepZilla from "react-stepzilla";




export default class CreateEvent extends Component {
    costructor(props){

    
    }
render(){
    
    return(
        <div className="content-wrapper">
            <div className="panel panel-white">
                <div className="panel-heading">
                    <h6 className="panel-title">Create Event</h6>
                    <div className='step-progress'>
                        <StepZilla steps={steps} showNavigation={true} showSteps={false}/>
                    </div>
                </div>    
            </div>
    
   
	<div id="modalcreateticket" className="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal">&times;</button>
					<h5 className="modal-title">Create Ticket Type</h5>

				</div>
				<hr/>
				<div className="modal-body">
					
						<div className="row">
					<div className="col-md-6">
                        <div className="form-group">
							<label>Ticket Type: <span className="text-danger">*</span></label>
							<select id="ticket_type" name="ticket_type" className="form-control">
								<option value="">SELECT TICKET TYPE</option>
								
								<option value="<?php echo($value['typeid']);?>"></option>
								
							</select>
                        </div>
					</div>

					<div className="col-md-6">
                        <div className="form-group">
							<label>Ticket amount: <span className="text-danger">*</span></label>
							<input type="number" id="amount_ticket" name="amount_ticket" className="form-control" required placeholder="Ticket amount e.g 1000"/>
                        </div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
                        <div className="form-group">
							<label>Number of Tickets: <span className="text-danger">*</span></label>
							<input type="number" id="number_ticket" name="number_ticket" className="form-control" required placeholder="Number of Tickets e.g 1000"/>
                        </div>
					</div>

					<div className="col-md-6">
                        <div className="form-group">
							<label>Close Ticket on Date: <span className="text-danger">*</span></label>
							<input type="date" id="date_ticket" name="date_ticket" className="form-control" required placeholder="Close Ticket on Date"/>
                        </div>
					</div>
				</div>

				</div>

				<div className="modal-footer">
					<button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
					<button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
				</div>
			</div>
		</div>
	</div>

</div>
    );

}

}
