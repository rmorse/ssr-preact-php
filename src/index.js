/**
 * The main entry point for your application.
 */
import { render, h, Fragment, Component } from 'preact';
import Person from './components/person';
/** @jsx h */
/** @jsxFrag Fragment */


const App = () => {
	const favoriteColors = [ { label: 'Red', value: 'red' }, { label: 'Green', value: 'green' }, { label: 'Blue', value: 'blue' } ];

	return (
		<>
			<Person name={ 'Mary' } favoriteColors={ favoriteColors } />
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
