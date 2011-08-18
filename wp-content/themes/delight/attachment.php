<?php
/**
 * @package WordPress
 * @subpackage Delight
 */

get_header(); ?>


<section>

<?php
	$class = 'open_toggle';
	$width = 'seveneighty';
	$size_th = 'wideCol';
?>
	<article class="<?php echo $class.' '.$width; ?>">
    	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
            <h1 class="entry-title"><?php echo the_title(); ?></h1>
            
            <?php if ( wp_attachment_is_image() ) { ?>
					<a href="<?php echo wp_get_attachment_url($post->ID); ?>"><?php echo wp_get_attachment_image( $post->ID, 'large' ); ?></a>
			<?php } ?>

                        
		<?php the_content(); ?>
        <?php edit_post_link( __( 'Edit','delight' ), '<span class="edit-link">', '</span>' ); ?>
            


		<?php comments_template( '', true ); ?>


<?php endwhile; ?>
        </div>
    </article>


</section>
<?php get_footer(); ?>
