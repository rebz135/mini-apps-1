var testData = { page: 'f3',
  name: 'Tom Green',
  email: 'tom@gmail.com',
  password: 'helloworld',
  line1: '283 Dolores St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: '94103',
  phone: '4159990000',
  line2: 'Unit 3',
  creditcard: '1111111111',
  expdate: '2000-12-12',
  cvv: '123',
  billingzip: '00000' };

//CODE STARTS HERE
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
	console.log('req received')
	res.send('request received!')
})

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('post received')
})

app.listen(3000, ()=> console.log('listening on port 3000...'))

//DATABASE SETUP
const mysql = require('mysql');
const connection = mysql.createConnection({
  user     : 'root',
  password : null,
  database : 'recordsdb'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()