/**
 * TO GOD BE THE GLORY 
 * 28-AUG-2023
 */

// Require colors to enable us to log to the console in different colors
require('colors')
// Require dotenv which loads environment variables from the .env file into process.env
require('dotenv').config()
// Bring in Mongoose to help with database operations through the models
require('mongoose')
// Require express which is a minimal and flexible Node.js web application framework
const express = require('express')
// This is the port that we want our server to run on. 
const port = process.env.APP_PORT || 5000
// Connect to the database as the application is loading
const connectDB = require('./config/db')
// Open a connection to the database
connectDB()
// Create an Express application
const app = express()
// Return a middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Return a middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: false }))
// Send all the '/api/v1.0/publishers' requests to the 'publisherRoutes' file for redirection
app.use('/api/v1.0/publishers', require('./routes/publisherRoutes'))
// Specify the port where the application shall listen for connections
app.listen(port, () => console.log('Server started successfully on port ' + port))