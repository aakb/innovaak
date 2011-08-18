<?php
/*------------------ SLIDESHOW ------------------*/
function add_slideshow_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_slideshow_sc');
     add_filter('mce_buttons_3', 'register_slideshow_sc');
   }
}

add_action('init', 'add_slideshow_sc_button');



function register_slideshow_sc($buttons) {
   array_push($buttons, "pix_slideshow_sc");
   return $buttons;
}

function add_slideshow_sc($plugin_array) {
   $plugin_array['pix_slideshow_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}

/*------------------ GOOGLEMAP ------------------*/
function add_googlemap_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_googlemap_sc');
     add_filter('mce_buttons_3', 'register_googlemap_sc');
   }
}

add_action('init', 'add_googlemap_sc_button');



function register_googlemap_sc($buttons) {
   array_push($buttons, "pix_googlemap_sc");
   return $buttons;
}


function add_googlemap_sc($plugin_array) {
   $plugin_array['pix_googlemap_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}

/*------------------ CONTACT FORM ------------------*/
function add_contactform_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_contactform_sc');
     add_filter('mce_buttons_3', 'register_contactform_sc');
   }
}

add_action('init', 'add_contactform_sc_button');



function register_contactform_sc($buttons) {
   array_push($buttons, "pix_contactform_sc");
   return $buttons;
}


function add_contactform_sc($plugin_array) {
   $plugin_array['pix_contactform_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}

/*------------------ TOOLTIP ------------------*/
function add_tooltip_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_tooltip_sc');
     add_filter('mce_buttons_3', 'register_tooltip_sc');
   }
}

add_action('init', 'add_tooltip_sc_button');



function register_tooltip_sc($buttons) {
   array_push($buttons, "pix_tooltip_sc");
   return $buttons;
}


function add_tooltip_sc($plugin_array) {
   $plugin_array['pix_tooltip_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}



/*------------------ VIDEO ------------------*/
function add_video_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_video_sc');
     add_filter('mce_buttons_3', 'register_video_sc');
   }
}

add_action('init', 'add_video_sc_button');



function register_video_sc($buttons) {
   array_push($buttons, "pix_video_sc");
   return $buttons;
}


function add_video_sc($plugin_array) {
   $plugin_array['pix_video_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ AUDIO ------------------*/
function add_audio_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_audio_sc');
     add_filter('mce_buttons_3', 'register_audio_sc');
   }
}

add_action('init', 'add_audio_sc_button');



function register_audio_sc($buttons) {
   array_push($buttons, "pix_audio_sc");
   return $buttons;
}


function add_audio_sc($plugin_array) {
   $plugin_array['pix_audio_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ ACCORDION ------------------*/
function add_accordion_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_accordion_sc');
     add_filter('mce_buttons_3', 'register_accordion_sc');
   }
}

add_action('init', 'add_accordion_sc_button');



function register_accordion_sc($buttons) {
   array_push($buttons, "pix_accordion_sc");
   return $buttons;
}


function add_accordion_sc($plugin_array) {
   $plugin_array['pix_accordion_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ TABS ------------------*/
function add_tab_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_tab_sc');
     add_filter('mce_buttons_3', 'register_tab_sc');
   }
}

add_action('init', 'add_tab_sc_button');



function register_tab_sc($buttons) {
   array_push($buttons, "pix_tab_sc");
   return $buttons;
}


function add_tab_sc($plugin_array) {
   $plugin_array['pix_tab_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ COLUMNS ------------------*/
function add_column_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_column_sc');
     add_filter('mce_buttons_3', 'register_column_sc');
   }
}

add_action('init', 'add_column_sc_button');



function register_column_sc($buttons) {
   array_push($buttons, "pix_column_sc");
   return $buttons;
}


function add_column_sc($plugin_array) {
   $plugin_array['pix_column_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ SITEMAP ------------------*/
function add_sitemap_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_sitemap_sc');
     add_filter('mce_buttons_3', 'register_sitemap_sc');
   }
}

add_action('init', 'add_sitemap_sc_button');



function register_sitemap_sc($buttons) {
   array_push($buttons, "pix_sitemap_sc");
   return $buttons;
}


