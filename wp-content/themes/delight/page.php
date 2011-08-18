<?php
/**
 * @package WordPress
 * @subpackage Delight
 */

get_header(); ?>


<section>
<?php 
global $custom_options; 
global $custom_payoff; 
global $custom_blog; 
global $posts_per_page;

$meta_options = get_post_meta(get_the_ID(), $custom_options->get_the_id(), TRUE);
$meta_title = get_post_meta(get_the_ID(), $custom_payoff->get_the_id(), TRUE);
$meta_blog = get_post_meta(get_the_ID(), $custom_blog->get_the_id(), TRUE);

if ($meta_options['sliding_page']!= 'never') {

if ($meta_options['sidebar_position']== 'left'||($meta_options['sidebar_position']=='default' && get_pix_option('pix_general_sidebar')=='leftsidebar')) { 
get_sidebar();
}
wp_reset_query();
?>

<?php
if($meta_title['payoff']!='') {
	$the_title = $meta_title['payoff'];
} else {
	$the_title = get_the_title();
}


if ($meta_options['sliding_page']== 'open') { 
	$class = 'open_toggle';
} elseif (($meta_options['sliding_page']== 'default' || $meta_options['sliding_page']== '') && get_pix_option('pix_sliding_page')=='open') {
	$class = 'open_toggle';
} elseif ($meta_options['sliding_page']== 'always') { 
	$class = 'open_toggle always_open';
} elseif (($meta_options['sliding_page']== 'default' || $meta_options['sliding_page']== '') && get_pix_option('pix_sliding_page')=='always') {
	$class = 'open_toggle always_open';
}

if(($meta_options['sidebar_position']=='nosidebar' && $meta_options['main_column'] == 'right')||$meta_options['sidebar_position']== 'left'){ 
	$left = 'margin-right';
} elseif (($meta_options['sidebar_position']=='default' || $meta_options['sidebar_position']=='') && (get_pix_option('pix_general_sidebar')=='leftsidebar' || (get_pix_option('pix_general_sidebar')=='nosidebar' && get_pix_option('pix_general_template')=='right'))) {
	$left = 'margin-right';
}

if(( ($meta_options['sidebar_position']=='nosidebar') && $meta_options['main_column'] == 'wide')||( ($meta_options['sidebar_position']=='default'||$meta_options['sidebar_position']=='')  && get_pix_option('pix_general_sidebar')=='nosidebar' && get_pix_option('pix_general_template') == 'wide')){ $width = 'seveneighty'; $size_th = 'wideCol'; $sizes = '&amp;h=399&amp;w=708'; $new_size= ' style="width:708px; height:399px;"'; } else { $size_th = 'narrowCol'; $sizes = '&amp;h=240&amp;w=427'; $new_size= ' style="width:427px; height:240px;"'; }
?>
	<article class="<?php echo $class.' '.$left.' '.$width; ?>">
    	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        <?php if($meta_blog['blogpage']=='yes') { ?>
        
<?php /*_______________________________##START BLOG##_______________________________*/ ?>
        			<?php 
		$my_query = null;
		if($meta_blog['ppp']==''){
			$ppp = $posts_per_page;
		} else {
			$ppp = $meta_blog['ppp'];
			$posts_per_page = $ppp;
		}
				$my_query = new WP_Query('cat='.$meta_blog['categories'].'&paged=' . $paged.'&posts_per_page='.$ppp);
				$my2_query = new WP_Query('cat='.$meta_blog['categories'].'&posts_per_page=-1');
        ?>
<?php if ($my_query->have_posts()) : ?>
				<?php if ( is_front_page() ) { ?>
                    <h2 class="entry-title"><?php echo $the_title; ?></h2>
                <?php } else { ?>
                    <h1 class="entry-title"><?php echo $the_title; ?></h1>
                <?php } ?>
                
				<?php 	global $page, $paged;
					if ( get_query_var('paged') ) {
						$paged = get_query_var('paged');
					} else if ( get_query_var('page') ) {
						$paged = get_query_var('page');
					} else {
						$paged = 1;
					}
				if($paged==1) { 
					if($meta_title['subtitle']!=''){?><p class="subtitle"><?php echo $meta_title['subtitle']; ?></p><?php }
					the_content();
				} ?>
            <?php while ( $my_query->have_posts() ) : $my_query->the_post();
    $meta_options_post = get_post_meta(get_the_ID(), $custom_options->get_the_id(), TRUE);
    $meta_title_post = get_post_meta(get_the_ID(), $custom_payoff->get_the_id(), TRUE);
    
    if($meta_title_post['payoff']!='') {
        $the_title = $meta_title_post['payoff'];
    } else {
        $the_title = get_the_title();
    }
             ?>
    
            <div id="post-<?php the_ID(); ?>" <?php post_class('hentry'); ?>>
                    <h3><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php echo get_the_title(); ?>"><?php echo $the_title; ?></a></h3>
				<?php if(get_pix_option('pix_archive_show_postmetadata')=='show') { ?>
                    <div class="postmetadata">
                        <span>
                            <?php echo get_the_date(); ?>
                        </span>
                        <?php delight_posted_on(); ?>
                    </div><!-- .postmetadata -->
				<?php }// show postmetadata ?>
                
                <?php if($meta_title_post['subtitle']!=''){?><p class="subtitle"><?php echo $meta_title_post['subtitle']; ?></p><?php } ?>
                <?php if(has_post_thumbnail()) {
					$image_id = get_post_thumbnail_id();  
					$image_url = wp_get_attachment_image_src($image_id,'full');  
					$image_url = $image_url[0]; 
					$imgdata = wp_get_attachment_image_src( get_post_thumbnail_id(), $size_th );
                    ?><div class="imgHentry"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/scripts/timthumb.php?src=<?php echo $imgdata[0].$sizes; ?>" style="display:block" alt=""><div class="linkIcon"<?php echo $new_size; ?>>
				<?php if(get_pix_option('pix_frontpage_posts_image_link')=='') { ?>
                	<a href="<?php the_permalink(); ?>" class="goto-icon"<?php echo $new_size; ?>></a>
                <?php } else {
					
					if (get_pix_option('pix_frontpage_posts_image_link') == 'both'){
						if($size_th == 'wideCol') {
							$imgwidth = 708*0.5;
							$imgheight = 399;
						} else {
							$imgwidth = 427*0.5;
							$imgheight = 240;
						}
					} else {
						if($size_th == 'wideCol') {
							$imgwidth = 708;
							$imgheight = 399;
						} else {
							$imgwidth = 427;
							$imgheight = 240;
						}
					}
					
					if(get_pix_option('pix_frontpage_posts_image_link')=='enlarge' || get_pix_option('pix_frontpage_posts_image_link')=='both' ) { ?><a href="<?php echo $image_url; ?>" class="enlarge-icon" data-rel="portfolio" style="width:<?php echo $imgwidth; ?>px; height:<?php echo $imgheight; ?>px;">&nbsp;</a><?php } ?>
                    <?php if(get_pix_option('pix_frontpage_posts_image_link')=='goto' || get_pix_option('pix_frontpage_posts_image_link')=='both') { ?><a href="<?php the_permalink(); ?>" class="goto-icon" style="width:<?php echo $imgwidth; ?>px; height:<?php echo $imgheight; ?>px;">&nbsp;</a><?php } ?>
                <?php } ?>
                    </div></div><!-- .imgHentry --><?php
				} ?>
				<?php if($meta_blog['content_excerpt']=='excerpt') { custom_the_excerpt(get_pix_option('pix_frontpage_length_excerpt'), __('Read more','delight')); } else { global $more; $more = 0; the_content(__('Read more','delight')); } ?>
                <div class="clear"></div>
            </div>
		<?php endwhile; ?>
<?php if(function_exists('pix_pagenavi')) { pix_pagenavi($my2_query->post_count);} wp_reset_query(); ?>
<?php endif; ?>

<?php /*_______________________________##END BLOG##_______________________________*/ ?>
        
        <?php } else { ?>
            
<?php /*_______________________________##START PAGE##_______________________________*/ ?>
		<?php if ( is_front_page() ) { ?>
            <h2 class="entry-title"><?php echo $the_title; ?></h2>
        <?php } else { ?>
            <h1 class="entry-title"><?php echo $the_title; ?></h1>
        <?php } ?>
        <div id="breadcrumb">
            <?php pix_breadcrumbs(); ?>
        </div><!-- #breadcrumb -->
        
		<?php if($meta_title['subtitle']!=''){?><p class="subtitle"><?php echo $meta_title['subtitle']; ?></p><?php } ?>
		<?php the_content(); ?>


        <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:','delight' ), 'after' => '</div>' ) ); ?>
        <?php edit_post_link( __( 'Edit','delight' ), '<div class="clear"></div>', '' ); ?>
        
        
        
        

<?php if(!is_front_page() && get_pix_option('pix_page_show_share_section')=='show') { ?>
<h3><?php _e('Share','delight'); ?></h3>
<div class="pix_share">
<?php if(get_pix_option('pix_page_share_type')=='counter') { ?>
	<div class="alignleft">
		<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
        <a href="http://twitter.com/share" class="twitter-share-button">Tweet</a>
    </div>
    <div id="fb-root" class="alignleft"></div><script src="http://connect.facebook.net/<?php $lang = WPLANG; if(!empty($lang)) { echo $lang; } else { echo 'en_US'; } ?>/all.js#appId=167999456606546&amp;xfbml=1"></script><fb:like href="" send="true" layout="button_count" width="200" show_faces="true" font=""></fb:like>
    <div class="alignleft" style="width:75px; overflow:hidden">
		<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
        <div class="g-plusone" data-size="medium" data-count="true"></div>
    </div>
<?php } else { ?>
<?php $turl = getTinyUrl(get_permalink()); ?><a href="http://twitter.com/share?text=<?php echo urlencode(get_the_title());?>&amp;url=<?php echo $turl; ?>" target="_blank" title="<?php _e('Twitter','delight'); ?>"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/twitter-icon.png" width="21" height="21" alt="<?php _e('Twitter','delight'); ?>"></a>

<a href="http://www.facebook.com/share.php?u=<?php echo $turl; ?>&amp;t=<?php echo urlencode(get_the_title());?>" target="_blank" title="<?php _e('Facebook','delight'); ?>"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/facebook-icon.png" width="21" height="21" alt="<?php _e('Facebook','delight'); ?>"></a>

<a href="http://delicious.com/post?url=<?php echo $turl; ?>&amp;title=<?php echo urlencode(get_the_title());?>&amp;notes=<?php echo urlencode(get_the_excerpt()); ?>" title="<?php _e('Del.icio.us','delight'); ?>" target="_blank"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/delicious-icon.png" width="21" height="21" alt="<?php _e('Del.icio.us','delight'); ?>"></a>

<a href="http://digg.com/submit?phase=2&amp;url=<?php echo $turl; ?>&amp;title=<?php echo urlencode(get_the_title());?>&amp;bodytext=<?php echo urlencode(get_the_excerpt()); ?>" target="_blank" title="<?php _e('Digg','delight'); ?>"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/digg-icon.png" width="21" height="21" alt="<?php _e('Digg','delight'); ?>"></a>

<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $turl; ?>&amp;title=<?php echo urlencode(get_the_title());?>&amp;source=<?php echo urlencode(get_bloginfo('name')); ?>&amp;summary=<?php echo urlencode(get_the_excerpt()); ?>" target="_blank" title="<?php _e('LinkedIn','delight'); ?>"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/linkedin-icon.png" width="21" height="21" alt="<?php _e('LinkedIn','delight'); ?>"></a>

<a href="http://www.stumbleupon.com/submit?url=<?php echo get_permalink(); ?>&amp;title=<?php echo urlencode(get_the_title());?>" target="_blank" title="<?php _e('StumbleUpon','delight'); ?>"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/stumbleupon-icon.png" width="21" height="21" alt="<?php _e('StumbleUpon','delight'); ?>"></a>
<?php } ?>
</div><!-- .pix_share -->
<?php } //!is_front_page && show share section ?>

		<?php comments_template( '', true ); ?>

<?php /*_______________________________##END PAGE##_______________________________*/ ?>

        <?php } ?>

<?php endwhile; ?>
            
        </div>
    </article>

<?php 

if ($meta_options['sidebar_position']== 'right'||(($meta_options['sidebar_position']=='default' || $meta_options['sidebar_position']=='') && get_pix_option('pix_general_sidebar')=='rightsidebar')) { 
get_sidebar();
}
wp_reset_query();

} // end if ($meta_options['sliding_page']!= 'never')
?>

</section>
<?php get_footer(); ?>
