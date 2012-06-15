=== Make PDF Newspaper ===
Contributors: mhawksey
Donate link: http://fivefilters.org/pdf-newspaper/#donate
Tags: newsletter, tabloid, printable, pdf, newspaper, magazine, tcpdf
Requires at least: 2.5
Tested up to: 3.0
Stable tag: 2.2.4
'Make PDF Newspaper' uses Five Filters PDF Newspaper to create printer friendly 'tabloid' edition of your Wordpress blog.

== Description ==

The 'Make PDF Newspaper' plugin replaces the [Make Tabbloid](http://www.rsc-ne-scotland.org.uk/mashe/wordpress-plugins/make-tabbloid-plugin/) to automatically create printer friendly 'tabloid' editions of your Wordpress blog in an attractive 2 column magazine/newspaper format. Development of the original plugin stopped after HP removed API access to their service. The new plugin uses code developed for the [Five Filters PDF Newspaper project](http://fivefilters.org/pdf-newspaper/), which in itself pulls together code from a number of other open source projects including [TCPDF](http://www.tcpdf.org/), [HTML Purifier](http://htmlpurifier.org/), [SimplePie](http://simplepie.org/) and [SmartyPants](http://michelf.com/projects/php-smartypants/)

The plugin includes a widget to let you control how you advertise your 'tabloid edition'. You can also choose to display a thumbnail of your custom newsletter (powered by [Bluga.net Webthumb](http://webthumb.bluga.net/)) to let your readers see what they are missing. 

**Key features**

* Option to generate PDF from externally hosted versions of the Five Filters code
* Option to generate PDF editions of selected categories or archives
* PDF generation entirely self-hosted removing reliance on 3rd party services and making it suitable for Intranet installations of WordPress
* Option to include QR codes for each post (and custom text for user intructions)
* Customisable banner text and logo
* Option to automatically footnote all the links which appear in a post (using tinyurl or bitly to shorten long links)
* Integrated widget to display thumbnail of your publication
* User controlled production of PDF (including secure urls to trigger pdf generation via cron services. See FAQ for more information) 

See the 'screenshot' for a summary of the features.

For an example of its usage visit [http://www.rsc-ne-scotland.org.uk/mashe/](http://www.rsc-ne-scotland.org.uk/mashe/) 

**Thanks to**

This plugin is made possible by the hard work of [Keyvan Minoukadeh](http://www.keyvan.net/) creator of [Five Filters PDF Newspaper](http://fivefilters.org/pdf-newspaper/) and Jonathan Lyon who nudged me on.


== Installation ==

1. Once you've downloaded and extracted move the make-pdf-newspaper folder to wp-content/plugins
1. In the make-pdf-newspaper folder there should be a folder called 'cache' this needs write permissions
1. In wp-content create a folder called 'pdf' and give it write permissions
1. Activate 'Make PDF Newspaper'
1. From the 'Make PDF Newspaper' enter options 
1. IMPORTANT Click 'Save settings'
1. You can then try Test PDF or Rebuild PDF buttons - building the PDF is server intensive so if it looks like it has stalled wait a bit (60 seconds usually does it).


The script needs write access check out the [WordPress Codex](http://codex.wordpress.org/Changing_File_Permissions) or have a look at the FAQ for help.

== Frequently Asked Questions ==

= I get an fopen error and / or permission denied =

If you get permission errors make sure that the script has writing rights in your blog directory. Try to creating a file with your chosen pdf filename (e.g. mytabbloid.pdf) manually, upload it with a ftp program and set the rights to 777 with CHMOD. A good tutorial for changing file permissions can be found on the [WordPress Codex](http://codex.wordpress.org/Changing_File_Permissions).

= I get a Error 500 - Internal server error =

This usually indicates that your server has timed out because the PDF it is trying to create is too big. Disabling link footnotes and QR Code generation may help.

= Warning: curl_setopt() [function.curl-setopt]: CURLOPT_FOLLOWLOCATION cannot be activated when in safe_mode or an open_basedir error =

This is indicates that your host server isn't configured to run this plugin. You can contact your host to see if they can help or consider setting the 'Use external service' option within the plugin

= How can I automatically generating new copies of the PDF documents (daily, weekly etc) =

The Make PDF Newspaper options panel includes a link which can be used to trigger regeneration of PDFs using a 'cron job' via your host or with a 3rd party service.  

== Screenshots ==

1. Screenshot of an example outputted PDF from 'Make PDF Newspaper'

== Upgrade Notice ==

If you are upgrading from v2.2.1 or earlier you will need to generate a random security key and Saving settings before you will be able to remake pdfs

If you used the Make Tabbloid plugin this must be deactivated before installing Make PDF Newspaper.  

== Changelog ==

**2.2.4** - Bugfixes (mainly provided by mgnbrunty http://wordpress.org/support/topic/plugin-make-pdf-newspaper-bug-with-categories-i-ncludes-afix)

**2.2.3** - Improved position and instructions for 'secret key', which is required to prevent malicious creation of pdfs 

**2.2.2** - Fixed bug with images floating over titles. Provided secure urls to allow automatic regeneration of PDFs via Cron Job services. Allowed custom text for QR Code user instructions. Some other minor bug fixes including 'images' cache folder not writeable.

**2.2.1** - Updated to use version 2.2 of FiveFilters PDF Engine. Added localised date text (uses format set in WP General Settings)

**2.0.1** - Added option to generate PDF from external host of FiveFilters PDF engine and to generate separate PDFs for categories and archives. Fixed some other bugs with PDF and thumbnail generation.

**2.0.0** - Initial Release