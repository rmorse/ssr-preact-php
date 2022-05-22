/**
 * The main entry point for your application.
 */
import { render, h, Fragment, Component } from 'preact';
import Person from './components/person';
/** @jsx h */
/** @jsxFrag Fragment */


const App = () => {
	// These props really should be coming via a store / external data source that can be mirrored on the server.
	const favoriteColors = [ { label: 'Red', value: 'red' }, { label: 'Green', value: 'green' }, { label: 'Blue', value: 'blue' } ];
	const favoriteArtists = [ { name: 'Joy Division', genre: 'Alternative/Indie' }, { name: 'Robert Palmer', genre: 'Pop' } ];
	const traits = [ 'Friendly', 'Charming', 'Snarky' ];
	
	return (
		<>
			<Person dob={ '1/1/1985' } name={ 'Mary' } favoriteColors={ favoriteColors } favoriteArtists={ favoriteArtists } traits={ traits } />
		</>
	)
}

const init = () => {
	render( (
		<App />
	), document.body );
};
if ( document.readyState !== 'loading' ) {
	init();
} else {
	window.addEventListener( 'DOMContentLoaded', ( event ) => {
		init();
	} );
}
