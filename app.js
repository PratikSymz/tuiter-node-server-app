// Load Express
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from './controllers/tuits/tuits-controller.js';

// Call to create an instance of the express library
const app = express();
// configure cors right after instantiating express
app.use(cors());
// parse JSON from HTTP request body
app.use(express.json());
// Connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
		|| 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4100);