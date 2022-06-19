export default const customLanguage = {
	name: 'customLanguage',
	varName: '$data',
	replace: {
		format: `<?php echo htmlspecialchars( $||%var||[ '||%1||' ], ENT_QUOTES ); ?>`,
	},
	list: {
		open: `<?php foreach ( $||%var||[ '||%1||' ] as $||%subVar|| ) { ?>`,
		close: `<?php } ?>`,
		formatObjectProperty: `<?php echo htmlspecialchars( $||%subVar||[ '||%1||' ], ENT_QUOTES ); ?>`,
		formatPrimitive: `<?php echo htmlspecialchars( $||%subVar||, ENT_QUOTES ); ?>`,
	},
	control: {
		ifTruthy: {
			open: `<?php if ( $||%var||[ '||%1||' ] ) { ?>`,
			close: '<?php } ?>',
		},
		ifFalsy: {
			open: `<?php if ( ! $||%var||[ '||%1||' ] ) { ?>`,
			close: '<?php } ?>',
		},
		ifEqual: {
			open: `<?php if ( $||%var||[ '||%1||' ] === ||%2|| ) { ?>`,
			close: '<?php } ?>',
		},
		ifNotEqual: {
			open: `<?php if ( $||%var||[ '||%1||' ] !== ||%2|| ) { ?>`,
			close: '<?php } ?>',
		},
	},
};
