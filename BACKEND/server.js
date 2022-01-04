const express = require("express"); // this comes from the package.json dependencies
// constant varible will not change its value in the rest of the programm

const mongoose = require("Mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

// port number is important
// inside a server the application is hosted on a port number where the request goes through that port the request can meet the web app

const port = process.env.PORT || 8070;
// we are working on the local server where  we can have any port but in cloud servers we cant ensure the port number so we use logical or operation to select 8070 or available port.

app.use(cors());
app.use(bodyParser.json());
// mongoDB contains of json files. so we use bodyParser to use MongoDB





