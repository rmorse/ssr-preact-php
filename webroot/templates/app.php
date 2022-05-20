<section class="profile"><h1><?php echo htmlspecialchars( $data[ "name" ], ENT_QUOTES ); ?></h1><p>Date of birth: <?php echo htmlspecialchars( $data[ "dob" ], ENT_QUOTES ); ?></p><?php if ( $data[ "showColors" ] ) { ?><h2>Favorite Colors</h2><div><?php foreach ( $data[ "favoriteColors" ] as $item ) { ?><div><?php echo htmlspecialchars( $item[ "label" ], ENT_QUOTES ); ?></div><?php } ?></div><?php } ?><?php if ( $data[ "showArtists" ] ) { ?><h2>Favorite Artists</h2><div><?php foreach ( $data[ "favoriteArtists" ] as $item ) { ?><div><?php echo htmlspecialchars( $item[ "name" ], ENT_QUOTES ); ?> | <?php echo htmlspecialchars( $item[ "genre" ], ENT_QUOTES ); ?></div><?php } ?></div><?php } ?><h2>Character traits</h2><?php foreach ( $data[ "traits" ] as $item ) { ?><div>A trait: <?php echo htmlspecialchars( $item, ENT_QUOTES ); ?></div><?php } ?><h2>Character traits raw</h2><?php foreach ( $data[ "traits" ] as $item ) { ?><?php echo htmlspecialchars( $item, ENT_QUOTES ); ?><?php } ?><h2>Combining control + replace variables</h2><?php if ( $data[ "showTest" ] === "yes" ) { ?><?php echo htmlspecialchars( $data[ "name" ], ENT_QUOTES ); ?><?php } ?><h2>Combining control + list variables</h2><?php if ( $data[ "showTest" ] === "yes" ) { ?><?php foreach ( $data[ "traits" ] as $item ) { ?><?php echo htmlspecialchars( $item, ENT_QUOTES ); ?><?php } ?><?php } ?></section>

