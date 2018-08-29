const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.static('client'));
app.use(parser.json());

//RESTful routes
app.post('/', (req, res) => {
  let data = req.body;
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
  let fields = Object.keys(obj);
  fields = fields.filter((ele) => {
    if (ele !== 'children') {
      return ele;
    }})
  let string = fields.join(',');
  let userAdd = (user) => {
    string = string.concat("<br>", user.firstName, ",", user.lastName, ",", user.county, ",", user.city, ",", user.role, ",", user.sales);
    user.children.forEach((ele) => {
      userAdd(ele);
    })
  }
  userAdd(obj);
  return JSON.stringify(string);
};

//POST request handler
var postHandler = (data, callback) => {
  // TODO - UPDATE WITH DYANMIC FILE NAME
  fs.writeFile("files/newFile.json", jsonToCSV(data), (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('file saved!')
    }
  })
  callback(null, jsonToCSV(data));
};



//Initialize web server
app.listen(3000, ()=>console.log(`Server listening on port 3000...`));