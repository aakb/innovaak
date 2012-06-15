<?php
// RSS to PDF
// Author: Keyvan Minoukadeh
// License: AGPLv3
// Version: 2.2
// Date: 2010-07-07
// How to use: request this file passing it your feed in the querystring: makepdf.php?feed=http://mysite.org
// To include images in the PDF, add images=true to the querystring: makepdf.php?feed=http://mysite.org&images=true
// For other options, edit config.php
/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);
@set_time_limit(360);



function getImageData($url){
	$ch=curl_init();
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_HEADER,False);
	curl_setopt($ch,CURLOPT_USERAGENT,$_SERVER['HTTP_USER_AGENT']);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,True);
	curl_setopt($ch,CURLOPT_FOLLOWLOCATION,True);
	curl_setopt($ch,CURLOPT_MAXREDIRS,50);
	
	$data=curl_exec($ch);
	if(curl_getinfo($ch,CURLINFO_HTTP_CODE)>=400)return '';
	curl_close($ch);
	if($data===false)return '';
	return $data;
}

function makeThumb($pdfURL, $thumbName){
		$o = get_option('make-pdf-newspaper-options');
		$hash = md5(gmdate("Ymd").$pdfURL.$o['mpn_thumb_key']);
		$url = "http://webthumb.bluga.net/easythumb.php?user=".$o['mpn_thumb_id']."&url=".$pdfURL."&hash=".$hash."&size=medium&cache=1";
		$data = getImageData($url);
		if($data==''){trigger_error('Remote source didn\'t return any data.',E_USER_ERROR);die;}
		file_put_contents(WP_CONTENT_DIR.$thumbName,$data);
}
// add wordpress functions
if (isset($_GET['action'])){
	require_once("../../../wp-load.php");
}
$o = get_option('make-pdf-newspaper-options');

//Collect 
if ($_GET['action'] == "Go" && $_GET['mpn_key'] == $o['mpn_key']){
	$rebuild = true; 
}

// Check item ordering
$order = $o['mpn_order'];

$get_images = false;
// Check if images should be downloaded
if ($o['mpn_images'] == 1) $get_images = true;

$show_date = true;

// Max string length (total feed)
if ($get_images) {
	$max_strlen = 300000;
} else {
	$max_strlen = 100000;
}

// Check for feed URL
if (isset($_GET['cat'])){
	if (intval($_GET['cat'])>0){
		$catFeed = get_category_link( $_GET['cat'] );
		$catFeed = str_replace(get_bloginfo( 'wpurl' ),"",$catFeed);
	} else {
		$catFeed = $_GET['cat'];
	}
	
	$url = $catFeed;
}
if ($url !="") $catExt = $url;
$catExt = str_replace("/","-",$catExt);
$catExt = rtrim($catExt,"-");
$catExt = str_replace("?","-",$catExt);
$catExt = str_replace("=","-",$catExt);
$ext = '/pdf/'.$o['mpn_filename'].$catExt.'.pdf';
$thumbName= '/pdf/'.$o['mpn_filename'].$catExt.'.jpg';
$output_file = WP_CONTENT_DIR.$ext;
$pdfURL = WP_CONTENT_URL.$ext;

