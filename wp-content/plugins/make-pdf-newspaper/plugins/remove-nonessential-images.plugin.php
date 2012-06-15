<?php
/*
Plugin Name: Remove Nonessential Images
Plugin URI: http://fivefilters.org/pdf-newspaper/
Description: Removes images unrelated to the content - determined by a set of URL patterns identifying feed/blogging/ad services.
Version: 0.5
Author: Keyvan Minoukadeh
Author URI: http://www.keyvan.net
License: AGPL v3
*/

//set plugin id as file name of plugin
$plugin_id = basename(__FILE__);

//plugin data
$data['name'] = "Remove Nonessential Images";
$data['author'] = "Keyvan Minoukadeh";
$data['url'] = "http://www.keyvan.net";

register_plugin($plugin_id, $data);

// $img is an associative array representing the image element.
// $img['src'] will give the src value, $img['width'] the width, etc..
// return null to remove the image, or the amended $img element
function remove_nonessential_images($img) {
	$list = array('doubleclick.net', 'feedburner.com', 'tweetmeme.com', 'feeds.wordpress.com', 'stats.wordpress.com');
	foreach ($list as $test) {
		if (strpos($img['src'], $test) !== false) {
			return null;
		}
	}
	return $img;
}

// add hook
add_hook('filter_image_elements','remove_nonessential_images');
?>