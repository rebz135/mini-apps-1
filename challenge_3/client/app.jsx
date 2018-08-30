
class Container extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.changePage = this.changePage.bind(this);
		this.state = {
			page: 'welcome'
		}
	}

	handleChange(event) {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
		console.log(event.target.name, event.target.value)
		console.log(this.state)
	}

	changePage(nextPage) {
		//TODO
		this.setState({page: nextPage})

		console.log('submit clicked!', nextPage)
	}

	render() {
		if (this.state.page === 'welcome') {
			return (
				<Welcome changePage={this.changePage}/>
			)
		} 
		if (this.state.page === 'f1') {
			return (
				<Form1 handleChange={this.handleChange} changePage={this.changePage}/>
				)
		}
		if (this.state.page === 'f2') {
			return (
				<Form2 handleChange={this.handleChange} changePage={this.changePage}/>
				)
			
		}
		if (this.state.page === 'f3') {
			return (
				<Form3 handleChange={this.handleChange} changePage={this.changePage}/>
				)
		}
		if (this.state.page === 'summary') {
			return (
				<Summary handleChange={this.handleChange} changePage={this.changePage} state={this.state}/>
				)
		}

		
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {next: 'f1'}
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}
	
	render() {
		return (
				<div> 
					<h1> Checkout App </h1>
					<button onClick={this.handleSubmit}> Checkout </button>
				</div>
			)
	}
};

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {next: 'f2'}
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
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
					<button onClick={this.handleSubmit}>Next</button>
			</div>
		)
	}
};

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {next: 'f3'}
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
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
				<button onClick={this.handleSubmit}>Next</button>
			</div>

		)
	}
};

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {next: 'summary'}
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
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
				<button onClick={this.handleSubmit}>Next</button>
			</div>
		)
	}	
};


class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {next: 'welcome'}
	}

	handleSubmit() {
		this.props.changePage(this.state.next);
	}
	
	render() {
		console.log(this.props.state.name);
		return (
			<div>
				<h2> Transaction Summary </h2>
				<div>
				<h3> User Info </h3>
				Name: {this.props.state.name}
				<br/>
				Email: {this.props.state.email}
				<br/>
				Password: ******
				<h3> Mailing Info </h3>
				Line 1: {this.props.state.line1}
				<br/>
				Line 2: {this.props.state.line2}
				<br/>
				City: {this.props.state.city}
				<br/>
				State: {this.props.state.state}
				<br/>
				Zip Code: {this.props.state.zipcode}
				<br/>
				Phone Number: {this.props.state.phone}
				<br/>
				<h3> Payment Info </h3>
				Credit Card #: **********
				<br/>
				Expiry Date: {this.props.state.expdate}
				<br/>
				CVV: {props.state.cvv}
				<br/>
				Billing Zip Code: {this.props.state.billingzip}
				</div>
				<button onClick={this.handleSubmit}> Confirm Purchase </button>
			</div>
		)
	}
}


ReactDOM.render(<Container />, document.getElementById('app'))