if (file_exists($output_file)) {
		if ($o['mpn_thumb_id']!=""){
			if (!file_exists(WP_CONTENT_DIR.$thumbName) || (filesize(WP_CONTENT_DIR.$thumbName))<60){
			//$thumbsize = filesize(WP_CONTENT_DIR.$thumbName);
			//if ($thumbsize<60){
				makeThumb($pdfURL,$thumbName);
			} 
			if ((filesize(WP_CONTENT_DIR.$thumbName))>60){
				$previewHTML = "<div style=\"font-size:80%; font-style:italic;\" align=\"center\"><a href=\"".$pdfURL."\" target=\"_blank\" ><img src=\"".WP_CONTENT_URL.$thumbName."\" width=\"160\" height=\"226\"/></a><br/>Preview powered by:<br/><a href=\"http://webthumb.bluga.net/\" target=\"_blank\">Bluga.net Webthumb</a></div>";
			}
		}
		$linkString = "<a href=\"".$pdfURL."\" target=\"_blank\" >%LINKTEXT%</a>".$previewHTML;
} 
if ($rebuild) {
 if($o['mpn_engine_url']!=""){
 	if ($get_images) $imageStr = "true";
 	$extURL = $o['mpn_engine_url']."?feed=".get_bloginfo( 'wpurl' ).$catFeed.urlencode("?feed=make-pdf-newspaper")."&title=".urlencode($o['mpn_title'])."&sub=".urlencode($o['mpn_subtitle'])."&order=".$order."&images=".$imageStr.$o['mpn_engine_para'];
	$data = getImageData($extURL);
	if($data==''){trigger_error('Remote source didn\'t return any data.',E_USER_ERROR);die;}
	file_put_contents($output_file,$data);
 } else { 

	if(! class_exists('SimplePie'))
		require_once('libraries/simplepie/simplepie.class.php');
	require_once('SimplePie_Chronological.php');
	// Include HTML Purifier to clean up and filter HTML input
	if(! class_exists('HTMLPurifier'))
		require_once('libraries/htmlpurifier/library/HTMLPurifier.auto.php');
	// Include SmartyPants to make pretty, curly quotes
	if(! class_exists('phpTypography'))
		require_once('libraries/php-typography/php-typography.php');
	// Include TCPDF to turn all this into a PDF
	require_once('tcpdf_config.php');
	require_once('libraries/tcpdf/config/lang/eng.php');
	require_once('libraries/tcpdf/tcpdf.php');
	// Include NewspaperPDF to let us add stories to our PDF easily
	require_once('NewspaperPDF.php');
	// Include PHP Hooks to allow plugins to extend functionality (see plugin/ folder)
	if(! class_exists('phphooks')){
		require_once('libraries/phphooks/phphooks.class.php');
		require_once('libraries/phphooks/functions.php');
	}

	/////////////////////////////////////
	// Initialise hooks and load plugins
	/////////////////////////////////////
	$hooks = new phphooks();
	$hooks->active_plugins = null;
	$hooks->set_hooks(array('filter_purified_html_string', 'filter_purified_html_dom', 'filter_image_elements'));
	$hooks->load_plugins('plugins/');
	
	
	class HTMLPurifier_AttrTransform_FilterImageElements extends HTMLPurifier_AttrTransform
	{
		public function transform($attr, $config, $context) {
			global $hooks;
			if ($hooks->hook_exist('filter_image_elements')) {
				$result = $hooks->filter_hook('filter_image_elements', $attr);
				if ($result == null) {
					// confiscating the attribute forces HTML Purifier to remove the entire element
					// (the src attribute is required)
					$this->confiscateAttr($attr, 'src');
				} else {
					$attr = $result;
				}
			}
			$this->confiscateAttr($attr, 'width');
			$this->confiscateAttr($attr, 'height');
			return $attr;
		}
	}
	

	////////////////////////////////
	// Get RSS/Atom feed
	////////////////////////////////
	if ($order == 'asc') {
		$feed = new SimplePie_Chronological();
	} else {
		$feed = new SimplePie();
	}
	$feed->set_feed_url(get_bloginfo( 'wpurl' ).$url.(strstr($url,'?')?'&':'?').'feed=make-pdf-newspaper');
	$feed->set_timeout(360);
	$feed->enable_cache(false);
	$feed->set_stupidly_fast(false);
	$feed->enable_order_by_date(true);
	$feed->set_url_replacements(array());
	$result = $feed->init();
	//$feed->handle_content_type();
	//$feed->get_title();
	if ($result && (!is_array($feed->data) || count($feed->data) == 0)) {
		die('Sorry, no feed items found');
	}
	
	// Create new PDF document (LETTER/A4)
	$pdf = new NewspaperPDF('P', 'mm', 'A4', true, 'UTF-8', false);
	$pdf->setHooks($hooks);
	$pdf->SetCreator('http://fivefilters.org/pdf-newspaper/ (free software using TCPDF)');
	$pdf->SetAuthor(get_bloginfo('name'));
	$pdf->SetTitle($o['mpn_title']);
	$pdf->SetSubject($o['mpn_subtitle']);
	
	// set default header data
	if ($o['mpn_image'] != '') {
		$pdf->SetHeaderData($o['mpn_image'], $o['mpn_image_width'], $o['mpn_title'], '<span style="color: #666">'.date_i18n(get_option('date_format')).' | </span>'.$o['mpn_subtitle']);
	} else {
		$pdf->SetHeaderData('', 0, $o['mpn_title'], '<span style="color: #666">'.date_i18n(get_option('date_format')).' | </span>'.$o['mpn_subtitle']);
	}
	
	// set header and footer fonts
	$pdf->setHeaderFont(Array('linlibertinecaps', '', 44.5));
	//$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
	$pdf->setFooterFont(Array('helveticab', 'B', 9));
	//$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
	
	//set margins
	$pdf->SetMargins(14, 16, 14, true);
	//$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
	$pdf->SetHeaderMargin(10);
	//$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
	$pdf->SetFooterMargin(14);
	//$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
	
	$pdf->setCellHeightRatio(1.5);
	
	$pdf->SetFont('dejavuserifcondensed');
	
	$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);  // 4

	$pdf->SetDisplayMode('default', 'continuous');
	
	// set default monospaced font
	$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
	
	//set some language-dependent strings
	$pdf->setLanguageArray($l); 
	
	// Black links with no underlining
	$pdf->setHtmlLinksStyle(array(0, 0, 0), '');
	
	// Define vertical spacing for various HTML elements
	$tagvs = array(
				'blockquote' => array(0 => array('h' => '', 'n' => 0), 1 => array('h' => '', 'n' => 0)),
				'img' => array(0 => array('h' => '', 'n' => 0), 1 => array('h' => '', 'n' => 0)),
				'p' => array(0 => array('h' => '', 'n' => 3.3), 1 => array('h' => '', 'n' => 3.3)),
				'h1' => array(0 => array('h' => '', 'n' => 1), 1 => array('h' => '', 'n' => 1.5)),
				'h2' => array(0 => array('h' => '', 'n' => 2), 1 => array('h' => '', 'n' => 1)),
				'h3' => array(0 => array('h' => '', 'n' => 1), 1 => array('h' => '', 'n' => 1)),
				'h4' => array(0 => array('h' => '', 'n' => 1), 1 => array('h' => '', 'n' => 1)),
				'h5' => array(0 => array('h' => '', 'n' => 1), 1 => array('h' => '', 'n' => 1)),
				'h6' => array(0 => array('h' => '', 'n' => 1), 1 => array('h' => '', 'n' => 1)),	
				'ul' => array(0 => array('h' => '', 'n' => 0), 1 => array('h' => '', 'n' => 1.5)),
				'ol' => array(0 => array('h' => '', 'n' => 0), 1 => array('h' => '', 'n' => 1.5)),			
				'li' => array(0 => array('h' => '', 'n' => 5.5))
				);
	$pdf->setHtmlVSpace($tagvs);

	// Set up HTML Purifier, HTML Tidy
	$purifier = new HTMLPurifier();
	
	// Loop through feed items
	$items = $feed->get_items();
	$strlen = 0;
	$typo = new phpTypography();
	$typo->set_url_wrap(true);
	$typo->set_dewidow(true);
	$typo->set_style_caps(false);
	$typo->set_style_numbers(false);
	$typo->set_style_initial_quotes(false);
	$typo->set_style_ampersands(false);
	$typo->set_dash_spacing(false);
	$typo->set_smart_ellipses(true);
	$typo->set_hyphenation(false);
	$typo->set_smart_dashes(true);
	$typo->set_smart_fractions(false);
	foreach ($items as $item) {
		// skip items which fall outside date range
		if (isset($date_start) && (int)$item->get_date('U') < $date_start) continue;
		if (isset($date_end) && (int)$item->get_date('U') > $date_end) continue;
	
		$config = HTMLPurifier_Config::createDefault();
		if ($get_images) {
			$config->set('HTML.Allowed', 'div,p,b,strong,em,a[href],i,ul,li,ol,blockquote,br,h1,h2,h3,h4,h5,h6,code,pre,sub,sup,del,img[src|width|height]');
		} else {
			$config->set('HTML.Allowed', 'div,p,b,strong,em,a[href],i,ul,li,ol,blockquote,br,h1,h2,h3,h4,h5,h6,code,pre,sub,sup,del');
		}
		// Attempt to autoparagraph when 2 linebreaks are detected -- we use feature after we run HTML through Tidy and replace double <br>s with linebreaks (\n\n)
		$config->set('AutoFormat.AutoParagraph', true);
		// Remove empty elements - TCPDF still applies padding/vertical spacing rules to empty elements
		$config->set('AutoFormat.RemoveEmpty', true);
		// HTML Purifier caching
		// to disable caching, uncomment line below
		//$config->set('Cache.DefinitionImpl', null);
		// cache path
		$config->set('Cache.SerializerPath', dirname(__FILE__).'/cache');
		//$config->set('Output.TidyFormat', false);
		//$config->set('HTML.TidyLevel', 'heavy');
		$config->set('URI.Base', $item->get_permalink());
		$config->set('URI.MakeAbsolute', true);
		$config->set('HTML.DefinitionID', 'extra-transforms');
		$config->set('HTML.DefinitionRev', 1);
		$def = $config->getHTMLDefinition(true);
		// Change <div> elements to <p> elements - We don't want <div><p>Bla bla bla</p></div> (makes it easier for TCPDF)
		$def->info_tag_transform['div'] = new HTMLPurifier_TagTransform_Simple('p');
		// <h1> elements are treated as story headlines so we downgrade any that appear to <h2>
		// <h2> to <h6> elements are treated the same (made bold but kept the same size)
		$def->info_tag_transform['h1'] = new HTMLPurifier_TagTransform_Simple('h2');
		$def->info_tag_transform['h3'] = new HTMLPurifier_TagTransform_Simple('h2');
		$def->info_tag_transform['h4'] = new HTMLPurifier_TagTransform_Simple('h2');
		$def->info_tag_transform['h5'] = new HTMLPurifier_TagTransform_Simple('h2');
		$def->info_tag_transform['h6'] = new HTMLPurifier_TagTransform_Simple('h2');
		//$def->info_tag_transform['i'] = new HTMLPurifier_TagTransform_Simple('em');
		
		if ($get_images) {
			// Here we tell HTML Purifier to filter out image elements with
			// small image dimensions (width or height smaller than 5 pixels).
			// By removing them at this stage we avoid an extra HTTP call during
			// PDF creation to pull the image in. 
			// But if no size is specified in HTML, then the same rule is
			// applied after we've fetched the image via HTTP and determined its size.
			$_img = $def->addBlankElement('img');
			$_img->attr_transform_pre[] = new HTMLPurifier_AttrTransform_FilterImageElements();
			// make src a required attribute (ensures img elements are removed completely
			// if no src attribute is present).
			$def->addAttribute('img', 'src*', new HTMLPurifier_AttrDef_URI());
		}
		
		$story = '';
		$content = $item->get_content();
		// replace double <br>s to linebreaks
		$content = preg_replace('!<br[^>]+>\s*<br[^>]+>!m', "\n\n", $content);
		// end here if character count is about to exceed our maximum
		$strlen += strlen($content);
		if ($strlen > $max_strlen) {
			break;
		}
		// run content through HTML Purifier
		$content = $purifier->purify($content, $config);
		// run through Tidy one last time (TODO: check if this step can be avoided)
		
		// a little additional cleanup...
		$content = str_replace('<p><br /></p>', '<br />', $content);
		$content = preg_replace('!<br />\s*<(/?(h2|p|li|ul|ol))>!', '<$1>', $content);
		$content = preg_replace('!\s*<br />\s*!', '<br />', $content);
		$content = preg_replace('!</(p|blockquote)>\s*<br />\s*!', '</$1>', $content);
		$content = str_replace('<p><br />', '<p>', $content);
		$content = str_replace('<p>&nbsp;</p>', '', $content);
		$content = preg_replace('!</a>([:.,])<!', '$1</a><', $content);
		$content = preg_replace('!<a[^>]*>(<br />)+</a>!', '', $content);
		$content = preg_replace('!<(strong|a[^>]*)><br />!', '<$1>', $content);
		$content = preg_replace('!<p>\s*</p>!', '', $content);
		
		if ($get_images) {
			$content = preg_replace('!<strong>(<img[^>]+>)</strong>!', '$1', $content);
			$content = preg_replace('!(<img[^>]+>)<br />!', '$1', $content);
		}
		$content = preg_replace('!^(<br />)+!', '', $content);

		//run content through PHP Typography to make things pretty
		$content = $typo->process($content);
		
		$title = trim($item->get_title());
		//$title = SmartyPants($title);
		$title = $typo->process($title);
		//echo $title." ... ";
		$story .= $content;

		$date = ($show_date) ? (int)$item->get_date('U') : 0;
		$pdf->addItem('<a href="'.$item->get_permalink().'">'.$title.'</a>', $story, $date);
	}
	// make PDF
	$pdf->makePdf();
	// output PDF
	$pdf->Output($output_file, 'F');
 }
 if ($o['mpn_thumb_id']!=""){
		makeThumb($pdfURL,$thumbName);
		if (filesize(WP_CONTENT_DIR.$thumbName)>60)
		$previewHTML = "<div style=\"font-size:80%; font-style:italic;\" align=\"center\"><a href=\"".$pdfURL."\" target=\"_blank\" ><img src=\"".WP_CONTENT_URL.$thumbName."\" width=\"160\" height=\"226\"/></a><br/>Preview powered by:<br/><a href=\"http://webthumb.bluga.net/\" target=\"_blank\">Bluga.net Webthumb</a></div>";
 }
// $linkString = "<a href=\"".$pdfURL."\" target=\"_blank\" >%LINKTEXT%</a>".$previewHTML;
}
if ($_GET['action']=="test" || $rebuild){
	header('Location: '.$pdfURL);
} 
?>