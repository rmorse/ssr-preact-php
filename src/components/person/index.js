
/**
 * A Person component, for demo purposes.
 */
import { h, Fragment } from 'preact';
import Color from '../color';
/** @jsx h */
/** @jsxFrag Fragment */

const Person = ( { name, dob, favoriteColors, favoriteArtists, traits, showColors = true, showArtists = true, ...props } ) => {
	const showTest = 'yes';
	const favoriteColorsList = favoriteColors.map( ( color, index ) => {
		return (
			<Color color={ color } key={ index } />
		);
	} );
	return (
		<section class="profile">
			<h1>{ name }</h1>
			<p>Date of birth: { dob }</p>
			{ showColors && (
				<>
					<h2>Favorite Colors</h2>
					<div>{ favoriteColorsList }</div>
				</>
			) }
			{ showArtists && (
				<>
					<h2>Favorite Artists</h2>
					<div>
						{ favoriteArtists.map( ( artist, index ) => {
							return (
								<div key={ index }>
									{ artist.name } | { artist.genre }
								</div>
							)
						} ) }
					</div>
				</>
			) }
			<h2>Character traits</h2>
			{ traits.map( ( trait, index ) => {
				return (
					<div>A trait: { trait }</div>
				);
			} ) }
			<h2>Character traits raw</h2>
			{ traits }
			<h2>Combining control + replace variables</h2> 
			{ showTest === 'yes' && name }
			<h2>Combining control + list variables</h2> 
			{ showTest === 'yes' && traits }
		</section>
	);
}

Person.templateVars = [
	'name',
	'dob',
	[ 'showColors', { type: 'control' } ],
	[ 'showArtists', { type: 'control' } ],
	[ 'favoriteColors', { type: 'list', child: { type: 'object', props: [ 'value', 'label' ] } } ],
	[ 'favoriteArtists', { type: 'list', child: { type: 'object', props: [ 'name', 'genre' ] } } ],
	[ 'traits', { type: 'list' } ],
	[ 'showTest', { type: 'control' } ],
];

export default Person;