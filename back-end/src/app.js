const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

//importing express and cors
const express = require("express");
const cors = require("cors");

//importing the errorhandlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//importing the routers to the reservations and tables routes
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const app = express();

//determining the paths to use when a route is called or error occurs
app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("/tables", tablesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
