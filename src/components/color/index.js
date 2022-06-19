
/**
 * A Color component, for demo purposes.
 */
 import { h, Fragment } from 'preact';
 /** @jsx h */
 /** @jsxFrag Fragment */
 
 const Color = ( { color, placeholder = '' } ) => {
	 const { label, value, connotations } = color;
	 return (
		 <div>
			<h3>{ label }</h3>
			<div>
				<h4>Connotations</h4>
				<ul>
					{ connotations.map( ( connotation, index ) => {
						return (
							<li>
								{ connotation }
							</li>
						);
					} ) }
				</ul>
			</div>
		 </div>
	 );
 };
 Color.templateVars = ["label", [ 'connotations', { type: 'list' } ], 'placeholder' ];
 
 export default Color;