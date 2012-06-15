<?php
/*
Plugin Name: Make PDF Newspaper
Plugin URI: http://www.rsc-ne-scotland.org.uk/mashe/wordpress-plugins/make-tabbloid-plugin/
Description: This plugin uses the FiveFilters.org RSS to PDF Newspaper engine to create printer friendly 'tabloid' edition of your latest posts. You can add a link to your &quot;Tabloid&quot edition as a widget.  
Author: Martin Hawksey
Author URI: http://www.rsc-ne-scotland.org.uk/mashe
Version: 2.2.4
*/


/*  Copyright 2010  Martin Hawksey  (email : martin.hawksey@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

define(MAKE_PDF_NEWSPAPER_WIDGET_ID, "widget_make_pdf_newspaper");
if (!class_exists('MakePDFNewspaper')) {
      class MakePDFNewspaper
      {
          var $plugin_url;
          var $plugin_path;
          var $status = "";
          var $o;
          var $default_options = array(
		  	'mpn_revision' => 2,
			'mpn_title' => 'Your Personal Newspaper',
			'mpn_filename' => 'newspaper',
			'mpn_subtitle' => '',
			'mpn_image' => '',
			'mpn_image_width' => '90',
			'mpn_images' => '1',
			'mpn_urlfootnote' => 0,
			'mpn_urlshorten' => 0,
			'mpn_short_type' => 'tinyurl',
			'mpn_bitly_name' => 'makepdfnewspaper',
			'mpn_bitly_key' => 'R_1ad92b22e04fce0093cc47a5448d8e0f',
			'mpn_qrcodeshow' => 0,
			'mpn_qrcodeshow' => 0,
			'mpn_thumb_id' => '',
			'mpn_thumb_key' => '',
			'mpn_order' => '',
			'mpn_digest' => 0,
			'mpn_digest_category' => '',
			'mpn_engine_url' => '',
			'mpn_engine_para' => '',
			'mpn_qr_text' => 'You can read this post online by scanning this barcode (or visiting %POSTURL%)',
			'mpn_key' => '',
		  );
          function MakePDFNewspaper()
          {
              $this->plugin_path_url();
              $this->install_plugin();
              $this->actions_filters();
          }
          function plugin_path_url()
          {
              $this->plugin_url = WP_PLUGIN_URL . '/make-pdf-newspaper/';
              $this->plugin_path = dirname(__FILE__) . '/';
              define('MAKEPDF_URL', $this->plugin_url);
              define('MAKEPDF_PATH', $this->plugin_path);
          }
          function install_plugin()
          {
              $this->o = get_option('make-pdf-newspaper-options');
              if (!is_array($this->o)) {
                  update_option('make-pdf-newspaper-options', $this->default_options);
                  $this->o = get_option('make-pdf-newspaper-options');
              } else {
                  foreach ($this->default_options as $key => $value)
                      if (!isset($this->o[$key]))
                          $this->o[$key] = $value;
                  $this->o["mpn_revision"] = $this->default_options["mpn_revision"];
                  update_option('make-pdf-newspaper-options', $this->o);
              }
          }
          function actions_filters()
          {
            add_action('init', array(&$this, 'init'));
            add_action('admin_menu', array(&$this, 'admin_menu'));
			add_action("plugins_loaded", "widget_make_pdf_newspaper_init");
			add_action('template_redirect', 'mpn_prevent_feedburner', -10);
			add_action('init','add_my_feed');
          }
		
		  function admin_menu()
          {
              add_submenu_page('options-general.php', 'Make PDF Newspaper', 'Make PDF Newspaper', 9, __FILE__, array($this, 'options_panel'));
          }
          function options_panel()
          {
              $options = $this->o;
              $status = $this->status;
              include($this->plugin_path . 'make-pdf-newspaper-panel.php');
          }
          function init()
          {
              if ($_POST['mpn_action'] == 'save') {
                  check_admin_referer('mpn-1', 'mpn-main');
				  $this->o['mpn_title'] = $_POST['mpn_title'];
				  $this->o['mpn_filename'] = $_POST['mpn_filename'];
				  $this->o['mpn_subtitle'] = $_POST['mpn_subtitle'];
				  $this->o['mpn_image'] = $_POST['mpn_image'];
				  $this->o['mpn_image_width'] = $_POST['mpn_image_width'];
				  $this->o['mpn_images'] = isset($_POST['mpn_images']) ? 1 : 0;
				  $this->o['mpn_urlfootnote'] = isset($_POST['mpn_urlfootnote']) ? 1 : 0;
				  $this->o['mpn_urlshorten'] = isset($_POST['mpn_urlshorten']) ? 1 : 0;
				  $this->o['mpn_short_type'] = $_POST['mpn_short_type'];
				  $this->o['mpn_bitly_name'] = $_POST['mpn_bitly_name'];
				  $this->o['mpn_bitly_key'] = $_POST['mpn_bitly_key'];
				  $this->o['mpn_qrcodeshow'] = isset($_POST['mpn_qrcodeshow']) ? 1 : 0;
				  $this->o['mpn_order'] = $_POST['mpn_order'];
				  $this->o['mpn_thumb_id'] = $_POST['mpn_thumb_id'];
				  $this->o['mpn_thumb_key'] = $_POST['mpn_thumb_key'];
				  $this->o['mpn_digest'] = isset($_POST['mpn_digest']) ? 1 : 0;
				  $this->o['mpn_digest_category'] = $_POST['mpn_digest_category'];
				  $this->o['mpn_engine_url'] = $_POST['mpn_engine_url'];
				  $this->o['mpn_engine_para'] = $_POST['mpn_engine_para'];
				  $this->o['mpn_key'] = $_POST['mpn_key'];
				  if (isset($_POST['reset'])){
				    $this->o = $this->default_options;
					$this->status .= "Reset<br/><br/>";
				  }
				  update_option('make-pdf-newspaper-options', $this->o);
				  $this->status .= "Settings saved"; 
              }
		  } 
		  
   }//End Class MakePDFNewspaper
   
   function mpn_prevent_feedburner(){
   		if ( 'make-pdf-newspaper' == get_query_var('feed') )
			remove_action('template_redirect', 'ol_feed_redirect');
	}
	function load_my_feed() {
		load_template( ABSPATH . PLUGINDIR . '/make-pdf-newspaper/rss-make-pdf-newspaper.php' );
	}
	function add_my_feed() {
		add_feed('make-pdf-newspaper','load_my_feed');
	}
	$fivefilters = new MakePDFNewspaper();
}//End If !class_not_exist
function widget_make_pdf_newspaper($args) {
  extract($args, EXTR_SKIP);
  $options = get_option(MAKE_PDF_NEWSPAPER_WIDGET_ID);
  echo $before_widget; 
  echo $before_title . $options['mpnw_title'] . $after_title; 
  echo $options['mpnw_text'];
  global $linkString;
  include('makepdf.php');
  $linkString = str_replace("%LINKTEXT%", $options['mpnw_link_name'], $linkString);
  echo $linkString; 
  //do_makeTabbloid($options['mpnw_link_name'],$options['mpnw_file_name'],$options['mpnw_show_preview'],$options['mpnw_banner_name']);
  echo $after_widget;
}
function widget_make_pdf_newspaper_init() {
  wp_register_sidebar_widget(MAKE_PDF_NEWSPAPER_WIDGET_ID, 
  	__('Make PDF Newspaper'), 'widget_make_pdf_newspaper');
  wp_register_widget_control(MAKE_PDF_NEWSPAPER_WIDGET_ID,   
    __('Make PDF Newspaper'), 'widget_make_pdf_newspaper_control'); 
}

function widget_make_pdf_newspaper_control() {
  $options = get_option(MAKE_PDF_NEWSPAPER_WIDGET_ID);
  if (!is_array($options)) {
    $options = array();
  }

  $widget_data = $_POST[MAKE_PDF_NEWSPAPER_WIDGET_ID];
  if ($widget_data['submit']) {
    $options['mpnw_title'] = stripslashes($widget_data['mpnw_title']);
    $options['mpnw_text'] = stripslashes($widget_data['mpnw_text']);
    $options['mpnw_link_name'] = stripslashes($widget_data['mpnw_link_name']);

    update_option(MAKE_PDF_NEWSPAPER_WIDGET_ID, $options);
  }

  // Render form
  $mpnw_title = $options['mpnw_title'];
  $mpnw_text = $options['mpnw_text'];
  $mpnw_link_name = $options['mpnw_link_name'];
  ?>
<p>
  <label for="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID;?>-mpnw-title"> Title: </label>
  <input class="widefat" 
    type="text"
    name="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>[mpnw_title]" 
    id="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>-mpnw-title" 
    value="<?php echo $mpnw_title; ?>"/>
</p>
<p>
  <label for="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID;?>-mpnw-text"> Preamble text (optional): </label>
  <textarea class="widefat" rows="6"
    name="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>[mpnw_text]" 
    id="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>-mpnw-text"><?php echo $mpnw_text; ?></textarea>
</p>
<p>
  <label for="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID;?>-mpnw-link-name"> Link text: </label>
  <input class="widefat" 
    type="text"
    name="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>[mpnw_link_name]" 
    id="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>-mpnw-link-name" 
    value="<?php echo $mpnw_link_name; ?>"/>
</p>
<input type="hidden" 
  name="<?php echo MAKE_PDF_NEWSPAPER_WIDGET_ID; ?>[submit]" 
  value="1"/>
<?php
}


?>