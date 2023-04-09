import mongoose from 'mongoose';

const {Schema} = mongoose;

const schema = new Schema({
	profileImg: String,
	userName: String,
	handle: String,
	timeAgo: String,
	tweet: String,
	numComments: Number,
	numRetweets: Number,
	numLikes: Number,
	liked: Boolean,
	numDislikes: Number
}, {collection: 'tuits'});

export default schema;