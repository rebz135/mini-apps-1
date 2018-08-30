
class Container extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.changePage = this.changePage.bind(this);
		this.state = {
			page: 'welcome'
		};
	}

	handleChange(event) {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
		console.log(event.target.name, event.target.value);
		console.log(this.state);
	}

	changePage(nextPage) {
		console.log(this.state);
		let postRequest = new Request('http://localhost:3000/');
		let params = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state)
		};

		fetch(postRequest, params).then(data => {
			//TODO - DEAL WITH DATA FROM RESPONSE
			console.log('response data', data);
			return data;
		});

		this.setState({ page: nextPage });

		console.log('submit clicked!', nextPage);
	}

	render() {
		if (this.state.page === 'welcome') {
			return React.createElement(Welcome, { changePage: this.changePage });
		}
		if (this.state.page === 'f1') {
			return React.createElement(Form1, { handleChange: this.handleChange, changePage: this.changePage });
		}
		if (this.state.page === 'f2') {
			return React.createElement(Form2, { handleChange: this.handleChange, changePage: this.changePage });
		}
		if (this.state.page === 'f3') {
			return React.createElement(Form3, { handleChange: this.handleChange, changePage: this.changePage });
		}
		if (this.state.page === 'summary') {
			return React.createElement(Summary, { handleChange: this.handleChange, changePage: this.changePage, state: this.state });
		}
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { next: 'f1' };
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				' Checkout App '
			),
			React.createElement(
				'button',
				{ onClick: this.handleSubmit },
				' Checkout '
			)
		);
	}
};

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { next: 'f2' };
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'form' },
			React.createElement(
				'form',
				null,
				'Name:',
				React.createElement('input', { type: 'text', name: 'name', onChange: this.props.handleChange }),
				React.createElement('br', null),
				'Email:',
				React.createElement('input', { type: 'text', name: 'email', onChange: this.props.handleChange }),
				React.createElement('br', null),
				'Password:',
				React.createElement('input', { type: 'text', name: 'password', onChange: this.props.handleChange }),
				React.createElement('br', null)
			),
			React.createElement(
				'button',
				{ onClick: this.handleSubmit },
				'Next'
			)
		);
	}
};

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { next: 'f3' };
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'form' },
			React.createElement(
				'form',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'h2',
						null,
						' Mailing Info '
					),
					'Shipping Address:',
					React.createElement('br', null),
					'Line 1:',
					React.createElement('input', { type: 'text', name: 'line1', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'Line 2:',
					React.createElement('input', { type: 'text', name: 'line2', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'City:',
					React.createElement('input', { type: 'text', name: 'city', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'State:',
					React.createElement('input', { type: 'text', name: 'state', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'Zip Code:',
					React.createElement('input', { type: 'text', name: 'zipcode', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'Phone Number:',
					React.createElement('input', { type: 'number', name: 'phone', onChange: this.props.handleChange }),
					React.createElement('br', null)
				)
			),
			React.createElement(
				'button',
				{ onClick: this.handleSubmit },
				'Next'
			)
		);
	}
};

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { next: 'summary' };
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'form' },
			React.createElement(
				'form',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'h2',
						null,
						' Billing Info '
					),
					'Credit Card #:',
					React.createElement('input', { type: 'number', name: 'creditcard', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'Expiry Date:',
					React.createElement('input', { type: 'date', name: 'expdate', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'CVV:',
					React.createElement('input', { type: 'number', name: 'cvv', onChange: this.props.handleChange }),
					React.createElement('br', null),
					'Billing Zip Code:',
					React.createElement('input', { type: 'number', name: 'billingzip', onChange: this.props.handleChange }),
					React.createElement('br', null)
				)
			),
			React.createElement(
				'button',
				{ onClick: this.handleSubmit },
				'Next'
			)
		);
	}
};

class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { next: 'welcome' };
	}

	handleSubmit() {
		alert('Thanks for shopping with us!');
		this.props.changePage(this.state.next);
	}

	render() {
		console.log(this.props.state.name);
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				null,
				' Transaction Summary '
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h3',
					null,
					' User Info '
				),
				'Name:',
				React.createElement('br', null),
				'Email:',
				React.createElement('br', null),
				'Password: ******',
				React.createElement(
					'h3',
					null,
					' Mailing Info '
				),
				'Line 1:',
				React.createElement('br', null),
				'Line 2:',
				React.createElement('br', null),
				'City:',
				React.createElement('br', null),
				'State:',
				React.createElement('br', null),
				'Zip Code:',
				React.createElement('br', null),
				'Phone Number:',
				React.createElement('br', null),
				React.createElement(
					'h3',
					null,
					' Payment Info '
				),
				'Credit Card #: **********',
				React.createElement('br', null),
				'Expiry Date:',
				React.createElement('br', null),
				'CVV:',
				React.createElement('br', null),
				'Billing Zip Code:'
			),
			React.createElement(
				'button',
				{ onClick: this.handleSubmit },
				' Confirm Purchase '
			)
		);
	}
}

ReactDOM.render(React.createElement(Container, null), document.getElementById('app'));
