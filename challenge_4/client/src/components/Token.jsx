import React from 'react';
import ReactDOM from 'react-dom';


class Token extends React.Component {
	constructor(props) {
		super(props);

	
	}



	render() {
		return (
				<td id={this.props.id} className={this.props.class}> </td>
			)
	}
}

export {Token}