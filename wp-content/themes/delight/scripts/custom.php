<?php require_once( '../../../../wp-load.php' ); ?>
jQuery.noConflict();

<?php if(get_pix_option('pix_google_prevent')!='0') { ?>
google.load("webfont", "1");

<?php $fonts = array(
	get_pix_option('pix_typo_general'),
	get_pix_option('pix_typo_general_own'),
	get_pix_option('pix_typo_buttons'),
	get_pix_option('pix_typo_buttons_own'),
	get_pix_option('pix_typo_h1'),
	get_pix_option('pix_typo_h1_own'),
	get_pix_option('pix_typo_h2'),
	get_pix_option('pix_typo_h2_own'),
	get_pix_option('pix_typo_h3'),
	get_pix_option('pix_typo_h3_own'),
	get_pix_option('pix_typo_h4'),
	get_pix_option('pix_typo_h4_own'),
	get_pix_option('pix_typo_h5'),
	get_pix_option('pix_typo_h5_own'),
	get_pix_option('pix_typo_h6'),
	get_pix_option('pix_typo_h6_own'),
	get_pix_option('pix_typo_sitetitle'),
	get_pix_option('pix_typo_sitetitle_own'),
	get_pix_option('pix_typo_sitedescription'),
	get_pix_option('pix_typo_sitedescription_own'),
	get_pix_option('pix_typo_firstlevellink'),
	get_pix_option('pix_typo_firstlevellink_own'),
	get_pix_option('pix_typo_secondlevellink'),
	get_pix_option('pix_typo_secondlevellink_own'),
	get_pix_option('pix_typo_thirdlevellink'),
	get_pix_option('pix_typo_thirdlevellink_own'),
	get_pix_option('pix_typo_logobottom'),
	get_pix_option('pix_typo_logobottom_own'),
);
$fonts=array_unique($fonts); 
foreach ($fonts as $key => $value) {
	if($value!=''){
		if($key==0){
			$font .= '\''.$value.'\'';
		} else {
			$font .= ', \''.$value.'\'';
		}
	}
} ?>

jQuery(function() {
    WebFont.load({
        google: {
            families: [ <?php echo $font; ?> ]
        }
    });
});

<?php } ?>

