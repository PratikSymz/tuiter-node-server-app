import posts from './tuits.js';

let tuits = posts;

export default (app) => {
	app.post('/api/tuits', createTuit);
	app.get('/api/tuits', findTuits);
	app.put('/api/tuits/:tid', updateTuit);
	app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
	const newTuit = req.body;
	newTuit._id = (new Date()).getTime();
	newTuit.profileImg = "profile_nyp.png"
	newTuit.userName = "New York Post"
	newTuit.handle = "@nypost"
	newTuit.timeAgo = "1h"
	newTuit.numComments = 0;
	newTuit.numRetweets = 0;
	newTuit.numLikes = 0;
	newTuit.liked = false;
	newTuit.numDislikes = 0;
	tuits.push(newTuit);
	res.json(newTuit);
};

const findTuits = (req, res) => {
	res.json(tuits);
};

const updateTuit = (req, res) => {
	const tuitId = parseInt(req.params['tid']);
	const updates = req.body;
	// find index of tuit to update in the tuits array
	const tuitIndex = tuits.findIndex((tuit) =>
			tuit._id === tuitId
	);
	tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
	// tuits = tuits.map((tuit) =>
	// 		tuit._id === tuitId ? {...tuit, ...updates} : tuit
	// );
	res.json(tuits);
	res.sendStatus(200);
};

const deleteTuit = (req, res) => {
	const tuitId = req.params['tid'];
	tuits = tuits.filter(tuit => tuit._id !== tuitId);
	res.sendStatus(200);
};
