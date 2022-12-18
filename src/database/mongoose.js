const { db } = require('../config/env.config');
const mongoose = require('mongoose');

const databaseConnect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db.uri);
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.log(err);
  }
};

module.exports = databaseConnect;
