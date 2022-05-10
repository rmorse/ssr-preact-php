<?php
require_once dirname(__FILE__) . '/vendor/load-handlebars.php';
require_once dirname(__FILE__) . '/class-helpers.php';

$template_data = array(
	'name' => 'Mary',
	'favoriteColors' => array(
		array(
			'label' => 'Red',
			'value' => 'red',
		),
		array(
			'label' => 'Green',
			'value' => 'green',
		),
		array(
			'label' => 'Blue',
			'value' => 'blue',
		),
	),
);

$partials_dir    = 'templates';
$partials_loader = new Handlebars\Loader\FilesystemLoader( $partials_dir, array( 'extension' => 'html' ) );

// Init handlebars.
$handlebars = new Handlebars\Handlebars(
	array(
		'loader'          => $partials_loader,
		'partials_loader' => $partials_loader,
	)
);

$helpers = new Helpers();
$helpers->register( $handlebars );
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Preact pre-render to handlebars</title>
    <script defer src="/assets/app.js"></script>
</head>
<body>
<?php
	echo $handlebars->render( 'app', $template_data );
?>
</body>
</html>