function add_sitemap_sc($plugin_array) {
   $plugin_array['pix_sitemap_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ BOXES ------------------*/
function add_box_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_box_sc');
     add_filter('mce_buttons_3', 'register_box_sc');
   }
}

add_action('init', 'add_box_sc_button');



function register_box_sc($buttons) {
   array_push($buttons, "pix_box_sc");
   return $buttons;
}


function add_box_sc($plugin_array) {
   $plugin_array['pix_box_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ LISTS ------------------*/
function add_list_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_list_sc');
     add_filter('mce_buttons_3', 'register_list_sc');
   }
}

add_action('init', 'add_list_sc_button');



function register_list_sc($buttons) {
   array_push($buttons, "pix_list_sc");
   return $buttons;
}


function add_list_sc($plugin_array) {
   $plugin_array['pix_list_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ DROPCAP ------------------*/
function add_dropcap_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_dropcap_sc');
     add_filter('mce_buttons_3', 'register_dropcap_sc');
   }
}

add_action('init', 'add_dropcap_sc_button');



function register_dropcap_sc($buttons) {
   array_push($buttons, "pix_dropcap_sc");
   return $buttons;
}


function add_dropcap_sc($plugin_array) {
   $plugin_array['pix_dropcap_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ BUTTON ------------------*/
function add_button_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_button_sc');
     add_filter('mce_buttons_3', 'register_button_sc');
   }
}

add_action('init', 'add_button_sc_button');



function register_button_sc($buttons) {
   array_push($buttons, "pix_button_sc");
   return $buttons;
}


function add_button_sc($plugin_array) {
   $plugin_array['pix_button_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ PRICE TABLE ------------------*/
function add_pricetable_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_pricetable_sc');
     add_filter('mce_buttons_3', 'register_pricetable_sc');
   }
}

add_action('init', 'add_pricetable_sc_button');



function register_pricetable_sc($buttons) {
   array_push($buttons, "pix_pricetable_sc");
   return $buttons;
}


function add_pricetable_sc($plugin_array) {
   $plugin_array['pix_pricetable_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ SPAN ------------------*/
function add_span_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_span_sc');
     add_filter('mce_buttons_3', 'register_span_sc');
   }
}

add_action('init', 'add_span_sc_button');



function register_span_sc($buttons) {
   array_push($buttons, "pix_span_sc");
   return $buttons;
}


function add_span_sc($plugin_array) {
   $plugin_array['pix_span_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ HR ------------------*/
function add_hr_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_hr_sc');
     add_filter('mce_buttons_3', 'register_hr_sc');
   }
}

add_action('init', 'add_hr_sc_button');



function register_hr_sc($buttons) {
   array_push($buttons, "pix_hr_sc");
   return $buttons;
}


function add_hr_sc($plugin_array) {
   $plugin_array['pix_hr_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ TO TOP ------------------*/
function add_totop_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_totop_sc');
     add_filter('mce_buttons_3', 'register_totop_sc');
   }
}

add_action('init', 'add_totop_sc_button');



function register_totop_sc($buttons) {
   array_push($buttons, "pix_totop_sc");
   return $buttons;
}


function add_totop_sc($plugin_array) {
   $plugin_array['pix_totop_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ CLEAR ------------------*/
function add_clear_sc_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
   if ( get_user_option('rich_editing') == 'true') {
     add_filter('mce_external_plugins', 'add_clear_sc');
     add_filter('mce_buttons_3', 'register_clear_sc');
   }
}

add_action('init', 'add_clear_sc_button');



function register_clear_sc($buttons) {
   array_push($buttons, "pix_clear_sc");
   return $buttons;
}


function add_clear_sc($plugin_array) {
   $plugin_array['pix_clear_sc'] = get_bloginfo('template_url').'/functions/scripts/shortcode_buttons.js';
   return $plugin_array;
}


/*------------------ ### ------------------*/

function pix_refresh_mce($ver) {
  $ver += 3;
  return $ver;
}

add_filter( 'tiny_mce_version', 'pix_refresh_mce');


?>