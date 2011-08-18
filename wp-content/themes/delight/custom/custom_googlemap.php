<div class="my_meta_control meta_hidden" id="googlemap_generator">

    <div class="block_separator multifields shortcode_selector">
            <?php $mb->the_field('googlemapcode'); ?>
            <input type="hidden" name="<?php $mb->the_name(); ?>" value="" />
                <br>
				<?php $mb->the_field('width'); ?>
                <label for="<?php $mb->the_name(); ?>">Width:</label>
                <input type="text" name="<?php $mb->the_name(); ?>" value="<?php if (!$metabox->get_the_value()){ echo '427';} else { $metabox->the_value(); } ?>" />
                <small>Narrow column is 427 pixels wide, wide column is 708 pixels.</small>
                <br>
				<?php $mb->the_field('height'); ?>
                <label for="<?php $mb->the_name(); ?>">Height:</label>
                <input type="text" name="<?php $mb->the_name(); ?>" value="<?php if (!$metabox->get_the_value()){ echo '300';} else { $metabox->the_value(); } ?>" />
                <small></small>
                <br>
				<?php $mb->the_field('url'); ?>
                <label for="<?php $mb->the_name(); ?>">Google map URL: <a href="<?php echo get_bloginfo('stylesheet_directory'); ?>/functions/documentation/googlemap-url.php" class="pix_tips_ajax info_icon" data-width="565" data-height="467">&nbsp;</a></label>
                <input type="text" name="<?php $mb->the_name(); ?>" style="width:98%" value="" />
    </div><!-- .block_separator -->    
    <input type="button" class="button-primary alignright" value="Insert shortcode" />

</div><!-- .my_meta_control -->
