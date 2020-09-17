const express = require('express');
const mongoose = require('mongoose')

const {getStatesData, getHistory} = require('./routes');

const app = express();

const PORT = 4300;


app.get('/api/v1/states', getStatesData);
app.get('/api/v1/histories', getHistory)


app.listen(PORT, () => console.log(`Server has started at ${PORT}`));
