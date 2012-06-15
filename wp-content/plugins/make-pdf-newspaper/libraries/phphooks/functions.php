<?php
//now, this is a workaround because plugins, when included, can't access $hook variable, so we
//as developers have to basically redefine functions which can be called from plugin files
function add_hook($tag, $function, $priority = 10) {
	global $hooks;
	$hooks->add_hook ( $tag, $function, $priority );
}

//same as above
function register_plugin($plugin_id, $data) {
	global $hooks;
	$hooks->register_plugin ( $plugin_id, $data );
}
?>