import fs from 'fs';
import path from 'path';
import express from 'express';
import axios from 'axios';
import prenderServer from './prerender-server';
import prerenderMiddleware from './prerender-middleware';
import { parse } from 'node-html-parser';

// The main server used for running your app and then scraping the template html from the render.
// Essentially runs two servers to achieve the pre-rendering of the template html and the extraction to file.

// Server config is defined in webpack.server.config.js
const { keepalive } = serverConfig;

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use( prerenderMiddleware );
app.use(express.static(DIST_DIR))
app.get( '*', ( req, res ) => {
    res.sendFile(HTML_FILE);
})
const PORT = process.env.PORT || 8080

const noop = () => {};
function writeFileAndDir( filename, content, callback = noop ) {
	const dirName = path.dirname( filename );
	fs.mkdir( dirName, { recursive: true }, function ( err ) {
		if ( err ) {
			// eslint-disable-next-line no-console
			console.error( err );
			return callback( err );
		}
		fs.writeFile( filename, content, ( err ) => {
			if ( err ) {
				// eslint-disable-next-line no-console
				console.error( err );
				return callback( err );
			}
			callback();
		} );
	} );
}
const exitProcess = () => {
	// eslint-disable-next-line no-console
	console.log( 'Exiting...' );
	process.exit();
};

const initServer = () => {
	// Start an express server to render our app with template vars.
	const expressServer = app.listen(PORT, () => {
		console.log(`App listening to ${PORT}....`);
		// Trigger a request with query string to the server so that the prerender service can do its magic.
	
		const url = `http://localhost:8080/?_escaped_fragment_='`;
		console.log(`Triggering request to route.`);
		axios.get(url)
			.then(res => {
				// TODO - maybe should build the template files here instead of the prerender hook?
				const html = res.data;
				// Parse and get the `body` element children.
				const innerHtml = parse( html )
					.querySelector( 'body' ).innerHTML
				writeFileAndDir(
					`./webroot/templates/app.html`,
					innerHtml
				);
			})
			.catch(error => {
				console.error(error)
			})
			.finally( () => {
				if ( keepalive !== 'true' ) {
					expressServer.close( () => {
						console.log( 'Closed server.' );

					});
					if ( process.exit ) {
						console.log("Exiting...");
						// We need a delay here so any files that are being written can finish.
						setTimeout( exitProcess, 3000 );
					}
				}
			});
	})
}
// Start the prerender server, and pass our express server init
// to it (for executing when its ready)
prenderServer( () => {
	initServer();
} );
