<?php //session_start(); ?>
<?php 
$cryptinstall=TEMPLATEPATH."/scripts/crypt/cryptographp.fct.php";
include $cryptinstall; 
$_SESSION['cryptdir'] = get_bloginfo('stylesheet_directory').'/scripts/crypt'; 
?>
<!DOCTYPE HTML>
<!-- Delight is a Pixedelic work, by Consorzio Creativo on Wordpress platform | Manuel Masia (designer and developer) -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>" >
    <title><?php

	global $page, $paged;

	global $custom_seo; 
	$meta_seo = get_post_meta(get_the_ID(), $custom_seo->get_the_id(), TRUE);

if((is_single()||is_page()) && $meta_seo &&  array_key_exists('title',$meta_seo)){
	echo $meta_seo['title'];
} elseif(is_home()&&get_pix_option('pix_front_page_seo_title')!='') {
	echo get_pix_option('pix_front_page_seo_title');
} else {
		wp_title( '|', true, 'right' );
	
		bloginfo( 'name' );
	
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) )
			echo " | $site_description";
	
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf( __( '%s' ), max( $paged, $page ) );
	}?></title>
<?php if((is_single()||is_page()) && $meta_seo && array_key_exists('description',$meta_seo)){ ?>
		<meta name="description" content="<?php echo $meta_seo['description']; ?>"> 
	<?php } elseif (get_pix_option('pix_front_page_seo_title')!=''&&is_home()) { ?>
		<meta name="description" content="<?php echo get_pix_option('pix_front_page_seo_description'); ?>"> 
	<?php }
	 if((is_single()||is_page()) && $meta_seo && array_key_exists('keywords',$meta_seo)){ ?>
		<meta name="keywords" content="<?php echo $meta_seo['keywords']; ?>">
	<?php } elseif (get_pix_option('pix_front_page_seo_title')!=''&&is_home()) { ?>
		<meta name="keywords" content="<?php echo get_pix_option('pix_front_page_seo_keywords'); ?>"> 
<?php } ?>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" >
 
     
        