/******************************************************
*
*	Article toggle effect
*
******************************************************/
function articleAsideOpen(hs, ha){     //################### Apre article e aside separatamente e ad altezze diverse
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);

	var fe;
    if (jQuery('.entry-title').length!=0) {
        fe = parseFloat(jQuery('.entry-title').css('line-height').replace('px',''))+parseFloat(jQuery('.entry-title').css('padding-bottom').replace('px',''))+parseFloat(jQuery('.entry-title').css('padding-top').replace('px',''));  //altezza del gap
    }
    if (jQuery.browser.msie) {
        if(jQuery(window).height()>jQuery(document).height()){		//in questo modo anche con menu scrollabile ho l'altezza della section piena
            var h = jQuery(window).height();
        } else {
            var h = jQuery(document).height();
        }
    } else {
        if(window.innerHeight>jQuery(document).height()){		//in questo modo anche con menu scrollabile ho l'altezza della section piena
            var h = window.innerHeight;
        } else {
            var h = jQuery(document).height();
        }
    }
	var off;
	off = jQuery('footer').offset();
    var offs = jQuery('article').offset();
    var offa;
    offa = jQuery('aside').offset();
	var he = parseFloat(jQuery('section').css('margin-top').replace('px',''));
    var foo = jQuery('footer').height();
	var hh2 = jQuery('article').not('.always_open').find('.entry-title:first').css({'cursor':'pointer','position':'relative'}).append('<span class="toggle_arrow icons">^</span>').height()+15+15;
	var lhh2 = jQuery('article .entry-title:first').css('line-height');    //mi serve per settare le altezze dei due titoli
	var hh3 = jQuery('aside').not('.always_open').find('h3:first').css({'cursor':'pointer','position':'relative'}).append('<span class="toggle_arrow icons">^</span>').height()+15+15;
    jQuery('aside').find('h3:first').addClass('first');
    var ph3 = jQuery('aside').find('h3:first').css('padding-top');
    jQuery('aside .toggle_arrow').css('padding-top',ph3);
    var secMarg = parseFloat(jQuery('section').css('margin-top'));

    
	var h2ln = Math.round(parseFloat(jQuery('article .entry-title:first').height()) / parseFloat(jQuery('article .entry-title:first').css('line-height')));    //numero di righe del titolo della article
	var h3ln = Math.round(parseFloat(jQuery('aside h3:first').height()) / parseFloat(jQuery('aside h3:first').css('line-height')));    //numero di righe del titolo della aside
    
	if(h2ln == h3ln && (fe==0 || !jQuery('aside').hasClass('open_toggle') ) ) {    //se i numeri di righe sono uguali etc.
		jQuery('aside h3:first').css({'line-height':lhh2});    //setto le altezze uguali
		hh3 = hh2;    //setto le altezze uguali
	}
    if(jQuery('article').length!=0){
        jQuery('article').not('.open_toggle').height(hh2).css({'left':offs.left,'top':off.top-(hh2),'position':'fixed'});
    }
    if(jQuery('aside').length!=0){
        jQuery('aside').not('.open_toggle').height(hh3).css({'left':offa.left,'top':off.top-(hh3),'position':'fixed'});
    }
    jQuery('.open_toggle').find('.toggle_arrow').text('_');
    Cufon.refresh();
    if(hs>h-(he+foo)) {
         var hs2 = hs;
    } else {
        var hs2 = h-(he+foo);
    }
    if(ha>h-(he+foo+fe)) {
        var ha2 = ha;
    } else {
        var ha2 = h-(he+foo+fe);
    }
    if(ha+fe>hs) {
        jQuery('article.open_toggle').css({'height':ha2+fe,'visibility':'visible'});
        jQuery('aside.open_toggle').css({'margin-top':fe,'height':ha2,'visibility':'visible'});
    } else {
        jQuery('article.open_toggle').css({'height':hs2,'visibility':'visible'});
        jQuery('aside.open_toggle').css({'margin-top':fe,'height':hs2-fe,'visibility':'visible'});
    }

	
    function layoutAfterResize(){
        //var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
        //if (!agentID) {
            var off;
            off = jQuery('footer').offset();
            var offs = jQuery('article').offset();
            var offa = jQuery('aside').offset();
            if (jQuery.browser.msie) {
                h = jQuery(window).height;
            } else {
                h = window.innerHeight;
            }
            var scrolled = jQuery(window).scrollTop();
            if(ha+fe<hs){
               if(hs>h-(he+foo)){
                    jQuery('article.open_toggle').css({'height':hs});
                    if(jQuery('article').hasClass('open_toggle')){
                        jQuery('aside.open_toggle').css({'height':hs-fe});
                    } else {
                        if(ha+fe<h-(he+foo)){
                            jQuery('aside.open_toggle').css({'height':h-(he+foo+fe)});
                        }
                    }
                } else {
                    jQuery('article.open_toggle').css({'height':h-(he+foo)});
                    jQuery('aside.open_toggle').css({'height':h-(he+foo+fe)});
                }
            } else {
                if(ha+fe>h-(he+foo)){
                    if(jQuery('aside').hasClass('open_toggle')){
                        jQuery('article.open_toggle').css({'height':ha+fe});
                    } else {
                        if(hs<h-(he+foo)){
                            jQuery('article.open_toggle').css({'height':h-(he+foo)});
                        }
                    }
                    jQuery('aside.open_toggle').css({'height':ha});
                } else {
                    jQuery('article.open_toggle').css({'height':h-(he+foo)});
                    jQuery('aside.open_toggle').css({'height':h-(he+foo+fe)});
                }
            }
            if(jQuery('article').length!=0) {
                jQuery('article').not('.open_toggle').css({'left':offs.left,'top':(off.top-scrolled)-(hh2)});
            }
            if(jQuery('aside').length!=0) {
                jQuery('aside').not('.open_toggle').css({'left':offa.left,'top':(off.top-scrolled)-(hh3)});
            }
           if(hs>h-(he+foo)) {
                hs2 = hs;
            } else {
                hs2 = h-(he+foo);
            }
            if(ha>h-(he+foo)) {
                ha2 = ha;
            } else {
                ha2 = h-(he+foo+fe);
            }
        //}
     }	
     
    jQuery(window).resize(function(){
        layoutAfterResize();
    });

    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    
	 if( !jQuery('article').hasClass('always_open')){
         jQuery('article .entry-title:first').click(function(){
            var t = jQuery(this).parents('article');
            if (jQuery.browser.msie) {
                var h = jQuery(window).height();
            } else {
                var h = window.innerHeight;
            }
            var ha = jQuery('aside').height();
            var off;
            off = jQuery('footer').offset();
            var scrolled = jQuery(window).scrollTop();
            if(t.hasClass('open_toggle')){
                /*if (agentID) {
                    return false;
                }*/
                t.animate({'margin-top':(off.top-scrolled)-(hh2+secMarg),'height':hh2},300,function(){
                    t.removeClass('open_toggle');
                    t.find('.toggle_arrow').text('^');
                    Cufon.refresh();
                    t.css({'left':offs.left,'top':(off.top-scrolled)-(hh2),'margin':'0','position':'fixed'});
                });
                if(!jQuery('aside').hasClass('open_toggle')) {
                    jQuery('html,body').animate({scrollTop: 0}, 300 );
                } else {
                        jQuery('aside.open_toggle').animate({'height':ha2}, 300 );
                        jQuery('html,body').animate({scrollTop: 0}, 300 );
                }
                /*if (agentID) {
                    jQuery('footer').css({'position':'fixed','margin-top':'0'});
                }*/
            } else {
                t.css({'margin-top':off.top-(hh2+secMarg),'position':'static','top':'0','left':'0'});
                t.find('.toggle_arrow').text('_');
                Cufon.refresh();
                if(hs<ha+fe&&jQuery('aside').hasClass('open_toggle')){
                    t.animate({'margin-top':'0','height':ha+fe},300,function(){t.addClass('open_toggle')});
                } else if(hs>h-(he+foo)) {
                    jQuery('aside.open_toggle').animate({'height':hs-fe},300);
                    t.animate({'margin-top':'0','height':hs},300,function(){t.addClass('open_toggle')});
                } else {
                    //jQuery('aside.open_toggle').animate({'height':hs},300);
                    t.animate({'margin-top':'0','height':h-(he+foo)},300,function(){t.addClass('open_toggle')});
                }
                /*if (agentID) {
                    jQuery('footer').css({'position':'relative'});
                }*/
            }
        }),layoutAfterResize();
    }
    
    
    var orPadB = jQuery('aside h3:first').css('padding-bottom');
    var orPadT = jQuery('aside h3:first').css('padding-top');
    var orPadAr = jQuery('aside h3:first .toggle_arrow').css('padding-top');
    var orLh = jQuery('aside h3:first').css('line-height');


    jQuery('aside').not('.open_toggle').find('h3:first').each(function(){
        var dif = jQuery('.entry-title').height()-jQuery(this).height();
        var marg = parseFloat(jQuery(this).css('padding-bottom').replace('px','')); 
        jQuery(this).css({'padding-bottom':(marg+dif),'padding-top':'20px'});
        jQuery('.toggle_arrow',this).css({'padding-top':'20px'});
   });


	 if( !jQuery('aside').hasClass('always_open')){
        jQuery('aside h3:first').click(function(){
            var t = jQuery(this).parents('aside');
            if (jQuery.browser.msie) {
                var h = jQuery(window).height();
            } else {
                var h = window.innerHeight;
            }
            var hs = jQuery('article').height();
            var off;
            off = jQuery('footer').offset();
            var scrolled = jQuery(window).scrollTop();
            if(t.hasClass('open_toggle')){
                /*if (agentID) {
                    return false;
                }*/
                var dif = jQuery('.entry-title').height()-jQuery(this).height();
                var marg = parseFloat(jQuery(this).css('padding-bottom').replace('px','')); 
                jQuery(this).animate({'padding-bottom':(marg+dif),'padding-top':'20px'});
                jQuery('.toggle_arrow',this).animate({'padding-top':'20px'});
                if(h2ln == h3ln) {    //se i numeri di righe sono uguali etc.
                    jQuery('aside h3:first').css({'line-height':lhh2});    //setto le altezze uguali
                    hh3 = hh2;    //setto le altezze uguali
                }
                t.animate({'margin-top':(off.top-scrolled)-(hh3+secMarg),'height':hh3},300,function(){
                    t.removeClass('open_toggle');
                    t.find('.toggle_arrow').text('^');
                    Cufon.refresh();
                    t.css({'left':offa.left,'top':(off.top-scrolled)-(hh3),'margin':'0','position':'fixed'});
                });
                if(!jQuery('article').hasClass('open_toggle')) {
                    jQuery('html,body').animate({scrollTop: 0}, 300 );
                } else {
                    jQuery('article.open_toggle').animate({'height':hs2}, 300 );
                    jQuery('html,body').animate({scrollTop: 0}, 300 );
                }
            } else {
                jQuery(this).animate({'padding-bottom':orPadB,'padding-top':orPadT});
                jQuery('.toggle_arrow',this).animate({'padding-top':orPadAr});
                jQuery('aside h3:first').css({'line-height':orLh});
                t.css({'margin-top':off.top-(hh2+secMarg),'position':'static','top':'0','left':'0'});
                t.find('.toggle_arrow').text('_');
                Cufon.refresh();
                if(ha<hs-fe&&jQuery('article').hasClass('open_toggle')){
                    t.animate({'margin-top':fe,'height':hs-fe},300,function(){t.addClass('open_toggle')});
                } else if(ha>h-(he+foo)) {
                    jQuery('article.open_toggle').animate({'height':ha+fe},300);
                    t.animate({'margin-top':fe,'height':ha},300,function(){t.addClass('open_toggle')});
                } else {
                    //jQuery('article.open_toggle').animate({'height':ha+fe},300);
                    t.animate({'margin-top':fe,'height':h-(he+foo)},300,function(){t.addClass('open_toggle')});
                }
            }
        }),layoutAfterResize();
    }
}
jQuery(window).one('load',function(){
    jQuery('article .entry-title:first, aside h3:first').unbind('click');
 	var hs = 0;
    if(jQuery('article').length!=0){
        hs = jQuery('article').height();
    }    
	var ha = 0;
    if(jQuery('aside').length!=0){
        ha = jQuery('aside').height();
    }    
   articleAsideOpen(hs, ha);
    Cufon.refresh();
});
jQuery(window).one('load',function(){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    /*if (agentID) {
        jQuery('aside h3:first').click();
        jQuery('article .entry-title:first').click();
        jQuery('footer').css({'position':'relative'});
        jQuery('#body').css({'height':'auto'});
    }*/
});
/******************************************************
*
*	Full page slideshow
*
******************************************************/
jQuery.fn.espresslide = function(opts) {
	
	var defaults = {
		navElem			: null,
		navCont			: 'li',
        controlsCont	: null,
		prev			: null,
		next			: null,
		play			: null,
		pause			: null,
		thumbs			: false,
        credits			: null,
		time			: <?php echo get_pix_option('pix_slideshow_speed'); ?>,    //lunghezza della transizione
		fadeperiod		: <?php echo get_pix_option('pix_slideshow_fade'); ?>,    //lunghezza della transizione
        crop			: <?php if(get_pix_option('pix_slideshow_adapt')!='' && get_pix_option('pix_slideshow_adapt')!='0') { echo get_pix_option('pix_slideshow_adapt'); } else { echo 'false'; } ?>
    };
	
	
	var opts = jQuery.extend({}, defaults, opts);
	
    if (jQuery.browser.msie) {
        var h = jQuery(window).height();
    } else {
        var h = window.innerHeight;
    }
	var w = jQuery(window).width();    //larghezza della pagina
	
	var elem = this;    //elemento trigger
	
if(elem.length!=0){
	jQuery('body').prepend(elem);
	
	var allSrc = new Array();    //creo l'array vuoto
	var amountSlide = elem.find('a').length;    //il numero di immagine della slideshow
	
	elem.find('a').each(function() {    //lo riempio con gli 'a' contenuti nell'elemento selezionato
		allSrc.push(jQuery(this));
	});
	var nav;
	jQuery(opts.navElem).parents('#navgallery_wrap').hide();
	jQuery(opts.controlsCont).hide();
	jQuery(opts.credits).hide();

	jQuery.each(allSrc, function(index, value) { 
		if(opts.thumbs==true){
			jQuery(opts.navElem).append('<'+opts.navCont+' id="espress'+opts.navCont+'_'+index+'" class="espress'+opts.navCont+'" style="overflow:hidden; position:relative"><img src="'+allSrc[index].attr('data-thumb')+'"></li>');
		} else {
			jQuery(opts.navElem).append('<'+opts.navCont+' id="espress'+opts.navCont+'_'+index+'" class="espress'+opts.navCont+'">'+(index+1)+'</li>');
		}
		jQuery('.espress'+opts.navCont).hover(function(){
			jQuery(this).addClass('espresshover');
		},function(){
			jQuery(this).removeClass('espresshover');
		});
	});
		jQuery('.espress'+opts.navCont).click(function(){
			if(!jQuery(opts.navElem).hasClass('espressliding')){
				var idNum = parseFloat(jQuery(this).attr('id').replace('espress'+opts.navCont+'_','')); 
				var vis = parseFloat(jQuery('.espr_block:visible').attr('id').replace('espr_block_',''));    //la variabile è il numero del div partendo da 0
				if(idNum!=vis){
					clearInterval(set);
					nextSlide(idNum+1);
				}
			}
		});

		jQuery(opts.prev).click(function(){
			if(!jQuery(opts.navElem).hasClass('espressliding')){
				var idNum = parseFloat(jQuery('.espresscurrent').attr('id').replace('espress'+opts.navCont+'_','')); 
				var lastNum = parseFloat(jQuery('.espress'+opts.navCont+':last').attr('id').replace('espress'+opts.navCont+'_','')); 
				if(idNum!=0){
					clearInterval(set);
					nextSlide(idNum);
				} else {
 					clearInterval(set);
					nextSlide(lastNum+1);
               }
			}
		});

		jQuery(opts.next).click(function(){
			if(!jQuery(opts.navElem).hasClass('espressliding')){
				var idNum = parseFloat(jQuery('.espresscurrent').attr('id').replace('espress'+opts.navCont+'_','')); 
				var lastNum = parseFloat(jQuery('.espress'+opts.navCont+':last').attr('id').replace('espress'+opts.navCont+'_','')); 
				if(idNum==lastNum){
					clearInterval(set);
					nextSlide(1);
				} else {
 					clearInterval(set);
					nextSlide(idNum+2);
               }
			}
		});

        jQuery(opts.play).hide();
		jQuery(opts.play).click(function(){
			if(!jQuery(opts.navElem).hasClass('espressliding')){
				nextSlide();
                jQuery(this).fadeOut(100,function(){
                	jQuery(opts.pause).fadeIn(200);
                }); 
			}
		});

		jQuery(opts.pause).click(function(){
			if(!jQuery(opts.navElem).hasClass('espressliding')){
				clearInterval(set); 
                jQuery(this).fadeOut(100,function(){
                	jQuery(opts.play).fadeIn(200);
                }); 
			}
		});
        
        jQuery(document).bind('cbox_open', function(){ 
        	if(jQuery('.pix_slide a').length!=1){
                clearInterval(set); 
            }
        });

        jQuery(document).bind('cbox_closed', function(){ 
        	if(jQuery('.pix_slide a').length!=1){
                nextSlide();
            }
        });

    setTimeout(function() { nextSlide(); }, 600);    //faccio partire l'effetto
	jQuery(window).one('load',function(){
		//jQuery(opts.navElem).parent().fadeIn('slow');
		jQuery(opts.controlsCont).fadeIn('slow');
		jQuery(opts.credits).fadeIn('slow');
        //jQuery('#scrollCommands').animate({'opacity':1},600);
	});
	if(amountSlide>1){
        var set = setInterval(function() { nextSlide(); }, opts.time);    //faccio partire l'effetto
    }
	
}




    var lTh = amountSlide*(50+10+2); //larghezza immagine, margine e bordo
    jQuery(opts.navElem).width(lTh);
    

/*************************** FUNZIONE la larghezza del CONTENITORE THUMB ***************************/

	function resizeThumbCont(){    //funzione per il resize del contenitore thumb
        if(opts.navElem!=null){
            if(amountSlide > 1) {
            	jQuery('#navgallery_wrap, #scroll_wrapper').width(w-40); // 20+20 margine laterale
            }
        }
    }
    
    resizeThumbCont();
    
    jQuery(window).bind('load resize',function(){ 
    	resizeThumbCont();
    });



/*************************** FUNZIONE nextSlide() ***************************/

	function nextSlide(nav){    //funzione per il fading delle immagini
		if(jQuery('.espr_block:visible').length!=0){    //se ho creato almeno un div con un'immagine
			var vis = parseFloat(jQuery('.espr_block:visible').attr('id').replace('espr_block_',''));    //la variabile è il numero del div partendo da 0
		} else {
			var vis = 'undefined';
		}
		if(nav>0){    //se siamo all'ultimo div o se ancora non ho creato nessun div
			var i = nav-1;
		} else if (vis == amountSlide-1 || vis=='undefined') { 
			var i = 0;
		} else {    //altrimenti l'indice è l'id corrent più uno, quindi il div successivo
			var i = vis+1;
		}
		if(jQuery('#espr_block_'+i).length==0){    //se ancora non esiste il div con quell'id
            var newImg = new Image();
            var img_src = allSrc[i].attr('href');
            newImg.src = img_src;
            jQuery(newImg).attr('data-content',allSrc[i].attr('data-content'));

			elem.append('<div class="espr_block" id="espr_block_'+i+'"></div>');    //creo il div 
			jQuery('#espr_block_'+i).append(jQuery(newImg));    //e gli appendo l'immagine
		}
		jQuery('#espr_block_'+i).css({    //imposto i css per i contenitori di immagini
			'display':'none',
			'height':h,
			'left':0,
			'overflow':'hidden',
			'position':'absolute',
			'top':0,
			'width':w<?php if(!detectMobile()){ ?>+20<?php } ?>,
			'z-index':'-1'
		});
		var img2 = jQuery('#espr_block_'+i).find('img');    //cerco l'immagine all'interno del div corrente
		jQuery(opts.navElem).addClass('espressliding');
        
		if(img2.parents('.espr_block').hasClass('espr_loaded')){    //se l'immagine è già stata caricata
            jQuery('#espr_block_'+(vis)).css({'z-index':'-2'});    //il div visibile viene portato a z-index 1, quindi sotto
            jQuery('#espr_block_'+i).fadeIn(opts.fadeperiod,function(){    //imposto il timeout che mi fa apparire il div successivo
                if(jQuery('.espr_block').length!=0){    //se esiste almeno un div, quindi la slide non parte ora per la prima volta
                    jQuery('#espr_block_'+(vis)).css({'display':'none'});    //nascondo il div corrente
                }
                clearInterval(set);
                jQuery(opts.navElem).removeClass('espressliding');
                set = setInterval(function() { nextSlide(); }, opts.time);    //faccio ripartire l'effetto
            });    //chiudo il timeout

		} else {
        
			img2.one('load',function(){    //la prima volta che carica l'immagine all'interno del div
                jQuery('#espr_block_'+i).css({    //imposto i css per i contenitori di immagini solo per IE perché altrimenti non becca la grandezza delle immagini
                    'display':'block',
                    'visibility':'hidden'
                });
                var hI = img2.height()-20;
                var wI = img2.width()-20;
            if(opts.crop==true){
                if(hI>wI){
                    var r = h / hI;
                    var d = (Math.abs(w - (wI*r)))*0.5;
                    img2.css({
                        'height' : h,
                        'margin-left' : d+'px',
                        'margin-top' : '0',
                        'position' : 'absolute',
                        'width' : wI*r
                    });
                } else {
                    if((wI/hI)<(w/h)) {
                        var r = w / wI;
                        var d = (Math.abs(h - (hI*r)))*0.5;
                        img2.css({
                            'height' : hI*r,
                            'margin-left' : '0',
                            'margin-top' : '-'+d+'px',
                            'position' : 'absolute',
                            'width' : w
                        });
                    }
                    else {
                        var r = h / hI;
                        var d = (Math.abs(w - (wI*r)))*0.5;
                        img2.css({
                            'height' : h,
                            'margin-left' : '-'+d+'px',
                            'margin-top' : '0',
                            'position' : 'absolute',
                            'width' : wI*r
                        });
                    }
                }
			} else {
                if((wI/hI)<(w/h)) {
                    var r = w / wI;
                    var d = (Math.abs(h - (hI*r)))*0.5;
                    img2.css({
                        'height' : hI*r,
                        'margin-left' : '0',
                        'margin-top' : '-'+d+'px',
                        'position' : 'absolute',
                        'width' : w
                    });
                }
                else {
                    var r = h / hI;
                    var d = (Math.abs(w - (wI*r)))*0.5;
                    img2.css({
                        'height' : h,
                        'margin-left' : '-'+d+'px',
                        'margin-top' : '0',
                        'position' : 'absolute',
                        'width' : wI*r
                    });
                }
            }
                jQuery('#espr_block_'+i).css({    //imposto i css per i contenitori di immagini solo per IE perché altrimenti non becca la grandezza delle immagini
                    'display':'none',
                    'visibility':'visible'
                });
				jQuery('#espr_block_'+(vis)).css({'z-index':'-2'});    //il div visibile viene portato a z-index 1, quindi sotto
				jQuery('#espr_block_'+i).fadeIn(opts.fadeperiod,function(){    //imposto il timeout che mi fa apparire il div successivo
					if(jQuery('.espr_block').length!=0){    //se esiste almeno un div, quindi la slide non parte ora per la prima volta
						jQuery('#espr_block_'+(vis)).css({'display':'none'});    //nascondo il div corrente
					}
                    if(amountSlide>1){
                        clearInterval(set);
                        jQuery(opts.navElem).removeClass('espressliding');
                        set = setInterval(function() { nextSlide(); }, opts.time);    //faccio ripartire l'effetto
                    }
				}).addClass('espr_loaded');    //chiudo il timeout
			});
		}
            var the_content = jQuery('img, #espr_block_'+i).attr('data-content');
            jQuery(opts.credits).html(img2.attr('data-content'));
			jQuery('.espress'+opts.navCont).removeClass('espresscurrent');
			jQuery('#espress'+opts.navCont+'_'+i).addClass('espresscurrent');
            
            
	
            //scrollThumb();
            resizeThumbCont();
            
            jQuery(opts.play).fadeOut(100,function(){
                jQuery(opts.pause).fadeIn(200);
            }); 

    }




/*************************** FUNZIONE per il RESIZE ***************************/

	jQuery(window).bind('load resize',function(){
        if (jQuery.browser.msie) {
            h = jQuery(window).height();
        } else {
            h = window.innerHeight;
        }
		w = jQuery(window).width()<?php if(!detectMobile()){ ?>+20<?php } ?>;    //larghezza della pagina
		jQuery('.espr_block, .pix_overlay_pattern').css({    //imposto i css per i contenitori di immagini
			'height':h,
			'width':w
		});
		jQuery('.espr_block').find('img').each(function(){
			var img2 = jQuery(this);
			var hI = img2.height();
			var wI = img2.width();
            if(opts.crop==true){
                if(hI>wI){
                    var r = h / hI;
                    var d = (Math.abs(w - (wI*r)))*0.5;
                    img2.css({
                        'height' : h,
                        'margin-left' : d+'px',
                        'margin-top' : '0',
                        'position' : 'absolute',
                        'width' : wI*r
                    });
                } else {
                    if((wI/hI)<(w/h)) {
                        var r = w / wI;
                        var d = (Math.abs(h - (hI*r)))*0.5;
                        img2.css({
                            'height' : hI*r,
                            'margin-left' : '0',
                            'margin-top' : '-'+d+'px',
                            'position' : 'absolute',
                            'width' : w
                        });
                    }
                    else {
                        var r = h / hI;
                        var d = (Math.abs(w - (wI*r)))*0.5;
                        img2.css({
                            'height' : h,
                            'margin-left' : '-'+d+'px',
                            'margin-top' : '0',
                            'position' : 'absolute',
                            'width' : wI*r
                        });
                    }
                }
			} else {
                if((wI/hI)<(w/h)) {
                    var r = w / wI;
                    var d = (Math.abs(h - (hI*r)))*0.5;
                    img2.css({
                        'height' : hI*r,
                        'margin-left' : '0',
                        'margin-top' : '-'+d+'px',
                        'position' : 'absolute',
                        'width' : w
                    });
                }
                else {
                    var r = h / hI;
                    var d = (Math.abs(w - (wI*r)))*0.5;
                    img2.css({
                        'height' : h,
                        'margin-left' : '-'+d+'px',
                        'margin-top' : '0',
                        'position' : 'absolute',
                        'width' : wI*r
                    });
                }
            }
		});
        
        
	});



}


