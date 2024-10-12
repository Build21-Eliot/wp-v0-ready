<?php
/**
 * Plugin Name: WP V0 Ready
 * Description: A WordPress block plugin starter template that is ready for v0.
 * Version: 1.0.0
 * Author: Build21
 * Text Domain: build21
 */
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Exit if composer autoload file does not exist.
file_exists( __DIR__ . '/vendor/autoload.php' ) || exit;

// Autoload Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

use Build21\WpV0Ready\Frontend;

// Register block type.
function wp_v0_ready_register_block() {
    register_block_type( __DIR__ . '/block.json' );
    new Frontend();
}
add_action( 'init', 'wp_v0_ready_register_block' );
