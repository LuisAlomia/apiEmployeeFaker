const express = require('express');
const cors = require('cors');

const fakerRoutes = require('./fackerEmployee/employee.router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/employee/faker', fakerRoutes);

module.exports = app;