jQuery(function(){
	if(jQuery('.pix_slide').length!=0){
        jQuery('.pix_slide').espresslide({
            navElem : '.navgallery',
            prev : '#pix_prev_slide',
            next : '#pix_next_slide',
            play : '#pix_play_slide',
            pause : '#pix_pause_slide',
            controlsCont: '#pix_controls',
            credits: '#pix_credits_pictures',
            thumbs : true
        });
    }
});

/******************************************************
*
*	Social_bar position and toggle
*
******************************************************/
jQuery(window).one('load',function() {
    var wF = jQuery("#social_bar form").width();
    var wI = jQuery("#social_bar div.icon").width();
    //jQuery("#social_bar .wrapIn").css({'width':wF+wI+5});
	var wS = jQuery("#social_bar").width();
    jQuery("#social_bar").css({'left':1050-(wS+35),'visibility':'visible'});
});
jQuery(function() {
	jQuery("#social_bar").each(function(){
    	var t = jQuery(this);
        var c = jQuery('.click.icons');
        c.click(function(){
        	if(t.hasClass('open')){
                c.html('_');
                Cufon.refresh();
            	t.animate({'margin-top':'0'},300,function(){
                	t.removeClass('open');
                });
            } else {
                c.html('^');
                Cufon.refresh();
            	t.animate({'margin-top':'50px'},300,function(){
                	t.addClass('open');
                });
            }
        });
    });
});

