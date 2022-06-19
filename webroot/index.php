<?php
$data = array(
	'name' => 'Mary',
	'showColors'=> true,
	'showArtists'=> true,
	'dob' => '1/1/1985',
	'favoriteColors' => array(
		array(
			'label' => 'Red',
			'value' => 'red',
			'connotations' => array(
				'danger', 'life', 'war'
			)
		),
		array(
			'label' => 'Green',
			'value' => 'green',
			'connotations' => array(
				'growth', 'health', 'nature'
			)
		),
		array(
			'label' => 'Blue',
			'connotations' => array(
				'peace', 'calm', 'serenity'
			)
		),
	),
	'favoriteArtists' => array(
		array(
			'name' => 'Joy Division',
			'genre' => 'Alternative/Indie',
		),
		array(
			'name' => 'Robert Palmer',
			'genre' => 'Pop',
		),
	),
	'traits' => array( 
		'Friendly',
		'Charming',
		'Snarky',
	),
	'showTest' => 'yes',
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Preact pre-render to PHP</title>
    <script defer src="/assets/app.js"></script>
</head>
<body>
<?php
	include dirname(__FILE__) . '/templates/app.php';
?>
</body>
</html>
