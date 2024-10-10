const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/about', function(req, res){
    res.send("This is the about endpoint");
});

app.get('/home', function(req, res){
    res.send("Home Endpoint");
});

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