/******************************************************
*
*	Colorbox
*
******************************************************/
jQuery(window).one("load", function(){
	jQuery("a[data-rel='iframe']").colorbox({iframe:true, innerWidth:650, innerHeight:488, rel:'nofollow' });
<?php if (get_pix_option('pix_checkcolorbox')=='show') { ?>
	jQuery("a[href$='.jpg']").not('.noColorBox').each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
    });
	jQuery("a[href$='.png']").not('.noColorBox').each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
    });
	jQuery("a[href$='.gif']").not('.noColorBox').each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
    });
	jQuery("a.play-icon").not('.noColorBox').each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({iframe:true, innerWidth:800, innerHeight:450, scrolling:false, rel:dataRel});
    });
	jQuery("a.play-icon[href*='selfid']").not('.noColorBox').each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({iframe:true, innerWidth:800, innerHeight:450, scrolling:false, inline:true, rel:dataRel});
    });
<?php } ?>
	jQuery("a.colorbox").each(function(){
    	var dataRel = jQuery(this).attr('data-rel');
        jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
    });
	jQuery(".gallery-icon a[href$='.jpg'], .gallery-icon a[href$='.png'], .gallery-icon a[href$='.gif']").not('.noColorBox').each(function(){
       	var dataRel = 'slideshow';
       jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
    });
});

/******************************************************
*
*	Slideshow shortcodes
*
******************************************************/
jQuery(function(){
	jQuery('.pix_cycle').each(function(){
    	var t = jQuery(this);
        var h = jQuery('.pix_slide_caption', t).height()+40;
        var time = t.attr('data-time');
        var p = t.next('.pix_slider_nav');
        jQuery('.pix_slide_caption',t).css({'bottom':'-'+h+'px'});
    	jQuery(this).cycle({
            after: onAfter,
            before: onBefore,
            cleartype: true, 
            cleartypeNoBg: false,
            pager: p,
            pause: true,
        	timeout: time
        });
        jQuery('.pix_slide_caption:first', t).animate({'bottom':'0'},250);

    function onBefore(currSlideElement, nextSlideElement, options, forwardFlag) {
        var h = jQuery('.pix_slide_caption', currSlideElement).height()+80;
        jQuery('.pix_slide_caption', currSlideElement).animate({'bottom':'-'+h+'px'},250);
    }
    function onAfter(currSlideElement, nextSlideElement, options, forwardFlag) {
        jQuery('.pix_slide_caption', nextSlideElement).animate({'bottom':'0'},250);
    }
        var wT = t.width();
        var hT = t.height();
        jQuery('.pix_slider',t).width(wT).height(hT);
    });
    
});

/******************************************************
*
*	Image overlay
*
******************************************************/
jQuery(function(){
    jQuery(".hentry a[href$='.jpg'], .hentry a[href$='.png'], .hentry a[href$='.gif']").each(function(){
    	var w = jQuery('img',this).width(),
        	h = jQuery('img',this).height();
            
        if(!jQuery('body').hasClass('tax-gallery') && !jQuery(this).parent().hasClass('linkIcon')){
            jQuery(this).append('<div class="linkIcon enlarge-icon" style="width:'+w+'px; height:'+h+'px">').wrapInner('<div class="imgHentry" />');
        }
        var theClass = jQuery('img',this).attr('class');
        jQuery('img',this).removeClass(theClass);
        jQuery('.imgHentry',this).addClass(theClass);
        
        var a = jQuery('.linkIcon',this);
        var i = jQuery('img',this).css('display','block');

        a.show().animate({'opacity':0},0);
        
        jQuery(this).hover(function(){
        	i.stop(true,false).animate({'opacity':0.2},300);
        	a.stop(true,false).animate({'opacity':1},300);
        },function(){
        	i.stop(true,false).animate({'opacity':1},300);
        	a.stop(true,false).animate({'opacity':0},300);
        });

    });
});

/******************************************************
*
*	Ajax form
*
******************************************************/
jQuery(document).ready(function() {


    jQuery('.contactForm').each(function () {        
		var t = jQuery(this);
        var hT = t.height();
        var wT = t.width();
        jQuery('.success, .unsuccess', t).height(hT).width(wT);
        
        
        jQuery('input[type=checkbox]',t).after('<div class="off-on"><div class="switcher"></div></div>').hide();
        jQuery('.off-on').each(function(){
            if(!jQuery(this).prev('input[type=checkbox]').is(':checked')){
                jQuery('.switcher',this).addClass('off');
            }
            jQuery('.off-on').live('click',function(){
                if(jQuery('.switcher',this).hasClass('off')){
                    jQuery(this).prev('input[type=checkbox]').attr('checked', true);
                    jQuery('.switcher',this).fadeIn(200,function(){
                        jQuery(this).removeClass('off');
                    });
                } else {
                    jQuery(this).prev('input[type=checkbox]').attr('checked', false);
                    jQuery('.switcher',this).fadeOut(200,function(){
                        jQuery(this).addClass('off');
                    });
                }
            });
        });

        jQuery('input[type=radio]',t).after('<div class="radio-fake"><div class="radio-on"></div></div>').hide().click(function(){
        	jQuery('input[type=radio]',t).each(function(){
                if(jQuery(this).is(':checked')){
                    jQuery(this).next('.radio-fake').find('.radio-on').fadeIn(200,function(){
                        jQuery(this).removeClass('off');
                    });
                } else {
                    jQuery(this).next('.radio-fake').find('.radio-on').fadeOut(200,function(){
                        jQuery(this).addClass('off');
                    });
                }
            });
        });
        jQuery('.radio-fake').each(function(){
            if(!jQuery(this).prev('input[type=radio]').is(':checked')){
                jQuery('.radio-on',this).addClass('off');
            }
            jQuery('.radio-fake').live('click',function(){
                jQuery(this).prev('input[type=radio]').click();
            });
        });

        
		jQuery('input[type=submit]',t).click(function () {
			
            var data = 'captcha='+jQuery('input[name="captcha"]',t).val()+'&form='+t.attr('id');
            var allRequired = [];
            var allFields = [];
			var allValues = [];
            jQuery('input[type="checkbox"]').each(function(){
            	if(!jQuery(this).is(':checked')){
                    jQuery(this).val('');
                } else {
                    jQuery(this).val('on');
                }
            })
            jQuery('input[type="radio"]').each(function(){
            	var pV = jQuery(this).attr('data-value');
            	if(!jQuery(this).is(':checked')){
                    jQuery(this).val('');
                } else {
                    jQuery(this).val(pV);
                }
            })
			jQuery('.required', t).each(function() {
				allRequired.push(jQuery(this).val());
			});
            var req = 0;
            var tag;
            var name;
            jQuery.each(allRequired, function(key, value) {
            	tag = jQuery('.required:eq('+key+')', t).attr('type');
                if(tag!='radio'){
                    if(allRequired[key]==''){
                        jQuery('.required:eq('+key+')', t).css({'border-color':'#f00'});
                        req = 1;
                    } else {
                        jQuery('.required:eq('+key+')', t).css({'border-color':'#eee'});
                    }
                } else {
                	name = jQuery('.required:eq('+key+')', t).attr('name');
                    var radioVal;
                    jQuery('input[type=radio][name='+name+']', t).each(function(){
                    	radioVal = jQuery('input[type=radio][name='+name+']:checked', t).val();
                        jQuery(this).val(radioVal);
                    });                    
                }
            });
            jQuery('.off-on').each(function(){
                if(jQuery(this).prev('input[type="checkbox"]').hasClass('required')){
                	if(!jQuery(this).prev('input[type="checkbox"]').is(':checked')){
                        jQuery(this).css({'border-color':'#f00'});
                    } else {
                        jQuery(this).css({'border-color':'#ccc'});
                    }
                 }   
            });
            jQuery('.radio-fake').each(function(){
                name = jQuery('input[type=radio].required', t).attr('name');
                if(jQuery('input[type=radio].required', t).val()==''){
                	jQuery('input[type=radio][name='+name+']',t).next('.radio-fake').css({'border-color':'#f00'});
                } else {
                	jQuery('input[type=radio][name='+name+']',t).next('.radio-fake').css({'border-color':'#ccc'});
                }
            });
            var emailReq = jQuery('.required.email',t).val();
            var emailCheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!emailCheck.test(emailReq)) {
                jQuery('.required.email',t).css({'border-color':'#f00'});
                req = 1;
            }
            jQuery('input').not('.email').bind('change keyup blur',function(){
            	if(jQuery(this).val()!=''){
                    jQuery(this).css({'border-color':'#eee'});
                }
            })
            jQuery('select').bind('change',function(){
            	if(jQuery(this).val()!=''){
                    jQuery(this).css({'border-color':'#eee'});
                }
            })
            jQuery('input.email').bind('keyup blur',function(){
                if(!emailCheck.test(jQuery(this).val())) {
                    jQuery(this).css({'border-color':'#eee'});
                }
            })
            jQuery('textarea').bind('keyup blur',function(){
            	if(jQuery(this).val()!=''){
                    jQuery(this).css({'border-color':'#eee'});
                }
            })
            if(req == 1){
            	return false;
            }

			jQuery('input, textarea, select', t).each(function() {
				allFields.push(jQuery(this).attr('data-name'));
			});
			jQuery('input, textarea, select', t).each(function() {
				allValues.push(jQuery(this).val());
			});
			jQuery.each(allFields, function(key, value) {
				if(allFields[key]){
						data = data+'&'+allFields[key] + '=value_'+key;
				}
			});
			jQuery.each(allValues, function(key, value) {
				data = data.replace('value_'+key, allValues[key]);
			});
			jQuery('.loading').show();
			 
			jQuery.ajax({
				url: "<?php echo get_bloginfo('stylesheet_directory'); ?>/scripts/mailer/mailer.php",
				type: "GET",
				data: data,     
				cache: false,
				success: function (html) { 
					if (html==1) {                  
						jQuery('form',t).animate({'opacity':'0'},500);                 
						jQuery('.success',t).fadeIn('500');
                        _gaq.push(['_trackPageview', '/sent-email-from-'+ t.attr('id')]);
                        pageTracker = _gat._getTracker('/sent-email-from-'+ t.attr('id'));
                        pageTracker._trackPageview();
					} else if (html=='noCaptcha') {
						jQuery('input[name="captcha"]',t).css({'border-color':'#f00'});
                        jQuery('.recaptcha',t).click();
					} else {
						jQuery('form',t).animate({'opacity':'0'},500);                 
						jQuery('.unsuccess',t).fadeIn('500');
					}
				}       
			});
            
			return false;
		}); 
        
        if(jQuery('#to',t).length!=0 && jQuery('#from',t).length!=0) {
        	jQuery('#from',t).css({'width':'75%'}).after('<div class="wrapPeriod" style="float:left; width:49%; clear: left" />');
        	jQuery('#to',t).css({'width':'75%'}).after('<div class="wrapPeriod" style="float:right; width:49%;" />');
            jQuery('#to',t).prev('label').prependTo(jQuery('#to',t).next(".wrapPeriod"));
            jQuery('#to',t).appendTo(jQuery('#to',t).next(".wrapPeriod"));
            jQuery('#from',t).prev('label').prependTo(jQuery('#from',t).next(".wrapPeriod"));
            jQuery('#from',t).appendTo(jQuery('#from',t).next(".wrapPeriod"));
        }
	}); 
});

