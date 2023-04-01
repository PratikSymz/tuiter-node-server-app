// import the array of users. Include the extension
import people from './users.js';

let users = people;

// use express instance app to declare HTTP GET
// request pattern /api/users to call a function
const UserController = (app) => {
	app.get('/api/users', findUsers);
	app.get('/api/users/:uid', findUserById);
	app.post('/api/users', createUser);
	app.delete('/api/users/:uid', deleteUser);
	app.put('/api/users/:uid', updateUser);
};

// function runs when /api/users requested
// responds with JSON array of users
const findUsers = (req, res) => {
	const type = req.query.type;  // or req.query['type']
	if (type) { // Type parameter exists
		const usersOfType = users.filter(user => user.type === type);
		
		// respond with users of that type
		// return so that it doesn't continue
		res.json(usersOfType);
		return;
	}
	
	// otherwise respond with all users
	res.json(users);
};

const findUserById = (req, res) => {
	const userId = req.params.uid;
	const user = users.find(user => user._id === userId);
	res.json(user);
};

const createUser = (req, res) => {
	const newUser = req.body;
	newUser._id = (new Date()).getTime() + '';
	users.push(newUser);
	res.json(users);
};

const deleteUser = (req, res) => {
	const userId = req.params.uid;
	users = users.filter(user => user._id !== userId);
	res.sendStatus(200);
};

const updateUser = (req, res) => {
	const userId = req.params['uid'];
	const updates = req.body;
	users = users.map((user) =>
			// merge old user with new updates
			// Old fields in 'updates' with new values coming after the 'user' fields are considered as actual values
			user._id === userId ? {...user, ...updates} : user
	);
	res.sendStatus(200);
};

// exports so app.js can import
export default UserController;