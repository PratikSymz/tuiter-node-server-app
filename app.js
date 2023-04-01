// Load Express
import express from "express";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from './controllers/tuits/tuits-controller.js';

// Call to create an instance of the express library
const app = express();
// configure cors right after instantiating express
app.use(cors());
// parse JSON from HTTP request body
app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4100);