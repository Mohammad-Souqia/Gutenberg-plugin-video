<?php
function new_vizzi_cgb_editor_assets() { 
	// Scripts.
	wp_enqueue_script(
		'new_vizzi-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	register_block_type('vizzi/video-embed', array(
		'editor_script' => 'new_vizzi-cgb-block-js',
		'style'         => 'new_vizzi-cgb-style-css',
		'editor_style'  => 'new_vizzi-cgb-block-editor-css',
	));
	
	register_meta('post', 'title', array('show_in_rest' => true, 'single' => true, 'auth_callback' => '__return_true'));
	register_meta('post', 'width', array('show_in_rest' => true, 'single' => true, 'auth_callback' => '__return_true'));
	register_meta('post', 'height', array('show_in_rest' => true, 'single' => true, 'auth_callback' => '__return_true'));
	register_meta('post', 'url', array('show_in_rest' => true, 'single' => true, 'auth_callback' => '__return_true'));

	// Styles.
	wp_enqueue_style(
		'new_vizzi-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	);

	wp_enqueue_style(
		'new_vizzi-cgb-block-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array(  ) // Dependency to include the CSS after it.
	);
}

add_action( 'enqueue_block_editor_assets', 'new_vizzi_cgb_editor_assets' );