jQuery(window).one('load',function(){
    jQuery('aside .contactForm').each(function () {        
        if(jQuery('.captchaCont', this).length!=0){
            var cS = jQuery('.captchaCont img#cryptogram', this).width();
            var rCs = jQuery('.recaptcha', this).width();
            var dS = jQuery('.captchaCont', this).width();
            jQuery('input[name="captcha"]', this).css('width',dS-(cS+rCs+12));
        }
    });
    jQuery('article .contactForm').each(function () {        
        if(jQuery('.captchaCont', this).length!=0){
            var cS = jQuery('.captchaCont img#cryptogram', this).width();
            jQuery('input[name="captcha"]', this).css({'width':cS,'float':'left','margin':'3px 0 0 10px'});
        }
    });
});
        


/******************************************************
*
*	Date picker
*
******************************************************/
jQuery(function() {
    jQuery('.contactForm').each(function () { 
    	var t = jQuery(this);       
        var dates = jQuery( "#from, #to", t ).datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1,
            showOn: "both",
			buttonImage: "<?php echo get_bloginfo('stylesheet_directory'); ?>/images/calendar.png",
			buttonImageOnly: true,
            onSelect: function( selectedDate ) {
                var option = this.id == "from" ? "minDate" : "maxDate",
                    instance = jQuery( this ).data( "datepicker" ),
                    date = jQuery.datepicker.parseDate(
                        instance.settings.dateFormat ||
                        jQuery.datepicker._defaults.dateFormat,
                        selectedDate, instance.settings );
                dates.not( this ).datepicker( "option", option, date );
            }
        });
    });
});

<?php 
	$file = TEMPLATEPATH.'/language/datePicker/jquery.ui.datepicker-'.WPLANG.'.php';
	if (file_exists($file)) {
		include($file);
	}
?>
        


/******************************************************
*
*	Tooltip
*
******************************************************/
jQuery(document).ready(function() {
	jQuery('.pix_after_tips').each(function(){
    	var t = jQuery(this);
    	var i = jQuery('body .pix_after_tips').index(t);
        t.attr('id','pix_after_tips'+i);
        t.prevAll('a').attr('data-rel','#pix_after_tips'+i).attr('href','#pix_after_tips'+i);
    });

    jQuery('a.pix_tips, .pix_share a').each(function(){
        var t = jQuery(this);
        var w = t.attr('data-width');
        if(w==''){
        	w = 280;
        }
        var h = t.attr('data-height');
        if(h==''){
        	h = 'auto';
        }
        t.qtip({
            style: {
                tip: {
                    corner: "bottomLeft"
                },
                classes: "ui-tooltip-<?php echo get_pix_option('pix_tooltip_theme'); ?>",
                height: h
            },
            position: {
                target: "mouse",
                adjust: {
                    mouse: false,
                    x: 10,
                    y: -10
                },
                my: "bottom left",
                at: "bottom left"
            },
            show: {
                delay: 500,
                solo: true
            },
            content: t.attr('title'),
            events: {
              show: function(event, api) {
                jQuery('.ui-tooltip, .qtip').css({'width':w});
              }
           }
        });
    });
    jQuery('a.pix_tips_TR').each(function(){
        var t = jQuery(this);
        t.qtip({
            style: {
                tip: {
                    corner: "topRight"
                },
                classes: "ui-tooltip-<?php echo get_pix_option('pix_tooltip_theme'); ?>"
            },
            position: {
                target: "mouse",
                adjust: {
                    mouse: false,
                    x: 10,
                    y: 10
                },
                my: "top right",
                at: "top right"
            },
            show: {
                delay: 500,
                solo: true
            },
            content: t.attr('title')
        });
    });
    jQuery('a.pix_tips_ajax').each(function(){
        var t = jQuery(this);
        var w = t.attr('data-width');
        if(w==''){
        	w = 280;
        }
        var h = t.attr('data-height');
        if(h==''){
        	h = 'auto';
        }
        t.qtip({
            content: {
                text: '<img class="throbber" src="<?php echo get_bloginfo('stylesheet_directory'); ?>/images/ajax-loader.gif" alt="<?php _e('Loading...','delight'); ?>">',
                ajax: {
                   url: t.attr('data-rel')
                }
            },
            style: {
                tip: {
                    corner: "bottomLeft"
                },
                classes: "ui-tooltip-<?php echo get_pix_option('pix_tooltip_theme'); ?>",
                height: h
            },
            position: {
                target: "mouse",
                adjust: {
                    mouse: false,
                    x: 10,
                    y: -10
                },
                my: "bottom left",
                at: "bottom left"
            },
            show: {
                delay: 500,
                solo: true
            },
            hide: {
                event: 'unfocus'
            },
            events: {
              show: function(event, api) {
                jQuery('.ui-tooltip, .qtip').css({'width':w});
              }
           }
        });
    });
    jQuery('a.pix_clue_credits').each(function(){
        var t = jQuery(this);
        var api = jQuery(this).qtip('api');
        t.qtip({
            style: {
                tip: {
                    corner: "bottomRight"
                },
                classes: "ui-tooltip-<?php echo get_pix_option('pix_tooltip_theme'); ?>",
                height: 'auto'
            },
            position: {
                target: "mouse",
                adjust: {
                    mouse: false,
                    y: -10
                },
                my: "bottom right",
                at: "bottom right"
            },
            show: {
                delay: 500,
                solo: true
            },
            content: jQuery('#pix_credits_pictures').html(),
            events: {
                show: function(event, api) {
                	api.set('content.text', jQuery('#pix_credits_pictures').html());
                }
            },
            hide: {
                event: 'unfocus'
            },
            events: {
              show: function(event, api) {
                jQuery('.ui-tooltip, .qtip').css({'width':150});
              }
			}
        });
    });
});
        


