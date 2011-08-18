<?php header("Content-type: text/css"); ?>
<?php require_once( '../../../wp-load.php' ); ?>
<?php $os = strtolower($_SERVER['HTTP_USER_AGENT']); ?>


/****************************************
*
*	GENERAL
*
****************************************/

* {
	outline: none;
	-moz-outline-style: none;
    .positione: relative;
}
*:active {
	outline: none;
	-moz-outline-style: none;
}
*:focus {
	outline: none;
	-moz-outline-style: none;
}
body {
<?php if (get_pix_option('pix_body_background')=='single_image') { ?>
	background-attachment: <?php echo get_pix_option('pix_body_background_single_image_attachment'); ?>;
    background-image: url(<?php echo get_pix_option('pix_body_background_single_image'); ?>);
    background-position: <?php echo get_pix_option('pix_body_background_single_image_position'); ?>;
    background-repeat: <?php echo get_pix_option('pix_body_background_single_image_repeat'); ?>;
<?php } elseif (get_pix_option('pix_body_background')=='pattern') { ?>
	background-attachment: fixed;
    background-image: url(<?php echo get_bloginfo('stylesheet_directory').'/images/'.get_pix_option('pix_body_background_pattern').'.png'; ?>);
    background-position: center;
    background-repeat: repeat;
<?php } ?>
	background-color: <?php echo get_pix_option('pix_body_background_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_general'),get_pix_option('pix_typo_general_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_general_fontsize'); ?>px;
	line-height: 1.5em;
	margin: 0;
	padding: 0;
}
a {
	color: <?php echo get_pix_option('pix_link_color'); ?>;
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
img {
	border-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
}
a img:hover {
	border-color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
}
figcaption {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
}

/****************************************
*
*	BOXES, DIVS, BUTTONS etc.
*
****************************************/
.button, .buttonspan a {
	background-color: <?php echo get_pix_option('pix_buttons_bg'); ?>!important;
    border: none;
    color: <?php echo get_pix_option('pix_buttons_color'); ?>!important;
    cursor: pointer;
    display: moz-inline-box;
    display: inline-block;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_buttons'),get_pix_option('pix_typo_buttons_own')); ?>', arial, serif;
    text-decoration: none!important;
}
.cusButton {
	background-color: <?php echo get_pix_option('pix_buttons_bg'); ?>;
    border: none;
    color: <?php echo get_pix_option('pix_buttons_color'); ?>;
    cursor: pointer;
    display: moz-inline-box;
    display: inline-block;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_buttons'),get_pix_option('pix_typo_buttons_own')); ?>', arial, serif;
    text-decoration: none!important;
}
.cusButton a {
	color: inherit!important;
    text-decoration: none;!important;
}
.buttonspan.alignleft a {
	float: left;
}
.buttonspan.alignright a {
	float: right;
}
.button:hover, .buttonspan a:hover {
	background-color: <?php echo get_pix_option('pix_buttons_bghover'); ?>!important;
	color: <?php echo get_pix_option('pix_buttons_colorhover'); ?>!important;
}
.button.small, .buttonspan.small a, .cusButton.small {
	font-size: 10px;
    line-height: 23px;
    min-height: 23px;
    margin: 5px 0;
    padding: 0 7px;
}
.button.medium, .buttonspan.medium a, .cusButton.medium {
	font-size: 12px;
    line-height: 30px;
    min-height: 30px;
    margin: 5px 0;
    padding: 0 12px;
}
.button.large, .buttonspan.large a, .cusButton.large {
	font-size: 14px;
    line-height: 40px;
    min-height: 40px;
    margin: 8px 0;
    padding: 0 18px;
}
#prevent {
	display: none;
}


/****************************************
*
*	TYPOGRAPHY
*
****************************************/
h1.entry-title, h2.entry-title {
	border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_h1_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h1'),get_pix_option('pix_typo_h1_own')); ?>', arial, serif;
	font-size: 3em;
	margin: -20px 0 0 -35px;
	padding-left: 35px;
	padding-top: 20px;
}
h1 {
	border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_h1_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h1'),get_pix_option('pix_typo_h1_own')); ?>', arial, serif;
	font-size: 2.8em;
	margin-left: -35px;
	padding-left: 35px;
}
h1 a {
    color: <?php echo get_pix_option('pix_h1_color'); ?>;
}
h1 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h2 {
	border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_h2_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h2'),get_pix_option('pix_typo_h2_own')); ?>', arial, serif;
	font-size: 2.2em;
	margin-left: -35px;
	padding-left: 35px;
}
h2 a {
    color: <?php echo get_pix_option('pix_h2_color'); ?>;
}
h2 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h3 {
	border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_h3_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h3'),get_pix_option('pix_typo_h3_own')); ?>', arial, serif;
	font-size: 2em;
	margin-left: -35px;
	padding-left: 35px;
}
h3 a {
    color: <?php echo get_pix_option('pix_h3_color'); ?>;
}
h3 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h4 {
    color: <?php echo get_pix_option('pix_h4_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h4'),get_pix_option('pix_typo_h4_own')); ?>', arial, serif;
	font-size: 1.7em;
    padding-bottom: 0;
}
h4 a {
    color: <?php echo get_pix_option('pix_h4_color'); ?>;
}
h4 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h5 {
    color: <?php echo get_pix_option('pix_h5_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h5'),get_pix_option('pix_typo_h5_own')); ?>', arial, serif;
	font-size: 1.5em;
    padding-bottom: 0;
}
h5 a {
    color: <?php echo get_pix_option('pix_h5_color'); ?>;
}
h5 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h6 a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    text-decoration: none;
}
h6 {
    color: <?php echo get_pix_option('pix_h6_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_h6'),get_pix_option('pix_typo_h6_own')); ?>', arial, serif;
	font-size: 1.2em;
    padding-bottom: 0;
    text-transform: uppercase;
}
h6 a {
    color: <?php echo get_pix_option('pix_h6_color'); ?>;
}
aside h3.first {
	margin-top: -20px;
    padding-top: 1.5em;
}
p.subtitle {
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
    font-size: 1.1em;
    font-style: italic;
}


/****************************************
*
*	LAYOUT
*
****************************************/
#body {
	float: left;
    height: 0;
	padding-bottom: 80px;
	position: relative;
	width: 1050px;
	z-index: 2;
}
.pix_overlay_pattern {
<?php if(get_pix_option('pix_overlay_pattern')!='none'){ ?>
	background:url(images/overlay<?php echo get_pix_option('pix_overlay_pattern'); ?>.png) repeat;
<?php } ?>
    height: 100%;
    left: 0;
	opacity: <?php echo get_pix_option('pix_overlay_pattern_opacity'); ?>;
	filter:alpha(opacity=<?php echo get_pix_option('pix_overlay_pattern_opacity')*100; ?>);
	position: fixed;
    top: 0;
    width: 100%;
	z-index: -1;
}
#wide_flash, object#wide_flash {
    height: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
<?php if (strpos($os,'opera')!==false && strpos($os,'windows')!==false) { ?>
	z-index: 0;
<?php } else { ?>
	z-index: -1;
<?php } ?>
}
.iwstyle {
	font-size: 12px;
    height: 100px;
}
.gmnoprint {
	right: 98px!important;
}
section {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
	float: right;
    margin-top: 200px;
    position: relative;
	width: 780px;
    z-index: 0;
}
article, aside {
<?php if (strpos($os,'msie 8')!=true) { ?>
	visibility: hidden;
<?php } ?>
}
article  {
    background: rgba(<?php echo hex2RGB(get_pix_option('pix_content_background'), true); ?>, <?php echo get_pix_option('pix_content_bg_opacity'); ?>);
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>)";
<?php } ?>
	float: left;
	overflow: hidden;
	position: relative;
	width: 499px;
	z-index: 3;
}
article.margin-right {
	float: right;
}
article.seveneighty {
	width: 780px;
}
aside {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_content_background'), true); ?>, <?php echo get_pix_option('pix_content_bg_opacity'); ?>);
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_content_bg_opacity')) . remove_something('#',get_pix_option('pix_content_background')); ?>)";
<?php } ?>
	float: right;
	overflow: hidden;
	position: relative;
	width: 278px;
	z-index: 2;
}
aside.leftsidebar {
	float: left;
}
aside.leftalone {
	margin-right: 502px;
}
.hentry {
	width: 429px;
}
.seveneighty .hentry {
	width: 710px;
}
.hentry.portfolio {
	float: left;
}
.hentry input[type=text], .hentry input[type=email], .hentry input[type=tel], .hentry select {
    width: 60%;
}
textarea {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    border: 1px solid transparent;
    clear: both;
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_general'),get_pix_option('pix_typo_general_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_general_fontsize'); ?>px;
    height: 110px;
    overflow: auto;
    padding: 5px;
    width: 75%;
}
aside textarea {
	height: 60px;
    width: 196px;
}
.commentlist textarea {
    width: 409px;
}
.commentlist ul textarea {
    width: 389px;
}
.commentlist ul ul textarea {
    width: 369px;
}
.commentlist ul ul ul textarea {
    width: 349px;
}
.commentlist ul ul ul ul textarea {
    width: 329px;
}
form span {
	clear: both;
    display: block;
	overflow: auto;
	position: relative;
}
span.textwrap {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
	padding: 0 5px;
}
input.error, textarea.error {
	background-color: #ffe1e5!important;
}
label.error {
	color: #da2e00;
	height: 20px;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
}
.toggle_arrow {
	font-size: 17px;
    padding: 20px 15px;
	position: absolute;
	right: -35px;
    text-align: center;
<?php if (strpos($os,'windows')==false ) { ?>
	top: -3px;
<?php } else { ?>
	top: 1px;
<?php } ?>
}
article > div {
	overflow: auto;
<?php if(get_pix_option('pix_footer_show')=='show'){ ?>
	padding: 20px 35px 130px;
<?php } else { ?>
	padding: 20px 35px 40px;
<?php } ?>
}
aside > div {
<?php if(get_pix_option('pix_footer_show')=='show'){ ?>
	padding: 20px 35px 130px;
<?php } else { ?>
	padding: 20px 35px 40px;
<?php } ?>
}
#breadcrumbs {
	border-left: 35px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    clear: both;
