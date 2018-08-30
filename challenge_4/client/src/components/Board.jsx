import React from 'react';
import ReactDOM from 'react-dom';
import {Token} from './Token.jsx'

class Board extends React.Component {
	constructor(props) {
		super(props);

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
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
								})
							}
						</tr>
						<tr>
							{tokenID[1].map((id)=>{
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
								})
							}
						</tr>
						<tr>
							{tokenID[2].map((id)=>{
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
								})
							}
						</tr>
						<tr>
							{tokenID[3].map((id)=>{
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
								})
							}
						</tr>
						<tr>
							{tokenID[4].map((id)=>{
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
								})
							}
						</tr>
						<tr>
							{tokenID[5].map((id)=>{
									return <td id={id}> <img src="../src/images/grey.png"/> </td>
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

