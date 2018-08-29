
class Container extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
		console.log(event.target.name, event.target.value);
		console.log(this.state);
	}

	handleSubmit(event) {
		//TODO
		event.preventDefault();
		console.log('submit clicked!');
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				" Checkout App "
			),
			React.createElement(
				"div",
				null,
				React.createElement(Button, { text: "Checkout" })
			),
			React.createElement("br", null),
			React.createElement(
				"div",
				null,
				React.createElement(Form1, { handleChange: this.handleChange, handleSubmit: this.handleSubmit }),
				React.createElement(Form2, { handleChange: this.handleChange, handleSubmit: this.handleSubmit }),
				React.createElement(Form3, { handleChange: this.handleChange, handleSubmit: this.handleSubmit })
			),
			React.createElement("br", null),
			React.createElement(
				"div",
				{ className: "confirmation" },
				React.createElement(Confirmation, null)
			)
		);
	}
}

class Form1 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement(
			"div",
			{ className: "form" },
			React.createElement(
				"form",
				null,
				"Name:",
				React.createElement("input", { type: "text", name: "name", onChange: this.props.handleChange }),
				React.createElement("br", null),
				"Email:",
				React.createElement("input", { type: "text", name: "email", onChange: this.props.handleChange }),
				React.createElement("br", null),
				"Password:",
				React.createElement("input", { type: "text", name: "password", onChange: this.props.handleChange }),
				React.createElement("br", null)
			),
			React.createElement(
				"button",
				{ onClick: this.props.handleSubmit },
				"Next"
			)
		);
	}
};

class Form2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement(
			"div",
			{ className: "form" },
			React.createElement(
				"form",
				null,
				React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						null,
						" Mailing Info "
					),
					"Shipping Address:",
					React.createElement("br", null),
					"Line 1:",
					React.createElement("input", { type: "text", name: "line1", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"Line 2:",
					React.createElement("input", { type: "text", name: "line2", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"City:",
					React.createElement("input", { type: "text", name: "city", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"State:",
					React.createElement("input", { type: "text", name: "state", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"Zip Code:",
					React.createElement("input", { type: "text", name: "zipcode", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"Phone Number:",
					React.createElement("input", { type: "number", name: "phone", onChange: this.props.handleChange }),
					React.createElement("br", null)
				)
			),
			React.createElement(
				"button",
				{ onClick: this.props.handleSubmit },
				"Next"
			)
		);
	}
};

class Form3 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement(
			"div",
			{ className: "form" },
			React.createElement(
				"form",
				null,
				React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						null,
						" Billing Info "
					),
					"Credit Card #:",
					React.createElement("input", { type: "number", name: "creditcard", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"Expiry Date:",
					React.createElement("input", { type: "date", name: "expdate", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"CVV:",
					React.createElement("input", { type: "number", name: "cvv", onChange: this.props.handleChange }),
					React.createElement("br", null),
					"Billing Zip Code:",
					React.createElement("input", { type: "number", name: "billingzip", onChange: this.props.handleChange }),
					React.createElement("br", null)
				)
			),
			React.createElement(
				"button",
				{ onClick: this.props.handleSubmit },
				"Next"
			)
		);
	}
};

let Button = props => {
	return React.createElement(
		"button",
		null,
		" ",
		props.text,
		" "
	);
};

let Confirmation = props => {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h2",
			null,
			" Confirmation "
		),
		React.createElement(
			"div",
			null,
			"Transaction Summary"
		),
		React.createElement(Button, { text: "Confirm Purchase" })
	);
};

ReactDOM.render(React.createElement(Container, null), document.getElementById('app'));
