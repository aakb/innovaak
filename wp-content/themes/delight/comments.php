<?php
/**
 * @package WordPress
 * @subpackage Delight
 */

	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if ( post_password_required() ) { ?>
		<p class="nocomments"><?php _e('This post is password protected','delight'); ?></p>
	<?php
		return;
	}
?>

<div id="comments">
<?php 
global $custom_payoff; $meta_title = get_post_meta(get_the_ID(), $custom_payoff->get_the_id(), TRUE);
if($meta_title['payoff']!='') {
	$the_title = $meta_title['payoff'];
} else {
	$the_title = get_the_title();
}

if ( have_comments() ) : ?>
                
                
                <h3>
					<?php printf ( __('%1$s to &#8220;%2$s&#8221;', 'delight' ),
									sprintf( _n( '1 comment', '%1$s comments', get_comments_number(), 'delight' ), number_format_i18n( get_comments_number() ) ),
									get_the_title()
								);
					?></h3>

                <ul class="commentlist">
                	<?php wp_list_comments('callback=pix_comment'); ?>
                </ul><!-- .commentlist -->
                
                
<?php endif; ?>


<?php if ( comments_open() ) : ?>

				<?php do_action( 'comment_form_before' ); ?>
                <div id="respond">

                    <h3 id="reply-title"><?php _e('Reply','delight'); ?> <span class="buttonspan medium alignright"><?php cancel_comment_reply_link( __('Cancel','delight') ); ?></span></h3>
                    
					<?php if ( get_pix_option( 'comment_registration' ) && !is_user_logged_in() ) : ?>
                        <?php echo $args['must_log_in']; ?>
                        <?php do_action( 'comment_form_must_log_in_after' ); ?>
                    <?php else : ?>

			
                    <form action="<?php echo site_url( '/wp-comments-post.php' ); ?>" method="post" class="commentform">
                        <fieldset>
<?php if ( is_user_logged_in() ) : ?>

<p><?php echo stripslashes(get_pix_option('pix_transl_logged_in_as')); ?> <a href="<?php echo get_pix_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="<?php echo stripslashes(get_pix_option('pix_transl_log_out_of_this_account')); ?>"><?php _e('Logout','delight'); ?> &raquo;</a></p>

<?php else : ?>

                           <label for="author"><?php _e('Name:','delight'); ?></label>
                            <input type="text" name="author" id="author" value="<?php echo esc_attr($comment_author); ?>" tabindex="1">
                            
                            <label for="email"><?php _e('Email:','delight'); ?></label>
                            <input type="text" name="email" id="email" value="<?php echo esc_attr($comment_author_email); ?>" tabindex="2">
                            
                            <label for="url"><?php _e('Website:','delight'); ?></label>
                            <input type="text" name="url" id="url" value="<?php echo esc_attr($comment_author_url); ?>" tabindex="3">
                            
<?php endif; ?>

                            <label for="comment"><?php _e('Comment:','delight'); ?></label>
                            <textarea class="textarea" name="comment" id="comment" tabindex="4"></textarea>
                            
                            <input class="button medium alignleft" name="submit" type="submit" id="submit" tabindex="5" value="<?php _e('Leave a comment','delight'); ?>"><?php comment_id_fields(); ?>
                        </fieldset>
						<?php do_action( 'comment_form', $post_id ); ?>
					</form>
				<?php endif; ?>
                </div><!-- #respond -->
			<?php do_action( 'comment_form_after' ); ?>
                    

<?php endif;  ?>
</div><!-- #comments -->