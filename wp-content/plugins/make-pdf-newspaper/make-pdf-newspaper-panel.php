<?php
if(isset($options['mpn_key'])&& $options['mpn_key']!="")  {
	$cronPath = WP_PLUGIN_URL . '/make-pdf-newspaper/makepdf.php?mpn_key='.$options['mpn_key'];
} else {
	$status2 = "<strong>You will need to generate a key in the highlighted field before being able to remake pdfs</strong>"; 	
	$status .= "<br>".$status2;
}
	

 if (isset($_POST['mpn_action']) || $status2 !="") { ?>
<div id="message" class="updated fade" style="background-color: rgb(255, 251, 204);">
  <p><strong><?php echo $status; ?></strong></p>
</div>
<?php } ?>
<style type="text/css">
table, .box
{
    background-color: #fff;
    border: 2px solid #ccc;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    width:100%;
    padding: 2px;
}
table td, table th {
padding:4px;
vertical-align:top;
border-bottom:1px dashed #cccccc;
}
table th{
border-right:1px dashed #cccccc;
}

</style>
<?php 



?>
<script language="javascript">
var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
function randKey(amount){
	randkey='';
	for (i=0;i<amount;i++)
		randkey+=keylist.charAt(Math.floor(Math.random()*keylist.length));
	return randkey;
}     
function changeCat(){
	document.getElementById('croncaturl').innerHTML = '<?php echo $cronPath.'&action=Go&cat=';?>'+document.mpn_catform.cat.value ;
}  
function changeArc(){
	document.getElementById('cronarcurl').innerHTML = '<?php echo $cronPath.'&action=Go&cat=';?>'+document.mpn_arcform.cat.value ;
}  
  
</script>
<div class="wrap">
<h2>Make PDF Newspaper </h2>
<div class="box">
  <h3>Instructions</h3>
  <ol>
    <li>Customise your PDF newspaper using the options below</li>
    <li>Every time you make a post or want to remake your publication hit 'Remake PDF' - Making the PDF can take up to 60 seconds</li>
  </ol>
  <p>(I did consider automatically remaking the PDF after each new post but as it is a server intensive process I thought it better to give user control) </p>
</div>
<h3>Options</h3>
  <form method="post" name="mpn_form">
    <?php if ( function_exists('wp_nonce_field') )
			wp_nonce_field('mpn-1', 'mpn-main');
			?>
    <input type="hidden" name="mpn_action" value="save" />
    <table>
      <tbody>
        <tr>
          <th scope="row">Title</th>
          <td align="left"><input name="mpn_title" type="text" id="mpn_title" size="40" value="<?php echo $options['mpn_title']; ?>"></td>
        </tr>
        <tr>
          <th scope="row">Filename</th>
          <td align="left"><input name="mpn_filename" type="text" id="mpn_filename" size="40" value="<?php echo $options['mpn_filename']; ?>"></td>
        </tr>
        <tr>
          <th scope="row">Security Key</th>
          <td align="left"><input name="mpn_key" type="text" id="mpn_key" value="<?php echo $options['mpn_key']; ?>" size="60" />
          <?php echo $status2;?> [<a href="javascript:void(0);" onclick="document.mpn_form.mpn_key.value=randKey(32)">Generate new key</a>] <br />
          You should keep this security key secret. The key is required to prevent unauthorised remaking of PDFs.</td>
        </tr>
        <tr>
          <th scope="row">Subtitle (Optional) </th>
          <td align="left"><input name="mpn_subtitle" type="text" id="mpn_subtitle" size="60" value="<?php echo $options['mpn_subtitle']; ?>"></td>
        </tr>
        <tr>
          <th scope="row">Banner Image (Optional)</th>
          <td align="left">Url:
            <input name="mpn_image" type="text" id="mpn_image" size="60" value="<?php echo $options['mpn_image']; ?>">
            Width:
            <input name="mpn_image_width" type="text" id="mpn_image_width" size="4" value="<?php echo $options['mpn_image_width']; ?>">
            (mm) </td>
        </tr>
        <tr>
          <th scope="row">Include post images </th>
          <td align="left"><label for="mpn_images">Include images:</label>
            <input name="mpn_images" type="checkbox" value="1" <?php if ($options['mpn_images'] == 1) echo "checked";?> /></td>
        </tr>
        <tr>
          <th scope="row">URL footnote/shortening</th>
          <td align="left"><label for="mpn_urlfootnote">Include post links as footnotes:</label>
            <input name="mpn_urlfootnote" type="checkbox" value="1" <?php if ($options['mpn_urlfootnote'] == 1) echo "checked";?> />
            <label for="mpn_urlshorten"></label>
            <p>
              <label for="mpn_urlshorten">Shorten footnote links using URL shortening:
              <input name="mpn_urlshorten" type="checkbox" value="1" <?php if ($options['mpn_urlshorten'] == 1) echo "checked";?> />
              </label>
            </p>
            <p>
              <label for="mpn_short_type">Shortening service:
              <select name="mpn_short_type" id="mpn_short_type">
                <option value="tinyurl" <?php if ($options['mpn_short_type'] == "tinyurl") echo "selected";?>>TinyURL</option>
                <option value="bitly" <?php if ($options['mpn_short_type'] == "bitly") echo "selected";?>>Bitly</option>
              </select>
              </label>
            </p>
            <p>If using Bit.ly this service requires authentication. You must enter your login name and API key below. If you're already logged into your bit.ly account, you can find those by going to <a href="http://bit.ly/account/" target="_blank">http://bit.ly/account/<br>
              </a>&nbsp;&nbsp;&nbsp;
              <label for="mpn_bitly_name">Login name:</label>
              <input name="mpn_bitly_name" type="text" id="mpn_bitly_name" value="<?php echo $options['mpn_bitly_name']; ?>">
              <br>
