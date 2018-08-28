var testData = JSON.stringify({
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
});


//CODE STARTS HERE
const express = require('express');
const app = express();

app.use(express.static('client'));

//RESTful routes
app.post('/', (req, res) => {
  let data = testData; //TO UPDATE WITH RESPONSE BODY
  console.log('SERVER SIDE', req.body)
  postHandler(data, (err, csv) => {
    if (err) {
      throw err;
    } else {
      res.send(csv);
    }
  })

});


//jsonToCSV takes JSON string
var jsonToCSV = (obj) => {
  obj = JSON.parse(obj);
  let fields = Object.keys(obj);
  fields = fields.filter((ele) => {
    if (ele !== 'children') {
      return ele;
    }})
  let string = fields.join(',');
  let userAdd = (user) => {
    string = string.concat("\n", user.firstName, ",", user.lastName, ",", user.county, ",", user.city, ",", user.role, ",", user.sales);
    user.children.forEach((ele) => {
      userAdd(ele);
    })
  }
  userAdd(obj);
  return string;
};

//POST request handler

var postHandler = (data, callback) => {
  console.log('response received!', data)

  callback(null, jsonToCSV(data));
};



//Initialize web server
app.listen(3000, ()=>console.log(`Server listening on port 3000...`));

