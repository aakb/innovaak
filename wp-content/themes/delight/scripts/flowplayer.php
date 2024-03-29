<?php require_once( '../../../../wp-load.php' ); ?>
<!DOCTYPE HTML>
<!-- Delight is developed is a Pixedelic work, by Consorzio Creativo on Wordpress platform | Manuel Masia (designer and developer) -->
<html>
<head>
<script type="text/javascript" language="javascript" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/scripts/flowplayer-3.2.6.min.js"></script>
<script type="text/javascript" language="javascript" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/scripts/projekktor.min.js"></script>
<style>
html, body {
	margin:0;
	padding:0;
	height:100%;
	width:100%;
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
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) 0 0 no-repeat;
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
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -420px -30px no-repeat;
    width: 27px;
    height: 22px;
    cursor: pointer;
}

.ppfsexit:hover {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -457px -30px no-repeat;
}

.ppfsenter {
    display:block;
    position: absolute;
    left: 380px;
    top: 13px;
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -420px 0px no-repeat;
    width: 27px;
    height: 22px;
    cursor: pointer;
}
.ppfsenter:hover {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -457px 0px no-repeat;
}


.ppplay{
    display:block;
    position: absolute;
    top: 11px;
    left: 192px;
    /*background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -825px 0 no-repeat;*/
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -619px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;
}

.pppause:hover {
    /*background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -781px 0 no-repeat;*/
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -585px 0 no-repeat;
}



.pppause  {
    display:none;
    position: absolute;
    top: 11px;
    left: 192px;
    /*background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -737px 0 no-repeat;*/
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -551px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;
}

.ppplay:hover {
    /*background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -869px 0 no-repeat;*/
	background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -653px 0 no-repeat;
}



.ppnext {
    position: absolute;
    top: 11px;
    left: 232px;
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -484px 0 no-repeat;
    width: 34px;
    height: 27px;
    cursor: pointer;

}

.ppnext:hover {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -517px 0 no-repeat;
}

.ppprev {
    position: absolute;
    top: 11px;
    left: 153px;
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -687px 0 no-repeat;
    width: 34px;
    height: 27px;
}

.ppprev:hover {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -721px 0 no-repeat;
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
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/loaded.png) repeat-x;
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
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1552px 0 no-repeat;
    top:-4px;
    left:0px;
    width: 17px;
    height: 17px;
}

.ppvknob:hover  {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1577px 0px no-repeat;
}






.ppvmax  {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:116px;
	width: 22px;
	height: 25px;
	background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1329px 0px no-repeat;
}

.ppvmax:hover {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:116px;
	width: 22px;
	height: 25px;
	background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1354px 0px no-repeat;
}


.ppmute  {
	cursor: pointer;
	position: absolute;
	top:15px;
	left:10px;
	width: 17px;
	height: 18px;
	background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1518px 0px no-repeat;
}

.ppmute:hover  {
	background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/eklektik.png) -1534px 0px no-repeat;
}

.pptestcard {
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/testcard.jpg) center center no-repeat;
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
    background: #F6F6F6 url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/buffering.gif) center center no-repeat;
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
    background: transparent url(<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/images/start.png) center center no-repeat;
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
</style>

</head>
<body>
<?php if(!detectMobile()){ ?>
<a
    href="<?php echo $_GET['movie']; ?>"
    style="display:block;width:100%;height:100%;"
    id="player">
</a>										
<script language="JavaScript">
	flowplayer("player", {src:"<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/scripts/flowplayer-3.2.7.swf", wmode:"opaque"},  {
		clip: {
			autoPlay: false, 
			scaling: "orig",
			autoBuffering: true
		},
		plugins: {
			viral: {
				url: "<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/scripts/flowplayer.viralvideos-3.2.5.swf",
				share: {
					description: "<?php echo $_GET['title']; ?>" 
				}
			}
		}
	});
</script>
<?php } else { ?>
<video id="player" class="projekktor" width="100%" height="100%" controls>
			<source src="<?php echo remove_something('.flv',$_GET['movie']); ?>.ogg" type="video/ogg">
			<source src="<?php echo remove_something('.flv',$_GET['movie']); ?>.mp4" type="video/mp4">
			<source src="<?php echo remove_something('.flv',$_GET['movie']); ?>.webm" type="video/mp4">
		</video>';
		
		
		<script type="text/javascript">
		jQuery(window).one("load",function() {
			projekktor("#player'");
		});
		</script>
<?php } ?>
</body>