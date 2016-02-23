<?php

// Before you code, please read: http://codex.wordpress.org/Template_Hierarchy
// Remember that any missing templates will redirect here, so use it wisely!

if ( ! class_exists( 'Timber' ) ) {
  echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
  return;
}

$context = Timber::get_context();

Timber::render( array( 'index.twig' ), $context );
