require('dotenv').config();

const config = {
  port: process.env.PORT || 9001,
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/test', //uri mongodb or uri MongoDB Atlas
  },
};

module.exports = config;
