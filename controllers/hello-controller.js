/**
 * 'app.get()' function to configure an HTTP handler by mapping the URL pattern '/hello' to a function that handles
 * the HTTP request.
 */
const HelloController = (app) => {
	app.get('/hello', (req, res) => {
		res.send('Life is good!');
	});
	
	app.get('/', (req, res) => {
		res.send('Welcome to Full Stack Development!');
	});
};

export default HelloController;