<meta name="viewport" content="width=1200" >    
    <!--///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //		Scripts
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////-->
    <?php 
		if(get_pix_option('pix_google_prevent') != '0') { wp_enqueue_script("google-font", "https://www.google.com/jsapi"); ?> <script type='text/javascript' src='http://maps.google.com/maps/api/js?sensor=true'></script>
        <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script> <?php }
		wp_enqueue_script("jquery");
		wp_enqueue_script("jquery-ui-core");
		wp_enqueue_script("ui-widget", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.ui.widget.js", array('jquery-ui-core'));
		wp_enqueue_script("ui-accordion", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.ui.accordion.js", array('ui-widget'));
		wp_enqueue_script("ui-tabs", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.ui.tabs.js", array('ui-widget'));
		wp_enqueue_script("ui-datepicker", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.ui.datepicker.js", array('ui-widget'));
		wp_enqueue_script("modernizr", get_bloginfo( 'stylesheet_directory' )."/scripts/modernizr-1.7.min.js");
		wp_enqueue_script("colorBox", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.colorbox-min.js", array('jquery'));
		wp_enqueue_script("cycle", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.cycle.all.min.js", array('jquery'));
		wp_enqueue_script("isotope", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.isotope.min.js", array('jquery'));
		wp_enqueue_script("infinitescroll", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.infinitescroll.min.js", array('jquery'));
		wp_enqueue_script("qtip", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.qtip.min.js", array('jquery'));
		wp_enqueue_script("jquery-hoverIntent", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.hoverIntent.minified.js", array('jquery'));
		wp_enqueue_script("jquery-easing", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.easing.1.3.js", array('jquery'));
		wp_enqueue_script("jquery-thumbnailScroller", get_bloginfo( 'stylesheet_directory' )."/scripts/jquery.thumbnailScroller.js", array('jquery'));
		wp_enqueue_script("swfobject");
		wp_enqueue_script("flowplayer", get_bloginfo( 'stylesheet_directory' )."/scripts/flowplayer-3.2.6.min.js", array('jquery'));
		wp_enqueue_script("projekktor", get_bloginfo( 'stylesheet_directory' )."/scripts/projekktor.min.js", array('jquery'));
		wp_enqueue_script("custom", get_bloginfo( 'stylesheet_directory' )."/scripts/custom.php", array('jquery'));
		wp_enqueue_script("cufon", get_bloginfo( 'stylesheet_directory' )."/scripts/cufon-yui.js", array('jquery'));
		wp_enqueue_script("icons", get_bloginfo( 'stylesheet_directory' )."/fonts/icons.js", array('cufon'));
	?>
    
    
    
    <!--///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //		Styles
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////-->
    <link rel="stylesheet" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" > <!-- default stylesheet -->
    <link rel="stylesheet" media="all" href="<?php bloginfo( 'stylesheet_directory' ); ?>/style.php" > <!-- general stylesheet -->

    <!--[if lt IE 9]>
    <script src="<?php echo get_bloginfo('stylesheet_directory'); ?>/scripts/html5.js"></script>
    <![endif]-->
	<?php
        if ( is_singular() && get_pix_option( 'thread_comments' ) )
            wp_enqueue_script( 'comment-reply' );
    
        
        wp_head();
    ?>
<script type="text/javascript">
/******************************************************
*
*	Cufon init 
*
******************************************************/
	Cufon.replace('.icons, .icon a , .submenu, label.error, #pix_controls span, #scrollCommands', {
		fontFamily: 'icons'
	});
	
</script>
</head>
<body <?php body_class(); ?>>
<div id="topto"></div>
<div id="wide_flash" data-position="fixed" data-top="0" data-bottom="not"></div>
<?php
function default_bg(){
	if(get_pix_option('pix_general_background')=='slideshow'){ ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<?php 
			$slide_general = get_pix_option('pix_array_slide_general_');
			foreach ($slide_general as $slide) {
				echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
			}
			 
			?>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

	<?php } elseif (get_pix_option('pix_general_background')=='single_wide') { ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<a href="<?php echo get_pix_option('pix_wide_image_general'); ?>"></a>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

	<?php } elseif (get_pix_option('pix_general_background')=='video') { 
	
		echo getTheWideVideo(get_pix_option('pix_wide_video_general'),get_pix_option('pix_wide_video_general_start'),get_pix_option('pix_wide_video_general_loop') );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_wide_video_general')).'</div></div>';
		
	} elseif (get_pix_option('pix_general_background')=='googlemap') { ?>
<div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
<div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_wide_googlemap_general')); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_wide_googlemap_general_zoom'); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_wide_googlemap_general_indications')); ?>" data-type="<?php echo get_pix_option('pix_wide_googlemap_general_type'); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
</div>
</div>
    <?php }
}
global $custom_options; $meta_image = get_post_meta(get_the_ID(), $custom_options->get_the_id(), TRUE);

if (is_home() && get_pix_option('pix_home_background') == 'slideshow') { ?>

<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php 
	if(get_pix_option('pix_array_slide_home_')!=''){
		$slide_home = get_pix_option('pix_array_slide_home_');
		foreach ($slide_home as $slide) {
			echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
		}
	}
	 
	?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>


<?php } elseif (is_home() && get_pix_option('pix_home_background') == 'single') { ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
    <a href="<?php echo get_pix_option('pix_wide_image_home'); ?>"></a>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>


<?php } elseif (is_home() && get_pix_option('pix_home_background') == 'video') {
		echo getTheWideVideo(get_pix_option('pix_wide_video_home'),get_pix_option('pix_wide_video_home_start'),get_pix_option('pix_wide_video_home_loop') );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_wide_video_home')).'</div></div>';



} elseif (is_home() && get_pix_option('pix_home_background') == 'googlemap') { ?>
<div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
<div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_wide_googlemap_home')); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_wide_googlemap_home_zoom'); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_wide_googlemap_indications_home')); ?>" data-type="<?php echo get_pix_option('pix_wide_googlemap_type_home'); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
</div>
</div>


<?php } elseif ((is_single() || is_page()) && $meta_image['background']== 'singleimage') { ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
    <a href="<?php echo $meta_image['single_image']; ?>"></a>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>


<?php } elseif ((is_single() || is_page()) && $meta_image['background']=='slideshow') { ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
<?php foreach ($meta_image['slideshow'] as $key=>$value) {
	echo '<a id="slide_'.$key.'" href="'.$meta_image['slideshow'][$key]['link'].'" data-thumb="'.get_pix_thumb($meta_image['slideshow'][$key]['link'], 'exTh').'" data-content="'. get_pix_content($meta_image['slideshow'][$key]['link']) .'"></a>';
} ?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>


<?php } elseif ((is_single() || is_page()) && $meta_image['background']=='googlemap') { ?>
<div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
<div id="map_canvas" data-coord1="<?php $coords = findCoords($meta_image['googlemap']); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo $meta_image['zoom']; ?>" data-indications="<?php echo htmlspecialchars($meta_image['indications']); ?>" data-type="<?php echo $meta_image['type']; ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
</div>
</div>
<?php } elseif ((is_single() || is_page()) && $meta_image['background']=='video') {

		echo getTheWideVideo($meta_image['video'],$meta_image['video_start'],$meta_image['video_loop'] );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content($meta_image['video']).'</div></div>';

} elseif ((is_single() || is_page()) && $meta_image['background']=='none') { ?>


<?php } elseif (is_category()){
	$the_category = get_query_var('cat');
	$pix_array_category = get_pix_option('pix_array_category_slide_'. $the_category.'_');
	if(get_pix_option('pix_array_category_slide_'.$the_category)=='slideshow'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php foreach ($pix_array_category as $slide) {
		echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
	}?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif(get_pix_option('pix_array_category_slide_'.$the_category)=='single'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
    <a href="<?php echo get_pix_option('pix_array_category_single_'. $the_category); ?>"></a>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif(get_pix_option('pix_array_category_slide_'.$the_category)=='video'){ 
		echo getTheWideVideo(get_pix_option('pix_array_category_video_'. $the_category),get_pix_option('pix_array_category_video_start_'. $the_category),get_pix_option('pix_array_category_video_loop_'. $the_category) );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_array_category_video_'. $the_category)).'</div></div>';

 } elseif(get_pix_option('pix_array_category_slide_'.$the_category)=='googlemap'){ ?>
<div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
<div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_array_category_googlemap_'. $the_category)); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_array_category_googlemap_zoom_'. $the_category); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_array_category_googlemap_indications_'. $the_category)); ?>" data-type="<?php echo get_pix_option('pix_array_category_googlemap_type_'. $the_category); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
</div>
</div>

<?php } else {
		default_bg();
	}

} elseif (is_tax()){
	$the_term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
	$the_term = $the_term->term_id;
	$pix_array_term = get_pix_option('pix_array_term_slide_'. $the_term.'_');
	if(get_pix_option('pix_array_term_slide_'.$the_term)=='slideshow'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php foreach ($pix_array_term as $slide) {
		echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
	}?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif(get_pix_option('pix_array_term_slide_'.$the_term)=='single'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
    <a href="<?php echo get_pix_option('pix_array_term_single_'. $the_term); ?>"></a>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>
<?php } elseif(get_pix_option('pix_array_term_slide_'.$the_term)=='video'){ 
		echo getTheWideVideo(get_pix_option('pix_array_term_video_'. $the_term),get_pix_option('pix_array_term_video_start_'. $the_term),get_pix_option('pix_array_term_video_loop_'. $the_term) );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_array_term_video_'. $the_term)).'</div></div>';

 } elseif(get_pix_option('pix_array_term_slide_'.$the_term)=='googlemap'){ ?>
<div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
<div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_array_term_googlemap_'. $the_term)); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_array_term_googlemap_zoom_'. $the_term); ?>"  data-indications="<?php echo htmlspecialchars(get_pix_option('pix_array_term_googlemap_indications_'. $the_term)); ?>" data-type="<?php echo get_pix_option('pix_array_term_googlemap_type_'. $the_term); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
</div>
</div>

<?php } elseif(get_pix_option('pix_array_term_slide_'.$the_term)=='default'){
		default_bg();
	}

} elseif (is_archive()){
	$pix_archive_slide = get_pix_option('pix_array_archive_slide_');
	if(get_pix_option('pix_archive_slide')=='slideshow'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php foreach ($pix_archive_slide as $slide) {
		echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
	}?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif(get_pix_option('pix_archive_slide')=='single') { ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<a href="<?php echo get_pix_option('pix_archive_single'); ?>"></a>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>
<?php } elseif(get_pix_option('pix_archive_slide')=='video') {
	
    	echo getTheWideVideo(get_pix_option('pix_archive_video'),get_pix_option('pix_archive_video_start'),get_pix_option('pix_archive_video_loop') );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_archive_video')).'</div></div>';

} elseif(get_pix_option('pix_archive_slide')=='googlemap') { ?>
    <div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
    <div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_archive_googlemap')); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_archive_googlemap_zoom'); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_archive_googlemap_indications')); ?>" data-type="<?php echo get_pix_option('pix_archive_googlemap_type'); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
    </div>
    </div>
<?php } elseif(get_pix_option('pix_archive_slide')=='default') {
		default_bg();
	}

} elseif (is_search()){
	$pix_searchpage_slide = get_pix_option('pix_array_searchpage_slide_');
	if(get_pix_option('pix_searchpage_slide')=='slideshow'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php foreach ($pix_searchpage_slide as $slide) {
		echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
	} ?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif (get_pix_option('pix_searchpage_slide')=='single') { ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<a href="<?php echo get_pix_option('pix_searchpage_single'); ?>"></a>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>
<?php } elseif (get_pix_option('pix_searchpage_slide')=='video') {

    	echo getTheWideVideo(get_pix_option('pix_searchpage_video'),get_pix_option('pix_searchpage_video_start'),get_pix_option('pix_searchpage_video_loop') );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_searchpage_video')).'</div></div>';

} elseif (get_pix_option('pix_searchpage_slide')=='googlemap') { ?>
    <div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
    <div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_searchpage_googlemap')); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_searchpage_googlemap_zoom'); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_searchpage_googlemap_indications')); ?>" data-type="<?php echo get_pix_option('pix_searchpage_googlemap_type'); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
    </div>
    </div>
<?php } else {
		default_bg();
	}

} elseif (is_404()){
	$pix_404_slide = get_pix_option('pix_array_404_slide_');
	if(get_pix_option('pix_404_slide')=='slideshow'){ ?>
<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
	<?php foreach ($pix_404_slide as $slide) {
		echo '<a href="'. $slide .'" data-thumb="'. get_pix_thumb($slide, 'exTh') .'" data-content="'. get_pix_content($slide) .'"></a>';
	} ?>
</div>
<div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } elseif (get_pix_option('pix_404_slide')=='single') { ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<a href="<?php echo get_pix_option('pix_404_single'); ?>"></a>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>
<?php } elseif (get_pix_option('pix_404_slide')=='video') {

    	echo getTheWideVideo(get_pix_option('pix_404_video'),get_pix_option('pix_404_video_start'),get_pix_option('pix_404_video_loop') );
		echo '<div id="hide_credits_pictures"><div id="pix_credits_pictures">'.get_pix_content(get_pix_option('pix_404_video')).'</div></div>';

} elseif (get_pix_option('pix_404_slide')=='googlemap') { ?>
    <div id="outer_canvas" style="width: 100%; height: 100%; left:0; overflow:hidden; position:fixed; z-index:0" data-position="fixed" data-top="0" data-bottom="not" data-height="100">
    <div id="map_canvas" data-coord1="<?php $coords = findCoords(get_pix_option('pix_404_googlemap')); echo $coords[0]; ?>" data-coord2="<?php echo $coords[1]; ?>" data-zoom="<?php echo get_pix_option('pix_404_googlemap_zoom'); ?>" data-indications="<?php echo htmlspecialchars(get_pix_option('pix_404_googlemap_indications')); ?>" data-type="<?php echo get_pix_option('pix_404_googlemap_type'); ?>" style="width: 100%; height: 100%; position: absolute; left:0; z-index:0" data-height="100">
    </div>
    </div>
<?php } else {
		default_bg();
	}

}  elseif (is_attachment()){  ?>
		<div class="pix_slide" data-position="fixed" data-top="0" data-bottom="not">
			<a href="<?php $image_bg = wp_get_attachment_image_src( get_the_id(), 'full' ); echo $image_bg[0]; ?>"></a>
		</div>
        <div class="pix_overlay_pattern"  data-position="fixed" data-top="0" data-bottom="not"></div>

<?php } else {
	default_bg();
}?>

<div id="body">
	<header <?php if(get_pix_option('pix_header_position')!='scrollable') { ?>data-position="fixed" data-top="0" data-bottom="not"<?php } ?>>
    	<div id="logo">
		<?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?>
            <<?php echo $heading_tag; ?>>
                <a href="<?php echo home_url( '/' ); ?>" title="<?php echo stripslashes(get_pix_option( 'pix_site_title' )); ?>"><?php echo stripslashes(get_pix_option( 'pix_site_title' )); ?>
                <small><?php echo stripslashes(get_pix_option( 'pix_site_description' )); ?></small></a>
            </<?php echo $heading_tag; ?>>
        </div><!-- #logo -->
    </header>
    
    <nav<?php if(get_pix_option('pix_nav_position')!='scrollable') { ?> data-position="fixed" data-top="100" data-bottom="not"<?php } ?>>
		<?php if (menuCount('primary_menu')!=0) { wp_nav_menu( array( 'container' => 'ul','theme_location' => 'primary_menu' ) ); } ?>
		<?php if (menuCount('secondary_menu')!=0) { wp_nav_menu( array( 'container' => 'ul','theme_location' => 'secondary_menu','menu_id'=>'secondary' ) ); } ?>
    </nav>
    

    <?php if(get_pix_option('pix_social_bar')!='hidden'){ ?>
    <div id="social_bar"<?php if(get_pix_option('pix_social_bar') == 'open' && get_pix_option('pix_header_position')!='scrollable'){ ?> data-position="fixed" data-top="0" data-bottom="not" <?php } elseif(get_pix_option('pix_social_bar') != 'open' && get_pix_option('pix_header_position')!='scrollable') { ?>  data-position="fixed" data-top="-50" data-bottom="not"<?php } ?><?php if(get_pix_option('pix_social_bar') == 'open'){ ?> class="open"<?php } ?>>
    	<div class="wrapIn">
        	<?php if(get_pix_option('pix_seach_show')=='show') { get_search_form(); } ?>
            <?php if (get_pix_option('pix_twitter_icon')=='show' || get_pix_option('pix_google_icon')=='show' || get_pix_option('pix_facebook_icon')=='show' || get_pix_option('pix_tumblr_icon')=='show' || get_pix_option('pix_linkedin_icon')=='show' || get_pix_option('pix_myspace_icon')=='show' || get_pix_option('pix_flickr_icon')=='show' || get_pix_option('pix_skype_icon')=='show' || get_pix_option('pix_rss_icon')=='show'){ ?>
            <div class="icon">
                <?php if (get_pix_option('pix_twitter_icon')=='show'){ ?><a id="pix_twitter_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_twitter_text')); ?>" href="<?php echo get_pix_option('pix_twitter_url'); ?>" target="_blank">t</a><?php } ?>
                <?php if (get_pix_option('pix_google_icon')=='show'){ ?><a id="pix_google_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_google_text')); ?>" href="<?php echo get_pix_option('pix_google_url'); ?>" rel="author" target="_blank">g</a><?php } ?>
                <?php if (get_pix_option('pix_facebook_icon')=='show'){ ?><a id="pix_facebook_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_facebook_text')); ?>" href="<?php echo get_pix_option('pix_facebook_url'); ?>" target="_blank">f</a><?php } ?>
                <?php if (get_pix_option('pix_tumblr_icon')=='show'){ ?><a id="pix_tumblr_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_tumblr_text')); ?>" href="<?php echo get_pix_option('pix_tumblr_url'); ?>" target="_blank">u</a><?php } ?>
                <?php if (get_pix_option('pix_linkedin_icon')=='show'){ ?><a id="pix_linkedin_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_linkedin_text')); ?>" href="<?php echo get_pix_option('pix_linkedin_url'); ?>" target="_blank">l</a><?php } ?>
                <?php if (get_pix_option('pix_myspace_icon')=='show'){ ?><a id="pix_myspace_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_myspace_text')); ?>" href="<?php echo get_pix_option('pix_myspace_url'); ?>" target="_blank">m</a><?php } ?>
                <?php if (get_pix_option('pix_flickr_icon')=='show'){ ?><a id="pix_flickr_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_flickr_text')); ?>" href="<?php echo get_pix_option('pix_flickr_url'); ?>" target="_blank">R</a><?php } ?>
                <?php if (get_pix_option('pix_youtube_icon')=='show'){ ?><a id="pix_youtube_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_youtube_text')); ?>" href="<?php echo get_pix_option('pix_youtube_url'); ?>" target="_blank">y</a><?php } ?>
                <?php if (get_pix_option('pix_vimeo_icon')=='show'){ ?><a id="pix_vimeo_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_vimeo_text')); ?>" href="<?php echo get_pix_option('pix_vimeo_url'); ?>" target="_blank">v</a><?php } ?>
                <?php if (get_pix_option('pix_skype_icon')=='show'){ ?><a id="pix_skype_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_skype_text')); ?>" href="skype:<?php echo get_pix_option('pix_skype_id'); ?>?<?php echo get_pix_option('pix_skype_action'); ?>">s</a><?php } ?>
                <?php if (get_pix_option('pix_rss_icon')=='show'){ ?><a id="pix_rss_icon" class="pix_tips_TR" title="<?php echo stripslashes(get_pix_option('pix_rss_text')); ?>" href="<?php echo get_pix_option('pix_rss_url'); ?>" target="_blank">r</a><?php } ?>
            </div>
            <?php } ?>
        </div><!-- .wrapIn -->
    </div><!-- #social_bar -->
    <?php if(get_pix_option('pix_social_bar') == 'closed') { ?>
    <span class="click icons"<?php if(get_pix_option('pix_header_position')!='scrollable') { ?> data-position="fixed" data-top="0" data-bottom="not"<?php } ?>>_</span>
    <?php } else { ?>
    <span class="click icons"<?php if(get_pix_option('pix_header_position')!='scrollable') { ?> data-position="fixed" data-top="0" data-bottom="not"<?php } ?>>^</span>
    <?php } ?>
     <?php } ?>
   
