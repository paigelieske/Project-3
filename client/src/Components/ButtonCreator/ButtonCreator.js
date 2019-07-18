import React from 'react';

function Button(props) {
	if (props.button === 'Note') {
		return (
			<React.Fragment>
				<div id="notesForm">
					<label>
						Please Specify Problem (i.e. The sink is leaking. Max=150)
					</label>
					<input
						type="text"
						id="problemNotes"
						className="form-control text-center"
						placeholder="Example input"
						onChange={
							props.onChange
						}
					/>
					<button
						id="submitNotes"
						type="button"
						className="btn btn-secondary text-center"
						value="Submit Notes"
						onClick={(event) => {
							props.clickFunction(props.button);
							props.handleSubmit(event);
						}}
					>
						Submit Notes
					</button>
				</div>
			</React.Fragment>
		);
	} 
	else if (props.button === 'Task has been submitted') {
		return ( 
		<div>
		{props.button}
		</div>
		)
	} 
	else {
		return (
			<input
				type="button"
				id={props.button}
				value={props.button}
				onClick={() => {
					props.clickFunction(props.button);
				}}
			/>
		);
	}
}

export default Button;
