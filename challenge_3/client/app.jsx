
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
		console.log(event.target.name, event.target.value)
		console.log(this.state)
	}

	handleSubmit(event) {
		//TODO
		event.preventDefault();
		console.log('submit clicked!')
	}

	render() {
		return (
			<div>
				<h1> Checkout App </h1>
				<div>
					<Button text="Checkout"/>
				</div>
					<br/>
				<div>
					<Form1 handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
					<Form2 handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
					<Form3 handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
				</div>
				<br/>
				<div className="confirmation">
					<Confirmation />
				</div>
			</div>
			)
	}
}

class Form1 extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="form">
				<form>
				  Name:
					<input type="text" name="name" onChange={this.props.handleChange}/>
					<br/>
					Email:
					<input type="text" name="email" onChange={this.props.handleChange}/>
					<br/>
					Password:
					<input type="text" name="password" onChange={this.props.handleChange}/>
					<br/>
				</form>
					<button onClick={this.props.handleSubmit}>Next</button>
			</div>
		)
	}
};

class Form2 extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="form">
				<form>
				  <div>
						<h2> Mailing Info </h2>
						Shipping Address:
						<br/>
						Line 1: 
						<input type="text" name="line1" onChange={this.props.handleChange}/>
						<br/>
						Line 2: 
						<input type="text" name="line2" onChange={this.props.handleChange}/>
						<br/>
						City: 
						<input type="text" name="city" onChange={this.props.handleChange}/>
					  <br/>
						State: 
						<input type="text" name="state" onChange={this.props.handleChange}/>
						<br/>
						Zip Code: 
						<input type="text" name="zipcode" onChange={this.props.handleChange}/>
						<br/>
						Phone Number: 
						<input type="number" name="phone" onChange={this.props.handleChange}/>
						<br/>
					</div>
				</form>
				<button onClick={this.props.handleSubmit}>Next</button>
			</div>

		)
	}
};

class Form3 extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="form">
				<form>
					<div>
						<h2> Billing Info </h2>
						Credit Card #:
						<input type="number" name="creditcard" onChange={this.props.handleChange}/>
						<br/>
						Expiry Date:
						<input type="date" name="expdate" onChange={this.props.handleChange}/>
						<br/>
						CVV:
						<input type="number" name="cvv" onChange={this.props.handleChange}/>
						<br/>
						Billing Zip Code:
						<input type="number" name="billingzip" onChange={this.props.handleChange}/>
						<br/>
					</div>
				</form>
				<button onClick={this.props.handleSubmit}>Next</button>
			</div>
		)
	}	
};

let Button = (props) => {
	return (
		<button> {props.text} </button>
		)
}

let Confirmation = (props) => {
	return (
		<div>
			<h2> Confirmation </h2>
			<div>
			Transaction Summary
			</div>
			<Button text="Confirm Purchase"/>
		</div>
	)
}


ReactDOM.render(<Container />, document.getElementById('app'))