<?php if(get_pix_option('pix_breadcrumbs_show')=='show'){ ?>
    display: block;
<?php } else { ?>
    display: none;
<?php } ?>
    float: none;
	margin: 0 0 0 -35px;
    overflow: auto;
	padding: 0;
    position: relative;
}
#breadcrumbs li {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	float: left;
    font-size: 0.85em;
	list-style: none;
    margin: 0!important;
    padding-right: 4px;
}
#breadcrumbs li.current {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
}
#breadcrumbs li a {
    color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
}
.pix_pagenavi {
	clear: both;
    padding-top: 20px;
}
.pix_pagenavi ul {
	margin: 0;
	padding: 0;
}
.pix_pagenavi li {
	display: inline-block;
	float: left;
    font-size: 11px;
    height: 20px;
    line-height: 20px;
	list-style: none;
    margin-right: 2px;
    text-align: center;
    width: 20px;
}
.pix_pagenavi li.on {
	border: 1px solid transparent;
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
    height: 18px;
    line-height: 18px;
    width: 18px;
}
.pix_pagenavi li a {
    background: <?php echo get_pix_option('pix_content_background'); ?>;
	border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	display: block;
    height: 18px;
    line-height: 18px;
    text-align: center;
}
.pix_pagenavi li a:hover {
	border-color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color_hover'); ?>;
    text-decoration: none;
}
.hentry img, .hentry iframe, .pix_thumbs img, .widget_pixrecentposts img {
	border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
}
.hentry a:hover img, .pix_thumbs a:hover img {
	border: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
}
.hentry img.alignleft, .hentry .imgHentry.alignleft {
	margin: 2px 10px 10px 0;
}
.hentry img.alignright, .hentry .imgHentry.alignright {
	margin: 2px 0 10px 10px;
}
.hentry img.aligncenter, .hentry .imgHentry.aligncenter {
	margin-bottom: 10px;
	margin-top: 2px;
}
.hentry ul li {
	margin: 5px 0;
}
.hentry dt.gallery-icon .imgHentry {
	float: left;
}
section.widepagePortfolio {
	padding-bottom: 100px;
}
section.widepagePortfolio > div {
	clear: both;
    display: block;
}
section.widepagePortfolio .hentry {
	margin: 5px;
    width: auto!important;
}
#infscr-loading { 
  background: #000; 
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  color: #fff;
  height: 100px;
  left: 50%;
  margin: -50px 0 0 -100px;
  opacity: 0.8;
  padding: 10px;
  position: fixed;
  top: 50%;
  width: 200px;
  z-index: 5000;
}
#page_nav_span {
    border-top: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    clear: both;
    display: block;
    margin: 20px 0 10px -35px;
    padding-left: 35px;
    position: relative;
}
.widepagePortfolio #page_nav_span {
    border: 0!important;
}
a#page_nav {
	display: inline-block!important;
    display: moz-inline-box!important;
    margin: -1px 4px 0 0;
    padding: 0 10px; 
    text-decoration: none!important;
}
.widepagePortfolio a#page_nav {
	line-height: 40px;
    padding: 0 40px;
}
a#page_nav:hover {
    background-color: <?php echo get_pix_option('pix_buttons_bg_hover'); ?>;
}
#filtering-nav {
    border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    clear: both;
    display: block;
    margin: 10px 0 10px -35px;
    .overflow: hidden;
    padding-left: 35px;
}
.widepagePortfolio #filtering-nav {
    margin: 0 0 10px -35px;
    border: 0!important;
}
#filtering-nav a {
    background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	border-bottom-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_content_text_color'); ?>;
    display: inline-block;
    display: moz-inline-box;
    .float: left;
    line-height: 25px;
    margin: 5px 4px -1px 0;
    padding: 0 10px; 
    text-decoration: none!important;
}
.widepagePortfolio #filtering-nav a {
    background-color: <?php echo get_pix_option('pix_content_background'); ?>;
	border: 0!important;
    color: <?php echo get_pix_option('pix_content_text_color'); ?>!important;
    line-height: 40px;
    margin: 0 4px 4px 0;
    padding: 0 20px; 
}
#filtering-nav a.selected {
    background: transparent!important;
    border-color: transparent!important;
    color: <?php echo get_pix_option('pix_content_text_color'); ?>!important;
    cursor: text!important;
}
.widepagePortfolio #filtering-nav a.selected {
    background-color: transparent!important;
    border-color: transparent!important;
    color: <?php echo get_pix_option('pix_content_background'); ?>!important;
    cursor: text!important;
}
#filtering-nav a:hover {
    background-color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
	border-color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
	border-bottom-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    color: <?php echo get_pix_option('pix_content_text_color'); ?>;
}
.widepagePortfolio #filtering-nav a:hover {
    background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	border: 0!important;
    color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
}
.isotope-item {
  z-index: 2;
}

.isotope-hidden.isotope-item {
  pointer-events: none;
  z-index: 1;
}
.imgHentry {
	background: <?php echo get_pix_option('pix_content_text_color'); ?>;
    margin-top: 20px;
    overflow: hidden;
	position: relative;
}
.linkIcon {
	display: none;
	left: 0;
	position: absolute;
    top: 0;
}
.enlarge-icon {
    background: url(images/enlarge-icon.png) no-repeat center;
    display: block;
    float: left;
	position: relative;
    text-decoration: none!important;
}
.linkIcon.enlarge-icon {
	display: none;
	left: 0;
	position: absolute;
    top: 0;
}
.play-icon {
    background: url(images/play-icon.png) no-repeat center;
    display: block;
    float: left;
	position: relative;
    text-decoration: none!important;
}
.goto-icon {
    background: url(images/goto-icon.png) no-repeat center;
    display: block;
    float: left;
	position: relative;
    text-decoration: none!important;
}
.moreinfo-icon {
    background: url(images/moreinfo-icon.png) no-repeat center;
    display: block;
    float: left;
	position: relative;
    text-decoration: none!important;
}
.postmetadata, .single .posttags_list {
	border-left: 35px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    clear: both;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
    display: block;
    float: none;
    font-size: 0.9em;
	margin: 0 0 1px -35px;
    overflow: auto;
	padding: 0;
    position: relative;
}
.archive .postmetadata, .blog .postmetadata {
	margin: -1.8em 0 1.8em -35px;
}
.single .posttags_list {
	border-top: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    float: none;
	margin: 10px 0 10px -35px;
}
.postmetadata a, .single .posttags_list a {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
}
.postmetadata > span, .single .posttags_list > span {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    float: left;
    padding-right: 4px;
}
aside ul {
	marging: 0;
    padding: 0 0 0 20px;
    list-style: disc;
}
.marginZero {
	margin-right: 0!important;
}
.commentlist {
	margin: 0;
    padding-left: 10px;
}
.commentlist ul {
	margin: 0;
    padding-left: 20px;
}
.commentlist ul ul ul ul {
    padding-bottom: 15px;
}
.commentlist li {
    font-size: 11px;
    list-style: none;
    margin: 5px 0;
    padding: 0;
    position: relative;
}
.commentlist li .span_in {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	clear: both;
	display: block;
    line-height: 16px;
    margin-bottom: 30px;
    padding: 10px;
    position: relative;
}
.commentlist li.depth-5 .span_in {
    margin-bottom: 10px!important;
}
.commentlist .comment-author.vcard img {
    border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	float: left;
    margin-left: -20px;
    .margin-left: 0;
    margin-right: 10px;
}
.commentlist .reply {
    bottom: -23px;
	position: absolute;
    right: 5px;
}
.commentlist .depth-5 .reply {
	border: none;
}
.commentlist .reply a {
	float: left;
    margin: 0;
}
.commentlist .head-comment {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
    font-size: 14px;
    line-height: 20px;
}
.commentlist .head-comment span {
    font-size: 12px;
    font-style: italic;
}
.commentlist #respond {
	clear: both;
    overflow: hidden;
	padding-bottom: 30px;
    position: relative;
}
.commentform input[type=text], .commentform input[type=email] {
	display: block;
	width: 60%;
}
.commentform label {
	display: block;
}
.commentform textarea, .commentform button {
	display: block;
	clear: both;
}
pre {
	background: url(images/prebg.jpg) 0 0 repeat;
    border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    clear: both;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	line-height: 20px;
	margin: 20px 0;
	overflow: auto;
	padding: 19px 20px 19px;
}
code {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;;
	padding: 0 2px;
}


/***************************** HEADER *****************************/

header {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_header_background'), true); ?>, <?php echo get_pix_option('pix_header_bg_opacity'); ?>);
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>)";
<?php } ?>
	clear: both;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_sitetitle'),get_pix_option('pix_typo_sitetitle_own')); ?>', arial, serif;
    left: 0;
	overflow: hidden;
<?php if(get_pix_option('pix_header_position')=='scrollable') { ?>
	position: absolute;
<?php } else { ?>
	position: fixed;
<?php } ?>
	top: 0;
    visibility: hidden;
	z-index: 1;
}
header #logo {
	height: 30px;
	padding: 50px 20px 30px;
} 
header h1, header #logo > div {
	border: none;
	color: <?php echo get_pix_option('pix_header_text_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_sitetitle'),get_pix_option('pix_typo_sitetitle_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_sitetitle_fontsize'); ?>px;
	line-height: <?php echo get_pix_option('pix_typo_sitetitle_fontsize'); ?>px;
	margin: 0;
    padding: 0;
}
header h1 small, header > div small {
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_sitedescription'),get_pix_option('pix_typo_sitedescription_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_sitedescription_fontsize'); ?>px;
}
header a {
	background-color: transparent!important;
    background-image: url(<?php echo get_pix_option('pix_header_image_bg'); ?>);
    background-position: <?php echo get_pix_option('pix_header_image_position'); ?>;
    background-repeat: <?php echo get_pix_option('pix_header_image_repeat'); ?>;
	color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    display: block;
    margin: <?php echo get_pix_option('pix_header_margin'); ?>;
    padding: <?php echo get_pix_option('pix_header_padding'); ?>;
	text-decoration: none!important;
}
#social_bar {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_header_background'), true); ?>, <?php echo get_pix_option('pix_header_bg_opacity'); ?>);
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>)";
<?php } ?>
    color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    left: -1000px;
<?php if(get_pix_option('pix_header_position')=='scrollable') { ?>
	position: absolute;
<?php } else { ?>
	position: fixed;
<?php } ?>
    top: -50px;
	z-index: 2;
}
#social_bar .wrapIn {
    height: 20px;
    padding: 5px 0 17px 10px;
	position: relative;
    .width: auto;
    .display: inline;
    .float: left;
}
.click.icons {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_header_background'), true); ?>, <?php echo get_pix_option('pix_header_bg_opacity'); ?>);
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_header_bg_opacity')) . remove_something('#',get_pix_option('pix_header_background')); ?>)";
<?php } ?>
    color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    cursor: pointer;
    display: block;
    font-size: 17px;
	height: 42px;
    left: 1015px;
    line-height: 35px;
<?php if(get_pix_option('pix_header_position')=='scrollable') { ?>
	position: absolute;
<?php } else { ?>
	position: fixed;
<?php } ?>
    width: 35px;
    text-align: center;
	top: -50px;
    z-index: 2;
}
#social_bar form {
	float: right;
    position: relative;
}
#social_bar input.typeText {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_header_text_color'), true); ?>, .2)!important;
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex('0.2') . remove_something('#',get_pix_option('pix_header_text_color')); ?>, endColorstr=#<?php echo opacHex('0.2') . remove_something('#',get_pix_option('pix_header_text_color')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex('0.2') . remove_something('#',get_pix_option('pix_header_text_color')); ?>, endColorstr=#<?php echo opacHex('0.2') . remove_something('#',get_pix_option('pix_header_text_color')); ?>)";
<?php } ?>
    border: 0;
    color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    .display: inline;
    float: left;
    .float: inherit;
    font-size: 14px;
	height: 27px;
	line-height: 27px;
    margin: 1px 0 0 0;
    .margin-left: 20px;
    padding: 0;
	width: 130px;
}
#social_bar input.typeSubmit {
	background: transparent;
    border: 0;
    cursor: pointer;
    .display: inline;
    float: left;
    .float: inherit;
    font-size: 25px;
	height: 22px;
	line-height: 22px;
    margin: 0;
    padding: 0;
    position: relative;
	width: 25px;
    z-index: 2;
}
#social_bar form .icons {
	background: transparent;
    border: 0;
    color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    cursor: pointer;
    float: left;
    font-size: 27px;
	height: 25px;
	line-height: 25px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
	width: 20px;
    z-index: 1;
}
#social_bar div.icon {
	float: right;
    margin: 2px 10px 0 0;
}
#social_bar .icon a {
	background: none!important;
	color: <?php echo get_pix_option('pix_header_text_color'); ?>;
    display: block;
	.display: inline;
	float: left;
    .float: inherit;
    font-size: 25px;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    text-decoration: none!important;
}

/***************************** NAVIGATION *****************************/

nav {
	clear: both;
    left: 0;
	margin: 100px 30px 0 0;
<?php if(get_pix_option('pix_nav_position')=='scrollable') { ?>
	position: absolute;
    padding-bottom: 83px;
<?php } else { ?>
	position: fixed;
<?php } ?>
	top: 100px;
	z-index: 3;
}
nav ul {
	background: transparent;
	clear: left;
	float: left;
	list-style: none;
	margin: 0;
	padding: 0;
}
nav ul#secondary {
	margin-top: 50px;
}
nav li {
	background: transparent;
	display: block;
    float: left;
	height: 44px;
	line-height: 42px;
	margin: 0;
	padding: 0;
	position: relative;
}
nav > ul > li {
	clear: both;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_firstlevellink'),get_pix_option('pix_typo_firstlevellink_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_firstlevellink_fontsize'); ?>px;
    margin-left: -1000px;
}
nav > ul > li > a {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_first_level_background'), true); ?>, <?php echo get_pix_option('pix_first_level_opacity'); ?>)!important;
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity')) . remove_something('#',get_pix_option('pix_first_level_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity')) . remove_something('#',get_pix_option('pix_first_level_background')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity')) . remove_something('#',get_pix_option('pix_first_level_background')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity')) . remove_something('#',get_pix_option('pix_first_level_background')); ?>)";
<?php } ?>
	border-right: 0px solid <?php echo get_pix_option('pix_first_level_border'); ?>;
	color: <?php echo get_pix_option('pix_first_level_color'); ?>;
	display: block;
	float: left;
    height: 42px;
    line-height: 42px;
	margin-bottom: 3px;
	padding: 0 20px;
	position: relative;
	text-decoration: none!important;
    text-align: right;
    .width: 100%;
	z-index: 1;
}
nav > ul#secondary > li > a {
    background-color: rgba(<?php echo hex2RGB(get_pix_option('pix_first_level_background_2nd'), true); ?>, <?php echo get_pix_option('pix_first_level_opacity_2nd'); ?>)!important;
