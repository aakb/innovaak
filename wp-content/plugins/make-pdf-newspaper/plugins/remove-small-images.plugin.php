<?php
/*
Plugin Name: Remove Small Images
Plugin URI: http://fivefilters.org/pdf-newspaper/
Description: Removes small images (img elements with width or height attribute set to 5 pixels or smaller). Note: Some images do not have width or height attributes so they will not be removed here - but they will be removed once the size has been deteremined.
Version: 0.5
Author: Keyvan Minoukadeh
Author URI: http://www.keyvan.net
License: AGPL v3
*/

//set plugin id as file name of plugin
$plugin_id = basename(__FILE__);

//plugin data
$data['name'] = "Remove Small Images";
$data['author'] = "Keyvan Minoukadeh";
$data['url'] = "http://www.keyvan.net";

register_plugin($plugin_id, $data);

// $img is an associative array representing the image element.
// $img['src'] will give the src value, $img['width'] the width, etc..
// return null to remove the image, or the amended $img element
function remove_small_images($img) {
	if (!is_array($img)) {
		return null;
	} elseif (isset($img['width']) && (int)$img['width'] <= 5) {
		return null;
	} elseif (isset($img['height']) && (int)$img['height'] <= 5) {
		return null;
	} else {
		return $img;
	}
}

// add hook
add_hook('filter_image_elements','remove_small_images');
?>