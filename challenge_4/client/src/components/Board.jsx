import React from 'react';
import ReactDOM from 'react-dom';
import {Token} from './Token.jsx'

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: true,
			yellowLoc: ['51', '52', '32'],
			redLoc: ['54', '42']
		}

	}

	clickHandler(event) {
		//TODO
		//Get id from event
		//Check result (win, tie, taken)
		//if win -> call win function
		//if tie -> call tie function
		//if ok -> call place function
			//get column from id
			//get token count at column number
			//place token at row (token count +1) column number
			//token count++

	}

	render() {
		let tokenID = [];
		for (let r=0; r<6; r++) {
			tokenID[r]=[];
			for (let c=0; c<7; c++) {
				tokenID[r].push(r.toString()+c.toString())
			}
		}

		return (
			<div>
				<table>
					<tbody>
						<tr>
							{tokenID[0].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
						<tr>
							{tokenID[1].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
						<tr>
							{tokenID[2].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
						<tr>
							{tokenID[3].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
						<tr>
							{tokenID[4].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
						<tr>
							{tokenID[5].map((id)=>{
									let tempClass = 'cell grey';
									if (this.state.yellowLoc.includes(id)) {
										tempClass = 'cell yellow'
									}
									if (this.state.redLoc.includes(id)) {
										tempClass = 'cell red'
									}
									return <Token id={id} class={tempClass} />
								})
							}
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}

export {Board} 