<?php if (strpos($os,'msie 7')==true ||  strpos($os,'msie 8')==true) { ?>
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity_2nd')) . remove_something('#',get_pix_option('pix_first_level_background_2nd')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity_2nd')) . remove_something('#',get_pix_option('pix_first_level_background_2nd')); ?>);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity_2nd')) . remove_something('#',get_pix_option('pix_first_level_background_2nd')); ?>, endColorstr=#<?php echo opacHex(get_pix_option('pix_first_level_opacity_2nd')) . remove_something('#',get_pix_option('pix_first_level_background_2nd')); ?>)";
<?php } ?>
	border-right: 0px solid <?php echo get_pix_option('pix_first_level_border_2nd'); ?>;
	color: <?php echo get_pix_option('pix_first_level_color_2nd'); ?>!important;
}
nav > ul#secondary > li.nav_li_hover > a {
	color: <?php echo get_pix_option('pix_first_level_hover_2nd'); ?>!important;
}
nav > ul > li > ul {
	background-color: <?php echo get_pix_option('pix_second_level_background'); ?>;
	float: left;
	left: -9999px;
	padding: 0 10px;
	position: absolute;
	top: 0;
	z-index: 0;
}
nav > ul > li ul {
	width: 8888px;
}
nav > ul#secondary > li > ul {
	background-color: <?php echo get_pix_option('pix_second_level_background_2nd'); ?>!important;
}
nav > ul > li ul li {
	clear: none;
	display: block;
	float: left;
	width: auto;
}
nav > ul > li > ul > li {
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_secondlevellink'),get_pix_option('pix_typo_secondlevellink_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_secondlevellink_fontsize'); ?>px;
    height: 42px;
    line-height: 42px;
}
nav li.nav_li_hover > a {
	color: <?php echo get_pix_option('pix_first_level_hover'); ?>!important;
}
nav > ul > li > ul li a {
	background-color: <?php echo get_pix_option('pix_second_level_background'); ?>;
	color: <?php echo get_pix_option('pix_second_level_color'); ?>;
	float: left;
    height: 42px;
    line-height: 42px;
	padding: 0 20px;
	text-decoration: none!important;
    .width: 100%;
}
nav > ul > li > ul li.nav_li_hover > a {
	color: <?php echo get_pix_option('pix_second_level_hover'); ?>!important;
}
nav > ul > li > ul li li a {
	background-color: <?php echo get_pix_option('pix_third_level_background'); ?>!important;
	color: <?php echo get_pix_option('pix_third_level_color'); ?>;
	line-height: 36px;
	padding: 0 16px;
    width: 100%;
}
nav > ul > li > ul li li.nav_li_hover > a {
	color: <?php echo get_pix_option('pix_third_level_hover'); ?>!important;
}
nav > ul > li > ul > li li {
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_thirdlevellink'),get_pix_option('pix_typo_thirdlevellink_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_thirdlevellink_fontsize'); ?>px;
}
nav > ul > li > ul .slash_li {
	background-color: <?php echo get_pix_option('pix_second_level_background'); ?>!important;
	color: <?php echo get_pix_option('pix_second_level_color'); ?>;
	float: left;
	padding: 0;
	text-decoration: none;
}
nav > ul > li > ul ul .slash_li {
	background-color: <?php echo get_pix_option('pix_third_level_background'); ?>!important;
	color: <?php echo get_pix_option('pix_third_level_color'); ?>;
	float: left;
    line-height: 36px;
	padding: 0;
	text-decoration: none;
}
nav > ul#secondary > li > ul li a, nav > ul#secondary .slash_li {
	background-color: <?php echo get_pix_option('pix_second_level_background_2nd'); ?>!important;
	color: <?php echo get_pix_option('pix_second_level_color_2nd'); ?>;
}
nav ul.third_level_menu {
	background-color: <?php echo get_pix_option('pix_third_level_background'); ?>!important;
    display: none;
	left: -99999px;
    overflow: hidden;
	position: absolute;
    width: 10000px;
	z-index: 1;
}
nav #secondary ul.third_level_menu {
	background-color: <?php echo get_pix_option('pix_third_level_background_2nd'); ?>!important;
}
nav > ul#secondary > li > ul li li a {
	background-color: <?php echo get_pix_option('pix_third_level_background_2nd'); ?>!important;
	color: <?php echo get_pix_option('pix_third_level_color_2nd'); ?>;
}
span.submenu {
	color: <?php echo get_pix_option('pix_first_level_color'); ?>;
    .display: inline;
    font-size: 17px;
    height: 42px;
    line-height: 42px;
    padding-left: 5px;
    position: absolute;
    right: 12px;
    top: -2px;
    z-index: 2;
}
nav ul#secondary span.submenu {
	color: <?php echo get_pix_option('pix_first_level_color_2nd'); ?>;
}
li ul span.submenu {
	color: <?php echo get_pix_option('pix_second_level_color'); ?>;
    right: 8px;
}
nav ul#secondary li ul span.submenu {
	color: <?php echo get_pix_option('pix_second_level_color_2nd'); ?>;
}

/***************************** FOOTER *****************************/

footer {
    background-color: <?php echo get_pix_option('pix_footer_background'); ?>;
	bottom: 0;
	color: <?php echo get_pix_option('pix_footer_text_color'); ?>;
	display: block;
<?php if(get_pix_option('pix_footer_show')=='show'){ ?>
	font-size: 11px;
	height: 72px;
	line-height: 55px;
<?php } else { ?>
	height: 0;
	.line-height: 0;
<?php } ?>
	left: 0;
	overflow: hidden;
	position: fixed;
    visibility: hidden;
	width: 100%;
	z-index: 3;
}
footer > div {
	display: block;
	padding: 10px 20px 10px 20px;
}
footer p {
	float: left;
}
footer p.credits {
	float: right;
}
#hide_credits_pictures {
	display: none;
}
footer .pipe {
	padding: 0 20px;
}
footer a {
	color: <?php echo get_pix_option('pix_footer_text_color'); ?>;
    display: inline!important;
	text-decoration: none!important;
}
footer a:hover {
	background-color: transparent;
}
footer .lang {
	padding-left: 18px;
}
footer .icons {
	padding: 0 3px 0 6px;
	font-size: 1.3em;
}
#credits_blog {
	float: left;
}
#logo_bottom {
	background-color: transparent!important;
    background-image: url(<?php echo get_pix_option('pix_footer_image_bg'); ?>);
    background-position: <?php echo get_pix_option('pix_footer_image_position'); ?>;
    background-repeat: <?php echo get_pix_option('pix_footer_image_repeat'); ?>;
    float: left;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_logobottom'),get_pix_option('pix_typo_logobottom_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_logobottom_fontsize'); ?>px;
    margin: <?php echo get_pix_option('pix_footer_margin'); ?>;
    padding: <?php echo get_pix_option('pix_footer_padding'); ?>;
	text-decoration: none!important;
}



/****************************************
*
*	WIDE SLIDESHOW
*
****************************************/
.pix_slide {
	left: 0;
	position: fixed;
	top: 0;
	z-index: -1;
}
.pix_slide a {
	display: none;
}
#close_gallerywrap {
	position: absolute;
    right: 20px;
    width: 20px;
}
#navgallery_wrap {
	color: <?php echo get_pix_option('pix_footer_text_color'); ?>;
    height: 52px;
	margin: 0;
	overflow: hidden;
    position: relative;
}
#navgallery_wrapper {
	position: absolute;
}
.navgallery {
	list-style: none;
    height: 52px;
    left: 5px;
    margin: 0 auto;
	padding: 0;
    position: relative;
    width: 9999px;
}
.navgallery li {
	background: #000;
	border: 1px solid transparent;
	cursor: pointer;
	float: left;
	height: 50px;
	margin: 0 10px 0 0;
	width: 50px;
}
.navgallery li img {
	opacity: .4;
	filter:alpha(opacity=40);
}
.navgallery li.espresscurrent {
	border: 1px solid #333;
}
.navgallery li.espresscurrent img, .navgallery li:hover img {
	opacity: 1;
	filter:alpha(opacity=100);
}
#pix_controls {
	.display: inline;
	float: right;
}
#pix_controls > span {
    font-size: 17px;
    line-height: 0px;
    margin: 0 2px;
    padding: 0 2px;
}
#pix_controls span {
	cursor: pointer;
}
#pix_controls a {
	font-size: 11px;
}
#scrollCommands {
	cursor: pointer;
	float: right;
	font-size: 18px;
    margin-top: -12px;
    text-align: center;
    width: 20px;
}



/****************************************
*
*	SIDEBAR WIDGETS
*
****************************************/

.contactForm label {
	clear: left;
	display: block;
    padding-top: 3px;
}
input[type=text], input[type=email], input[type=tel], select {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    border: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
	font-family: '<?php echo splitFont(get_pix_option('pix_typo_general'),get_pix_option('pix_typo_general_own')); ?>', arial, serif;
	font-size: <?php echo get_pix_option('pix_typo_general_fontsize'); ?>px;
    height: 27px;
    line-height: 27px;
    padding: 0;
    text-indent: 5px;
    .text-indent: 0;
    width: 206px;
}
.contactForm input[type=submit] {
	margin-top: 10px;
}
.captchaCont {
	overflow: auto;
}
form .off-on {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    border: 1px solid <?php echo get_pix_option('pix_general_light_text_color'); ?>;
    cursor: pointer;
    height: 10px;
    position: relative;
	width: 10px;
}
form .switcher.off {
	display: none;
}
form .radio-fake {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    border: 1px solid <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    cursor: pointer;
    float: left;
    height: 10px;
    margin-right: 2px;
    position: relative;
	width: 10px;
}
form .switcher.off {
	display: none;
}
form .switcher {
	background: url(images/checkedswitch.png) no-repeat;
    height: 10px;
    left: 0;
    position: absolute;
    top: 0;
	width: 10px;
}
form .radio-on.off {
	display: none;
}
form .radio-on {
	background: <?php echo get_pix_option('pix_content_text_color'); ?>;
	border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    height: 6px;
    left: 2px;
    position: absolute;
    top: 2px;
	width: 6px;
}
form #to, form #from {
	float: left;
	width: 80%;
}
.contactForm .success, .contactForm .unsuccess {
	position: absolute;
}
.ui-datepicker-trigger {
	float: left!important;
    margin: 4px 2px 0!important;
}
.widget_pixrecentposts div.clear {
	margin-bottom: 10px;
    overflow: hidden;
}
.widget_pixrecentposts h5 {
	margin: 0;
	padding-bottom: 0;
}
.widget_pixrecentposts h5 a {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
}
.widget_pixrecentposts a:hover {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
}
.widget_pixrecentposts .entry-widget {
	padding-top: 5px;
}
.widget_pixrecentposts p.subtitle {
	font-size: 1.1em;
    font-style: italic;
    padding: 5px 0 0;
}
.widget_pixrecentposts p {
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
    font-size: 11px;
    line-height: 18px;
    margin: 0;
}
.category .imgHentry {
	float: left;
	height: 150px;
	margin: 0 5px 5px 0;
    width: 150px;
}
.pix_thumbs .imgHentry {
	float: left;
	height: 66px;
	margin: 0 5px 5px 0;
    width: 66px;
}
.widget_pixrecentposts .imgHentry {
	float: left;
	height: 52px;
	margin: 0 5px 5px 0;
    width: 52px;
}
.widget_calendar table {
	border-collapse: separate;
	.border-collapse: collapse;
	border-spacing: 1px;
	margin: 0 auto;
	padding: 0;
	width: 98%;
}
.widget_calendar caption {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
	font-size: 1.2em;
	margin: 1em 0 0;
	text-align: left;
	text-transform: uppercase;
}
.widget_calendar th {
	background: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
	color: <?php echo get_pix_option('pix_content_background'); ?>;
    line-height: 2.5em;
	margin: 0;
	padding: 0;
	.position: relative;
	text-align: center;
	vertical-align: middle;
}
.widget_calendar tfoot td {
	background: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
	color: <?php echo get_pix_option('pix_content_text_color'); ?>!important;
    line-height: 2.5em;
	margin: 0;
	padding: 0;
	.position: relative;
	text-align: center;
	vertical-align: middle;
}
.widget_calendar tfoot td a {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
}
.widget_calendar tbody td {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	color: <?php echo get_pix_option('cc_table_text_color'); ?>;
    line-height: 2em;
	margin: 0;
	padding: 0;
	position: relative;
	text-align: center;
	vertical-align: middle;
}
.widget_calendar tbody td a {
	background: <?php echo get_pix_option('pix_content_background'); ?>;
	color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	display: block;
	text-decoration: none;
}
.widget_calendar tbody td#today {
	background: <?php echo get_pix_option('pix_buttons_bg'); ?>;
	color: <?php echo get_pix_option('pix_buttons_color'); ?>;
	font-weight: bold;
}
.widget_calendar td:hover {
	background: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
}
.pix_thumbs {
	overflow: auto;
}
.pix_thumbs a {
	height: 64px;
    width: 64px;
}
.widget_pixrecentposts .imgHentry a {
	background-color: transparent!important;
	height: 50px;
    width: 50px;
}
.pix_side_comments {
	overflow: auto;
	width: 280px;
}
.pix-recent-comments .comment {
	float: left;
	margin: 0 0 10px -20px;
	padding-left: 20px;
	width: 208px;
}
.pix-recent-comments .comment .vcard {
	float: left;
	padding: 10px 10px 0 0;
}
.pix-recent-comments .comment .text {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
	float: left;
    font-style: italic;
	padding: 10px;
    position: relative;
	width: 138px;
}
.pix-recent-comments .comment .comment_text {
	color: <?php echo get_pix_option('pix_content_text_color'); ?>;
    font-size: 0.9em;
    font-style: normal;
}
.pix-recent-comments .comment .text .left_arrow {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent; 
    border-right: 6px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
    height: 0;
    left: -6px;
    position: absolute;
    top: 15px;
    width: 0;
}
.widget_pixrecentposts h5 {
	font-size: 14px;
}
.pix_share iframe {
	border: 0!important;
}

