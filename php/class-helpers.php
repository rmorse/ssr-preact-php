<?php
/**
 * Handlebars helpers
 */

Class Helpers {
	private $helpers = array(
		'if_equal',
		'if_not_equal',
		'if_truthy',
		'if_falsy',
	);
	public function register( $handlebars ) {
		foreach( $this->helpers as $helper ) {
			$handlebars->addHelper( $helper, array( $this, 'helper_' . $helper ) );
		}
	}
	private function render_if( $template, $context ) {
		$template->setStopToken( 'else' );
		$buffer = $template->render( $context );
		$template->setStopToken( false );
		$template->discard();
		return $buffer;
	}
	private function render_else( $template, $context ) {
		$template->setStopToken( 'else' );
		$template->discard();
		$template->setStopToken( false );
		return $template->render( $context );
	}
	private function get_args_values( $args, $context ) {
		$args_arr = explode( ' ', $args );
		$args_arr = array_map( 'trim', $args_arr );

		$args_values = array();
		foreach ( $args_arr as $arg ) {
			$new_arg = '';
			if ( $this->is_args_string( $arg ) ) {
				$new_arg = trim( $arg, '"' );
			} else {
				$new_arg = $context->get( $arg );
			}
			$args_values[] = $new_arg;
		}
		return $args_values;
	}
	private function is_args_string( $arg ) {
		// Args in quotes are strings.
		// TODO - might need to support single quotes?
		if ( substr( $arg, 0, 1 ) === '"' && substr( $arg, -1 ) === '"' ) {
			return true;
		}
		return false;
	}
	public function helper_if_equal( $template, $context, $args, $source ) {
		$args_arr = $this->get_args_values( $args, $context );
		if ( count( $args_arr ) === 2 && $args_arr[0] === $args_arr[1] ) {
			return $this->render_if( $template, $context );
		} else {
			return $this->render_else( $template, $context );
		}
	}
	public function helper_if_not_equal( $template, $context, $args, $source ) {
		$args_arr = $this->get_args_values( $args, $context );

		if ( count( $args_arr ) === 2 && $args_arr[0] !== $args_arr[1] ) {
			return $this->render_if( $template, $context );
		} else {
			return $this->render_else( $template, $context );
		}
	}
	public function helper_if_truthy( $template, $context, $args, $source ) {
		$args_arr = $this->get_args_values( $args, $context );

		if ( count( $args_arr ) === 1 && $args_arr[0] ) {
			return $this->render_if( $template, $context );
		} else {
			return $this->render_else( $template, $context );
		}
	}
	public function helper_if_falsy( $template, $context, $args, $source ) {
		$args_arr = $this->get_args_values( $args, $context );

		if ( count( $args_arr ) === 1 && ! $args_arr[0] ) {
			return $this->render_if( $template, $context );
		} else {
			return $this->render_else( $template, $context );
		}
	}
}
