// import posts from './tuits.js';
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js';

export default (app) => {
	app.post('/api/tuits', createTuit);
	app.get('/api/tuits', findTuits);
	app.put('/api/tuits/:tid', updateTuit);
	app.delete('/api/tuits/:tid', deleteTuit);
}

/*
	Retrieve all tuits from data source
*/
const findTuits = async (req, res) => {
	const tuits = await tuitsDao.findTuits();
	res.json(tuits);
};

/*
	Create a new Tuit from the req body
 */
const createTuit = async (req, res) => {
	const newTuit = req.body;
	
	// newTuit._id = (new Date()).getTime();  -> Auto-assigned in MongoDB
	newTuit.profileImg = "profile_nyp.png"
	newTuit.userName = "New York Post"
	newTuit.handle = "@nypost"
	newTuit.timeAgo = "1h"
	newTuit.numComments = 0;
	newTuit.numRetweets = 0;
	newTuit.numLikes = 0;
	newTuit.liked = false;
	newTuit.numDislikes = 0;
	
	// tuits.push(newTuit);
	const insertedTuit = await tuitsDao.createTuit(newTuit);
	res.json(insertedTuit);
};

/*
	Update a Tuit in the data source
 */
const updateTuit = async (req, res) => {
	const tuitId = req.params['tid'];
	const updates = req.body;
	
	// // find index of tuit to update in the tuits array
	// const tuitIndex = tuits.findIndex((tuit) =>
	// 		tuit._id === tuitId
	// );
	// tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
	
	// tuits = tuits.map((tuit) =>
	// 		tuit._id === tuitId ? {...tuit, ...updates} : tuit
	// );
	
	const status = await tuitsDao.updateTuit(tuitId, updates);
	res.json(status);
};

/*
	Delete a Tuit from the data source
 */
const deleteTuit = async (req, res) => {
	const tuitId = req.params['tid'];
	
	// tuits = tuits.filter(tuit => tuit._id !== tuitId);
	const status = await tuitsDao.deleteTuit(tuitId);
	res.json(status);
};