/******************************************************
*
*	Wide Google map
*
******************************************************/
jQuery(window).one('load',function(){
        if(jQuery('#map_canvas').length !=0) {
			var map,
				mapEl		= jQuery('#map_canvas'),
				lat			= jQuery('#map_canvas').attr('data-coord1'),
				lng			= jQuery('#map_canvas').attr('data-coord2'),
				pix_zoom	= parseFloat(jQuery('#map_canvas').attr('data-zoom')),
				pix_type	= jQuery('#map_canvas').attr('data-type'),
				pix_indications	= jQuery('#map_canvas').attr('data-indications'),
                the_type;
                
                if (pix_type=='HYBRID'){
                	the_type = google.maps.MapTypeId.HYBRID;
                } else if (pix_type=='TERRAIN'){
                	the_type = google.maps.MapTypeId.TERRAIN;
                } else if (pix_type=='SATELLITE'){
                	the_type = google.maps.MapTypeId.SATELLITE;
                } else if (pix_type=='ROADMAP'){
                	the_type = google.maps.MapTypeId.ROADMAP;
                }
				
                
					
					
				var point 		= new google.maps.LatLng(lat,lng),
						mapOptions 	= {
							zoom						: pix_zoom,
							center						: point,
							mapTypeId					: the_type,
							mapTypeControl				: false,
							panControl					: true,
							panControlOptions			: {
								position	: google.maps.ControlPosition.TOP_RIGHT
							},
							zoomControl					: true,
							zoomControlOptions			: {
								style		: google.maps.ZoomControlStyle.SMALL,
								position	: google.maps.ControlPosition.TOP_RIGHT
							},
							streetViewControl			: true,
							streetViewControlOptions	: {
								position	: google.maps.ControlPosition.TOP_RIGHT
							}
						};
					
					map 			= new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
					map.setTilt(45);
					
					
					var coordInfoWindow = new google.maps.InfoWindow({maxWidth : 10}),   
						latlngStr 		= pix_indications;
					
					if(latlngStr!=''){
                        coordInfoWindow.setContent('<div class="iwstyle">'+latlngStr+'<div>');    
                        coordInfoWindow.setPosition(point);    
                        coordInfoWindow.open(map);
                    }
                }
					
});
jQuery(window).bind('resize load',function(){
    if (jQuery.browser.msie) {
        var h = jQuery(window).height();
    } else {
        var h = window.innerHeight;
    }
    var w = jQuery(window).width();
    jQuery('#outer_canvas').width(w+14).height(h);
    jQuery('#map_canvas').width(w+14).height(h);
});


        


/******************************************************
*
*	Refresh Cufon
*
******************************************************/
jQuery(window).one('load',function() {
    Cufon.refresh();
});

        


/******************************************************
*
*	Wide flash
*
******************************************************/
function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName]
    }
    else {
        return document[movieName]
    }
}

function playVideo() {
    thisMovie("wide_flash").playVideo();
}
function pauseVideo() {
    thisMovie("wide_flash").pauseVideo();
}
function resumeVideo() {
    thisMovie("wide_flash").resumeVideo();
}
function muteVideo() {
    thisMovie("wide_flash").muteVideo();
}
function unMuteVideo() {
    thisMovie("wide_flash").unMuteVideo();
}
function rePlayVideo() {
	if(jQuery('#pix_pause_slide').is(':visible')){
        jQuery('#pix_pause_slide').hide();
    }
	if(jQuery('#pix_resume_slide').is(':visible')){
        jQuery('#pix_resume_slide').hide();
    }
	if(!jQuery('#pix_play_slide').is(':visible')){
        jQuery('#pix_play_slide').fadeIn(200);
    }
}
function showPause() {
    jQuery('#pix_pause_slide').show();
    jQuery('#pix_resume_slide').hide();
    jQuery('#pix_play_slide').hide();
}
function showPlay() {
    jQuery('#pix_play_slide').show();
    jQuery('#pix_pause_slide').hide();
    jQuery('#pix_resume_slide').hide();
}

jQuery(window).one('load',function(){
	jQuery('#pix_play_slide').live('click',function(){
        playVideo();
        jQuery(this).fadeOut(100,function(){
        	jQuery('#pix_pause_slide').fadeIn(200);
        });
    });

	jQuery('#pix_pause_slide').live('click',function(){
        pauseVideo();
        jQuery(this).fadeOut(100,function(){
        	jQuery('#pix_resume_slide').fadeIn(200);
        });
    });

	jQuery('#pix_resume_slide').live('click',function(){
        resumeVideo();
        jQuery(this).fadeOut(100,function(){
        	jQuery('#pix_pause_slide').fadeIn(200);
        });
    });

	jQuery('#pix_mute_slide').live('click',function(){
        muteVideo();
        jQuery(this).fadeOut(100,function(){
        	jQuery('#pix_unmute_slide').fadeIn(200);
        });
    });

	jQuery('#pix_unmute_slide').live('click',function(){
        unMuteVideo();
        jQuery(this).fadeOut(100,function(){
        	jQuery('#pix_mute_slide').fadeIn(200);
        });
    });
});
        


/******************************************************
*
*	Portfolio images
*
******************************************************/
function portfolioImages(){
	jQuery('.imgHentry').each(function(){
    	var t = jQuery(this);
        var i = jQuery('img',t);
        var a = jQuery('.linkIcon',t);
        a.show().animate({'opacity':0},0);
        
        jQuery('a',t).each(function(){
        	var ti;
            var ex;
            var ac;
        	if(jQuery(this).attr('data-title')){
            	ti = '<strong style="font-size:1.2em">'+jQuery(this).attr('data-title')+'</strong><br>';
            } else {
            	ti = '';
            }
        	if(jQuery(this).attr('data-excerpt')){
            	ex = jQuery(this).attr('data-excerpt')+'<br>';
            } else {
            	ex = '';
            }
        	if(jQuery(this).attr('data-action')){
            	ac = '<strong>'+jQuery(this).attr('data-action')+'</strong><br>';
            } else {
            	ac = '';
            }
<?php if(!detectMobile()){ ?>
            if(jQuery(this).attr('data-hide')!='hide'){
                jQuery(this).qtip({
                    style: {
                        tip: {
                            corner: "bottomLeft"
                        },
                        classes: "ui-tooltip-<?php echo get_pix_option('pix_tooltip_theme'); ?>"
                    },
                    position: {
                        target: "mouse",
                        adjust: {
                            mouse: false,
                            x: 10,
                            y: -10
                        },
                        my: "bottom left",
                        at: "bottom left"
                    },
                    show: {
                        delay: 500,
                        solo: true
                    },
                    content: ti+ex+ac
                });
            }
<?php } ?>        
        });
        t.hover(function(){
        	i.stop(true,false).animate({'opacity':0.2},300);
        	a.stop(true,false).animate({'opacity':1},300);
        },function(){
        	i.stop(true,false).animate({'opacity':1},300);
        	a.stop(true,false).animate({'opacity':0},300);
        });
    });

}
jQuery(function(){
    portfolioImages();
});

        


/******************************************************
*
*	Filter tag
*
******************************************************/
function filterTag() {
	if(jQuery('#filtering-nav').length!=0){
    	jQuery('#filtering-nav a').each(function(){
        	var t = jQuery(this);
            var dF = t.attr('data-filter');
            var l = jQuery(dF).length;
            if(dF!='*'&&l==0){
            	t.hide();
            } else {
            	t.show();
            }
		});
    }

}
jQuery(function(){
	filterTag();
});        


