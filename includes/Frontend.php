<?php

namespace Build21\WpV0Ready;

class Frontend {
    public function __construct() {
        add_action('wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    }
    
    public function enqueue_scripts() {
        wp_enqueue_script('block-frontend', plugins_url('build/block-frontend.js', dirname(__FILE__)), array('wp-element'), '1.0.0', true);
    }
}