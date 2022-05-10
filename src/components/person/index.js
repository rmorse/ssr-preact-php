
/**
 * A Person component, for demo purposes.
 */
import { h, Fragment } from 'preact';
/** @jsx h */
/** @jsxFrag Fragment */

const Person = ( { name, favoriteColors, showColors = true, ...props } ) => {
	const favoriteColorsList = favoriteColors.map( ( color, index ) => {
		return (
			<div key={ index }>
				{ color.label }
			</div>
		);
	} );
	return (
		<section class="profile">
			<h1>{ name }</h1>
			{ /* showColors && favoriteColorsList */ }
			{ favoriteColorsList }
		</section>
	);
}

Person.templateVars = [
	'name',
	[ 'showColors', { type: 'control' } ],
	[ 'favoriteColors', { type: 'list', /* aliases: [ 'favoriteColorsList' ], */ child: { type: 'object', props: [ 'value', 'label' ] } } ],
];

export default Person;