/****************************************
*
*	SHORTCODES
*
****************************************/
.pix_cycle {
	border: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
    height: 240px;
	margin: 2px 0 10px;
    overflow: hidden;
    width: 427px;
}
.pix_slider {
	position: relative;
	display: block;
    height: 100%;
    width: 100%;
}
.pix_slider .sliding_image {
	display: block;
    height: 100%;
    width: 100%;
}
.pix_slider .pix_slide_caption {
	background: rgba(0, 0, 0, 0.8);
    .filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#cc000000, endColorstr=#cc000000);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#cc000000, endColorstr=#cc000000)\9;
    bottom: 0;
	color: #fff;
    font-size: 0.9em;
    padding: 10px;
	position: absolute;
}
.pix_slider .button {
	margin-top: 10px;
}
.pix_slider_nav {
	clear: both;
	display: block;
    float: left;
    margin: 0 0 10px;
    padding: 0;
    width: 100%;
}
.pix_slider_nav a {
	background-color: <?php echo get_pix_option('pix_general_box_bg'); ?>;
	border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    display: block;
	float: left;
	height: 8px;
    margin-left: 3px;
    text-indent: -9999px;
    width: 8px;
}
.pix_slider_nav a.activeSlide {
	background-color: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
}

.pix_columns {
	clear: both;
	display: block;
    overflow: auto; 
}
.pix_columns .pix_column {
    display: block;
	float: left;
}
.pix_columns .pix_column.last_column {
	margin-right: 0!important;
}
.pix_columns .col_two {
	margin-right: 6%;
	width: 47%;
}
.pix_columns .col_three {
	margin-right: 5%;
	width: 30%;
}
.pix_columns .col_two_three {
	margin-right: 5%;
	width: 65%;
}
.pix_columns .col_four {
	margin-right: 4%;
	width: 22%;
}
.pix_columns .col_two_four {
	margin-right: 4%;
	width: 48%;
}
.pix_columns .col_three_four {
	margin-right: 4%;
	width: 74%;
}
.pix_columns .col_five {
	margin-right: 2.5%;
	width: 18%;
}
.pix_columns .col_two_five {
	margin-right: 2.5%;
	width: 38.5%;
}
.pix_columns .col_three_five {
	margin-right: 2.5%;
	width: 59%;
}
.header_accordion {
	border-radius: 0!important;
    moz-border-radius: 0!important;
    border: 0!important;
    border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>!important;
	clear: both!important;
	display: block!important;
    padding: 5px 10px!important;
    text-decoration: none!important;
}
.header_accordion.ui-state-default, .header_accordion.ui-state-active {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>!important;
}
.header_accordion:hover {
	background: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>!important;
}
.pix_accordion .ui-accordion-content {
	border-radius: 0!important;
	moz-border-radius: 0!important;
    border: 0!important;
    color: <?php echo get_pix_option('pix_general_light_text_color'); ?>;
    padding: 10px;
}
.pix_accordion  .icons {
    display: moz-inline-box;
	display: inline-block;
	text-align: left;
	width: 15px;
}
.pix_box {
	background-repeat: no-repeat;
    clear: both;
	display: block;
    padding: 20px;
}
.pix_box.quotes {
	background-image: url(images/box-quote.png);
    background-position: 15px center;
    padding-left: 60px;
}
.pix_box.balloon {
	background-image: url(images/box-balloon.png);
    background-position: 12px center;
    padding-left: 60px;
}
.pix_box.info {
	background-image: url(images/box-info.png);
    background-position: 12px center;
    padding-left: 60px;
}
.pix_box.question {
	background-image: url(images/box-question.png);
    background-position: 12px center;
    padding-left: 60px;
}
.pix_box.arrow {
	background-image: url(images/box-arrow.png);
    background-position: 15px center;
    padding-left: 60px;
}
ul.pix_check li {
	list-style-image: url(images/list-check.png)!important;
}
ul.pix_arrow li {
	list-style-image: url(images/list-arrow.png)!important;
}
ul.pix_plus li {
	list-style-image: url(images/list-plus.png)!important;
}
.firstletter {
	display: block;
	float: left;
	margin-right: 5px;
    overflow: hidden;
    text-align: center;
    text-transoferm: uppercase;
}
.firstletter.disc {
	border-radius: 100px;
    mox-border-radius: 100px;
}
.price_table {
    overflow: hidden;
    margin: 0 auto;
    padding: 20px 0;
    width: auto;
}
.price_table .price_column.highlighted {
	background: <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
    margin: -5px!important;
	padding: 10px;
    z-index: 2;
}
.price_table.td_2 .price_column {
	display: block;
	margin: 5px;
    float: left;
    position: relative;
	width: 204px;
    z-index: 1;
}
.seveneighty .price_table.td_2 .price_column {
	width: 345px;
}
.price_table.td_3 .price_column {
	display: block;
	margin: 5px;
    float: left;
    position: relative;
	width: 133px;
    z-index: 1;
}
.seveneighty .price_table.td_3 .price_column {
	width: 225px;
}
.price_table.td_4 .price_column {
	display: block;
	margin: 5px;
    float: left;
    position: relative;
	width: 97px;
    z-index: 1;
}
.seveneighty .price_table.td_4 .price_column {
	width: 166px;
}
.price_table.td_5 .price_column {
	display: block;
    float: left;
	margin: 5px;
    position: relative;
	width: 75px;
    z-index: 1;
}
.seveneighty .price_table.td_5 .price_column {
	width: 131px;
}
.price_table .price_column > div {
	background: <?php echo get_pix_option('pix_general_box_bg'); ?>;
}
.price_table .price_column > div > div {
	padding: 10px 15px;
    border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
    border-top: 1px solid #f6f6f6;
}
.price_table .price_column > div > p {
	padding: 10px 15px;
    border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
    border-top: 1px solid #f6f6f6;
}
.price_table .price_column > div > ul {
	padding: 10px 15px;
    border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg_hover'); ?>;
    border-top: 1px solid #f6f6f6;
}
.price_table .price_title {
	background-color: <?php echo get_pix_option('pix_buttons_bg'); ?>;
    border-top: 0!important;
    color: <?php echo get_pix_option('pix_buttons_color'); ?>;
    font-size: 14px;
}
.price_table .highlighted .price_title {
    font-size: 16px;
}
.price_table .price_price {
    font-size: 36px;
    line-height: 40px;
}
.price_table.td_5 .price_price {
    font-size: 28px;
    line-height: 36px;
}
.price_table .highlighted  .price_price {
    font-size: 40px;
    line-height: 44px;
}
.price_table.td_5 .highlighted .price_price {
    font-size: 32px;
    line-height: 36px;
}
.price_table .price_explanation {
	font-size: 10px;
    line-height: 13px;
    text-transform: uppercase;
}
.price_table .cusButton {
	background-color: <?php echo get_pix_option('pix_buttons_bg'); ?>;
	display: block;
    text-align: center;
}
.price_table li {
	padding: 5px 0;
}
.price_table div.pix_check {
	background: url(images/list-check-green.png) no-repeat 15px center;
    padding-left: 38px!important;
}
.price_table div.pix_error {
	background: url(images/list-error.png) no-repeat 15px center;
    padding-left: 38px!important;
}
hr {
	border: 0;
	border-bottom: 1px solid <?php echo get_pix_option('pix_general_box_bg'); ?>;
	margin: 20px 0 20px -35px;
	padding-left: 35px;
}
.totop {
	position: relative;
}
.totop hr {
	margin: 20px 35px 20px -35px;
}
.totop a {
	background: url(images/arrowtop.png) no-repeat center;
    display: block;
    height: 30px;
	position: absolute;
    right: 0;
    top: -15px;
    width: 35px;
}
/*
 * jQuery UI CSS Framework 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden { display: none; }
.ui-helper-hidden-accessible { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px,1px,1px,1px); }
.ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }
.ui-helper-clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }
.ui-helper-clearfix { display: inline-block; }
/* required comment for clearfix to work in Opera \*/
* html .ui-helper-clearfix { height:1%; }
.ui-helper-clearfix { display:block; }
/* end clearfix */
.ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); }


/* Interaction Cues
----------------------------------*/
.ui-state-disabled { cursor: default !important; }


/* Icons
----------------------------------*/

/* states and images */
.ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; }


/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }


/*
 * jQuery UI CSS Framework 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 *
 * To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Verdana,Arial,sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=4px&bgColorHeader=cccccc&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=75&borderColorHeader=aaaaaa&fcHeader=222222&iconColorHeader=222222&bgColorContent=ffffff&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=aaaaaa&fcContent=222222&iconColorContent=222222&bgColorDefault=e6e6e6&bgTextureDefault=02_glass.png&bgImgOpacityDefault=75&borderColorDefault=d3d3d3&fcDefault=555555&iconColorDefault=888888&bgColorHover=dadada&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=999999&fcHover=212121&iconColorHover=454545&bgColorActive=ffffff&bgTextureActive=02_glass.png&bgImgOpacityActive=65&borderColorActive=aaaaaa&fcActive=212121&iconColorActive=454545&bgColorHighlight=fbf9ee&bgTextureHighlight=02_glass.png&bgImgOpacityHighlight=55&borderColorHighlight=fcefa1&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px
 */