/******************************************************
*
*	Portfolio layout
*
******************************************************/
jQuery(function(){


    var ha = 0;
    if(jQuery('aside').length!=0){
        ha = jQuery('aside').height();
    }    

	if(jQuery('section.widepagePortfolio').length!=0){
    	var w = jQuery(window).width();
        if(w > 1050){
        	w = jQuery(window).width()-300;
        } else {
        	w = 1050 - 300;
        }
        jQuery('section.widepagePortfolio').css({'width':w,'float':'left','margin-left':'270px'})
        
        jQuery(window).resize(function(){
            w = jQuery(window).width();
            if(w > 1050){
                w = jQuery(window).width()-300;
            } else {
                w = 1050 - 300;
            }
            jQuery('section.widepagePortfolio').css({'width':w,'float':'left','margin-left':'270px'})
        });
    }
        
        
	if(jQuery('div.isoFilter').length!=0){
        var
            speed = 400,
            the_mode,
            the_difference,
            wall;
        if(jQuery('section.widepagePortfolio').length!=0){
             wall = jQuery('section div.isoFilter');
             the_mode = 'masonry';
        } else if(jQuery('section.pagePortfolio').length!=0) {
             wall = jQuery('article div.isoFilter');
             the_mode = 'fitRows';
            jQuery(window).one('load',function(){
                 the_difference = 100+(jQuery('article > div').height() - (jQuery('.isoFilter').height() + jQuery('#filtering-nav').height()));
            });
        }
        
            

        wall.imagesLoaded( function(){
            wall.isotope({
                masonry : {
                    columnWidth : '1'
                },
                itemSelector : '.hentry',
                layoutMode : the_mode,
                animationEngine : 'jquery',
                animationOptions: {
                 duration: 400,
                 easing: 'linear',
                 queue: false
               }
            });
        });
        
        var colorClass = '.all';
    
        jQuery('#filtering-nav a').click(function(){
            colorClass = '.' + jQuery(this).attr('data-filter');
            var selector = jQuery(this).attr('data-filter');
            wall.isotope({ filter: selector });
            setTimeout(function(){
                var newH = jQuery('.isoFilter').height();
                if(jQuery('#filtering-nav').length!=0){
                    var fH = jQuery('#filtering-nav').height();
                } else {
                    var fH = 0;
                }
                if(jQuery('.pix_pagenavi').length!=0){
                    var bC = jQuery('.pix_pagenavi > ul').height();
                } else {
                    var bC = 0;
                }
                jQuery('article').css({'height':(newH+the_difference+fH)});
                var hs = 0;
                if(jQuery('article').length!=0){
                    hs = jQuery('article').height()+(fH+bC);
                }   
                articleAsideOpen(hs, ha);
                jQuery(window).resize();
            }, speed);
			if ( !jQuery(this).hasClass('selected') ) {
				jQuery(this).parents('#filtering-nav').find('.selected').removeClass('selected');
				jQuery(this).addClass('selected');
			}
            return false;
        });
                
        wall.infinitescroll({
            navSelector  : 'a#page_nav:last',
            nextSelector : 'a#page_nav:last',
            itemSelector : '.hentry:not(.invis)',
            loadingImg : '<?php echo get_bloginfo('stylesheet_directory'); ?>/images/loader.gif',
            loadingText : '<?php _e('Loading...','delight'); ?>',
            donetext  : '<?php _e('No more items to load','delight'); ?>',
            debug: false,
            errorCallback: function() { 
                jQuery('#infscr-loading').animate({opacity: .8},2000).fadeOut('normal'); 
            }
        },
            function( newElements ) {
                wall.isotope( 'appended', jQuery( newElements ), 
                	function(){
                        setTimeout(function(){
                            var thisClass = jQuery('#filtering-nav a.selected').attr('data-filter');
                            if(thisClass!='*') {
                                jQuery('#filtering-nav a[data-filter="'+thisClass+'"]').click();
                            }
                            var newH = jQuery('.isoFilter').height();
                            filterTag(); 
                            if(jQuery('#filtering-nav').length!=0){
                            	var fH = jQuery('#filtering-nav').height();
                            } else {
                            	var fH = 0;
                            }
                            jQuery('article').css({'height':(newH+the_difference+fH+50)});
                            var hs = 0;
                            if(jQuery('article').length!=0){
                                hs = jQuery('article').height();
                            }   
                            articleAsideOpen(hs, ha);
                            jQuery(window).resize();
                            portfolioImages();

                        }, speed+speed);

                        jQuery("a[href$='.jpg']", newElements).not('.noColorBox').each(function(){
                            var dataRel = jQuery(this).attr('data-rel');
                            jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });;
                        });
                        jQuery("a[href$='.png']", newElements).not('.noColorBox').each(function(){
                            var dataRel = jQuery(this).attr('data-rel');
                            jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
                        });
                        jQuery("a[href$='.gif']", newElements).not('.noColorBox').each(function(){
                            var dataRel = jQuery(this).attr('data-rel');
                            jQuery(this).colorbox({maxWidth:"98%", maxHeight:"98%", scrolling:false, rel:dataRel, onComplete: function(){ jQuery('#cboxLoadedContent').prepend('<div class="cboxPrevent" />'); }, onClosed: function(){ jQuery('.cboxPrevent').remove(); } });
                        });
                        jQuery("a.play-icon", newElements).not('.noColorBox').each(function(){
                            var dataRel = jQuery(this).attr('data-rel');
                            jQuery(this).colorbox({iframe:true, innerWidth:800, innerHeight:450, scrolling:false, rel:dataRel});
                        });
                    }
                );
            }
        );
        
        
        jQuery(window).unbind('.infscr');
        
        jQuery('a#page_nav').click(function(){
            
            jQuery(document).trigger('retrieve.infscr');            
            
            return false;
    
        });
        jQuery(document).ajaxError(function(e,xhr,opt){
            if (xhr.status == 404) {
                jQuery('a#page_nav').remove();
            }
        });

    }    
});

/******************************************************
*
*	Accordions
*
******************************************************/
jQuery(function() {
	if(jQuery('.pix_accordion').length!=0){
        jQuery( '.pix_accordion' ).each(function(){
        	var aA = parseFloat(jQuery(this).attr('data-active'));
            if(aA==0){
            	aA = 100000;
            }
            jQuery( this ).accordion({
                autoHeight: false,
                navigation: false,
                collapsible: true,
                icons: false,
                header: 'a.header_accordion',
                change: function(event, ui) {
                    jQuery('.ui-state-active .icons',this).html('_'); 
                    jQuery('.ui-state-default .icons',this).html('&gt;');
                    jQuery('article, aside').css({'height':'auto'});
                    jQuery('article .entry-title:first, aside h3:first').unbind('click');
                    var hs = jQuery('article').height();
                    var ha = jQuery('aside').height();
                    articleAsideOpen(hs, ha); 
                    jQuery(window).resize();
                    Cufon.refresh();
                },
                create: function(event, ui) {
                    jQuery('.ui-state-default .icons',this).html('&gt;'); 
                    jQuery('.ui-state-active .icons',this).html('_'); 
                    jQuery(window).resize();
                    Cufon.refresh();
                },
                active: aA-1
            });
        });
    }
});

/******************************************************
*
*	Tabs
*
******************************************************/
jQuery(window).one('load',function() {
	if(jQuery('.pix_tabs').length!=0){
        jQuery( '.pix_tabs' ).each(function(){
        	var aA = parseFloat(jQuery(this).attr('data-active'));
            jQuery( this ).tabs({
                icons: false,
                show: function(event, ui) {
                    jQuery('article, aside').css({'height':'auto'});
                    jQuery('article .entry-title:first, aside h3:first').unbind('click');
                    var hs = jQuery('article').height();
                    var ha = jQuery('aside').height();
                    articleAsideOpen(hs, ha); 
                    jQuery(window).resize();
                    Cufon.refresh();
                },
                fx: { opacity: 'toggle' },
                selected: aA-1
            });
        });
    }
    
});

/******************************************************
*
*	Columns IE7 workaround
*
******************************************************/
jQuery(function() {
	if ((jQuery.browser.msie && jQuery.browser.version < 9) && jQuery('.pix_columns').length != 0) {
    
        var w = jQuery('article > div').width();
        
        jQuery('.pix_columns .col_two').css({'width':Math.floor(w*0.47)});
        jQuery('.pix_columns .col_two').not('.last_column').css({'margin-right':Math.floor(w*0.06)});
        
        jQuery('.pix_columns .col_three').css({'width':Math.floor(w*0.30)});
        jQuery('.pix_columns .col_three').not('.last_column').css({'margin-right':Math.floor(w*0.05)});
        
        jQuery('.pix_columns .col_two_three').css({'width':Math.floor(w*0.65)});
        jQuery('.pix_columns .col_two_three').not('.last_column').css({'margin-right':Math.floor(w*0.05)});
        
        jQuery('.pix_columns .col_four').css({'width':Math.floor(w*0.22)});
        jQuery('.pix_columns .col_four').not('.last_column').css({'margin-right':Math.floor(w*0.04)});
        
        jQuery('.pix_columns .col_two_four').css({'width':Math.floor(w*0.48)});
        jQuery('.pix_columns .col_two_four').not('.last_column').css({'margin-right':Math.floor(w*0.04)});
        
        jQuery('.pix_columns .col_three_four').css({'width':Math.floor(w*0.74)});
        jQuery('.pix_columns .col_three_four').not('.last_column').css({'margin-right':Math.floor(w*0.04)});
        
        jQuery('.pix_columns .col_five').css({'width':Math.floor(w*0.18)});
        jQuery('.pix_columns .col_five').not('.last_column').css({'margin-right':Math.floor(w*0.025)});
        
        jQuery('.pix_columns .col_two_five').css({'width':Math.floor(w*0.385)});
        jQuery('.pix_columns .col_two_five').not('.last_column').css({'margin-right':Math.floor(w*0.025)});
        
        jQuery('.pix_columns .col_three_five').css({'width':Math.floor(w*0.59)});
        jQuery('.pix_columns .col_three_five').not('.last_column').css({'margin-right':Math.floor(w*0.025)});
        
    }
    
});

