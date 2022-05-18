
/**
 * A Person component, for demo purposes.
 */
import { h, Fragment } from 'preact';
/** @jsx h */
/** @jsxFrag Fragment */

const Person = ( { name, dob, favoriteColors, favoriteArtists, traits, showColors = true, showArtists = true, ...props } ) => {
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
			<p>Date of birth: { dob }</p>
			{ /* showColors && favoriteColorsList */ }
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
];

export default Person;