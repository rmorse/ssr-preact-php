const prerender = require('prerender');

function prerenderServerInit( onConnectToBrowser ) {
	// Setup the pre render server
	const prerenderServer = prerender();
	const initListenerPlugin = {
		init: () => {
			console.log("Init plugin: initListenerPlugin");
		},
		connectedToBrowser: (req, res, next) => {
			// Only connect init the server once we we have connected to the browser.
			onConnectToBrowser();
			next();
		},
	}
	prerenderServer.use( initListenerPlugin );
	prerenderServer.start();
};

export default prerenderServerInit;