/******************************************************
*
*	Smoothscroll
*
******************************************************/
jQuery(function(){
    jQuery('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length && target
            || jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var targetOffset = target.offset().top;
                jQuery('html,body')
                .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});
/******************************************************
*
*	Hover nav effect
*
******************************************************/
jQuery(window).one('load',function(){
	jQuery('nav > ul > li').has('ul').each(function(){
    	var w = parseFloat(jQuery(this).find('a:first').width());
    	var p = parseFloat(jQuery(this).find('a:first').css('padding-left').replace('px',''));
		jQuery('a:first',this).after('&nbsp;<span class="submenu">&gt;</span>');
	});
	jQuery('nav > ul > li li').has('ul').each(function(){
    	var w = parseFloat(jQuery(this).find('a:first').width());
    	var p = parseFloat(jQuery(this).find('a:first').css('padding-left').replace('px',''));
		jQuery('a:first',this).after('&nbsp;<span class="submenu">_</span>');
	});
	jQuery('nav li li ul').addClass('third_level_menu');

	var le = jQuery('nav > ul > li').length;
    jQuery('nav > ul > li').each(function(){
    	var Mw = jQuery(this).width();
        jQuery(this).css({'margin-left':'-'+(Mw+100)+'px'})
    });
    var i = 0;
    <?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('nav > ul > li').css({'margin-left':0});
    <?php } else { ?>
    while(i < le){
        jQuery('nav > ul > li').eq(i).delay((i*100)+500).animate({'margin-left':0},1000,'easeOutQuint');
        i++;
    }
    <?php } ?>
    var hH = jQuery('header').height();
    <?php if(get_pix_option('pix_layout_animated')=='0') { ?>
    jQuery('header').css({'top':'-'+hH+'px'}).css({'visibility':'visible','top':0});
    <?php } else { ?>
    jQuery('header').css({'top':'-'+hH+'px'}).css({'visibility':'visible'}).animate({'top':0},1000);
    <?php } ?>
    <?php if(get_pix_option('pix_social_bar')!='hidden') { ?>
		<?php if(get_pix_option('pix_social_bar')!='closed') { ?>
        var sH = jQuery('#social_bar').height();
			<?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('#social_bar').not('.open').css({'margin-top':'-'+sH+'px'}).css({'visibility':'visible','margin-top':0});
        jQuery('#social_bar.open').css({'visibility':'visible','margin-top':50});
			<?php } else { ?>
        jQuery('#social_bar').not('.open').css({'margin-top':'-'+sH+'px'}).css({'visibility':'visible'}).animate({'margin-top':0},1000);
        jQuery('#social_bar.open').css({'margin-top':'-'+sH+'px'}).css({'visibility':'visible'}).animate({'margin-top':50},1000);
            <?php } ?>
        <?php } ?>
        var cI = jQuery('.click.icons').height();
			<?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('.click.icons').css({'top':'-'+cI+'px'}).css({'visibility':'visible','top':0});
			<?php } else { ?>
        jQuery('.click.icons').css({'top':'-'+cI+'px'}).css({'visibility':'visible'}).animate({'top':0},1000);
            <?php } ?>
    <?php } ?>
    var hF = 0;
    if(jQuery('footer').length!=0){
        hF = jQuery('footer').height();
    <?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('footer').css({'bottom':'-'+hH+'px'}).css({'visibility':'visible','bottom':0});
    <?php } else { ?>
        jQuery('footer').css({'bottom':'-'+hH+'px'}).css({'visibility':'visible'}).animate({'bottom':0},500);
    <?php } ?>
    }
    if(jQuery('article').length!=0){
        var aT = parseFloat(jQuery('article').css('top').replace('px',''));
        var aH = jQuery('article').height();
    <?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('article').not('.open_toggle').css({'top':aT+aH+hF,'visibility':'visible','top':aT});
    <?php } else { ?>
        jQuery('article').not('.open_toggle').css({'top':aT+aH+hF,'visibility':'visible'}).delay(250).animate({'top':aT},1000);
    <?php } ?>
	}
    if(jQuery('aside').length!=0){
        var sT = parseFloat(jQuery('aside').css('top').replace('px',''));
        var sH = jQuery('aside').height();
    <?php if(get_pix_option('pix_layout_animated')=='0') { ?>
        jQuery('aside').not('.open_toggle').css({'top':sT+sH+hF,'visibility':'visible','top':aT});
    <?php } else { ?>
        jQuery('aside').not('.open_toggle').css({'top':sT+sH+hF,'visibility':'visible'}).delay(250).animate({'top':aT},1000);
    <?php } ?>
    }
});
jQuery(window).one('load',function(){
	jQuery('nav > ul > li').not(':has(ul)').each(function(){
		var a = jQuery(this).find('a:first');
		a.hoverIntent({	
			over: function(){jQuery(this).stop(true,false).animate({'border-right-width':'5px','padding-right':'15px'},100);},
			out: function(){jQuery(this).stop(true,false).animate({'border-right-width':'0','padding-right':'20px'},100);},
            timeout: 250
        });
	});
	jQuery('nav > ul > li').has('ul').each(function(){
		var a = jQuery(this).find('a:first');
		var sub = jQuery(this).find('.submenu:first');
		var w = 30+(a.width());
		var u = jQuery(this).find('ul:first');
        var sto;
		u.find('li').not(':first').before('<li class="slash_li">/</li>');
		jQuery('.third_level_menu .slash_li:first-child').remove();
		var uW = u.width();
		u.each(function(){
			jQuery(this).css({'left':'-'+(30+(uW-w))+'px','width':uW+'px'});
		});
            jQuery('nav ul.third_level_menu').hide();
            uW = 2;
            jQuery('> ul > li',this).each(function(){
                var allLi = [];
                allLi.push(jQuery(this).width());
                jQuery.each(allLi, function(key, value) {
                    uW = uW + (allLi[key]);
                });
            });
            jQuery('> ul',this).css({'left':'-'+(30+uW)+'px','width':uW});
            jQuery('nav ul.third_level_menu').show();

		function seThide(){
            a.stop(true,false).animate({'padding-right':'20px'},100);
            sub.stop(true,false).animate({'opacity':1,'right':'12px'},100);
            u.stop(true,false).animate({'left':'-'+(uW+30)+'px'},200);
		}
		function seTout(){
			sto = setTimeout(seThide,250);
		}
        jQuery(this).hoverIntent({
			over: function(){
                w = 30+(a.width());
				clearTimeout(sto);
                a.stop(true,false).animate({'padding-right':'15px'},100);
                sub.stop(true,false).animate({'opacity':0,'right':0},100);
                u.stop(true,false).animate({'left':w-5},200);
            },
			out: seTout,
            timeout: 250
		});
	});
	jQuery('nav li').hover(function(){
        jQuery(this).addClass('nav_li_hover');
    },function(){
        jQuery(this).removeClass('nav_li_hover');
    });
	jQuery('nav li li').has('ul').each(function(){
		var ul = jQuery(this).find('ul:first');
		var sub = jQuery(this).find('.submenu:first');
		var ulW = 2;
        var sto;
		ul.find('> li').each(function(){
			var allLi = [];
			allLi.push(jQuery(this).width());
			jQuery.each(allLi, function(key, value) {
                ulW = ulW + (allLi[key]);
			});
		});
		var thisH = jQuery(this).height();
		ul.width(0).height(thisH-7);

		function seThide(){
            ul.css({'width':0,'margin-left':0}).hide();
            sub.stop(true,false).animate({'top':'-2px','opacity':1},100);
            jQuery('nav li').removeClass('nav_hover');
            jQuery('nav li').css({'z-index':'1'});
		}
		function seTout(){
			sto = setTimeout(seThide,250);
		}
		jQuery(this).hoverIntent({
            over: function(){
				clearTimeout(sto);
                jQuery('nav li li ul').hide();
                var offset = jQuery(this).offset();
                if(offset.left+ulW>1050){
                    ul.css({'left':0,'top':thisH}).show().stop(true,false).animate({'width':ulW,'margin-left':(1050-offset.left)-ulW},200);
                } else {
                    ul.css({'left':10,'top':thisH}).show().stop(true,false).animate({'width':ulW},200);
                }
                ul.parent().parent().parent().addClass('nav_hover');
                jQuery('nav li').not('.nav_hover').css({'z-index':'-1'});
                sub.stop(true,false).animate({'top':'15px','opacity':0},100);
            },
			out: seTout,
            timeout: 250
        });
	});
    Cufon.refresh();

});

/******************************************************
*
*	Link with #
*
******************************************************/
jQuery(function(){
	jQuery('nav a').click(function(){
    	if(jQuery(this).attr('href')=='#'){
        	return false;
        }
    });
});

/******************************************************
*
*	Show thumbs & thmb scroller
*
******************************************************/
function navGhide(){
    jQuery('#navgallery_wrap').fadeOut(200,function(){
        jQuery('#credits_blog, #pix_controls').fadeIn(400);
    });
}
var sto;
function seTout(){
    sto = setTimeout(navGhide,1000);
}

jQuery(window).one('load',function(){
	if(jQuery('#pix_show_thumbs').length!=0){
    	jQuery('#pix_show_thumbs').click(function(){
        	jQuery('#credits_blog, #pix_controls').fadeOut(200,function(){
                jQuery('#navgallery_wrap').fadeIn(400);
            });
        });
        jQuery('#navgallery_wrap').mouseout(function(){
        	seTout();
        }).mouseover(function(){
            clearTimeout(sto);
        });
    }
    
    
	var wrapperW = jQuery('.navgallery').width();
	var wrapW = jQuery('#navgallery_wrap').width();
        
    
    if( wrapperW > wrapW ) {
        jQuery("#navgallery_wrap").thumbnailScroller({ 
            scrollerType:"hoverPrecise", 
            scrollerOrientation:"horizontal", 
            scrollSpeed:2, 
            scrollEasing:"easeOutCirc", 
            scrollEasingAmount:250, 
            acceleration:4, 
            scrollSpeed:300, 
            noScrollCenterSpace:10, 
            autoScrolling:0, 
            autoScrollingSpeed:2000, 
            autoScrollingEasing:"easeInOutQuad", 
            autoScrollingDelay:500 
        });
    } else {
    	jQuery('.navgallery').css({'margin-left' : (wrapW - wrapperW) });
    }
});


<?php	if (detectMobile()) { ?>
jQuery(window).one('load',function(){
	setTimeout(function(){
	jQuery('*[data-height="100"]').each(function(){
    	var t = jQuery(this);
		jQuery(window).bind('scroll load resize',function(){
            var h = parseFloat(window.innerHeight);
            t.css({'height':h+'px'});
		});
	});
	jQuery('*[data-position="fixed"]').each(function(){
    	var t = jQuery(this);
        t.css({'position':'absolute'});
		var top = jQuery(this).attr('data-top');
		var bottom = jQuery(this).attr('data-bottom');
        var hT = parseFloat(t.height());
		jQuery(window).bind('scroll load resize',function(){
			var sumScroll = parseFloat(jQuery('html').scrollTop())+parseFloat(jQuery('body').scrollTop());
            var h = parseFloat(window.innerHeight);
            if(top!='not'){
                t.css({'top':(sumScroll+parseFloat(top))+'px'});
            } else {
                t.css({'top':((sumScroll+h)-(parseFloat(bottom)+hT))+'px','bottom':''});
            }
		});
	});
    },2);
});
<?php } ?>

jQuery(window).one('load',function(){
	jQuery('#plusone').hide();
});


