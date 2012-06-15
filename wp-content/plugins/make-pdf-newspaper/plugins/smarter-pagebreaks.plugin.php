<?php
/*
Plugin Name: Smarter Page Breaks
Plugin URI: http://fivefilters.org/pdf-newspaper/
Description: Tries to identify and markup HTML segments which should not be broken (split across columns or pages).
Version: 0.5
Author: Keyvan Minoukadeh
Author URI: http://www.keyvan.net
License: AGPL v3
*/

//set plugin id as file name of plugin
$plugin_id = basename(__FILE__);

//plugin data
$data['name'] = "Smarter Page Breaks";
$data['author'] = "Keyvan Minoukadeh";
$data['url'] = "http://www.keyvan.net";

register_plugin($plugin_id, $data);

function smarter_page_breaks($document) {
	//////////////////////////////////////
	// PROCESS SUB-HEADINGS (<h2>)
	//////////////////////////////////////
	// All headings (h1-6) have been converted to h2 by this point.
	// Get a list of all headings.
	$headings = $document->getElementsByTagName('h2');
	$no_break = array();
	// Loop through headings to find next siblings to group
	// with heading.
	for ($x=0; $x < $headings->length; $x++) {
		$heading = $headings->item($x);
		$no_break[$x]['heading'] = $heading;
		$content_in_between = '';
		while ($heading->nextSibling != null && $heading->nextSibling->nodeType != XML_ELEMENT_NODE) {
			$content_in_between .= trim($heading->nextSibling->textContent);
			$heading = $heading->nextSibling;
		}
		if ($content_in_between == '' && $heading->nextSibling != null) {
			$no_break[$x]['sibling'] = $heading->nextSibling;
		}
	}
	foreach ($no_break as $elems) {
		$div = $document->createElement('div');
		$div->setAttribute('style', 'page-break-inside: avoid;');
		$elems['heading']->parentNode->insertBefore($div, $elems['heading']);
		$div->appendChild($elems['heading']);
		if (isset($elems['sibling'])) {
			$div->appendChild($elems['sibling']);
		}
	}
	
	////////////////////////////////////////////////
	// PROCESS ARTICLE TITLE 
	// (<div class="heading-div"><h1></h1></div>)
	////////////////////////////////////////////////
	$xpath = new DOMXPath($document);
	$firstDiv = $xpath->query('//div[@class="heading-div"]');
	if ($firstDiv->length > 0) {
		$firstDiv = $firstDiv->item(0);
		$nextElem = $firstDiv;
		$addToFirstDiv = array();
		$content_in_between = '';
		while ($nextElem->nextSibling != null && strlen($content_in_between) < 100) {
			$content_in_between .= trim($nextElem->nextSibling->textContent);
			$addToFirstDiv[] = $nextElem->nextSibling;
			if ($nextElem->nextSibling->nodeType == XML_ELEMENT_NODE) {
				// in case we encounter a sub-heading block
				$nextElem->nextSibling->removeAttribute('style');
				// end the no-break block if we've got enough text content or we've stored an image...
				if ((strlen($content_in_between) >= 100) || $nextElem->nextSibling->tagName == 'img') {
					break;
				}
				// ...also end if our element contains an image
				if ($nextElem->nextSibling->getElementsByTagName('img')->length > 0) {
					break;
				}
			}
			$nextElem = $nextElem->nextSibling;
		}
		foreach ($addToFirstDiv as $elem) {
			$firstDiv->appendChild($elem);
		}
	}
	
	//////////
	// DONE!
	//////////
	return $document;
}

// add hook
add_hook('filter_purified_html_dom','smarter_page_breaks');
?>