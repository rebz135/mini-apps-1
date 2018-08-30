const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());


app.listen(3000, () => console.log('Listening on port 3000...'))