&nbsp;&nbsp;&nbsp;
              <label for="mpn_bitly_key">API Key:</label>
              <input name="mpn_bitly_key" type="text" id="mpn_bitly_key" value="<?php echo $options['mpn_bitly_key']; ?>" size="60">
            </p></td>
        </tr>
        <tr>
          <th scope="row">QR codes </th>
          <td align="left"><label for="mpn_qrcodeshow">Include QR code at the end of each entry linking to online post:</label>
            <input name="mpn_qrcodeshow" type="checkbox" value="1" <?php if ($options['mpn_qrcodeshow'] == 1) echo "checked";?> />
            <br />
            QR Code text (Optional - %POSTURL% is replaced by the full post url): 
            <textarea name="mpn_qr_text" cols="67" id="mpn_qr_text"><?php echo $options['mpn_qr_text']; ?></textarea></td>
        </tr>
        <tr>
          <th scope="row">Date order </th>
          <td><label for="mpn_order">Show stories in
            <select id="mpn_order" name="mpn_order">
              <option value="desc" <?php if ($options['mpn_order'] == "desc") echo "selected";?>>descending</option>
              <option value="asc" <?php if ($options['mpn_order'] == "asc") echo "selected";?>>ascending</option>
            </select>
            date order</label>
          </td>
        </tr>
        <tr>
          <th scope="row">Thumbnail image (Optional)</th>
          <td>To include a thumbnail of your publication on your site you must register with <a href="http://webthumb.bluga.net/" target="_blank">Bluga.net WebThumb</a>. Registration is free and allows you to generate 100 thumbnails a month.(Leave these setting blank if you don't want a thumbnail) <br>
&nbsp;&nbsp;&nbsp;User Id:
            <input name="mpn_thumb_id" type="text" id="mpn_thumb_id" value="<?php echo $options['mpn_thumb_id']; ?>">
            <br>
&nbsp;&nbsp;&nbsp;API Key :
            <input name="mpn_thumb_key" type="text" id="mpn_thumb_key" value="<?php echo $options['mpn_thumb_key']; ?>" size="60"></td>
        </tr>
        <tr>
          <th scope="row">Enable digest </th>
          <td>Enable digest:
            <input name="mpn_digest" type="checkbox" value="1" <?php if ($options['mpn_digest'] == 1) echo "checked";?> />
            <br>
            Select a category used to identify your cover page:
            <?php 
                        $dropdown_options = array('show_option_all' => '', 'hide_empty' => 0, 'hierarchical' => 1,
                            'show_count' => 0, 'depth' => 0, 'orderby' => 'name', 'selected' => $options["mpn_digest_category"], 'name' => 'mpn_digest_category');
                        wp_dropdown_categories($dropdown_options);
                    ?>
            <br>
            - Our organisation creates a fortnightly newsletter. This contains a cover page which is assigned its own category, containing links to posts that have been made in the last 2 weeks. Enabling digest allows us to create a pdf which contains the cover page and all the posts made between it and the last cover page. <a href="http://scottish-rscs.org.uk/newsfeed/" target="_blank">Visit the example at RSC NewsFeed </a></td>
        </tr>
        <tr>
          <th scope="row">Use external service </th>
          <td>If you are experiencing problems using the internal PDF engine it is possible to use an external hosting of the FiveFilters PDF Newspaper by enter the location below of the FiveFilters Engine (some settings like subtitle and banner image may not necessarily work and depends on how the external engine has been configured). To use FiveFilters own hosting of the engine enter http://fivefilters.org/pdf-newspaper/makepdf.php:<br>
&nbsp;&nbsp;Engine URL :
            <input name="mpn_engine_url" type="text" id="mpn_engine_url" value="<?php echo $options['mpn_engine_url']; ?>" size="60">
            <br>
&nbsp;&nbsp;Optional parameters :
            <input name="mpn_engine_para" type="text" id="mpn_engine_para" value="<?php echo $options['mpn_engine_para']; ?>" size="60">
          </td>
        </tr>
         <tr>
          <th scope="row">Automatically remake PDF</th>
          <td>If you would like to automatically remake the pdf the following url can be copied and registered  as  a 'cron job' using your host or a third party web service:<br>
&nbsp;&nbsp;Cron Job URL :
            <input name="mpn_cron_url" type="text" id="mpn_cron_url" onclick="select();" value="<?php echo $cronPath.'&action=Go'?>" size="60" readonly="readonly" /></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td><span class="submit">
            <input class="inputbutton" type="submit" value="Save settings" name="saving"/>
            <input class="inputbutton" type="submit" value="Reset" name="reset" />
            <input class="inputbutton" type="button" value="Test PDF" name="makepdf" onClick="window.location='<?php echo $cronPath.'&action=test';?>'"/>
            <input class="inputbutton" type="button" value="Remake PDF" name="remakepdf" onClick="window.location='<?php echo $cronPath.'&action=Go';?>'"/>
            </span></td>
        </tr>
      </tbody>
    </table>
  </form>
  <h3>Build PDF for categories </h3>
   
  <table>
    <tbody>
      <tr>
        <th scope="row">Select category </th>
        <td align="left"> <form method="get" name="mpn_catform" action="<?php echo WP_PLUGIN_URL . '/make-pdf-newspaper/makepdf.php'; ?>">
				<?php 
                        $dropdown_options = array('show_option_all' => '', 'hide_empty' => 0, 'hierarchical' => 1,
                            'show_count' => 1, 'depth' => 0, 'orderby' => 'name');
                        wp_dropdown_categories($dropdown_options);
						
						
                    ?>
                    <input name="mpn_key" type="hidden" id="mpn_key" value="<?php echo $options['mpn_key']; ?>" size="60">
          <span class="submit">
          <input class="inputbutton" type="submit" value="Go" name="action" />
        </span> [<a href="javascript:void(0);" onclick="changeCat();">Cron url</a>] <br />
<span id="croncaturl" style="background-color:#CCC;"></span>
</form></td>
      </tr>
      <tr>
        <th scope="row">or</th>
        <td align="left">&nbsp;</td>
      </tr>
      <tr>
        <th scope="row">Enter URL <br />
(e.g. /2010/03/) </th>
        <td align="left"><form method="get"  name="mpn_arcform" action="<?php echo WP_PLUGIN_URL . '/make-pdf-newspaper/makepdf.php'; ?>">
        <input name="cat" type="text" id="cat" size="40">
        <input name="mpn_key" type="hidden" id="mpn_key" value="<?php echo $options['mpn_key']; ?>" size="60">
          <span class="submit">
          <input class="inputbutton" type="submit" value="Go" name="action" /></span> [<a href="javascript:void(0);" onclick="changeArc();">Cron url</a>] <br />
<span id="cronarcurl" style="background-color:#CCC;"></span></form>
          </td>
      </tr>
      <tr>
        <th scope="row">&nbsp;</th>
        <td align="left">PDFs generated for custom urls and categories are saved in the /wp-content/pdf/ folder and can be linked to using standard hyperlinks</td>
      </tr>
    </tbody>
  </table>
 
  <p>&nbsp;</p>
