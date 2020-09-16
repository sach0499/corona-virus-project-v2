const express = require('express');
const mongoose = require('mongoose')

const app = express();

const PORT = 4300;


app.listen(PORT, () => console.log(`Server has started at ${PORT}`));