/* Component containers
----------------------------------*/
.ui-widget-content { border: 1px solid #aaaaaa; background: #ffffff url(images/datePicker/ui-bg_flat_75_ffffff_40x100.png) 50% 50% repeat-x; color: #222222; }
.ui-widget-header { border: 1px solid #aaaaaa; background: #cccccc url(images/datePicker/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x; color: #222222; font-weight: bold; }

/* Interaction states
----------------------------------*/
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { border: 1px solid #d3d3d3; background: #e6e6e6 url(images/datePicker/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #555555; }
.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited { color: #555555; text-decoration: none; }
.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus { border: 1px solid #999999; background: #dadada url(images/datePicker/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #212121; }
.ui-state-hover a, .ui-state-hover a:hover { color: #212121; text-decoration: none; }
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { border: 1px solid #aaaaaa; background: #ffffff url(images/datePicker/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #212121; }
.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited { color: #212121; text-decoration: none; }
.ui-widget :active { outline: none; }

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight  {border: 1px solid #fcefa1; background: #fbf9ee url(images/datePicker/ui-bg_glass_55_fbf9ee_1x400.png) 50% 50% repeat-x; color: #363636; }
.ui-state-highlight a, .ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a { color: #363636; }
.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error {border: 1px solid #cd0a0a; background: #fef1ec url(images/datePicker/ui-bg_glass_95_fef1ec_1x400.png) 50% 50% repeat-x; color: #cd0a0a; }
.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a { color: #cd0a0a; }
.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text { color: #cd0a0a; }
.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary { font-weight: bold; }
.ui-priority-secondary, .ui-widget-content .ui-priority-secondary,  .ui-widget-header .ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; }
.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; }

/* Icons
----------------------------------*/

/* states and images */
.ui-icon { width: 16px; height: 16px; background-image: url(images/datePicker/ui-icons_222222_256x240.png); }
.ui-widget-content .ui-icon {background-image: url(images/datePicker/ui-icons_222222_256x240.png); }
.ui-widget-header .ui-icon {background-image: url(images/datePicker/ui-icons_222222_256x240.png); }
.ui-state-default .ui-icon { background-image: url(images/datePicker/ui-icons_888888_256x240.png); }
.ui-state-hover .ui-icon, .ui-state-focus .ui-icon {background-image: url(images/datePicker/ui-icons_454545_256x240.png); }
.ui-state-active .ui-icon {background-image: url(images/datePicker/ui-icons_454545_256x240.png); }
.ui-state-highlight .ui-icon {background-image: url(images/datePicker/ui-icons_2e83ff_256x240.png); }
.ui-state-error .ui-icon, .ui-state-error-text .ui-icon {background-image: url(images/datePicker/ui-icons_cd0a0a_256x240.png); }

/* positioning */
.ui-icon-carat-1-n { background-position: 0 0; }
.ui-icon-carat-1-ne { background-position: -16px 0; }
.ui-icon-carat-1-e { background-position: -32px 0; }
.ui-icon-carat-1-se { background-position: -48px 0; }
.ui-icon-carat-1-s { background-position: -64px 0; }
.ui-icon-carat-1-sw { background-position: -80px 0; }
.ui-icon-carat-1-w { background-position: -96px 0; }
.ui-icon-carat-1-nw { background-position: -112px 0; }
.ui-icon-carat-2-n-s { background-position: -128px 0; }
.ui-icon-carat-2-e-w { background-position: -144px 0; }
.ui-icon-triangle-1-n { background-position: 0 -16px; }
.ui-icon-triangle-1-ne { background-position: -16px -16px; }
.ui-icon-triangle-1-e { background-position: -32px -16px; }
.ui-icon-triangle-1-se { background-position: -48px -16px; }
.ui-icon-triangle-1-s { background-position: -64px -16px; }
.ui-icon-triangle-1-sw { background-position: -80px -16px; }
.ui-icon-triangle-1-w { background-position: -96px -16px; }
.ui-icon-triangle-1-nw { background-position: -112px -16px; }
.ui-icon-triangle-2-n-s { background-position: -128px -16px; }
.ui-icon-triangle-2-e-w { background-position: -144px -16px; }
.ui-icon-arrow-1-n { background-position: 0 -32px; }
.ui-icon-arrow-1-ne { background-position: -16px -32px; }
.ui-icon-arrow-1-e { background-position: -32px -32px; }
.ui-icon-arrow-1-se { background-position: -48px -32px; }
.ui-icon-arrow-1-s { background-position: -64px -32px; }
.ui-icon-arrow-1-sw { background-position: -80px -32px; }
.ui-icon-arrow-1-w { background-position: -96px -32px; }
.ui-icon-arrow-1-nw { background-position: -112px -32px; }
.ui-icon-arrow-2-n-s { background-position: -128px -32px; }
.ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
.ui-icon-arrow-2-e-w { background-position: -160px -32px; }
.ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
.ui-icon-arrowstop-1-n { background-position: -192px -32px; }
.ui-icon-arrowstop-1-e { background-position: -208px -32px; }
.ui-icon-arrowstop-1-s { background-position: -224px -32px; }
.ui-icon-arrowstop-1-w { background-position: -240px -32px; }
.ui-icon-arrowthick-1-n { background-position: 0 -48px; }
.ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
.ui-icon-arrowthick-1-e { background-position: -32px -48px; }
.ui-icon-arrowthick-1-se { background-position: -48px -48px; }
.ui-icon-arrowthick-1-s { background-position: -64px -48px; }
.ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
.ui-icon-arrowthick-1-w { background-position: -96px -48px; }
.ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
.ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
.ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
.ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
.ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
.ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
.ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
.ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
.ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
.ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
.ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
.ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
.ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
.ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
.ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
.ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
.ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
.ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
.ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
.ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
.ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
.ui-icon-arrow-4 { background-position: 0 -80px; }
.ui-icon-arrow-4-diag { background-position: -16px -80px; }
.ui-icon-extlink { background-position: -32px -80px; }
.ui-icon-newwin { background-position: -48px -80px; }
.ui-icon-refresh { background-position: -64px -80px; }
.ui-icon-shuffle { background-position: -80px -80px; }
.ui-icon-transfer-e-w { background-position: -96px -80px; }
.ui-icon-transferthick-e-w { background-position: -112px -80px; }
.ui-icon-folder-collapsed { background-position: 0 -96px; }
.ui-icon-folder-open { background-position: -16px -96px; }
.ui-icon-document { background-position: -32px -96px; }
.ui-icon-document-b { background-position: -48px -96px; }
.ui-icon-note { background-position: -64px -96px; }
.ui-icon-mail-closed { background-position: -80px -96px; }
.ui-icon-mail-open { background-position: -96px -96px; }
.ui-icon-suitcase { background-position: -112px -96px; }
.ui-icon-comment { background-position: -128px -96px; }
.ui-icon-person { background-position: -144px -96px; }
.ui-icon-print { background-position: -160px -96px; }
.ui-icon-trash { background-position: -176px -96px; }
.ui-icon-locked { background-position: -192px -96px; }
.ui-icon-unlocked { background-position: -208px -96px; }
.ui-icon-bookmark { background-position: -224px -96px; }
.ui-icon-tag { background-position: -240px -96px; }
.ui-icon-home { background-position: 0 -112px; }
.ui-icon-flag { background-position: -16px -112px; }
.ui-icon-calendar { background-position: -32px -112px; }
.ui-icon-cart { background-position: -48px -112px; }
.ui-icon-pencil { background-position: -64px -112px; }
.ui-icon-clock { background-position: -80px -112px; }
.ui-icon-disk { background-position: -96px -112px; }
.ui-icon-calculator { background-position: -112px -112px; }
.ui-icon-zoomin { background-position: -128px -112px; }
.ui-icon-zoomout { background-position: -144px -112px; }
.ui-icon-search { background-position: -160px -112px; }
.ui-icon-wrench { background-position: -176px -112px; }
.ui-icon-gear { background-position: -192px -112px; }
.ui-icon-heart { background-position: -208px -112px; }
.ui-icon-star { background-position: -224px -112px; }
.ui-icon-link { background-position: -240px -112px; }
.ui-icon-cancel { background-position: 0 -128px; }
.ui-icon-plus { background-position: -16px -128px; }
.ui-icon-plusthick { background-position: -32px -128px; }
.ui-icon-minus { background-position: -48px -128px; }
.ui-icon-minusthick { background-position: -64px -128px; }
.ui-icon-close { background-position: -80px -128px; }
.ui-icon-closethick { background-position: -96px -128px; }
.ui-icon-key { background-position: -112px -128px; }
.ui-icon-lightbulb { background-position: -128px -128px; }
.ui-icon-scissors { background-position: -144px -128px; }
.ui-icon-clipboard { background-position: -160px -128px; }
.ui-icon-copy { background-position: -176px -128px; }
.ui-icon-contact { background-position: -192px -128px; }
.ui-icon-image { background-position: -208px -128px; }
.ui-icon-video { background-position: -224px -128px; }
.ui-icon-script { background-position: -240px -128px; }
.ui-icon-alert { background-position: 0 -144px; }
.ui-icon-info { background-position: -16px -144px; }
.ui-icon-notice { background-position: -32px -144px; }
.ui-icon-help { background-position: -48px -144px; }
.ui-icon-check { background-position: -64px -144px; }
.ui-icon-bullet { background-position: -80px -144px; }
.ui-icon-radio-off { background-position: -96px -144px; }
.ui-icon-radio-on { background-position: -112px -144px; }
.ui-icon-pin-w { background-position: -128px -144px; }
.ui-icon-pin-s { background-position: -144px -144px; }
.ui-icon-play { background-position: 0 -160px; }
.ui-icon-pause { background-position: -16px -160px; }
.ui-icon-seek-next { background-position: -32px -160px; }
.ui-icon-seek-prev { background-position: -48px -160px; }
.ui-icon-seek-end { background-position: -64px -160px; }
.ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first { background-position: -80px -160px; }
.ui-icon-stop { background-position: -96px -160px; }
.ui-icon-eject { background-position: -112px -160px; }
.ui-icon-volume-off { background-position: -128px -160px; }
.ui-icon-volume-on { background-position: -144px -160px; }
.ui-icon-power { background-position: 0 -176px; }
.ui-icon-signal-diag { background-position: -16px -176px; }
.ui-icon-signal { background-position: -32px -176px; }
.ui-icon-battery-0 { background-position: -48px -176px; }
.ui-icon-battery-1 { background-position: -64px -176px; }
.ui-icon-battery-2 { background-position: -80px -176px; }
.ui-icon-battery-3 { background-position: -96px -176px; }
.ui-icon-circle-plus { background-position: 0 -192px; }
.ui-icon-circle-minus { background-position: -16px -192px; }
.ui-icon-circle-close { background-position: -32px -192px; }
.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-s { background-position: -64px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }
.ui-icon-circle-triangle-n { background-position: -96px -192px; }
.ui-icon-circle-arrow-e { background-position: -112px -192px; }
.ui-icon-circle-arrow-s { background-position: -128px -192px; }
.ui-icon-circle-arrow-w { background-position: -144px -192px; }
.ui-icon-circle-arrow-n { background-position: -160px -192px; }
.ui-icon-circle-zoomin { background-position: -176px -192px; }
.ui-icon-circle-zoomout { background-position: -192px -192px; }
.ui-icon-circle-check { background-position: -208px -192px; }
.ui-icon-circlesmall-plus { background-position: 0 -208px; }
.ui-icon-circlesmall-minus { background-position: -16px -208px; }
.ui-icon-circlesmall-close { background-position: -32px -208px; }
.ui-icon-squaresmall-plus { background-position: -48px -208px; }
.ui-icon-squaresmall-minus { background-position: -64px -208px; }
.ui-icon-squaresmall-close { background-position: -80px -208px; }
.ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
.ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
.ui-icon-grip-solid-vertical { background-position: -32px -224px; }
.ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
.ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
.ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-tl { -moz-border-radius-topleft: 4px; -webkit-border-top-left-radius: 4px; border-top-left-radius: 4px; }
.ui-corner-tr { -moz-border-radius-topright: 4px; -webkit-border-top-right-radius: 4px; border-top-right-radius: 4px; }
.ui-corner-bl { -moz-border-radius-bottomleft: 4px; -webkit-border-bottom-left-radius: 4px; border-bottom-left-radius: 4px; }
.ui-corner-br { -moz-border-radius-bottomright: 4px; -webkit-border-bottom-right-radius: 4px; border-bottom-right-radius: 4px; }
.ui-corner-top { -moz-border-radius-topleft: 4px; -webkit-border-top-left-radius: 4px; border-top-left-radius: 4px; -moz-border-radius-topright: 4px; -webkit-border-top-right-radius: 4px; border-top-right-radius: 4px; }
.ui-corner-bottom { -moz-border-radius-bottomleft: 4px; -webkit-border-bottom-left-radius: 4px; border-bottom-left-radius: 4px; -moz-border-radius-bottomright: 4px; -webkit-border-bottom-right-radius: 4px; border-bottom-right-radius: 4px; }
.ui-corner-right {  -moz-border-radius-topright: 4px; -webkit-border-top-right-radius: 4px; border-top-right-radius: 4px; -moz-border-radius-bottomright: 4px; -webkit-border-bottom-right-radius: 4px; border-bottom-right-radius: 4px; }
.ui-corner-left { -moz-border-radius-topleft: 4px; -webkit-border-top-left-radius: 4px; border-top-left-radius: 4px; -moz-border-radius-bottomleft: 4px; -webkit-border-bottom-left-radius: 4px; border-bottom-left-radius: 4px; }
.ui-corner-all { -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; }

/* Overlays */
.ui-widget-overlay { background: #aaaaaa url(images/datePicker/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x; opacity: .30;filter:Alpha(Opacity=30); }
.ui-widget-shadow { margin: -8px 0 0 -8px; padding: 8px; background: #aaaaaa url(images/datePicker/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x; opacity: .30;filter:Alpha(Opacity=30); -moz-border-radius: 8px; -webkit-border-radius: 8px; border-radius: 8px; }/*
 * jQuery UI Datepicker 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker#theming
 */
.ui-datepicker { width: 17em; padding: .2em .2em 0; display: none; }
.ui-datepicker .ui-datepicker-header { position:relative; padding:.2em 0; }
.ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next { position:absolute; top: 2px; width: 1.8em; height: 1.8em; }
.ui-datepicker .ui-datepicker-prev-hover, .ui-datepicker .ui-datepicker-next-hover { top: 1px; }
.ui-datepicker .ui-datepicker-prev { left:2px; }
.ui-datepicker .ui-datepicker-next { right:2px; }
.ui-datepicker .ui-datepicker-prev-hover { left:1px; }
.ui-datepicker .ui-datepicker-next-hover { right:1px; }
.ui-datepicker .ui-datepicker-prev span, .ui-datepicker .ui-datepicker-next span { display: block; position: absolute; left: 50%; margin-left: -8px; top: 50%; margin-top: -8px;  }
.ui-datepicker .ui-datepicker-title { margin: 0 2.3em; line-height: 1.8em; text-align: center; }
.ui-datepicker .ui-datepicker-title select { font-size:1em; margin:1px 0; }
.ui-datepicker select.ui-datepicker-month-year {width: 100%;}
.ui-datepicker select.ui-datepicker-month, 
.ui-datepicker select.ui-datepicker-year { width: 49%;}
.ui-datepicker table {width: 100%; font-size: .9em; border-collapse: collapse; margin:0 0 .4em; }
.ui-datepicker th { padding: .7em .3em; text-align: center; font-weight: bold; border: 0;  }
.ui-datepicker td { border: 0; padding: 1px; }
.ui-datepicker td span, .ui-datepicker td a { display: block; padding: .2em; text-align: right; text-decoration: none; }
.ui-datepicker .ui-datepicker-buttonpane { background-image: none; margin: .7em 0 0 0; padding:0 .2em; border-left: 0; border-right: 0; border-bottom: 0; }
.ui-datepicker .ui-datepicker-buttonpane button { float: right; margin: .5em .2em .4em; cursor: pointer; padding: .2em .6em .3em .6em; width:auto; overflow:visible; }
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current { float:left; }

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi { width:auto; }
.ui-datepicker-multi .ui-datepicker-group { float:left; }
.ui-datepicker-multi .ui-datepicker-group table { width:95%; margin:0 auto .4em; }
.ui-datepicker-multi-2 .ui-datepicker-group { width:50%; }
.ui-datepicker-multi-3 .ui-datepicker-group { width:33.3%; }
.ui-datepicker-multi-4 .ui-datepicker-group { width:25%; }
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-buttonpane { clear:left; }
.ui-datepicker-row-break { clear:both; width:100%; }

/* RTL support */
.ui-datepicker-rtl { direction: rtl; }
.ui-datepicker-rtl .ui-datepicker-prev { right: 2px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next { left: 2px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-prev:hover { right: 1px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next:hover { left: 1px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-buttonpane { clear:right; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button { float: left; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current { float:right; }
.ui-datepicker-rtl .ui-datepicker-group { float:right; }
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header { border-right-width:0; border-left-width:1px; }
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header { border-right-width:0; border-left-width:1px; }

/* IE6 IFRAME FIX (taken from datepicker 1.5.3 */
.ui-datepicker-cover {
    display: none; /*sorry for IE5*/
    display/**/: block; /*sorry for IE5*/
    position: absolute; /*must have*/
    z-index: -1; /*must have*/
    filter: mask(); /*must have*/
    top: -4px; /*must have*/
    left: -4px; /*must have*/
    width: 200px; /*must have*/
    height: 200px; /*must have*/
}



/*
 * jQuery UI Tabs 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs#theming
 */
.ui-tabs { position: relative; padding: .2em; zoom: 1; border-radius: 0!important; moz-border-radius: 0!important; border-color: #ddd!important; margin:15px 0; } /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */
.ui-tabs .ui-tabs-nav { margin: 0; padding: .2em .2em 0; border-radius: 0!important; moz-border-radius: 0!important; border-color: #ddd!important; background: #eee!important }
.ui-tabs .ui-tabs-nav li { list-style: none; float: left; position: relative; top: 1px; margin: 0 .2em 1px 0; border-bottom: 0 !important; padding: 0; white-space: nowrap; }
.ui-tabs .ui-tabs-nav li a { float: left; padding: .5em 1em; text-decoration: none; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected { margin-bottom: 0; padding-bottom: 1px; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a { cursor: text; }
.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a { cursor: pointer; } /* first selector in group seems obsolete, but required to overcome bug in Opera applying cursor: text overall if defined elsewhere... */
.ui-tabs .ui-tabs-panel { display: block; border-width: 0; padding: 1em 1.4em; background: none; }
.ui-tabs .ui-tabs-hide { display: none !important; }
.ui-tabs .ui-state-default { background: #ddd!important }
.ui-tabs .ui-state-active { background: #fff!important; border-color: #ddd!important }




#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
.cboxPrevent { position:absolute; top:0; left:0; width:100%; height:100% }
#cboxOverlay{position:fixed; width:100%; height:100%;}
#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
#cboxContent{position:relative; overflow:hidden;}
#cboxLoadedContent{overflow:auto;}
#cboxLoadedContent iframe{display:block; width:100%; height:100%; border:0;}
#cboxTitle{margin:0;}
#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%;}
#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}



<?php if(get_pix_option('pix_colorbox_theme')=='whiteonblack') { ?>

#cboxOverlay{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/overlay.png) 0 0 repeat;}
#colorbox{}
    #cboxTopLeft{width:21px; height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -100px 0 no-repeat;}
    #cboxTopRight{width:21px; height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -129px 0 no-repeat;}
    #cboxBottomLeft{width:21px; height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -100px -29px no-repeat;}
    #cboxBottomRight{width:21px; height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -129px -29px no-repeat;}
    #cboxMiddleLeft{width:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) left top repeat-y;}
    #cboxMiddleRight{width:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) right top repeat-y;}
    #cboxTopCenter{height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/border.png) 0 0 repeat-x;}
    #cboxBottomCenter{height:21px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/border.png) 0 -29px repeat-x;}
    #cboxContent{background:#fff;}
        #cboxLoadedContent{margin-bottom:28px;}
        #cboxTitle{position:absolute; bottom:4px; left:0; text-align:center; width:100%; color:#949494;}
        #cboxCurrent{position:absolute; bottom:4px; left:58px; color:#949494;}
        #cboxSlideshow{position:absolute; bottom:4px; right:30px; color:#0092ef;}
        #cboxPrevious{position:absolute; bottom:0; left:0px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -75px 0px no-repeat; width:25px; height:25px; text-indent:-9999px;}
        #cboxPrevious.hover{background-position:-75px -25px;}
        #cboxNext{position:absolute; bottom:0; left:27px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -50px 0px no-repeat; width:25px; height:25px; text-indent:-9999px;}
        #cboxNext.hover{background-position:-50px -25px;}
        #cboxLoadingOverlay{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/loading_background.png) center center no-repeat;}
        #cboxLoadingGraphic{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/loading.gif) center center no-repeat;}
        #cboxClose{position:absolute; bottom:0; right:0; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox1/controls.png) -25px 0px no-repeat; width:25px; height:25px; text-indent:-9999px;}
        #cboxClose.hover{background-position:-25px -25px;}


<?php } elseif(get_pix_option('pix_colorbox_theme')=='black') { ?>

#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
#cboxOverlay{position:fixed; width:100%; height:100%;}
#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
#cboxContent{position:relative;}
#cboxLoadedContent{overflow:auto;}
#cboxTitle{margin:0;}
#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%;}
#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}
.cboxPhoto{float:left; margin:auto; border:0; display:block;}
.cboxIframe{width:100%; height:100%; display:block; border:0;}

/* 
    User Style:
    Change the following styles to modify the appearance of ColorBox.  They are
    ordered & tabbed in a way that represents the nesting of the generated HTML.
*/
#cboxOverlay{background:#000;}
#colorbox{}
    #cboxContent{margin-top:20px;}
        #cboxError{padding:50px; border:1px solid #ccc;}
        #cboxLoadedContent{border:5px solid #000; background:#fff;}
        #cboxTitle{position:absolute; top:-20px; left:0; color:#ccc;}
        #cboxCurrent{position:absolute; top:-20px; right:0px; color:#ccc;}
        #cboxSlideshow{position:absolute; top:-20px; right:90px; color:#fff;}
        #cboxPrevious{position:absolute; top:50%; left:5px; margin-top:-32px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox3/controls.png) no-repeat top left; width:28px; height:65px; text-indent:-9999px;}
        #cboxPrevious.hover{background-position:bottom left;}
        #cboxNext{position:absolute; top:50%; right:5px; margin-top:-32px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox3/controls.png) no-repeat top right; width:28px; height:65px; text-indent:-9999px;}
        #cboxNext.hover{background-position:bottom right;}
        #cboxLoadingOverlay{background:#000;}
        #cboxLoadingGraphic{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox3/loading.gif) no-repeat center center;}
        #cboxClose{position:absolute; top:5px; right:5px; display:block; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox3/controls.png) no-repeat top center; width:38px; height:19px; text-indent:-9999px;}
        #cboxClose.hover{background-position:bottom center;}
		
		
<?php } elseif(get_pix_option('pix_colorbox_theme')=='white') { ?>


#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
#cboxOverlay{position:fixed; width:100%; height:100%;}
#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
#cboxContent{position:relative;}
#cboxLoadedContent{overflow:auto;}
#cboxTitle{margin:0;}
#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%;}
#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}
.cboxPhoto{float:left; margin:auto; border:0; display:block;}
.cboxIframe{width:100%; height:100%; display:block; border:0;}

/* 
    User Style:
    Change the following styles to modify the appearance of ColorBox.  They are
    ordered & tabbed in a way that represents the nesting of the generated HTML.
*/
#cboxOverlay{background:#fff;}
#colorbox{}
    #cboxTopLeft{width:25px; height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) no-repeat 0 0;}
    #cboxTopCenter{height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) repeat-x 0 -50px;}
    #cboxTopRight{width:25px; height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) no-repeat -25px 0;}
    #cboxBottomLeft{width:25px; height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) no-repeat 0 -25px;}
    #cboxBottomCenter{height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) repeat-x 0 -75px;}
    #cboxBottomRight{width:25px; height:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border1.png) no-repeat -25px -25px;}
    #cboxMiddleLeft{width:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border2.png) repeat-y 0 0;}
    #cboxMiddleRight{width:25px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/border2.png) repeat-y -25px 0;}
    #cboxContent{background:#fff; overflow:hidden;}
        #cboxError{padding:50px; border:1px solid #ccc;}
        #cboxLoadedContent{margin-bottom:20px;}
        #cboxTitle{position:absolute; bottom:0px; left:0; text-align:center; width:100%; color:#999;}
        #cboxCurrent{position:absolute; bottom:0px; left:100px; color:#999;}
        #cboxSlideshow{position:absolute; bottom:0px; right:42px; color:#444;}
        #cboxPrevious{position:absolute; bottom:0px; left:0; color:#444;}
        #cboxNext{position:absolute; bottom:0px; left:63px; color:#444;}
        #cboxLoadingOverlay{background:#fff url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/loading.gif) no-repeat 5px 5px;}
        #cboxClose{position:absolute; bottom:0; right:0; display:block; color:#444;}

/*
  The following fixes a problem where IE7+ replaces a PNG's alpha transparency with a black fill
  when an alpha filter (opacity change) is set on the element or ancestor element.
*/
.cboxIE #cboxTopLeft,
.cboxIE #cboxTopCenter,
.cboxIE #cboxTopRight,
.cboxIE #cboxBottomLeft,
.cboxIE #cboxBottomCenter,
.cboxIE #cboxBottomRight,
.cboxIE #cboxMiddleLeft,
.cboxIE #cboxMiddleRight {
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
}

/*
  The following provides PNG transparency support for IE6
*/
.cboxIE6 #cboxTopLeft{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderTopLeft.png);}
.cboxIE6 #cboxTopCenter{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderTopCenter.png);}
.cboxIE6 #cboxTopRight{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderTopRight.png);}
.cboxIE6 #cboxBottomLeft{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderBottomLeft.png);}
.cboxIE6 #cboxBottomCenter{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderBottomCenter.png);}
.cboxIE6 #cboxBottomRight{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderBottomRight.png);}
.cboxIE6 #cboxMiddleLeft{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderMiddleLeft.png);}
.cboxIE6 #cboxMiddleRight{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox4/ie6/borderMiddleRight.png);}

.cboxIE6 #cboxTopLeft,
.cboxIE6 #cboxTopCenter,
.cboxIE6 #cboxTopRight,
.cboxIE6 #cboxBottomLeft,
.cboxIE6 #cboxBottomCenter,
.cboxIE6 #cboxBottomRight,
.cboxIE6 #cboxMiddleLeft,
.cboxIE6 #cboxMiddleRight {
    _behavior: expression(this.src = this.src ? this.src : this.currentStyle.backgroundImage.split('"')[1], this.style.background = "none", this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.src + ", sizingMethod='scale')");
}
		
		
<?php } elseif(get_pix_option('pix_colorbox_theme')=='gray') { ?>


#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
#cboxOverlay{position:fixed; width:100%; height:100%;}
#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
#cboxContent{position:relative;}
#cboxLoadedContent{overflow:auto;}
#cboxTitle{margin:0;}
#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%;}
#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}
.cboxPhoto{float:left; margin:auto; border:0; display:block;}
.cboxIframe{width:100%; height:100%; display:block; border:0;}

/* 
    User Style:
    Change the following styles to modify the appearance of ColorBox.  They are
    ordered & tabbed in a way that represents the nesting of the generated HTML.
*/
#cboxOverlay{background:#000;}
#colorbox{}
    #cboxTopLeft{width:14px; height:14px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) no-repeat 0 0;}
    #cboxTopCenter{height:14px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/border.png) repeat-x top left;}
    #cboxTopRight{width:14px; height:14px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) no-repeat -36px 0;}
    #cboxBottomLeft{width:14px; height:43px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) no-repeat 0 -32px;}
    #cboxBottomCenter{height:43px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/border.png) repeat-x bottom left;}
    #cboxBottomRight{width:14px; height:43px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) no-repeat -36px -32px;}
    #cboxMiddleLeft{width:14px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) repeat-y -175px 0;}
    #cboxMiddleRight{width:14px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) repeat-y -211px 0;}
    #cboxContent{background:#fff; overflow:visible;}
        #cboxLoadedContent{margin-bottom:5px;}
        #cboxLoadingOverlay{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/loading_background.png) no-repeat center center;}
        #cboxLoadingGraphic{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/loading.gif) no-repeat center center;}
        #cboxTitle{position:absolute; bottom:-25px; left:0; text-align:center; width:100%; font-weight:bold; color:#7C7C7C;}
        #cboxCurrent{position:absolute; bottom:-25px; left:58px; font-weight:bold; color:#7C7C7C;}
        
        #cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{position:absolute; bottom:-29px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox5/controls.png) no-repeat 0px 0px; width:23px; height:23px; text-indent:-9999px;}
        #cboxPrevious{left:0px; background-position: -51px -25px;}
        #cboxPrevious.hover{background-position:-51px 0px;}
        #cboxNext{left:27px; background-position:-75px -25px;}
        #cboxNext.hover{background-position:-75px 0px;}
        #cboxClose{right:0; background-position:-100px -25px;}
        #cboxClose.hover{background-position:-100px 0px;}
        
        .cboxSlideshow_on #cboxSlideshow{background-position:-125px 0px; right:27px;}
        .cboxSlideshow_on #cboxSlideshow.hover{background-position:-150px 0px;}
        .cboxSlideshow_off #cboxSlideshow{background-position:-150px -25px; right:27px;}
        .cboxSlideshow_off #cboxSlideshow.hover{background-position:-125px 0px;}
        
        
<?php } else { ?>


#cboxOverlay{background:#fff;}
#colorbox{}
    #cboxContent{margin-top:32px; overflow:visible;}
        #cboxError{padding:50px; border:1px solid #ccc;}
        #cboxLoadedContent{background:#000; padding:1px;}
        #cboxLoadingGraphic{background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox2/loading.gif) no-repeat center center;}
        #cboxLoadingOverlay{background:#000;}
        #cboxTitle{position:absolute; top:-22px; left:0; color:#000;}
        #cboxCurrent{position:absolute; top:-22px; right:205px; text-indent:-9999px;}
        #cboxSlideshow, #cboxPrevious, #cboxNext, #cboxClose{text-indent:-9999px; width:20px; height:20px; position:absolute; top:-20px; background:url(<?php echo get_bloginfo('stylesheet_directory'); ?>/images/colorBox2/controls.png) no-repeat 0 0;}
        #cboxPrevious{background-position:0px 0px; right:44px;}
        #cboxPrevious.hover{background-position:0px -25px;}
        #cboxNext{background-position:-25px 0px; right:22px;}
        #cboxNext.hover{background-position:-25px -25px;}
        #cboxClose{background-position:-50px 0px; right:0;}
        #cboxClose.hover{background-position:-50px -25px;}
        .cboxSlideshow_on #cboxPrevious, .cboxSlideshow_off #cboxPrevious{right:66px;}
        .cboxSlideshow_on #cboxSlideshow{background-position:-75px -25px; right:44px;}
        .cboxSlideshow_on #cboxSlideshow.hover{background-position:-100px -25px;}
        .cboxSlideshow_off #cboxSlideshow{background-position:-100px 0px; right:44px;}
        .cboxSlideshow_off #cboxSlideshow.hover{background-position:-75px -25px;}


<?php } ?>


/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: 2.0.0pre
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Sun May 15 15:19:33 2011 +0100
*/

/* Fluid class for determining actual width in IE */
.ui-tooltip-fluid{
    display: block;
    visibility: hidden;
    position: static !important;
    float: left !important;
}

.ui-tooltip, .qtip{
    position: absolute;
    left: -28000px;
    top: -28000px;
    display: none;

    max-width: 280px;
    min-width: 50px;
    
    font-size: 10.5px;
    line-height: 1.5em;
}

    .ui-tooltip-content{
        position: relative;
        padding: 5px 9px;
        overflow: hidden;
        
        border-width: 1px;
        border-style: solid;
        
        text-align: left;
        word-wrap: break-word;
        overflow: hidden;
    }

    .ui-tooltip-titlebar{
        position: relative;
        min-height: 14px;
        padding: 5px 35px 5px 10px;
        overflow: hidden;
        
        border-width: 1px 1px 0;
        border-style: solid;

        font-weight: bold;
    }

    .ui-tooltip-titlebar + .ui-tooltip-content{ border-top-width: 0px !important; }

        /*! Default close button class */
        .ui-tooltip-titlebar .ui-state-default{
            position: absolute;
            right: 4px;
            top: 50%;
            margin-top: -9px;

            cursor: pointer;
            outline: medium none;

            border-width: 1px;
            border-style: solid;
        }
        
        * html .ui-tooltip-titlebar .ui-state-default{
            top: 16px;
        }

        .ui-tooltip-titlebar .ui-icon,
        .ui-tooltip-icon .ui-icon{
            display: block;
            text-indent: -1000em;
        }

        .ui-tooltip-icon, .ui-tooltip-icon .ui-icon{
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            border-radius: 3px;
        }

            .ui-tooltip-icon .ui-icon{
                width: 18px;
                height: 14px;

                text-align: center;
                text-indent: 0;
                font: normal bold 10px/13px Tahoma,sans-serif;

                color: inherit;
                background: transparent none no-repeat -100em -100em;
            }


/* Applied to 'focused' tooltips e.g. most recently displayed/interacted with */
.ui-tooltip-focus{

}

/* Applied on hover of tooltips i.e. added/removed on mouseenter/mouseleave respectively */
.ui-tooltip-hover{
    
}


/*! Default tooltip style */
.ui-tooltip-titlebar,
.ui-tooltip-content{
    border-color: #F1D031;
    background-color: #FFFFA3;
    color: #555;
}

    .ui-tooltip-titlebar{
        background-color: #FFEF93;
    }

    .ui-tooltip-titlebar .ui-tooltip-icon{
        border-color: #CCC;
        background: #F1F1F1;
        color: #777;
    }
    
    .ui-tooltip-titlebar .ui-state-hover{
        border-color: #AAA;
        color: #111;
    }


/*! Light tooltip style */
.ui-tooltip-light .ui-tooltip-titlebar,
.ui-tooltip-light .ui-tooltip-content{
    border-color: #E2E2E2;
    color: #454545;
}

    .ui-tooltip-light .ui-tooltip-content{
        background-color: white;
    }

    .ui-tooltip-light .ui-tooltip-titlebar{
        background-color: #f1f1f1;
    }


/*! Dark tooltip style */
.ui-tooltip-dark .ui-tooltip-titlebar,
.ui-tooltip-dark .ui-tooltip-content{
    border-color: #303030;
    color: #f3f3f3;
}

    .ui-tooltip-dark .ui-tooltip-content{
        background-color: #505050;
    }

    .ui-tooltip-dark .ui-tooltip-titlebar{
        background-color: #404040;
    }

    .ui-tooltip-dark .ui-tooltip-icon{
        border-color: #444;
    }

    .ui-tooltip-dark .ui-tooltip-titlebar .ui-state-hover{
        border-color: #303030;
    }


/*! Cream tooltip style */
.ui-tooltip-cream .ui-tooltip-titlebar,
.ui-tooltip-cream .ui-tooltip-content{
    border-color: #F9E98E;
    color: #A27D35;
}

    .ui-tooltip-cream .ui-tooltip-content{
        background-color: #FBF7AA;
    }

    .ui-tooltip-cream .ui-tooltip-titlebar{
        background-color: #F0DE7D;
    }

    .ui-tooltip-cream .ui-state-default .ui-tooltip-icon{
        background-position: -82px 0;
    }


/*! Red tooltip style */
.ui-tooltip-red .ui-tooltip-titlebar,
.ui-tooltip-red .ui-tooltip-content{
    border-color: #D95252;
    color: #912323;
}

    .ui-tooltip-red .ui-tooltip-content{
        background-color: #F78B83;
    }

    .ui-tooltip-red .ui-tooltip-titlebar{
        background-color: #F06D65;
    }

    .ui-tooltip-red .ui-state-default .ui-tooltip-icon{
        background-position: -102px 0;
    }

    .ui-tooltip-red .ui-tooltip-icon{
        border-color: #D95252;
    }

    .ui-tooltip-red .ui-tooltip-titlebar .ui-state-hover{
        border-color: #D95252;
    }


/*! Green tooltip style */
.ui-tooltip-green .ui-tooltip-titlebar,
.ui-tooltip-green .ui-tooltip-content{
    border-color: #90D93F;
    color: #3F6219;
}

    .ui-tooltip-green .ui-tooltip-content{
        background-color: #CAED9E;
    }

    .ui-tooltip-green .ui-tooltip-titlebar{
        background-color: #B0DE78;
    }

    .ui-tooltip-green .ui-state-default .ui-tooltip-icon{
        background-position: -42px 0;
    }


/*! Blue tooltip style */
.ui-tooltip-blue .ui-tooltip-titlebar,
.ui-tooltip-blue .ui-tooltip-content{
    border-color: #ADD9ED;
    color: #5E99BD;
}

    .ui-tooltip-blue .ui-tooltip-content{
        background-color: #E5F6FE;
    }

    .ui-tooltip-blue .ui-tooltip-titlebar{
        background-color: #D0E9F5;
    }

    .ui-tooltip-blue .ui-state-default .ui-tooltip-icon{
        background-position: -2px 0;
    }.ui-tooltip .ui-tooltip-tip{
    margin: 0 auto;
    overflow: hidden;

    background: transparent !important;
    border: 0px dashed transparent !important;
    z-index: 10;
}

    .ui-tooltip .ui-tooltip-tip,
    .ui-tooltip .ui-tooltip-tip *{
        position: absolute;
        
        line-height: 0.1px !important;
        font-size: 0.1px !important;
        color: #123456;

        background: transparent;
        border: 0px dashed transparent;
    }

    .ui-tooltip .ui-tooltip-tip canvas{ position: static; }#qtip-overlay{
    position: absolute;
    left: -10000em;
    top: -10000em;

    background-color: black;

    opacity: 0.7;
    filter:alpha(opacity=70);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
}

/*! Add shadows to your tooltips in: FF3+, Chrome 2+, Opera 10.6+, IE6+, Safari 2+ */
.ui-tooltip-shadow{
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

    .ui-tooltip-shadow .ui-tooltip-titlebar,
    .ui-tooltip-shadow .ui-tooltip-content{
        filter: progid:DXImageTransform.Microsoft.Shadow(Color='gray', Direction=135, Strength=3);
        -ms-filter:"progid:DXImageTransform.Microsoft.Shadow(Color='gray', Direction=135, Strength=3)";

        _margin-bottom: -3px; /* IE6 */
        .margin-bottom: -3px; /* IE7 */
    }


/*! Add rounded corners to your tooltips in: FF3+, Chrome 2+, Opera 10.6+, IE9+, Safari 2+ */
.ui-tooltip-rounded,
.ui-tooltip-rounded .ui-tooltip-content,
.ui-tooltip-tipsy,
.ui-tooltip-tipsy .ui-tooltip-content,
.ui-tooltip-youtube,
.ui-tooltip-youtube .ui-tooltip-content{
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
}

.ui-tooltip-rounded .ui-tooltip-titlebar,
.ui-tooltip-tipsy .ui-tooltip-titlebar,
.ui-tooltip-youtube .ui-tooltip-titlebar{
    -moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
}

.ui-tooltip-rounded .ui-tooltip-titlebar + .ui-tooltip-content,
.ui-tooltip-tipsy .ui-tooltip-titlebar + .ui-tooltip-content,
.ui-tooltip-youtube .ui-tooltip-titlebar + .ui-tooltip-content{
    -moz-border-radius: 0 0 5px 5px;
    -webkit-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
}


/*! Youtube tooltip style */
.ui-tooltip-youtube{
    -webkit-box-shadow: 0 0 3px #333;
    -moz-box-shadow: 0 0 3px #333;
    box-shadow: 0 0 3px #333;
}

    .ui-tooltip-youtube .ui-tooltip-titlebar,
    .ui-tooltip-youtube .ui-tooltip-content{
        background: transparent;
        background: rgba(0, 0, 0, 0.85);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#D9000000,endColorstr=#D9000000);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#D9000000,endColorstr=#D9000000)";

        color: white;
        border-color: #ccc;
    }

    .ui-tooltip-youtube .ui-tooltip-icon{
        border-color: #222;
    }

    .ui-tooltip-youtube .ui-tooltip-titlebar .ui-state-hover{
        border-color: #303030;
    }


/* jQuery TOOLS Tooltip style */
.ui-tooltip-jtools{
    background: #232323;
    background: rgba(0, 0, 0, 0.7);
    background-image: -moz-linear-gradient(top, #717171, #232323);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#717171), to(#232323));
    
    border: 2px solid #ddd;
    border: 2px solid rgba(241,241,241,1);

    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;

    -webkit-box-shadow: 0 0 12px #333;
    -moz-box-shadow: 0 0 12px #333;
    box-shadow: 0 0 12px #333;
}

    /* IE Specific */
    .ui-tooltip-jtools .ui-tooltip-titlebar{
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#717171,endColorstr=#4A4A4A);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#717171,endColorstr=#4A4A4A)";
    }
    .ui-tooltip-jtools .ui-tooltip-content{
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4A4A4A,endColorstr=#232323);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#4A4A4A,endColorstr=#232323)";
    }

    .ui-tooltip-jtools .ui-tooltip-titlebar,
    .ui-tooltip-jtools .ui-tooltip-content{
        background: transparent;
        color: white;
        border: 0 dashed transparent;
    }

    .ui-tooltip-jtools .ui-tooltip-icon{
        border-color: #555;
    }

    .ui-tooltip-jtools .ui-tooltip-titlebar .ui-state-hover{
        border-color: #333;
    }


/* Cluetip style */

    .ui-tooltip-cluetip .ui-tooltip-content{
        background-color: #D9D9C2;
        color: #111;
        border: 0 dashed transparent;
    }
    
    .ui-tooltip-cluetip .ui-tooltip-icon{
        border-color: #808064;
    }
    
    .ui-tooltip-cluetip .ui-tooltip-titlebar .ui-state-hover{
        border-color: #696952;
        color: #696952;
    }


/* Tipsy style */
.ui-tooltip-tipsy{
    border: 0;
}

    .ui-tooltip-tipsy .ui-tooltip-titlebar,
    .ui-tooltip-tipsy .ui-tooltip-content{
        background: transparent;
        background: rgba(0, 0, 0, .87);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#D9000000,endColorstr=#D9000000);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#D9000000,endColorstr=#D9000000)";
        
        color: white;
        border: 0px transparent;

        font-size: 11px;
        font-family: 'Lucida Grande', sans-serif;
        font-weight: bold;
        line-height: 16px;
        text-shadow: 0 1px black;
    }

    .ui-tooltip-tipsy .ui-tooltip-titlebar{
        padding: 6px 35px 0 10;
    }

    .ui-tooltip-tipsy .ui-tooltip-content{
        padding: 6px 10;
    }
    
    .ui-tooltip-tipsy .ui-tooltip-icon{
        border-color: #222;
        text-shadow: none;
    }

    .ui-tooltip-tipsy .ui-tooltip-titlebar .ui-state-hover{
        border-color: #303030;
    }


/* Tipped style */
.ui-tooltip-tipped{

}
    
    .ui-tooltip-tipped .ui-tooltip-titlebar,
    .ui-tooltip-tipped .ui-tooltip-content{
        border: 3px solid #959FA9;
    }

    .ui-tooltip-tipped .ui-tooltip-titlebar{
        background: #3A79B8;
        background-image: -moz-linear-gradient(top, #3A79B8, #2E629D);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#3A79B8), to(#2E629D));
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3A79B8,endColorstr=#2E629D);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#3A79B8,endColorstr=#2E629D)";

        color: white;
        font-weight: normal;
        font-family: serif;

        border-bottom-width: 0;
        -moz-border-radius: 3px 3px 0 0;
        -webkit-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;
    }
    
    .ui-tooltip-tipped .ui-tooltip-content{
        background-color: #F9F9F9;
        color: #454545;

        -moz-border-radius: 0 0 3px 3px;
        -webkit-border-radius: 0 0 3px 3px;
        border-radius: 0 0 3px 3px;
    }

    .ui-tooltip-tipped .ui-tooltip-icon{
        border: 2px solid #285589;
        background: #285589;
    }
        
        .ui-tooltip-tipped .ui-tooltip-icon .ui-icon{
            background-color: #FBFBFB;
            color: #555;
        }



/*
Theme Name: Applicious
Theme URI: http://themes.projekktor.com/eklektik
Description: This is inspired by something I dont know.
Author: Johnny Flash
Author URI:http://www.90revolutions.com

under GNU General Public License
http://www.projekktor.com/license/
*/

.projekktor {
    overflow:hidden;
    background-color:#000;
    font-family: 'Lucida Grande', Arial, Sans-Serif;
    position:relative; /* !!! */
    padding:0;
    margin:0;
    display:block;    /* !!! */
}

.ppcontrols {
    position: absolute; /* !!! */
    left: 50%;
    bottom: 0;
    margin-left:-210px;
    display: block;
    width: 420px;
    height: 87px;
    background: transparent url(images/eklektik.png) 0 0 no-repeat;
    z-index:8000;
    padding: 0px;
}

.pplogo.inactive,
.ppstart.inactive,
.ppbuffering.inactive,
.ppcontrols.inactive,
.ppplay.inactive,
.pppause.inactive,
.ppfsenter.inactive,
.ppfsexit.inactive,
.ppprev.inactive,
.ppnext.inactive {
    display: none;
}

.pplogo.active,
.ppstart.active,
.ppbuffering.active,
.ppcontrols.active,
.ppplay.active,
.pppause.active,
.ppfsenter.active,
.ppfsexit.active,
.ppprev.active,
.ppnext.active {
    display: block;
}


.ppfsexit {
    display:block;
    position: absolute;
    left: 380px;
    top: 13px;
    background: transparent url(images/eklektik.png) -420px -30px no-repeat;
    width: 27px;
    height: 22px;
    cursor: pointer;
}

.ppfsexit:hover {
    background: transparent url(images/eklektik.png) -457px -30px no-repeat;
}

.ppfsenter {
    display:block;
    position: absolute;
    left: 380px;
    top: 13px;
    background: transparent url(images/eklektik.png) -420px 0px no-repeat;
    width: 27px;
    height: 22px;
    cursor: pointer;
}
.ppfsenter:hover {
    background: transparent url(images/eklektik.png) -457px 0px no-repeat;
}


.ppplay{
    display:block;
    position: absolute;
    top: 11px;
    left: 192px;
    /*background: transparent url(images/eklektik.png) -825px 0 no-repeat;*/
    background: transparent url(images/eklektik.png) -619px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;
}

.pppause:hover {
    /*background: transparent url(images/eklektik.png) -781px 0 no-repeat;*/
    background: transparent url(images/eklektik.png) -585px 0 no-repeat;
}



.pppause  {
    display:none;
    position: absolute;
    top: 11px;
    left: 192px;
    /*background: transparent url(images/eklektik.png) -737px 0 no-repeat;*/
    background: transparent url(images/eklektik.png) -551px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;
}

.ppplay:hover {
    /*background: transparent url(images/eklektik.png) -869px 0 no-repeat;*/
	background: transparent url(images/eklektik.png) -653px 0 no-repeat;
}



.ppnext {
    position: absolute;
    top: 11px;
    left: 232px;
    background: transparent url(images/eklektik.png) -484px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;

}

.ppnext:hover {
    background: transparent url(images/eklektik.png) -517px 0 no-repeat;
}

.ppprev {
    position: absolute;
    top: 11px;
    left: 153px;
    background: transparent url(images/eklektik.png) -687px 0 no-repeat;
    width: 34px;
    height: 27px;
}

.ppprev:hover {
    background: transparent url(images/eklektik.png) -721px 0 no-repeat;
}

.pptitle {
    position: absolute;
    top: 20px;
    left: 10px;
    height: 15px;
    width: 400px;
    cursor: pointer;
    text-align:center;
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    font-weight: bold;
    color: #0087ef;
    visibility: hidden;
}

.pptimeleft {
    position: absolute;
    top:14px;
    left: 290px;
    height: 15px;
    width: 75px;
    cursor: pointer;
    text-align:left;
    font-size: 9px;
    color: #fff;
}


.ppscrubber {
    position: absolute;
    top: 44px;
    left: 62px;
    height: 8px;
    width: 293px;
    cursor: pointer;
}

.ppplayhead, .pploaded {
    z-index: 101;
    position: absolute;
    bottom:0;
    height: 8px;
    width: 1px;
    background-color: #0087ef;
    cursor: pointer;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
}

.pploaded {
    z-index: 100;
    background: transparent url(images/loaded.png) repeat-x;
}


.ppvslider {
    position: absolute;
    top:20px;
    left:30px;
    height: 10px;
    width: 80px;
}

.ppvmarker {
    position: absolute;
    top:0;
    left:0;
    height: 10px;
    width: 100%;
}

.ppvknob  {
    cursor: pointer;
    z-index: 201;
    position: absolute;
    background: transparent url(images/eklektik.png) -1552px 0 no-repeat;
    top:-4px;
    left:0px;
    width: 17px;
    height: 17px;
}

.ppvknob:hover  {
    background: transparent url(images/eklektik.png) -1577px 0px no-repeat;
}






.ppvmax  {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:116px;
	width: 22px;
	height: 25px;
	background: transparent url(images/eklektik.png) -1329px 0px no-repeat;
}

.ppvmax:hover {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:116px;
	width: 22px;
	height: 25px;
	background: transparent url(images/eklektik.png) -1354px 0px no-repeat;
}


.ppmute  {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:10px;
	width: 17px;
	height: 18px;
	background: transparent url(images/eklektik.png) -1518px 0px no-repeat;
}

.ppmute:hover  {
	background: transparent url(images/eklektik.png) -1534px 0px no-repeat;
}

.pptestcard {
    background: transparent url(images/testcard.jpg) center center no-repeat;
    width: 100%;
    height: 100%;
    color: red;
    font-weight: bold;
    font-size: 24px;
    overflow: hidden;
}


.ppbuffering {
    position: relative;
    left: 50%;
    top: 50%;
    margin-left:-30px;
    margin-top: -30px;
    display: block;
    z-index:8000;
    padding: 0px;
    background: #F6F6F6 url(images/buffering.gif) center center no-repeat;
    height: 60px;
    width: 60px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    display: none;
}

.ppstart {
    position: relative;
    left: 50%;
    top: 50%;
    margin-left:-40px;
    margin-top: -40px;
    display: block;
    z-index:8000;
    padding: 0px;
    background: transparent url(images/start.png) center center no-repeat;
    cursor: pointer;
    height: 80px;
    width: 80px;
}

.pptestcard p {
    background-color: #fdfdfd;
    width: 50%;
    margin: auto;
    line-height: 25px;
    position: relative;
    top: 40%;
    padding: 10px;
    border:5px solid #000;
    text-align: center;
}


<?php echo stripslashes(get_pix_option( 'pix_custom_style')  ); ?>

