<?php
/**
 * Newspaper PDF class. Create PDFs in columnar format.
 * This class extends Nicola Asuni's TCPDF. The code is based on the multiple column example (example number 10: http://www.tecnick.com/public/code/cp_dpage.php?aiocp_dp=tcpdf_examples).
 * Note on the license: TCPDF (and the example code I based this class on) is licensed under the LGPL which allows copies and changes to the code to be licensed as GPL. If you modify this file, you have to keep the GPL license.
 * @abstract NewspaperPDF - Create PDFs in columnar format
 * @author Keyvan Minoukadeh (code based on Nicola Asuni's multiple column example)
 * @license http://www.gnu.org/licenses/gpl.html GPL
 */
 
/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


class NewspaperPDF extends TCPDF
{
	//number of columns
	protected $ncols = 2;
	
	// column width
	protected $colwidth = 87;
	
	//current column
	protected $col = 0;
	
	//page y
	protected $pageY;
	
	//first page y
	protected $firstPageY;
	
	// number of stories
	protected $storyCount = 0;
	
	protected $newspaperHtml = '';
	
	protected $coverImage = '';
	
	protected $prevTag = '';
	
	protected $maxEmptyLnSpace = 8;
	
	protected $curEmptyLnSpace = 0;
	
	public $hooks;
	
	// Instance of phphooks class (for plugins)
	public function setHooks($hooks) {
		$this->hooks = $hooks;
	}
	
	//Set cover image for PDF - pass path to image
	public function setCoverImage($img)
	{
		$this->coverImage = $img;
	}
		
	public function addItem($title, $content, $date=0)
	{
		$cancel_add = false;
		$html = '<div class="heading-div" style="page-break-inside: avoid;"><h1 style="line-height: 1.2;">'.$title.'</h1>';
		$html .= '<tcpdf method="clearEmptyLnSpace" />';
		if ((int)$date != 0) {
			$html .= '<p>'.date_i18n(get_option('date_format').' '.get_option('time_format'), $date).'</p>';
		}
		$html .= '</div>';
		//if (preg_match('/The ska and dub/i', $content)) { die($content); }
		$html .= $content;
		
		if ($this->hooks->hook_exist('filter_purified_html_string')) {
			$html = $this->hooks->filter_hook('filter_purified_html_string', $html);
		}
		if ($this->hooks->hook_exist('filter_purified_html_dom')) {
			$html_encoded = mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8');
			$document = new DOMDocument('1.0', 'UTF-8');
			$document->preserveWhiteSpace = false;
			$result = @$document->loadHTML('<div xml:id="body">'.$html_encoded.'</div>');
			unset($html_encoded);
			$document = $this->hooks->filter_hook('filter_purified_html_dom', $document);
			if ($document === null) {
				$cancel_add = true;
			} else {
				$article = $document->getElementById('body');
				if ($article !== null) {
					$html = $document->saveXML($article);
					$html = html_entity_decode($html, ENT_QUOTES, 'UTF-8');
					//die($html);
				}
			}
			unset($document, $article);
		}
		if (!$cancel_add) {
			//$html = '<tcpdf method="checkForSpace" />'.$html.'<hr />';
			$html = $html.'<hr />';
			//die($html);
			$this->newspaperHtml .= $html;
			$this->storyCount++;
		}
	}
	
	public function clearEmptyLnSpace() {
		$this->curEmptyLnSpace = 0;
	}
	
	public function checkForSpace() {
		if ($this->GetY() > 240) {
			$this->acceptPageBreak();
		}
	}
	
	public function getNewspaperLineStyle()
	{
		return array('width' => 1.4 / $this->getScaleFactor(), 'cap' => 'butt', 'join' => 'miter', 'dash' => 0, 'color' => array(150, 150, 150));
	}
	
	public function getHeadlineSize()
	{
		return 18;
	}
	
	public function makePdf()
	{
        // disable existing columns
        $this->setEqualColumns();
        // add a new page
        $this->AddPage();
        // reset margins
        $this->selectColumn();
		$this->SetY($this->firstPageY);
        // set columns
        $this->setEqualColumns($this->ncols, $this->colwidth);
		// select column
		$this->selectColumn();
		// set font size
		$this->SetFontSize(8);
        // print chapter body
		$this->writeHTML($this->newspaperHtml, true, false, true, false, '');
		//$this->EndPage();
        //$this->MultiCell($this->colwidth, 5, $this->newspaperHtml, 0, 'L', 0, 1, '', '', true, 0, true);	
	
		/*
		$this->AddPage();
		// check if we need to add cover
		if ($this->coverImage != '') {
			$this->setPrintFooter(false);
			$dim = $this->getPageDimensions();
			$w = (int)$dim['wk']; // 210
			$h = (int)$dim['hk']; // 297
			//var_dump($w, $h);exit;
			// temporarily disable auto page break (full image will trigger page/column break)
			$_autobreak = $this->AutoPageBreak;
			$_botMargin = $this->bMargin;
			$this->SetAutoPageBreak(false, 0);
			// add image
			$this->Image($this->coverImage, 0, 0, $w, $h, '', '', '', false, 300, '', false, false, 0);
			// restore page break setting
			$this->startPageGroup();
			$this->AddPage();
			$this->SetAutoPageBreak($_autobreak, $_botMargin);
			$this->setPrintFooter(true);
			$this->y = $this->pageY;
		} else { // no cover needed so assume header image/title has been printed
			$this->SetY($this->firstPageY);
		}
		//$this->storyBody($this->newspaperHtml);
		// Font
		//$this->SetFont('dejavuserifcondensed', '', 8);
		$this->SetFontSize(8);
		// Output text in a column
		$this->MultiCell($this->colwidth, 5, $this->newspaperHtml, 0, 'L', 0, 1, '', '', true, 0, true);
		*/
	}
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	//  The functions below have been copied from the TCPDF class (tcpdf.php) and modified (very slightly)
	//  It's probably a good idea to compare the functions below with those in newer releases of TCPDF to 
	//  see if there are any significate changes that need to be copied over here.
	//////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * This method is used to render the page header.
	 * It is automatically called by AddPage() and could be overwritten in your own inherited class.
	 * @access public
	 */
	public function Header() {
		if ($this->getPage() > 1) return;
		$ormargins = $this->getOriginalMargins();
		$headerfont = $this->getHeaderFont();
		$headerdata = $this->getHeaderData();
		$this->pageY = $this->GetY();
		if (($headerdata['logo']) AND ($headerdata['logo'] != K_BLANK_IMAGE)) {
			$this->Image($headerdata['logo'], $this->GetX(), $this->getHeaderMargin(), $headerdata['logo_width']);
			$imgy = $this->getImageRBY();
		} else {
			$imgy = $this->GetY();
		}
		$cell_height = round(($this->getCellHeightRatio() * $headerfont[2]) / $this->getScaleFactor(), 2);
		// set starting margin for text data cell
		if ($this->getRTL()) {
			$header_x = $ormargins['right'] + ($headerdata['logo_width'] * 1.1);
		} else {
			$header_x = $ormargins['left'] + ($headerdata['logo_width'] * 1.1);
		}
		$this->SetTextColor(0, 0, 0);
		// header title
		$this->SetFont($headerfont[0], 'B', $headerfont[2] + 1);
		$this->SetX($header_x);			
		//$this->Cell(0, $cell_height, $headerdata['title'], 0, 1, '', 0, '', 0);
		$_cellhr = $this->getCellHeightRatio();
		$this->setCellHeightRatio(1.2);
		if ($headerdata['title'] != '') {
			$this->MultiCell(0, 0, $headerdata['title'], 0, '', 0, 1, '', '', true, 0, false);
		}
		// header string
		$this->SetFont($headerfont[0], $headerfont[1], 11);
		$this->SetX($header_x);
		$this->SetY($this->GetY() - 2);
		$this->MultiCell(0, 0, $headerdata['string'], 0, '', 0, 1, '', '', true, 0, true);
		$this->setCellHeightRatio($_cellhr);
		// print an ending header line
		$this->SetLineStyle(array('width' => 0.5 / $this->getScaleFactor(), 'cap' => 'butt', 'join' => 'miter', 'dash' => 2, 'color' => array(200)));
		if ($headerdata['logo']) {
			$this->SetY((2.835 / $this->getScaleFactor()) + $imgy - 3);
		} else {
			$this->SetY($this->GetY() - 4);
		}
		//var_dump($this->getY());exit;
		//$this->SetY((2.835 / $this->getScaleFactor()) + max($imgy, $this->GetY()));
		//$this->SetY(2);
		if ($this->getRTL()) {
			$this->SetX($ormargins['right']);
		} else {
			$this->SetX($ormargins['left']);
		}
		// draw header underline
		//if ($headerdata['logo']) {
			$this->Cell(0, 0, '', 'B', 0, 'C');
		//}
		$this->firstPageY = $this->GetY() + 11;
	}

	/**
	 * This method is used to render the page footer. 
	 * It is automatically called by AddPage() and could be overwritten in your own inherited class.
	 * @access public
	 */
	 
	public function Footer() {				
		$cur_y = $this->GetY();
		$ormargins = $this->getOriginalMargins();
		$this->SetTextColor(0, 0, 0);
		if (empty($this->pagegroups)) {
			$pagenumtxt = $this->getAliasNumPage();
		} else {
			$pagenumtxt = $this->getPageNumGroupAlias();
		}	
		$this->SetY($cur_y);
		//Print page number
		$this->Cell(0, 0, $pagenumtxt, 0, 0, 'C');
	}
	
	/**
	 * Whenever a page break condition is met, the method is called, and the break is issued or not depending on the returned value.
	 * The default implementation returns a value according to the mode selected by SetAutoPageBreak().<br />
	 * This method is called automatically and should not be called directly by the application.
	 * @return boolean
	 * @access public
	 * @since 1.4
	 * @see SetAutoPageBreak()
	 */
	public function AcceptPageBreak() {
		if ($this->num_columns > 1) {
			// don't accept page break if we're at the beginning of a column!
			//var_dump($this->y);
			// multi column mode
			if($this->current_column < ($this->num_columns - 1)) {
				// go to next column
				$this->selectColumn($this->current_column + 1);
			} else {
				// add a new page
				$this->AddPage();
				// set first column
				$this->selectColumn(0);
			}
			// avoid page breaking from checkPageBreak()
			return false;
		}
		return $this->AutoPageBreak;
	}	
	
	/**
	 * Terminates the PDF document.
	 * It is not necessary to call this method explicitly because Output() does it automatically.
	 * If the document contains no page, AddPage() is called to prevent from getting an invalid document.
	 * @access public
	 * @since 1.0
	 * @see Open(), Output()
	 */
	public function Close() {
		if ($this->state == 3) {
			return;
		}
		if ($this->page == 0) {
			$this->AddPage();
		}
		// close page
		$this->endPage();
		/*
		$this->lastpage();
		$this->state = 2;
		$this->SetAutoPageBreak(false);
		$this->y = $this->h - (1 / $this->k);
		$this->rMargin = 0;
		$this->_out('q');
		$this->setVisibility('screen');
		$this->SetFont('helvetica', '', 1);
		$this->SetTextColor(127,127,127);
		$this->SetAlpha(0);
		$msg = "\x50\x6f\x77\x65\x72\x65\x64\x20\x62\x79\x20\x54\x43\x50\x44\x46\x20\x28\x77\x77\x77\x2e\x74\x63\x70\x64\x66\x2e\x6f\x72\x67\x29";
		$lnk = "\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x63\x70\x64\x66\x2e\x6f\x72\x67";
		$this->Cell(0, 0, $msg, 0, 0, 'R', 0, $lnk, 0, false, 'D', 'B');
		$this->_out('Q');
		$this->setVisibility('all');
		$this->state = 1;
		*/
		// close document
		$this->_enddoc();
		// unset all class variables (except critical ones)
		$this->_destroy(false);
	}
	
	/**
	 * Process opening tags.
	 * @param array $dom html dom array
	 * @param int $key current element id
	 * @param boolean $cell if true add the default cMargin space to each new line (default false).
	 * @access protected
	 */
	protected function openHTMLTagHandler(&$dom, $key, $cell) {
		$tag = $dom[$key];
		$parent = $dom[($dom[$key]['parent'])];
		$firstorlast = ($key == 1);
		// reset transaction if we're not low enough on the page
		//if ($tag['value'] == 'div') echo "page:", $this->page, " y:", $this->y;
		if ($this->y < 190 && isset($tag['attribute']['nobr']) && $tag['attribute']['nobr'] == 'true') {
			//unset($dom[$key]['attribute']['nobr']);
			//$this->commitTransaction();
		}
		// check for text direction attribute
		if (isset($tag['attribute']['dir'])) {
			$this->setTempRTL($tag['attribute']['dir']);
		} else {
			$this->tmprtl = false;
		}
		if ($tag['block']) {
			$hbz = 0; // distance from y to line bottom
			$hb = 0; // vertical space between block tags
			// calculate vertical space for block tags
			if (isset($this->tagvspaces[$tag['value']][0]['h']) AND ($this->tagvspaces[$tag['value']][0]['h'] >= 0)) {
				$cur_h = $this->tagvspaces[$tag['value']][0]['h'];
			} elseif (isset($tag['fontsize'])) {
				$cur_h = ($tag['fontsize'] / $this->k) * $this->cell_height_ratio;
			} else {
				$cur_h = $this->FontSize * $this->cell_height_ratio;
			}
			if (isset($this->tagvspaces[$tag['value']][0]['n'])) {
				$n = $this->tagvspaces[$tag['value']][0]['n'];
			} elseif (preg_match('/[h][0-9]/', $tag['value']) > 0) {
				$n = 0.6;
			} else {
				$n = 1;
			}
			$hb = ($n * $cur_h);
			if (($this->htmlvspace <= 0) AND ($n > 0)) {
				if (isset($parent['fontsize'])) {
					$hbz = (($parent['fontsize'] / $this->k) * $this->cell_height_ratio);
				} else {
					$hbz = $this->FontSize * $this->cell_height_ratio;
				}
			}
		}
		//Opening tag
		switch($tag['value']) {
			case 'table': {
				$cp = 0;
				$cs = 0;
				$dom[$key]['rowspans'] = array();
				if (!isset($dom[$key]['attribute']['nested']) OR ($dom[$key]['attribute']['nested'] != 'true')) {
					// set table header
					if (!$this->empty_string($dom[$key]['thead'])) {
						// set table header
						$this->thead = $dom[$key]['thead'];
						if (!isset($this->theadMargins) OR (empty($this->theadMargins))) {
							$this->theadMargins = array();
							$this->theadMargins['cmargin'] = $this->cMargin;
							$this->theadMargins['lmargin'] = $this->lMargin;
							$this->theadMargins['rmargin'] = $this->rMargin;
						}
					}
				}
				if (isset($tag['attribute']['cellpadding'])) {
					$cp = $this->getHTMLUnitToUnits($tag['attribute']['cellpadding'], 1, 'px');
					$this->oldcMargin = $this->cMargin;
					$this->cMargin = $cp;
				}
				if (isset($tag['attribute']['cellspacing'])) {
					$cs = $this->getHTMLUnitToUnits($tag['attribute']['cellspacing'], 1, 'px');
				}
				if ($this->checkPageBreak(((2 * $cp) + (2 * $cs) + $this->lasth), '', false)) {
					$this->inthead = true;
					// add a page (or trig AcceptPageBreak() for multicolumn mode)
					$this->checkPageBreak($this->PageBreakTrigger + 1);
				}
				break;
			}
			case 'tr': {
				// array of columns positions
				$dom[$key]['cellpos'] = array();
				break;
			}
			case 'hr': {
				if ($this->isStartOfColumn()) break;
				if ((isset($tag['height'])) AND ($tag['height'] != '')) {
					$hrHeight = $this->getHTMLUnitToUnits($tag['height'], 1, 'px');
				} else {
					$hrHeight = $this->GetLineWidth();
				}
				$this->addHTMLVertSpace($hbz, ($hrHeight / 2), $cell, $firstorlast);
				$x = $this->GetX();
				$y = $this->GetY();
				$wtmp = $this->w - $this->lMargin - $this->rMargin;
				if ($cell) {
					$wtmp -= 2 * $this->cMargin;
				}
				if ((isset($tag['attribute']['width'])) AND ($tag['attribute']['width'] != '')) {
					$hrWidth = $this->getHTMLUnitToUnits($tag['attribute']['width'], $wtmp, 'px');
				} else {
					$hrWidth = $wtmp;
				}
				$prevlinewidth = $this->GetLineWidth();
				$this->SetLineWidth($hrHeight);
				$this->Line($x, $y, $x + $hrWidth, $y);
				$this->SetLineWidth($prevlinewidth);
				$this->addHTMLVertSpace(($hrHeight / 2), 0, $cell, !isset($dom[($key + 1)]));
				break;
			}
			case 'a': {
				if (array_key_exists('href', $tag['attribute'])) {
					$this->HREF['url'] = $tag['attribute']['href'];
				}
				break;
			}
			case 'img': {
				if (isset($tag['attribute']['src'])) {
					// replace relative path with real server path
					if (($tag['attribute']['src'][0] == '/') AND ($_SERVER['DOCUMENT_ROOT'] != '/')) {
						$findroot = strpos($tag['attribute']['src'], $_SERVER['DOCUMENT_ROOT']);
						if (($findroot === false) OR ($findroot > 1)) {
							$tag['attribute']['src'] = $_SERVER['DOCUMENT_ROOT'].$tag['attribute']['src'];
						}
					}
					$tag['attribute']['src'] = urldecode($tag['attribute']['src']);
					$type = $this->getImageFileType($tag['attribute']['src']);
					$testscrtype = @parse_url($tag['attribute']['src']);
					if (!isset($testscrtype['query']) OR empty($testscrtype['query'])) {
						// convert URL to server path
						//$tag['attribute']['src'] = str_replace(K_PATH_URL, K_PATH_MAIN, $tag['attribute']['src']);
					}
					if (!isset($tag['attribute']['width'])) {
						$tag['attribute']['width'] = 0;
					}
					if (!isset($tag['attribute']['height'])) {
						$tag['attribute']['height'] = 0;
					}
					//if (!isset($tag['attribute']['align'])) {
						// the only alignment supported is "bottom"
						// further development is required for other modes.
						$tag['attribute']['align'] = 'bottom';
					//}
					switch($tag['attribute']['align']) {
						case 'top': {
							$align = 'T';
							break;
						}
						case 'middle': {
							$align = 'M';
							break;
						}
						case 'bottom': {
							$align = 'B';
							break;
						}
						default: {
							$align = 'B';
							break;
						}
					}
					$this->Ln(10, $cell);
					//$this->addHTMLVertSpace(10, 0, $cell, $firstorlast);
					$prevy = $this->y;
					$xpos = $this->x;
					// eliminate marker spaces
					if (isset($dom[($key - 1)])) {
						if (($dom[($key - 1)]['value'] == ' ') OR (isset($dom[($key - 1)]['trimmed_space']))) {
							//$xpos -= $this->GetStringWidth(chr(32));
						} elseif ($this->rtl AND $dom[($key - 1)]['value'] == '  ') {
							$xpos += (2 * $this->GetStringWidth(chr(32)));
						}
					}
					$imglink = '';
					if (isset($this->HREF['url']) AND !$this->empty_string($this->HREF['url'])) {
						$imglink = $this->HREF['url'];
						if ($imglink{0} == '#') {
							// convert url to internal link
							$page = intval(substr($imglink, 1));
							$imglink = $this->AddLink();
							$this->SetLink($imglink, 0, $page);
						}
					}
					$border = 0;
					if (isset($tag['attribute']['border']) AND !empty($tag['attribute']['border'])) {
						// currently only support 1 (frame) or a combination of 'LTRB'
						$border = $tag['attribute']['border'];
					}
					$iw = '';
					if (isset($tag['attribute']['width'])) {
						$iw = $this->getHTMLUnitToUnits($tag['attribute']['width'], 1, 'px', false);
					}
					$ih = '';
					if (isset($tag['attribute']['height'])) {
						$ih = $this->getHTMLUnitToUnits($tag['attribute']['height'], 1, 'px', false);
					}
					if (($type == 'eps') OR ($type == 'ai')) {
						$this->ImageEps($tag['attribute']['src'], $xpos, $this->y, $iw, $ih, $imglink, true, $align, '', $border, true);
					} elseif ($type == 'svg') {
						$this->ImageSVG($tag['attribute']['src'], $xpos, $this->y, $iw, $ih, $imglink, $align, '', $border, true);
					} else  {
						$_res = $this->Image($tag['attribute']['src'], $xpos, $this->y, $iw, $ih, '', $imglink, $align, false, 300, '', false, false, $border, false, false, true);
						if ($_res == null) break;
						unset($_res);
						// fit to box
						//$this->Image($tag['attribute']['src'], $xpos, $this->y, 85, 150, '', $imglink, $align, false, 300, '', false, false, $border, true, false, false);
					}
					switch($align) {
						case 'T': {
							$this->y = $prevy;
							break;
						}
						case 'M': {
							$this->y = (($this->img_rb_y + $prevy - ($tag['fontsize'] / $this->k)) / 2) ;
							break;
						}
						case 'B': {
							$this->y = $this->img_rb_y - ($tag['fontsize'] / $this->k);
							break;
						}
					}
				}
				$this->curEmptyLnSpace = 0;
				$this->Ln(6, $cell);
				break;
			}
			case 'dl': {
				++$this->listnum;
				if ($this->listnum == 1) {
					$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				} else {
					$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				}
				break;
			}
			case 'dt': {
				$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				break;
			}
			case 'dd': {
				if ($this->rtl) {
					$this->rMargin += $this->listindent;
				} else {
					$this->lMargin += $this->listindent;
				}
				++$this->listindentlevel;
				$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				break;
			}
			case 'ul':
			case 'ol': {
				++$this->listnum;
				if ($tag['value'] == 'ol') {
					$this->listordered[$this->listnum] = true;
				} else {
					$this->listordered[$this->listnum] = false;
				}
				if (isset($tag['attribute']['start'])) {
					$this->listcount[$this->listnum] = intval($tag['attribute']['start']) - 1;
				} else {
					$this->listcount[$this->listnum] = 0;
				}
				if ($this->rtl) {
					$this->rMargin += $this->listindent;
					$this->x -= $this->listindent;
				} else {
					$this->lMargin += $this->listindent;
					$this->x += $this->listindent;
				}
				++$this->listindentlevel;
				if ($this->listnum == 1) {
					//$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
					$this->addHTMLVertSpace($this->tagvspaces[$tag['value']][0]['n'], $hb, $cell, $firstorlast);
				} else {
					$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				}
				break;
			}
			case 'li': {
				//TODO: this line does not work when uls/ols are nested
				//if ($this->prevTag == 'ul' || $this->prevTag == 'ol') $firstorlast = true;
				//$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				$this->addHTMLVertSpace($this->tagvspaces[$tag['value']][0]['n'], 0, $cell, $firstorlast);
				if ($this->listordered[$this->listnum]) {
					// ordered item
					if (isset($parent['attribute']['type']) AND !$this->empty_string($parent['attribute']['type'])) {
						$this->lispacer = $parent['attribute']['type'];
					} elseif (isset($parent['listtype']) AND !$this->empty_string($parent['listtype'])) {
						$this->lispacer = $parent['listtype'];
					} elseif (isset($this->lisymbol) AND !$this->empty_string($this->lisymbol)) {
						$this->lispacer = $this->lisymbol;
					} else {
						$this->lispacer = '#';
					}
					++$this->listcount[$this->listnum];
					if (isset($tag['attribute']['value'])) {
						$this->listcount[$this->listnum] = intval($tag['attribute']['value']);
					}
				} else {
					// unordered item
					if (isset($parent['attribute']['type']) AND !$this->empty_string($parent['attribute']['type'])) {
						$this->lispacer = $parent['attribute']['type'];
					} elseif (isset($parent['listtype']) AND !$this->empty_string($parent['listtype'])) {
						$this->lispacer = $parent['listtype'];
					} elseif (isset($this->lisymbol) AND !$this->empty_string($this->lisymbol)) {
						$this->lispacer = $this->lisymbol;
					} else {
						$this->lispacer = '!';
					}
				}
				break;
			}
			case 'blockquote': {
				if ($this->rtl) {
					$this->rMargin += $this->listindent;
				} else {
					$this->lMargin += $this->listindent;
				}
				++$this->listindentlevel;
				//$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				//$this->addHTMLVertSpace(0, $hb, $cell, $firstorlast);
				break;
			}
			case 'br': {
				//TODO: make sure x (and y?) hasn't changed
				//if ($this->prevTag == 'br') $firstorlast = true;
				$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				break;
			}
			case 'div': {
				//$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				break;
			}
			case 'p': {
				//$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				$this->addHTMLVertSpace($this->tagvspaces[$tag['value']][0]['n'], $hb, $cell, $firstorlast);
				//$this->ln($this->tagvspaces[$tag['value']][0]['n']);
				break;
			}
			case 'pre': {
				$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				$this->premode = true;
				break;
			}
			case 'sup': {
				$this->SetXY($this->GetX(), $this->GetY() - ((0.7 * $this->FontSizePt) / $this->k));
				break;
			}
			case 'sub': {
				$this->SetXY($this->GetX(), $this->GetY() + ((0.3 * $this->FontSizePt) / $this->k));
				break;
			}
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6': {
				$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				break;
			}
			// Form fields (since 4.8.000 - 2009-09-07)
			case 'form': {
				if (isset($tag['attribute']['action'])) {
					$this->form_action = $tag['attribute']['action'];
				} else {
					$this->form_action = K_PATH_URL.$_SERVER['SCRIPT_NAME'];
				}
				if (isset($tag['attribute']['enctype'])) {
					$this->form_enctype = $tag['attribute']['enctype'];
				} else {
					$this->form_enctype = 'application/x-www-form-urlencoded';
				}
				if (isset($tag['attribute']['method'])) {
					$this->form_mode = $tag['attribute']['method'];
				} else {
					$this->form_mode = 'post';
				}
				break;
			}
			case 'input': {
				if (isset($tag['attribute']['name']) AND !$this->empty_string($tag['attribute']['name'])) {
					$name = $tag['attribute']['name'];
				} else {
					break;
				}
				$prop = array();
				$opt = array();
				if (isset($tag['attribute']['value']) AND !$this->empty_string($tag['attribute']['value'])) {
					$value = $tag['attribute']['value'];
				}
				if (isset($tag['attribute']['maxlength']) AND !$this->empty_string($tag['attribute']['maxlength'])) {
					$opt['maxlen'] = intval($tag['attribute']['value']);
				}
				$h = $this->FontSize * $this->cell_height_ratio;
				if (isset($tag['attribute']['size']) AND !$this->empty_string($tag['attribute']['size'])) {
					$w = intval($tag['attribute']['size']) * $this->GetStringWidth(chr(32)) * 2;
				} else {
					$w = $h;
				}
				if (isset($tag['attribute']['checked']) AND (($tag['attribute']['checked'] == 'checked') OR ($tag['attribute']['checked'] == 'true'))) {
					$checked = true;
				} else {
					$checked = false;
				}
				switch ($tag['attribute']['type']) {
					case 'text': {
						if (isset($value)) {
							$opt['v'] = $value;
						}
						$this->TextField($name, $w, $h, $prop, $opt, '', '', false);
						break;
					}
					case 'password': {
						if (isset($value)) {
							$opt['v'] = $value;
						}
						$prop['password'] = 'true';
						$this->TextField($name, $w, $h, $prop, $opt, '', '', false);
						break;
					}
					case 'checkbox': {
						$this->CheckBox($name, $w, $checked, $prop, $opt, $value, '', '', false);
						break;
					}
					case 'radio': {
						$this->RadioButton($name, $w, $prop, $opt, $value, $checked, '', '', false);
						break;
					}
					case 'submit': {
						$w = $this->GetStringWidth($value) * 1.5;
						$h *= 1.6;
						$prop = array('lineWidth'=>1, 'borderStyle'=>'beveled', 'fillColor'=>array(196, 196, 196), 'strokeColor'=>array(255, 255, 255));
						$action = array();
						$action['S'] = 'SubmitForm';
						$action['F'] = $this->form_action;
						if ($this->form_enctype != 'FDF') {
							$action['Flags'] = array('ExportFormat');
						}
						if ($this->form_mode == 'get') {
							$action['Flags'] = array('GetMethod');
						}
						$this->Button($name, $w, $h, $value, $action, $prop, $opt, '', '', false);
						break;
					}
					case 'reset': {
						$w = $this->GetStringWidth($value) * 1.5;
						$h *= 1.6;
						$prop = array('lineWidth'=>1, 'borderStyle'=>'beveled', 'fillColor'=>array(196, 196, 196), 'strokeColor'=>array(255, 255, 255));
						$this->Button($name, $w, $h, $value, array('S'=>'ResetForm'), $prop, $opt, '', '', false);
						break;
					}
					case 'file': {
						$prop['fileSelect'] = 'true';
						$this->TextField($name, $w, $h, $prop, $opt, '', '', false);
						if (!isset($value)) {
							$value = '*';
						}
						$w = $this->GetStringWidth($value) * 2;
						$h *= 1.2;
						$prop = array('lineWidth'=>1, 'borderStyle'=>'beveled', 'fillColor'=>array(196, 196, 196), 'strokeColor'=>array(255, 255, 255));
						$jsaction = 'var f=this.getField(\''.$name.'\'); f.browseForFileToSubmit();';
						$this->Button('FB_'.$name, $w, $h, $value, $jsaction, $prop, $opt, '', '', false);
						break;
					}
					case 'hidden': {
						if (isset($value)) {
							$opt['v'] = $value;
						}
						$opt['f'] = array('invisible', 'hidden');
						$this->TextField($name, 0, 0, $prop, $opt, '', '', false);
						break;
					}
					case 'image': {
						// THIS TYPE MUST BE FIXED
						if (isset($tag['attribute']['src']) AND !$this->empty_string($tag['attribute']['src'])) {
							$img = $tag['attribute']['src'];
						} else {
							break;
						}
						$value = 'img';
						//$opt['mk'] = array('i'=>$img, 'tp'=>1, 'if'=>array('sw'=>'A', 's'=>'A', 'fb'=>false));
						if (isset($tag['attribute']['onclick']) AND !empty($tag['attribute']['onclick'])) {
							$jsaction = $tag['attribute']['onclick'];
						} else {
							$jsaction = '';
						}
						$this->Button($name, $w, $h, $value, $jsaction, $prop, $opt, '', '', false);
						break;
					}
					case 'button': {
						$w = $this->GetStringWidth($value) * 1.5;
						$h *= 1.6;
						$prop = array('lineWidth'=>1, 'borderStyle'=>'beveled', 'fillColor'=>array(196, 196, 196), 'strokeColor'=>array(255, 255, 255));
						if (isset($tag['attribute']['onclick']) AND !empty($tag['attribute']['onclick'])) {
							$jsaction = $tag['attribute']['onclick'];
						} else {
							$jsaction = '';
						}
						$this->Button($name, $w, $h, $value, $jsaction, $prop, $opt, '', '', false);
						break;
					}
				}
				break;
			}
			case 'textarea': {
				$prop = array();
				$opt = array();
				if (isset($tag['attribute']['name']) AND !$this->empty_string($tag['attribute']['name'])) {
					$name = $tag['attribute']['name'];
				} else {
					break;
				}
				if (isset($tag['attribute']['value']) AND !$this->empty_string($tag['attribute']['value'])) {
					$opt['v'] = $tag['attribute']['value'];
				}
				if (isset($tag['attribute']['cols']) AND !$this->empty_string($tag['attribute']['cols'])) {
					$w = intval($tag['attribute']['cols']) * $this->GetStringWidth(chr(32)) * 2;
				} else {
					$w = 40;
				}
				if (isset($tag['attribute']['rows']) AND !$this->empty_string($tag['attribute']['rows'])) {
					$h = intval($tag['attribute']['rows']) * $this->FontSize * $this->cell_height_ratio;
				} else {
					$h = 10;
				}
				$prop['multiline'] = 'true';
				$this->TextField($name, $w, $h, $prop, $opt, '', '', false);
				break;
			}
			case 'select': {
				$h = $this->FontSize * $this->cell_height_ratio;
				if (isset($tag['attribute']['size']) AND !$this->empty_string($tag['attribute']['size'])) {
					$h *= ($tag['attribute']['size'] + 1);
				}
				$prop = array();
				$opt = array();
				if (isset($tag['attribute']['name']) AND !$this->empty_string($tag['attribute']['name'])) {
					$name = $tag['attribute']['name'];
				} else {
					break;
				}
				$w = 0;
				if (isset($tag['attribute']['opt']) AND !$this->empty_string($tag['attribute']['opt'])) {
					$options = explode ("\r", $tag['attribute']['opt']);
					$values = array();
					foreach ($options as $val) {
						if (strpos($val, "\t") !== false) {
							$opts = explode("\t", $val);
							$values[] = $opts;
							$w = max($w, $this->GetStringWidth($opts[1]));
						} else {
							$values[] = $val;
							$w = max($w, $this->GetStringWidth($val));
						}
					}
				} else {
					break;
				}
				$w *= 2;
				if (isset($tag['attribute']['multiple']) AND ($tag['attribute']['multiple']='multiple')) {
					$prop['multipleSelection'] = 'true';
					$this->ListBox($name, $w, $h, $values, $prop, $opt, '', '', false);
				} else {
					$this->ComboBox($name, $w, $h, $values, $prop, $opt, '', '', false);
				}
				break;
			}
			case 'tcpdf': {
				if (defined('K_TCPDF_CALLS_IN_HTML') AND (K_TCPDF_CALLS_IN_HTML === true)) {
					// Special tag used to call TCPDF methods
					if (isset($tag['attribute']['method'])) {
						$tcpdf_method = $tag['attribute']['method'];
						if (method_exists($this, $tcpdf_method)) {
							if (isset($tag['attribute']['params']) AND (!empty($tag['attribute']['params']))) {
								$params = unserialize(urldecode($tag['attribute']['params']));
								call_user_func_array(array($this, $tcpdf_method), $params);
							} else {
								$this->$tcpdf_method();
							}
							$this->newline = true;
						}
					}
				}
				break;
			}
			default: {
				break;
			}
		}
		if ($dom[$key]['self'] AND isset($dom[$key]['attribute']['pagebreakafter'])) {
			$pba = $dom[$key]['attribute']['pagebreakafter'];
			// check for pagebreak
			if (($pba == 'true') OR ($pba == 'left') OR ($pba == 'right')) {
				// add a page (or trig AcceptPageBreak() for multicolumn mode)
				$this->checkPageBreak($this->PageBreakTrigger + 1);
			}
			if ((($pba == 'left') AND (((!$this->rtl) AND (($this->page % 2) == 0)) OR (($this->rtl) AND (($this->page % 2) != 0))))
				OR (($pba == 'right') AND (((!$this->rtl) AND (($this->page % 2) != 0)) OR (($this->rtl) AND (($this->page % 2) == 0))))) {
				// add a page (or trig AcceptPageBreak() for multicolumn mode)
				$this->checkPageBreak($this->PageBreakTrigger + 1);
			}
		}
		// store previous tag
		$this->prevTag = $tag['value'];
	}
	
	/**
	 * Process closing tags.
	 * @param array $dom html dom array
	 * @param int $key current element id
	 * @param boolean $cell if true add the default cMargin space to each new line (default false).
	 * @param int $maxbottomliney maximum y value of current line
	 * @access protected
	 */
	protected function closeHTMLTagHandler(&$dom, $key, $cell, $maxbottomliney=0) {
		$tag = $dom[$key];
		$parent = $dom[($dom[$key]['parent'])];
		$firstorlast = ((!isset($dom[($key + 1)])) OR ((!isset($dom[($key + 2)])) AND ($dom[($key + 1)]['value'] == 'marker')));
		$in_table_head = false;
		if ($tag['block']) {
			$hbz = 0; // distance from y to line bottom
			$hb = 0; // vertical space between block tags
			// calculate vertical space for block tags
			if (isset($this->tagvspaces[$tag['value']][1]['h']) AND ($this->tagvspaces[$tag['value']][1]['h'] >= 0)) {
				$pre_h = $this->tagvspaces[$tag['value']][1]['h'];
			} elseif (isset($parent['fontsize'])) {
				$pre_h = (($parent['fontsize'] / $this->k) * $this->cell_height_ratio);
			} else {
				$pre_h = $this->FontSize * $this->cell_height_ratio;
			}
			if (isset($this->tagvspaces[$tag['value']][1]['n'])) {
				$n = $this->tagvspaces[$tag['value']][1]['n'];
			} elseif (preg_match('/[h][0-9]/', $tag['value']) > 0) {
				$n = 0.6;
			} else {
				$n = 1;
			}
			$hb = ($n * $pre_h);
			if ($this->y < $maxbottomliney) {
				$hbz = ($maxbottomliney - $this->y);
			}
		}
		//Closing tag
		switch($tag['value']) {
			case 'tr': {
				$table_el = $dom[($dom[$key]['parent'])]['parent'];
				if (!isset($parent['endy'])) {
					$dom[($dom[$key]['parent'])]['endy'] = $this->y;
					$parent['endy'] = $this->y;
				}
				if (!isset($parent['endpage'])) {
					$dom[($dom[$key]['parent'])]['endpage'] = $this->page;
					$parent['endpage'] = $this->page;
				}
				// update row-spanned cells
				if (isset($dom[$table_el]['rowspans'])) {
					foreach ($dom[$table_el]['rowspans'] as $k => $trwsp) {
						$dom[$table_el]['rowspans'][$k]['rowspan'] -= 1;
						if ($dom[$table_el]['rowspans'][$k]['rowspan'] == 0) {
							if ($dom[$table_el]['rowspans'][$k]['endpage'] == $parent['endpage']) {
								$dom[($dom[$key]['parent'])]['endy'] = max($dom[$table_el]['rowspans'][$k]['endy'], $parent['endy']);
							} elseif ($dom[$table_el]['rowspans'][$k]['endpage'] > $parent['endpage']) {
								$dom[($dom[$key]['parent'])]['endy'] = $dom[$table_el]['rowspans'][$k]['endy'];
								$dom[($dom[$key]['parent'])]['endpage'] = $dom[$table_el]['rowspans'][$k]['endpage'];
							}
						}
					}
					// report new endy and endpage to the rowspanned cells
					foreach ($dom[$table_el]['rowspans'] as $k => $trwsp) {
						if ($dom[$table_el]['rowspans'][$k]['rowspan'] == 0) {
							$dom[$table_el]['rowspans'][$k]['endpage'] = max($dom[$table_el]['rowspans'][$k]['endpage'], $dom[($dom[$key]['parent'])]['endpage']);
							$dom[($dom[$key]['parent'])]['endpage'] = $dom[$table_el]['rowspans'][$k]['endpage'];
							$dom[$table_el]['rowspans'][$k]['endy'] = max($dom[$table_el]['rowspans'][$k]['endy'], $dom[($dom[$key]['parent'])]['endy']);
							$dom[($dom[$key]['parent'])]['endy'] = $dom[$table_el]['rowspans'][$k]['endy'];
						}
					}
					// update remaining rowspanned cells
					foreach ($dom[$table_el]['rowspans'] as $k => $trwsp) {
						if ($dom[$table_el]['rowspans'][$k]['rowspan'] == 0) {
							$dom[$table_el]['rowspans'][$k]['endpage'] = $dom[($dom[$key]['parent'])]['endpage'];
							$dom[$table_el]['rowspans'][$k]['endy'] = $dom[($dom[$key]['parent'])]['endy'];
						}
					}
				}
				if (($this->num_columns > 1) AND ($dom[($dom[$key]['parent'])]['endy'] >= ($this->PageBreakTrigger - $this->lasth)) AND ($this->y < $dom[($dom[$key]['parent'])]['endy'])) {
					$this->Ln(0, $cell);
				} else {
					$this->setPage($dom[($dom[$key]['parent'])]['endpage']);
					$this->y = $dom[($dom[$key]['parent'])]['endy'];
					if (isset($dom[$table_el]['attribute']['cellspacing'])) {
						$cellspacing = $this->getHTMLUnitToUnits($dom[$table_el]['attribute']['cellspacing'], 1, 'px');
						$this->y += $cellspacing;
					}
					$this->Ln(0, $cell);
					$this->x = $parent['startx'];
					// account for booklet mode
					if ($this->page > $parent['startpage']) {
						if (($this->rtl) AND ($this->pagedim[$this->page]['orm'] != $this->pagedim[$parent['startpage']]['orm'])) {
							$this->x -= ($this->pagedim[$this->page]['orm'] - $this->pagedim[$parent['startpage']]['orm']);
						} elseif ((!$this->rtl) AND ($this->pagedim[$this->page]['olm'] != $this->pagedim[$parent['startpage']]['olm'])) {
							$this->x += ($this->pagedim[$this->page]['olm'] - $this->pagedim[$parent['startpage']]['olm']);
						}
					}
				}
				break;
			}
			case 'tablehead':
				// closing tag used for the thead part
				$in_table_head = true;
				$this->inthead = false;
			case 'table': {
				$table_el = $parent;
				// draw borders
				if ((isset($table_el['attribute']['border']) AND ($table_el['attribute']['border'] > 0))
					OR (isset($table_el['style']['border']) AND ($table_el['style']['border'] > 0))) {
						$border = 1;
				} else {
					$border = 0;
				}
				// fix bottom line alignment of last line before page break
				foreach ($dom[($dom[$key]['parent'])]['trids'] as $j => $trkey) {
					// update row-spanned cells
					if (isset($dom[($dom[$key]['parent'])]['rowspans'])) {
						foreach ($dom[($dom[$key]['parent'])]['rowspans'] as $k => $trwsp) {
							if ($trwsp['trid'] == $trkey) {
								$dom[($dom[$key]['parent'])]['rowspans'][$k]['mrowspan'] -= 1;
							}
							if (isset($prevtrkey) AND ($trwsp['trid'] == $prevtrkey) AND ($trwsp['mrowspan'] >= 0)) {
								$dom[($dom[$key]['parent'])]['rowspans'][$k]['trid'] = $trkey;
							}
						}
					}
					if (isset($prevtrkey) AND ($dom[$trkey]['startpage'] > $dom[$prevtrkey]['endpage'])) {
						$pgendy = $this->pagedim[$dom[$prevtrkey]['endpage']]['hk'] - $this->pagedim[$dom[$prevtrkey]['endpage']]['bm'];
						$dom[$prevtrkey]['endy'] = $pgendy;
						// update row-spanned cells
						if (isset($dom[($dom[$key]['parent'])]['rowspans'])) {
							foreach ($dom[($dom[$key]['parent'])]['rowspans'] as $k => $trwsp) {
								if (($trwsp['trid'] == $trkey) AND ($trwsp['mrowspan'] > 1) AND ($trwsp['endpage'] == $dom[$prevtrkey]['endpage'])) {
									$dom[($dom[$key]['parent'])]['rowspans'][$k]['endy'] = $pgendy;
									$dom[($dom[$key]['parent'])]['rowspans'][$k]['mrowspan'] = -1;
								}
							}
						}
					}
					$prevtrkey = $trkey;
					$table_el = $dom[($dom[$key]['parent'])];
				}
				// for each row
				foreach ($table_el['trids'] as $j => $trkey) {
					$parent = $dom[$trkey];
					// for each cell on the row
					foreach ($parent['cellpos'] as $k => $cellpos) {
						if (isset($cellpos['rowspanid']) AND ($cellpos['rowspanid'] >= 0)) {
							$cellpos['startx'] = $table_el['rowspans'][($cellpos['rowspanid'])]['startx'];
							$cellpos['endx'] = $table_el['rowspans'][($cellpos['rowspanid'])]['endx'];
							$endy = $table_el['rowspans'][($cellpos['rowspanid'])]['endy'];
							$startpage = $table_el['rowspans'][($cellpos['rowspanid'])]['startpage'];
							$endpage = $table_el['rowspans'][($cellpos['rowspanid'])]['endpage'];
						} else {
							$endy = $parent['endy'];
							$startpage = $parent['startpage'];
							$endpage = $parent['endpage'];
						}
						if ($endpage > $startpage) {
							// design borders around HTML cells.
							for ($page=$startpage; $page <= $endpage; ++$page) {
								$this->setPage($page);
								if ($page == $startpage) {
									$this->y = $parent['starty']; // put cursor at the beginning of row on the first page
									$ch = $this->getPageHeight() - $parent['starty'] - $this->getBreakMargin();
									$cborder = $this->getBorderMode($border, $position='start');
								} elseif ($page == $endpage) {
									$this->y = $this->tMargin; // put cursor at the beginning of last page
									$ch = $endy - $this->tMargin;
									$cborder = $this->getBorderMode($border, $position='end');
								} else {
									$this->y = $this->tMargin; // put cursor at the beginning of the current page
									$ch = $this->getPageHeight() - $this->tMargin - $this->getBreakMargin();
									$cborder = $this->getBorderMode($border, $position='middle');
								}
								if (isset($cellpos['bgcolor']) AND ($cellpos['bgcolor']) !== false) {
									$this->SetFillColorArray($cellpos['bgcolor']);
									$fill = true;
								} else {
									$fill = false;
								}
								$cw = abs($cellpos['endx'] - $cellpos['startx']);
								$this->x = $cellpos['startx'];
								// account for margin changes
								if ($page > $startpage) {
									if (($this->rtl) AND ($this->pagedim[$page]['orm'] != $this->pagedim[$startpage]['orm'])) {
										$this->x -= ($this->pagedim[$page]['orm'] - $this->pagedim[$startpage]['orm']);
									} elseif ((!$this->rtl) AND ($this->pagedim[$page]['lm'] != $this->pagedim[$startpage]['olm'])) {
										$this->x += ($this->pagedim[$page]['olm'] - $this->pagedim[$startpage]['olm']);
									}
								}
								// design a cell around the text
								$ccode = $this->FillColor."\n".$this->getCellCode($cw, $ch, '', $cborder, 1, '', $fill, '', 0, true);
								if ($cborder OR $fill) {
									$pagebuff = $this->getPageBuffer($this->page);
									$pstart = substr($pagebuff, 0, $this->intmrk[$this->page]);
									$pend = substr($pagebuff, $this->intmrk[$this->page]);
									$this->setPageBuffer($this->page, $pstart.$ccode."\n".$pend);
									$this->intmrk[$this->page] += strlen($ccode."\n");
								}
							}
						} else {
							$this->setPage($startpage);
							if (isset($cellpos['bgcolor']) AND ($cellpos['bgcolor']) !== false) {
								$this->SetFillColorArray($cellpos['bgcolor']);
								$fill = true;
							} else {
								$fill = false;
							}
							$this->x = $cellpos['startx'];
							$this->y = $parent['starty'];
							$cw = abs($cellpos['endx'] - $cellpos['startx']);
							$ch = $endy - $parent['starty'];
							// design a cell around the text
							$ccode = $this->FillColor."\n".$this->getCellCode($cw, $ch, '', $border, 1, '', $fill, '', 0, true);
							if ($border OR $fill) {
								if (end($this->transfmrk[$this->page]) !== false) {
									$pagemarkkey = key($this->transfmrk[$this->page]);
									$pagemark = &$this->transfmrk[$this->page][$pagemarkkey];
								} elseif ($this->InFooter) {
									$pagemark = &$this->footerpos[$this->page];
								} else {
									$pagemark = &$this->intmrk[$this->page];
								}
								$pagebuff = $this->getPageBuffer($this->page);
								$pstart = substr($pagebuff, 0, $pagemark);
								$pend = substr($pagebuff, $pagemark);
								$this->setPageBuffer($this->page, $pstart.$ccode."\n".$pend);
								$pagemark += strlen($ccode."\n");
							}
						}
					}
					if (isset($table_el['attribute']['cellspacing'])) {
						$cellspacing = $this->getHTMLUnitToUnits($table_el['attribute']['cellspacing'], 1, 'px');
						$this->y += $cellspacing;
					}
					$this->Ln(0, $cell);
					$this->x = $parent['startx'];
					if ($endpage > $startpage) {
						if (($this->rtl) AND ($this->pagedim[$endpage]['orm'] != $this->pagedim[$startpage]['orm'])) {
							$this->x += ($this->pagedim[$endpage]['orm'] - $this->pagedim[$startpage]['orm']);
						} elseif ((!$this->rtl) AND ($this->pagedim[$endpage]['olm'] != $this->pagedim[$startpage]['olm'])) {
							$this->x += ($this->pagedim[$endpage]['olm'] - $this->pagedim[$startpage]['olm']);
						}
					}
				}
				if (!$in_table_head) {
					// we are not inside a thead section
					if (isset($parent['cellpadding'])) {
						$this->cMargin = $this->oldcMargin;
					}
					$this->lasth = $this->FontSize * $this->cell_height_ratio;
					if (($this->page == ($this->numpages - 1)) AND ($this->pageopen[$this->numpages])) {
						// remove last blank page
						$this->deletePage($this->numpages);
					}
					if (isset($this->theadMargins['top'])) {
						// restore top margin
						$this->tMargin = $this->theadMargins['top'];
						$this->pagedim[$this->page]['tm'] = $this->tMargin;
					}
					if (!isset($table_el['attribute']['nested']) OR ($table_el['attribute']['nested'] != 'true')) {
						// reset main table header
						$this->thead = '';
						$this->theadMargins = array();
					}
				}
				break;
			}
			case 'a': {
				$this->HREF = '';
				break;
			}
			case 'sup': {
				$this->SetXY($this->GetX(), $this->GetY() + ((0.7 * $parent['fontsize']) / $this->k));
				break;
			}
			case 'sub': {
				$this->SetXY($this->GetX(), $this->GetY() - ((0.3 * $parent['fontsize'])/$this->k));
				break;
			}
			case 'div': {
				//$this->addHTMLVertSpace($hbz, 0, $cell, $firstorlast);
				break;
			}
			case 'blockquote': {
				if ($this->rtl) {
					$this->rMargin -= $this->listindent;
				} else {
					$this->lMargin -= $this->listindent;
				}
				--$this->listindentlevel;
				//$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				//$this->addHTMLVertSpace(0, $hb, $cell, $firstorlast);
				break;
			}
			case 'p': {
				//$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				$this->addHTMLVertSpace($this->tagvspaces[$tag['value']][1]['n'], $hb, $cell, $firstorlast);
				//$this->ln($this->tagvspaces[$tag['value']][1]['n']);
				break;
			}
			case 'pre': {
				$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				$this->premode = false;
				break;
			}
			case 'dl': {
				--$this->listnum;
				if ($this->listnum <= 0) {
					$this->listnum = 0;
					$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				} else {
					$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				}
				$this->lasth = $this->FontSize * $this->cell_height_ratio;
				break;
			}
			case 'dt': {
				$this->lispacer = '';
				$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				break;
			}
			case 'dd': {
				$this->lispacer = '';
				if ($this->rtl) {
					$this->rMargin -= $this->listindent;
				} else {
					$this->lMargin -= $this->listindent;
				}
				--$this->listindentlevel;
				$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				break;
			}
			case 'ul':
			case 'ol': {
				--$this->listnum;
				$this->lispacer = '';
				if ($this->rtl) {
					$this->rMargin -= $this->listindent;
				} else {
					$this->lMargin -= $this->listindent;
				}
				--$this->listindentlevel;
				if ($this->listnum <= 0) {
					$this->listnum = 0;
					$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				} else {
					$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				}
				$this->lasth = $this->FontSize * $this->cell_height_ratio;
				break;
			}
			case 'li': {
				$this->lispacer = '';
				$this->addHTMLVertSpace(0, 0, $cell, $firstorlast);
				break;
			}
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6': {
				$this->addHTMLVertSpace($hbz, $hb, $cell, $firstorlast);
				break;
			}
			// Form fields (since 4.8.000 - 2009-09-07)
			case 'form': {
				$this->form_action = '';
				$this->form_enctype = 'application/x-www-form-urlencoded';
				break;
			}
			default : {
				break;
			}
		}
		if (isset($dom[($dom[$key]['parent'])]['attribute']['pagebreakafter'])) {
			$pba = $dom[($dom[$key]['parent'])]['attribute']['pagebreakafter'];
			// check for pagebreak
			if (($pba == 'true') OR ($pba == 'left') OR ($pba == 'right')) {
				// add a page (or trig AcceptPageBreak() for multicolumn mode)
				$this->checkPageBreak($this->PageBreakTrigger + 1);
			}
			if ((($pba == 'left') AND (((!$this->rtl) AND (($this->page % 2) == 0)) OR (($this->rtl) AND (($this->page % 2) != 0))))
				OR (($pba == 'right') AND (((!$this->rtl) AND (($this->page % 2) != 0)) OR (($this->rtl) AND (($this->page % 2) == 0))))) {
				// add a page (or trig AcceptPageBreak() for multicolumn mode)
				$this->checkPageBreak($this->PageBreakTrigger + 1);
			}
		}
		$this->tmprtl = false;
	}
	
	/**
	 * Returns the HTML DOM array.
	 * <ul><li>$dom[$key]['tag'] = true if tag, false otherwise;</li><li>$dom[$key]['value'] = tag name or text;</li><li>$dom[$key]['opening'] = true if opening tag, false otherwise;</li><li>$dom[$key]['attribute'] = array of attributes (attribute name is the key);</li><li>$dom[$key]['style'] = array of style attributes (attribute name is the key);</li><li>$dom[$key]['parent'] = id of parent element;</li><li>$dom[$key]['fontname'] = font family name;</li><li>$dom[$key]['fontstyle'] = font style;</li><li>$dom[$key]['fontsize'] = font size in points;</li><li>$dom[$key]['bgcolor'] = RGB array of background color;</li><li>$dom[$key]['fgcolor'] = RGB array of foreground color;</li><li>$dom[$key]['width'] = width in pixels;</li><li>$dom[$key]['height'] = height in pixels;</li><li>$dom[$key]['align'] = text alignment;</li><li>$dom[$key]['cols'] = number of colums in table;</li><li>$dom[$key]['rows'] = number of rows in table;</li></ul>
	 * @param string $html html code
	 * @return array
	 * @access protected
	 * @since 3.2.000 (2008-06-20)
	 */
	protected function getHtmlDomArray($html) {
		// array of CSS styles ( selector => properties).
		$css = array();
		// extract external CSS files
		$matches = array();
		if (preg_match_all('/<link([^\>]*)>/isU', $html, $matches) > 0) {
			foreach ($matches[1] as $key => $link) {
				$type = array();
				if (preg_match('/type[\s]*=[\s]*"text\/css"/', $link, $type)) {
					$type = array();
					preg_match('/media[\s]*=[\s]*"([^"]*)"/', $link, $type);
					// get 'all' and 'print' media, other media types are discarded
					// (all, braille, embossed, handheld, print, projection, screen, speech, tty, tv)
					if (empty($type) OR (isset($type[1]) AND (($type[1] == 'all') OR ($type[1] == 'print')))) {
						$type = array();
						if (preg_match('/href[\s]*=[\s]*"([^"]*)"/', $link, $type) > 0) {
							// read CSS data file
							$cssdata = file_get_contents(trim($type[1]));
							$css = array_merge($css, $this->extractCSSproperties($cssdata));
						}
					}
				}
			}
		}
		// extract style tags
		$matches = array();
		if (preg_match_all('/<style([^\>]*)>([^\<]*)<\/style>/isU', $html, $matches) > 0) {
			foreach ($matches[1] as $key => $media) {
				$type = array();
				preg_match('/media[\s]*=[\s]*"([^"]*)"/', $media, $type);
				// get 'all' and 'print' media, other media types are discarded
				// (all, braille, embossed, handheld, print, projection, screen, speech, tty, tv)
				if (empty($type) OR (isset($type[1]) AND (($type[1] == 'all') OR ($type[1] == 'print')))) {
					$cssdata = $matches[2][$key];
					$css = array_merge($css, $this->extractCSSproperties($cssdata));
				}
			}
		}
		// remove heade and style blocks
		$html = preg_replace('/<head([^\>]*)>(.*?)<\/head>/siU', '', $html);
		$html = preg_replace('/<style([^\>]*)>([^\<]*)<\/style>/isU', '', $html);
		// define block tags
		$blocktags = array('blockquote','br','dd','dl','div','dt','h1','h2','h3','h4','h5','h6','hr','li','ol','p','pre','ul','tcpdf','table','tr','td');
		// remove all unsupported tags (the line below lists all supported tags)
		$html = strip_tags($html, '<marker/><a><b><blockquote><body><br><br/><dd><del><div><dl><dt><em><font><form><h1><h2><h3><h4><h5><h6><hr><i><img><input><label><li><ol><option><p><pre><select><small><span><strong><sub><sup><table><tablehead><tcpdf><td><textarea><th><thead><tr><tt><u><ul>');
		//replace some blank characters
		$html = preg_replace('/<pre/', '<xre', $html); // preserve pre tag
		$html = preg_replace('/<(table|tr|td|th|tcpdf|blockquote|dd|div|dl|dt|form|h1|h2|h3|h4|h5|h6|br|hr|li|ol|ul|p)([^\>]*)>[\n\r\t]+/', '<\\1\\2>', $html);
		$html = preg_replace('@(\r\n|\r)@', "\n", $html);
		$repTable = array("\t" => ' ', "\0" => ' ', "\x0B" => ' ', "\\" => "\\\\");
		$html = strtr($html, $repTable);
		$offset = 0;
		while (($offset < strlen($html)) AND ($pos = strpos($html, '</pre>', $offset)) !== false) {
			$html_a = substr($html, 0, $offset);
			$html_b = substr($html, $offset, ($pos - $offset + 6));
			while (preg_match("'<xre([^\>]*)>(.*?)\n(.*?)</pre>'si", $html_b)) {
				// preserve newlines on <pre> tag
				$html_b = preg_replace("'<xre([^\>]*)>(.*?)\n(.*?)</pre>'si", "<xre\\1>\\2<br />\\3</pre>", $html_b);
			}
			$html = $html_a.$html_b.substr($html, $pos + 6);
			$offset = strlen($html_a.$html_b);
		}
		$offset = 0;
		while (($offset < strlen($html)) AND ($pos = strpos($html, '</textarea>', $offset)) !== false) {
			$html_a = substr($html, 0, $offset);
			$html_b = substr($html, $offset, ($pos - $offset + 11));
			while (preg_match("'<textarea([^\>]*)>(.*?)\n(.*?)</textarea>'si", $html_b)) {
				// preserve newlines on <textarea> tag
				$html_b = preg_replace("'<textarea([^\>]*)>(.*?)\n(.*?)</textarea>'si", "<textarea\\1>\\2<TBR>\\3</textarea>", $html_b);
				$html_b = preg_replace("'<textarea([^\>]*)>(.*?)[\"](.*?)</textarea>'si", "<textarea\\1>\\2''\\3</textarea>", $html_b);
			}
			$html = $html_a.$html_b.substr($html, $pos + 11);
			$offset = strlen($html_a.$html_b);
		}
		$html = preg_replace("'([\s]*)<option'si", "<option", $html);
		$html = preg_replace("'</option>([\s]*)'si", "</option>", $html);
		$offset = 0;
		while (($offset < strlen($html)) AND ($pos = strpos($html, '</option>', $offset)) !== false) {
			$html_a = substr($html, 0, $offset);
			$html_b = substr($html, $offset, ($pos - $offset + 9));
			while (preg_match("'<option([^\>]*)>(.*?)</option>'si", $html_b)) {
				$html_b = preg_replace("'<option([\s]+)value=\"([^\"]*)\"([^\>]*)>(.*?)</option>'si", "\\2\t\\4\r", $html_b);
				$html_b = preg_replace("'<option([^\>]*)>(.*?)</option>'si", "\\2\r", $html_b);
			}
			$html = $html_a.$html_b.substr($html, $pos + 9);
			$offset = strlen($html_a.$html_b);
		}
		$html = preg_replace("'<select([^\>]*)>'si", "<select\\1 opt=\"", $html);
		$html = preg_replace("'([\s]+)</select>'si", "\" />", $html);
		$html = str_replace("\n", ' ', $html);
		// restore textarea newlines
		$html = str_replace('<TBR>', "\n", $html);
		// remove extra spaces from code
		$html = preg_replace('/[\s]+<\/(table|tr|td|th|ul|ol|li|dl|dt|dd)>/', '</\\1>', $html);
		$html = preg_replace('/[\s]+<(tr|td|th|ul|ol|li|dl|dt|dd|br)/', '<\\1', $html);
		$html = preg_replace('/<\/(table|tr|td|th|blockquote|dd|dt|dl|div|dt|h1|h2|h3|h4|h5|h6|hr|li|ol|ul|p)>[\s]+</', '</\\1><', $html);
		$html = preg_replace('/<\/(td|th)>/', '<marker style="font-size:0"/></\\1>', $html);
		$html = preg_replace('/<\/table>([\s]*)<marker style="font-size:0"\/>/', '</table>', $html);
		$html = preg_replace('/[\s]*<img/', ' <img', $html);
		$html = preg_replace('/<img([^\>]*)>/xi', '<img\\1><span><marker style="font-size:0"/></span>', $html);
		$html = preg_replace('/<xre/', '<pre', $html); // restore pre tag
		$html = preg_replace('/<textarea([^\>]*)>/xi', '<textarea\\1 value="', $html);
		$html = preg_replace('/<\/textarea>/', '" />', $html);
		// trim string
		$html = preg_replace('/^[\s]+/', '', $html);
		$html = preg_replace('/[\s]+$/', '', $html);
		// pattern for generic tag
		$tagpattern = '/(<[^>]+>)/';
		// explodes the string
		$a = preg_split($tagpattern, $html, -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);
		// count elements
		$maxel = count($a);
		$elkey = 0;
		$key = 0;
		// create an array of elements
		$dom = array();
		$dom[$key] = array();
		// set inheritable properties fot the first void element
		// possible inheritable properties are: azimuth, border-collapse, border-spacing, caption-side, color, cursor, direction, empty-cells, font, font-family, font-stretch, font-size, font-size-adjust, font-style, font-variant, font-weight, letter-spacing, line-height, list-style, list-style-image, list-style-position, list-style-type, orphans, page, page-break-inside, quotes, speak, speak-header, text-align, text-indent, text-transform, volume, white-space, widows, word-spacing
		$dom[$key]['tag'] = false;
		$dom[$key]['block'] = false;
		$dom[$key]['value'] = '';
		$dom[$key]['parent'] = 0;
		$dom[$key]['fontname'] = $this->FontFamily;
		$dom[$key]['fontstyle'] = $this->FontStyle;
		$dom[$key]['fontsize'] = $this->FontSizePt;
		$dom[$key]['stroke'] = $this->textstrokewidth;
		$dom[$key]['fill'] = (($this->textrendermode % 2) == 0);
		$dom[$key]['clip'] = ($this->textrendermode > 3);
		$dom[$key]['line-height'] = $this->cell_height_ratio;
		$dom[$key]['bgcolor'] = false;
		$dom[$key]['fgcolor'] = $this->fgcolor; // color
		$dom[$key]['strokecolor'] = $this->strokecolor;
		$dom[$key]['align'] = '';
		$dom[$key]['listtype'] = '';
		$dom[$key]['text-indent'] = 0;
		$thead = false; // true when we are inside the THEAD tag
		++$key;
		$level = array();
		array_push($level, 0); // root
		while ($elkey < $maxel) {
			$dom[$key] = array();
			$element = $a[$elkey];
			$dom[$key]['elkey'] = $elkey;
			if (preg_match($tagpattern, $element)) {
				// html tag
				$element = substr($element, 1, -1);
				// get tag name
				preg_match('/[\/]?([a-zA-Z0-9]*)/', $element, $tag);
				$tagname = strtolower($tag[1]);
				// check if we are inside a table header
				if ($tagname == 'thead') {
					if ($element{0} == '/') {
						$thead = false;
					} else {
						$thead = true;
					}
					++$elkey;
					continue;
				}
				$dom[$key]['tag'] = true;
				$dom[$key]['value'] = $tagname;
				if (in_array($dom[$key]['value'], $blocktags)) {
					$dom[$key]['block'] = true;
				} else {
					$dom[$key]['block'] = false;
				}
				if ($element{0} == '/') {
					// *** closing html tag
					$dom[$key]['opening'] = false;
					$dom[$key]['parent'] = end($level);
					array_pop($level);
					$dom[$key]['fontname'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['fontname'];
					$dom[$key]['fontstyle'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['fontstyle'];
					$dom[$key]['fontsize'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['fontsize'];
					$dom[$key]['stroke'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['stroke'];
					$dom[$key]['fill'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['fill'];
					$dom[$key]['clip'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['clip'];
					$dom[$key]['line-height'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['line-height'];
					$dom[$key]['bgcolor'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['bgcolor'];
					$dom[$key]['fgcolor'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['fgcolor'];
					$dom[$key]['strokecolor'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['strokecolor'];
					$dom[$key]['align'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['align'];
					if (isset($dom[($dom[($dom[$key]['parent'])]['parent'])]['listtype'])) {
						$dom[$key]['listtype'] = $dom[($dom[($dom[$key]['parent'])]['parent'])]['listtype'];
					}
					// set the number of columns in table tag
					if (($dom[$key]['value'] == 'tr') AND (!isset($dom[($dom[($dom[$key]['parent'])]['parent'])]['cols']))) {
						$dom[($dom[($dom[$key]['parent'])]['parent'])]['cols'] = $dom[($dom[$key]['parent'])]['cols'];
					}
					if (($dom[$key]['value'] == 'td') OR ($dom[$key]['value'] == 'th')) {
						$dom[($dom[$key]['parent'])]['content'] = '';
						for ($i = ($dom[$key]['parent'] + 1); $i < $key; ++$i) {
							$dom[($dom[$key]['parent'])]['content'] .= $a[$dom[$i]['elkey']];
						}
						$key = $i;
						// mark nested tables
						$dom[($dom[$key]['parent'])]['content'] = str_replace('<table', '<table nested="true"', $dom[($dom[$key]['parent'])]['content']);
						// remove thead sections from nested tables
						$dom[($dom[$key]['parent'])]['content'] = str_replace('<thead>', '', $dom[($dom[$key]['parent'])]['content']);
						$dom[($dom[$key]['parent'])]['content'] = str_replace('</thead>', '', $dom[($dom[$key]['parent'])]['content']);
					}
					// store header rows on a new table
					if (($dom[$key]['value'] == 'tr') AND ($dom[($dom[$key]['parent'])]['thead'] === true)) {
						if ($this->empty_string($dom[($dom[($dom[$key]['parent'])]['parent'])]['thead'])) {
							$dom[($dom[($dom[$key]['parent'])]['parent'])]['thead'] = $a[$dom[($dom[($dom[$key]['parent'])]['parent'])]['elkey']];
						}
						for ($i = $dom[$key]['parent']; $i <= $key; ++$i) {
							$dom[($dom[($dom[$key]['parent'])]['parent'])]['thead'] .= $a[$dom[$i]['elkey']];
						}
						if (!isset($dom[($dom[$key]['parent'])]['attribute'])) {
							$dom[($dom[$key]['parent'])]['attribute'] = array();
						}
						// header elements must be always contained in a single page
						$dom[($dom[$key]['parent'])]['attribute']['nobr'] = 'true';
					}
					if (($dom[$key]['value'] == 'table') AND (!$this->empty_string($dom[($dom[$key]['parent'])]['thead']))) {
						// remove the nobr attributes from the table header
						$dom[($dom[$key]['parent'])]['thead'] = str_replace(' nobr="true"', '', $dom[($dom[$key]['parent'])]['thead']);
						$dom[($dom[$key]['parent'])]['thead'] .= '</tablehead>';
					}
				} else {
					// *** opening html tag
					$dom[$key]['opening'] = true;
					$dom[$key]['parent'] = end($level);
					if (substr($element, -1, 1) != '/') {
						// not self-closing tag
						array_push($level, $key);
						$dom[$key]['self'] = false;
					} else {
						$dom[$key]['self'] = true;
					}
					// copy some values from parent
					$parentkey = 0;
					if ($key > 0) {
						$parentkey = $dom[$key]['parent'];
						$dom[$key]['fontname'] = $dom[$parentkey]['fontname'];
						$dom[$key]['fontstyle'] = $dom[$parentkey]['fontstyle'];
						$dom[$key]['fontsize'] = $dom[$parentkey]['fontsize'];
						$dom[$key]['stroke'] = $dom[$parentkey]['stroke'];
						$dom[$key]['fill'] = $dom[$parentkey]['fill'];
						$dom[$key]['clip'] = $dom[$parentkey]['clip'];
						$dom[$key]['line-height'] = $dom[$parentkey]['line-height'];
						$dom[$key]['bgcolor'] = $dom[$parentkey]['bgcolor'];
						$dom[$key]['fgcolor'] = $dom[$parentkey]['fgcolor'];
						$dom[$key]['strokecolor'] = $dom[$parentkey]['strokecolor'];
						$dom[$key]['align'] = $dom[$parentkey]['align'];
						$dom[$key]['listtype'] = $dom[$parentkey]['listtype'];
						$dom[$key]['text-indent'] = $dom[$parentkey]['text-indent'];
					}
					// get attributes
					preg_match_all('/([^=\s]*)[\s]*=[\s]*"([^"]*)"/', $element, $attr_array, PREG_PATTERN_ORDER);
					$dom[$key]['attribute'] = array(); // reset attribute array
					while (list($id, $name) = each($attr_array[1])) {
						$dom[$key]['attribute'][strtolower($name)] = $attr_array[2][$id];
					}
					if (!empty($css)) {
						// merge eternal CSS style to current style
						$dom[$key]['attribute']['style'] = $this->getTagStyleFromCSS($dom, $key, $css);
					}
					// split style attributes
					if (isset($dom[$key]['attribute']['style']) AND !empty($dom[$key]['attribute']['style'])) {
						// get style attributes
						preg_match_all('/([^;:\s]*):([^;]*)/', $dom[$key]['attribute']['style'], $style_array, PREG_PATTERN_ORDER);
						$dom[$key]['style'] = array(); // reset style attribute array
						while (list($id, $name) = each($style_array[1])) {
							// in case of duplicate attribute the last replace the previous
							$dom[$key]['style'][strtolower($name)] = trim($style_array[2][$id]);
						}
						// --- get some style attributes ---
						if (isset($dom[$key]['style']['font-family'])) {
							// font family
							if (isset($dom[$key]['style']['font-family'])) {
								$fontslist = preg_split('/[,]/', strtolower($dom[$key]['style']['font-family']));
								foreach ($fontslist as $font) {
									$font = trim(strtolower($font));
									if (in_array($font, $this->fontlist) OR in_array($font, $this->fontkeys)) {
										$dom[$key]['fontname'] = $font;
										break;
									}
								}
							}
						}
						// list-style-type
						if (isset($dom[$key]['style']['list-style-type'])) {
							$dom[$key]['listtype'] = trim(strtolower($dom[$key]['style']['list-style-type']));
							if ($dom[$key]['listtype'] == 'inherit') {
								$dom[$key]['listtype'] = $dom[$parentkey]['listtype'];
							}
						}
						// text-indent
						if (isset($dom[$key]['style']['text-indent'])) {
							$dom[$key]['text-indent'] = $this->getHTMLUnitToUnits($dom[$key]['style']['text-indent']);
							if ($dom[$key]['text-indent'] == 'inherit') {
								$dom[$key]['text-indent'] = $dom[$parentkey]['text-indent'];
							}
						}
						// font size
						if (isset($dom[$key]['style']['font-size'])) {
							$fsize = trim($dom[$key]['style']['font-size']);
							switch ($fsize) {
								// absolute-size
								case 'xx-small': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] - 4;
									break;
								}
								case 'x-small': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] - 3;
									break;
								}
								case 'small': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] - 2;
									break;
								}
								case 'medium': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'];
									break;
								}
								case 'large': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] + 2;
									break;
								}
								case 'x-large': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] + 4;
									break;
								}
								case 'xx-large': {
									$dom[$key]['fontsize'] = $dom[0]['fontsize'] + 6;
									break;
								}
								// relative-size
								case 'smaller': {
									$dom[$key]['fontsize'] = $dom[$parentkey]['fontsize'] - 3;
									break;
								}
								case 'larger': {
									$dom[$key]['fontsize'] = $dom[$parentkey]['fontsize'] + 3;
									break;
								}
								default: {
									$dom[$key]['fontsize'] = $this->getHTMLUnitToUnits($fsize, $dom[$parentkey]['fontsize'], 'pt', true);
								}
							}
						}
						// line-height
						if (isset($dom[$key]['style']['line-height'])) {
							$lineheight = trim($dom[$key]['style']['line-height']);
							switch ($lineheight) {
								// A normal line height. This is default
								case 'normal': {
									$dom[$key]['line-height'] = $dom[0]['line-height'];
									break;
								}
								default: {
									if (is_numeric($lineheight)) {
										$lineheight = $lineheight * 100;
									}
									$dom[$key]['line-height'] = $this->getHTMLUnitToUnits($lineheight, 1, '%', true);
								}
							}
						}
						// font style
						if (isset($dom[$key]['style']['font-weight']) AND (strtolower($dom[$key]['style']['font-weight']{0}) == 'b')) {
							$dom[$key]['fontstyle'] .= 'B';
						}
						if (isset($dom[$key]['style']['font-style']) AND (strtolower($dom[$key]['style']['font-style']{0}) == 'i')) {
							$dom[$key]['fontstyle'] .= 'I';
						}
						// font color
						if (isset($dom[$key]['style']['color']) AND (!$this->empty_string($dom[$key]['style']['color']))) {
							$dom[$key]['fgcolor'] = $this->convertHTMLColorToDec($dom[$key]['style']['color']);
						} elseif ($dom[$key]['value'] == 'a') {
							$dom[$key]['fgcolor'] = $this->htmlLinkColorArray;
						}
						// background color
						if (isset($dom[$key]['style']['background-color']) AND (!$this->empty_string($dom[$key]['style']['background-color']))) {
							$dom[$key]['bgcolor'] = $this->convertHTMLColorToDec($dom[$key]['style']['background-color']);
						}
						// text-decoration
						if (isset($dom[$key]['style']['text-decoration'])) {
							$decors = explode(' ', strtolower($dom[$key]['style']['text-decoration']));
							foreach ($decors as $dec) {
								$dec = trim($dec);
								if (!$this->empty_string($dec)) {
									if ($dec{0} == 'u') {
										// underline
										$dom[$key]['fontstyle'] .= 'U';
									} elseif ($dec{0} == 'l') {
										// line-trough
										$dom[$key]['fontstyle'] .= 'D';
									} elseif ($dec{0} == 'o') {
										// overline
										$dom[$key]['fontstyle'] .= 'O';
									}
								}
							}
						} elseif ($dom[$key]['value'] == 'a') {
							$dom[$key]['fontstyle'] = $this->htmlLinkFontStyle;
						}
						// check for width attribute
						if (isset($dom[$key]['style']['width'])) {
							$dom[$key]['width'] = $dom[$key]['style']['width'];
						}
						// check for height attribute
						if (isset($dom[$key]['style']['height'])) {
							$dom[$key]['height'] = $dom[$key]['style']['height'];
						}
						// check for text alignment
						if (isset($dom[$key]['style']['text-align'])) {
							$dom[$key]['align'] = strtoupper($dom[$key]['style']['text-align']{0});
						}
						// check for border attribute
						if (isset($dom[$key]['style']['border'])) {
							$dom[$key]['attribute']['border'] = $dom[$key]['style']['border'];
						}
						// page-break-inside
						if (isset($dom[$key]['style']['page-break-inside']) AND ($dom[$key]['style']['page-break-inside'] == 'avoid')) {
							$dom[$key]['attribute']['nobr'] = 'true';
						}
						// page-break-before
						if (isset($dom[$key]['style']['page-break-before'])) {
							if ($dom[$key]['style']['page-break-before'] == 'always') {
								$dom[$key]['attribute']['pagebreak'] = 'true';
							} elseif ($dom[$key]['style']['page-break-before'] == 'left') {
								$dom[$key]['attribute']['pagebreak'] = 'left';
							} elseif ($dom[$key]['style']['page-break-before'] == 'right') {
								$dom[$key]['attribute']['pagebreak'] = 'right';
							}
						}
						// page-break-after
						if (isset($dom[$key]['style']['page-break-after'])) {
							if ($dom[$key]['style']['page-break-after'] == 'always') {
								$dom[$key]['attribute']['pagebreakafter'] = 'true';
							} elseif ($dom[$key]['style']['page-break-after'] == 'left') {
								$dom[$key]['attribute']['pagebreakafter'] = 'left';
							} elseif ($dom[$key]['style']['page-break-after'] == 'right') {
								$dom[$key]['attribute']['pagebreakafter'] = 'right';
							}
						}
					}
					// check for font tag
					if ($dom[$key]['value'] == 'font') {
						// font family
						if (isset($dom[$key]['attribute']['face'])) {
							$fontslist = preg_split('/[,]/', strtolower($dom[$key]['attribute']['face']));
							foreach ($fontslist as $font) {
								$font = trim(strtolower($font));
								if (in_array($font, $this->fontlist) OR in_array($font, $this->fontkeys)) {
									$dom[$key]['fontname'] = $font;
									break;
								}
							}
						}
						// font size
						if (isset($dom[$key]['attribute']['size'])) {
							if ($key > 0) {
								if ($dom[$key]['attribute']['size']{0} == '+') {
									$dom[$key]['fontsize'] = $dom[($dom[$key]['parent'])]['fontsize'] + intval(substr($dom[$key]['attribute']['size'], 1));
								} elseif ($dom[$key]['attribute']['size']{0} == '-') {
									$dom[$key]['fontsize'] = $dom[($dom[$key]['parent'])]['fontsize'] - intval(substr($dom[$key]['attribute']['size'], 1));
								} else {
									$dom[$key]['fontsize'] = intval($dom[$key]['attribute']['size']);
								}
							} else {
								$dom[$key]['fontsize'] = intval($dom[$key]['attribute']['size']);
							}
						}
					}
					// force natural alignment for lists
					if ((($dom[$key]['value'] == 'ul') OR ($dom[$key]['value'] == 'ol') OR ($dom[$key]['value'] == 'dl'))
						AND (!isset($dom[$key]['align']) OR $this->empty_string($dom[$key]['align']) OR ($dom[$key]['align'] != 'J'))) {
						if ($this->rtl) {
							$dom[$key]['align'] = 'R';
						} else {
							$dom[$key]['align'] = 'L';
						}
					}
					if (($dom[$key]['value'] == 'small') OR ($dom[$key]['value'] == 'sup') OR ($dom[$key]['value'] == 'sub')) {
						if (!isset($dom[$key]['attribute']['size']) AND !isset($dom[$key]['style']['font-size'])) {
							$dom[$key]['fontsize'] = $dom[$key]['fontsize'] * K_SMALL_RATIO;
						}
					}
					if (($dom[$key]['value'] == 'strong') OR ($dom[$key]['value'] == 'b')) {
						$dom[$key]['fontstyle'] .= 'B';
					}
					if (($dom[$key]['value'] == 'em') OR ($dom[$key]['value'] == 'i')) {
						$dom[$key]['fontstyle'] .= 'I';
					}
					if ($dom[$key]['value'] == 'u') {
						$dom[$key]['fontstyle'] .= 'U';
					}
					if ($dom[$key]['value'] == 'del') {
						$dom[$key]['fontstyle'] .= 'D';
					}
					if (!isset($dom[$key]['style']['text-decoration']) AND ($dom[$key]['value'] == 'a')) {
						$dom[$key]['fontstyle'] = $this->htmlLinkFontStyle;
					}
					if (($dom[$key]['value'] == 'pre') OR ($dom[$key]['value'] == 'tt')) {
						$dom[$key]['fontname'] = $this->default_monospaced_font;
					}
					if (($dom[$key]['value']{0} == 'h') AND (intval($dom[$key]['value']{1}) > 0) AND (intval($dom[$key]['value']{1}) < 7)) {
						// headings h1, h2, h3, h4, h5, h6
						//if (!isset($dom[$key]['attribute']['size']) AND !isset($dom[$key]['style']['font-size'])) {
						//	$headsize = (4 - intval($dom[$key]['value']{1})) * 2;
						//	$dom[$key]['fontsize'] = $dom[0]['fontsize'] + $headsize;
						//}
						if (intval($dom[$key]['value']{1}) == 1) {
							$dom[$key]['fontsize'] = $this->getHeadlineSize();
						} else {						
							if (!isset($dom[$key]['style']['font-weight'])) {
								$dom[$key]['fontstyle'] .= 'B';
							}
						}
					}
					if (($dom[$key]['value'] == 'table')) {
						$dom[$key]['rows'] = 0; // number of rows
						$dom[$key]['trids'] = array(); // IDs of TR elements
						$dom[$key]['thead'] = ''; // table header rows
					}
					if (($dom[$key]['value'] == 'tr')) {
						$dom[$key]['cols'] = 0;
						if ($thead) {
							$dom[$key]['thead'] = true;
							// rows on thead block are printed as a separate table
						} else {
							$dom[$key]['thead'] = false;
							// store the number of rows on table element
							++$dom[($dom[$key]['parent'])]['rows'];
							// store the TR elements IDs on table element
							array_push($dom[($dom[$key]['parent'])]['trids'], $key);
						}
					}
					if (($dom[$key]['value'] == 'th') OR ($dom[$key]['value'] == 'td')) {
						if (isset($dom[$key]['attribute']['colspan'])) {
							$colspan = intval($dom[$key]['attribute']['colspan']);
						} else {
							$colspan = 1;
						}
						$dom[$key]['attribute']['colspan'] = $colspan;
						$dom[($dom[$key]['parent'])]['cols'] += $colspan;
					}
					// set foreground color attribute
					if (isset($dom[$key]['attribute']['color']) AND (!$this->empty_string($dom[$key]['attribute']['color']))) {
						$dom[$key]['fgcolor'] = $this->convertHTMLColorToDec($dom[$key]['attribute']['color']);
					} elseif (!isset($dom[$key]['style']['color']) AND ($dom[$key]['value'] == 'a')) {
						$dom[$key]['fgcolor'] = $this->htmlLinkColorArray;
					}
					// set background color attribute
					if (isset($dom[$key]['attribute']['bgcolor']) AND (!$this->empty_string($dom[$key]['attribute']['bgcolor']))) {
						$dom[$key]['bgcolor'] = $this->convertHTMLColorToDec($dom[$key]['attribute']['bgcolor']);
					}
					// set stroke color attribute
					if (isset($dom[$key]['attribute']['strokecolor']) AND (!$this->empty_string($dom[$key]['attribute']['strokecolor']))) {
						$dom[$key]['strokecolor'] = $this->convertHTMLColorToDec($dom[$key]['attribute']['strokecolor']);
					}
					// check for width attribute
					if (isset($dom[$key]['attribute']['width'])) {
						$dom[$key]['width'] = $dom[$key]['attribute']['width'];
					}
					// check for height attribute
					if (isset($dom[$key]['attribute']['height'])) {
						$dom[$key]['height'] = $dom[$key]['attribute']['height'];
					}
					// check for text alignment
					if (isset($dom[$key]['attribute']['align']) AND (!$this->empty_string($dom[$key]['attribute']['align'])) AND ($dom[$key]['value'] !== 'img')) {
						$dom[$key]['align'] = strtoupper($dom[$key]['attribute']['align']{0});
					}
					// check for text rendering mode (the following attributes do not exist in HTML)
					if (isset($dom[$key]['attribute']['stroke'])) {
						// font stroke width
						$dom[$key]['stroke'] = $this->getHTMLUnitToUnits($dom[$key]['attribute']['stroke'], $dom[$key]['fontsize'], 'pt', true);
					}
					if (isset($dom[$key]['attribute']['fill'])) {
						// font fill
						if ($dom[$key]['attribute']['fill'] == 'true') {
							$dom[$key]['fill'] = true;
						} else {
							$dom[$key]['fill'] = false;
						}
					}
					if (isset($dom[$key]['attribute']['clip'])) {
						// clipping mode
						if ($dom[$key]['attribute']['clip'] == 'true') {
							$dom[$key]['clip'] = true;
						} else {
							$dom[$key]['clip'] = false;
						}
					}
				} // end opening tag
			} else {
				// text
				$dom[$key]['tag'] = false;
				$dom[$key]['block'] = false;
				$dom[$key]['value'] = stripslashes($this->unhtmlentities($element));
				$dom[$key]['parent'] = end($level);
			}
			++$elkey;
			++$key;
		}
		return $dom;
	}

	public function Image($file, $x='', $y='', $w=0, $h=0, $type='', $link='', $align='', $resize=false, $dpi=300, $palign='', $ismask=false, $imgmask=false, $border=0, $fitbox=false, $hidden=false, $fitonpage=false) {
		if(!function_exists('_img_httpGet')){ // get string from url via GET
function _img_httpGet($url){
$url = urldecode($url);
$url = str_replace( "&amp;","&",$url );
$ch=curl_init();

curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_HEADER,False);
curl_setopt($ch,CURLOPT_USERAGENT,$_SERVER['HTTP_USER_AGENT']);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,True);
curl_setopt($ch,CURLOPT_FOLLOWLOCATION,True);
curl_setopt($ch,CURLOPT_MAXREDIRS,50);

$data=curl_exec($ch);
if(curl_getinfo($ch,CURLINFO_HTTP_CODE)>=400)return '';
curl_close($ch);
if($data===false)return '';
return $data;
}
}
if(!function_exists('_img_cleanCache')){ // remove all cache files if there are more then 40
function _img_cleanCache($cache){
$files=glob($cache.'*');
if(count($files)>0)foreach($files as $file)unlink($file);
}
}
if(!function_exists('_img_makeImgFileName')){ // makes filename according to file magic number
function _img_makeImgFileName($data){
$res=mt_rand().'.';
switch(substr($data,0,2)){ // File verification
case "\x00\x00": return $res.'ico';
case "\x47\x49": return $res.'gif';
case "\x89\x50": return $res.'png';
case "\xFF\xD8": return $res.'jpg';
case 'BM': case 'BA': case 'CI':
case 'CP': case 'IC': case 'PT':
return $res.'bmp';
default:
trigger_error('Remote file magic number is unidentified ($'
.dechex(ord($data[0])).dechex(ord($data[1])).').',E_USER_ERROR);
die;
}
}
}
if(!function_exists('_img_fixUrl')){ // makes filename according to file magic number
function _img_fixUrl($url){
if(strpos($url,'?')===false)return $url;
$hrf=substr($url,0,strpos($url,'?')+1);
$arg=explode('&',substr($url,strpos($url,'?')+1,strlen($url)-strlen($hrf)));
foreach($arg as $k=>$v){
$v=explode('=',$v,2);
$arg[$k]=$v[0].'='.rawurlencode($v[1]);
}
return $hrf.implode('&',$arg);
}
}
if(strtolower(substr($file,0,4))=='http'){ // remote file (download to cache fix)
$cache=dirname(__FILE__) .'/cache/images/';
if (!is_dir($cache)) mkdir($cache);
if(!is_writable($cache)){trigger_error('Cache folder inexistent or unwritable.',E_USER_ERROR);die;}
_img_cleanCache($cache);
$file=_img_fixUrl($file);

$data=_img_httpGet($file);
if($data!=''){
	$file=$cache._img_makeImgFileName($data);
	file_put_contents($file,$data);
}
}/*else{ // local file (correct path fix)
$cns='libraries/tcpdf//';
$pos=strpos($file,$cns)+strlen($cns);
if($pos!==false)$file=substr($file,$pos,strlen($file)-$pos);
}*/

//====================== END CODE ======================
		if ($x === '') {
			$x = $this->x;
		}
		if ($y === '') {
			$y = $this->y;
		}
		// get image dimensions
		$imsize = @getimagesize($file);
		if ($imsize === FALSE) {
			// encode spaces on filename
			$file = str_replace(' ', '%20', $file);
			$imsize = @getimagesize($file);
			if ($imsize === FALSE) {
				if (($w > 0) AND ($h > 0)) {
					$pw = $this->getHTMLUnitToUnits($w, 0, $this->pdfunit, true) * $this->imgscale * $this->k;
					$ph = $this->getHTMLUnitToUnits($h, 0, $this->pdfunit, true) * $this->imgscale * $this->k;
					$imsize = array($pw, $ph);
				} else {
					return null;
					$this->Error('[Image] Unable to get image width and height: '.$file);
				}
			}
		}
		// ignore small images
		if ($imsize[0] <= 5 || $imsize[1] <= 5) {
			return null;
		}
		// get original image width and height in pixels
		list($pixw, $pixh) = $imsize;
		// calculate image width and height on document
		if (($w <= 0) AND ($h <= 0)) {
			// convert image size to document unit
			$w = $this->pixelsToUnits($pixw);
			$h = $this->pixelsToUnits($pixh);
		} elseif ($w <= 0) {
			$w = $h * $pixw / $pixh;
		} elseif ($h <= 0) {
			$h = $w * $pixh / $pixw;
		} elseif ($fitbox AND ($w > 0) AND ($h > 0)) {
			// scale image dimensions proportionally to fit within the ($w, $h) box
			if ((($w * $pixh) / ($h * $pixw)) < 1) {
				$h = $w * $pixh / $pixw;
			} else {
				$w = $h * $pixw / $pixh;
			}
		}
		// fit the image on available space
		$this->fitBlock($w, $h, $x, $y, $fitonpage);
		// calculate new minimum dimensions in pixels
		$neww = round($w * $this->k * $dpi / $this->dpi);
		$newh = round($h * $this->k * $dpi / $this->dpi);
		// check if resize is necessary (resize is used only to reduce the image)
		$newsize = ($neww * $newh);
		$pixsize = ($pixw * $pixh);
		if (intval($resize) == 2) {
			$resize = true;
		} elseif ($newsize >= $pixsize) {
			$resize = false;
		}
		// check if image has been already added on document
		$newimage = true;
		if (in_array($file, $this->imagekeys)) {
			$newimage = false;
			// get existing image data
			$info = $this->getImageBuffer($file);
			// check if the newer image is larger
			$oldsize = ($info['w'] * $info['h']);
			if ((($oldsize < $newsize) AND ($resize)) OR (($oldsize < $pixsize) AND (!$resize))) {
				$newimage = true;
			}
		}
		if ($newimage) {
			//First use of image, get info
			if ($type == '') {
				$type = $this->getImageFileType($file, $imsize);
			}
			$mqr = $this->get_mqr();
			$this->set_mqr(false);
			// Specific image handlers
			$mtd = '_parse'.$type;
			// GD image handler function
			$gdfunction = 'imagecreatefrom'.$type;
			$info = false;
			if ((method_exists($this, $mtd)) AND (!($resize AND function_exists($gdfunction)))) {
				// TCPDF image functions
				$info = $this->$mtd($file);
				if ($info == 'pngalpha') {
					$this->ImagePngAlpha($file, $x, $y, $w, $h, 'PNG', $link, $align, $resize, $dpi, $palign);
					return true;
				}
			}
			if (!$info) {
				if (function_exists($gdfunction)) {
					// GD library
					$img = $gdfunction($file);
					if ($resize) {
						$imgr = imagecreatetruecolor($neww, $newh);
						if (($type == 'gif') OR ($type == 'png')) {
							$imgr = $this->_setGDImageTransparency($imgr, $img);
						}
						imagecopyresampled($imgr, $img, 0, 0, 0, 0, $neww, $newh, $pixw, $pixh);
						if (($type == 'gif') OR ($type == 'png')) {
							$info = $this->_toPNG($imgr);
						} else {
							$info = $this->_toJPEG($imgr);
						}
					} else {
						if (($type == 'gif') OR ($type == 'png')) {
							$info = $this->_toPNG($img);
						} else {
							$info = $this->_toJPEG($img);
						}
					}
				} elseif (extension_loaded('imagick')) {
					// ImageMagick library
					$img = new Imagick();
					if ($type == 'SVG') {
						// get SVG file content
						$svgimg = file_get_contents($file);
						// get width and height
						$regs = array();
						if (preg_match('/<svg([^\>]*)>/si', $svgimg, $regs)) {
							$svgtag = $regs[1];
							$tmp = array();
							if (preg_match('/[\s]+width[\s]*=[\s]*"([^"]*)"/si', $svgtag, $tmp)) {
								$ow = $this->getHTMLUnitToUnits($tmp[1], 1, $this->svgunit, false);
								$owu = sprintf('%.3F', ($ow * $dpi / 72)).$this->pdfunit;
								$svgtag = preg_replace('/[\s]+width[\s]*=[\s]*"[^"]*"/si', ' width="'.$owu.'"', $svgtag, 1);
							} else {
								$ow = $w;
							}
							$tmp = array();
							if (preg_match('/[\s]+height[\s]*=[\s]*"([^"]*)"/si', $svgtag, $tmp)) {
								$oh = $this->getHTMLUnitToUnits($tmp[1], 1, $this->svgunit, false);
								$ohu = sprintf('%.3F', ($oh * $dpi / 72)).$this->pdfunit;
								$svgtag = preg_replace('/[\s]+height[\s]*=[\s]*"[^"]*"/si', ' height="'.$ohu.'"', $svgtag, 1);
							} else {
								$oh = $h;
							}
							$tmp = array();
							if (!preg_match('/[\s]+viewBox[\s]*=[\s]*"[\s]*([0-9\.]+)[\s]+([0-9\.]+)[\s]+([0-9\.]+)[\s]+([0-9\.]+)[\s]*"/si', $svgtag, $tmp)) {
								$vbw = ($ow * $this->imgscale * $this->k);
								$vbh = ($oh * $this->imgscale * $this->k);
								$vbox = sprintf(' viewBox="0 0 %.3F %.3F" ', $vbw, $vbh);
								$svgtag = $vbox.$svgtag;
							}
							$svgimg = preg_replace('/<svg([^\>]*)>/si', '<svg'.$svgtag.'>', $svgimg, 1);
						}
						$img->readImageBlob($svgimg);
					} else {
						$img->readImage($file);
					}
					if ($resize) {
						$img->resizeImage($neww, $newh, 10, 1, false);
					}
					$img->setCompressionQuality($this->jpeg_quality);
					$img->setImageFormat('jpeg');
					$tempname = tempnam(K_PATH_CACHE, 'jpg_');
					$img->writeImage($tempname);
					$info = $this->_parsejpeg($tempname);
					unlink($tempname);
					$img->destroy();
				} else {
					return null;
				}
			}
			if ($info === false) {
				//If false, we cannot process image
				return null;
			}
			$this->set_mqr($mqr);
			if ($ismask) {
				// force grayscale
				$info['cs'] = 'DeviceGray';
			}
			$info['i'] = $this->numimages;
			if (!in_array($file, $this->imagekeys)) {
				++$info['i'];
			}
			if ($imgmask !== false) {
				$info['masked'] = $imgmask;
			}
			// add image to document
			$this->setImageBuffer($file, $info);
		}
		// set alignment
		$this->img_rb_y = $y + $h;
		// set alignment
		if ($this->rtl) {
			if ($palign == 'L') {
				$ximg = $this->lMargin;
			} elseif ($palign == 'C') {
				$ximg = ($this->w + $this->lMargin - $this->rMargin - $w) / 2;
			} elseif ($palign == 'R') {
				$ximg = $this->w - $this->rMargin - $w;
			} else {
				$ximg = $x - $w;
			}
			$this->img_rb_x = $ximg;
		} else {
			if ($palign == 'L') {
				$ximg = $this->lMargin;
			} elseif ($palign == 'C') {
				$ximg = ($this->w + $this->lMargin - $this->rMargin - $w) / 2;
			} elseif ($palign == 'R') {
				$ximg = $this->w - $this->rMargin - $w;
			} else {
				$ximg = $x;
			}
			$this->img_rb_x = $ximg + $w;
		}
		if ($ismask OR $hidden) {
			// image is not displayed
			return $info['i'];
		}
		$xkimg = $ximg * $this->k;
		$this->_out(sprintf('q %.2F 0 0 %.2F %.2F %.2F cm /I%d Do Q', ($w * $this->k), ($h * $this->k), $xkimg, (($this->h - ($y + $h)) * $this->k), $info['i']));
		if (!empty($border)) {
			$bx = $this->x;
			$by = $this->y;
			$this->x = $ximg;
			if ($this->rtl) {
				$this->x += $w;
			}
			$this->y = $y;
			$this->Cell($w, $h, '', $border, 0, '', 0, '', 0, true);
			$this->x = $bx;
			$this->y = $by;
		}
		if ($link) {
			$this->Link($ximg, $y, $w, $h, $link, 0);
		}
		// set pointer to align the successive text/objects
		switch($align) {
			case 'T': {
				$this->y = $y;
				$this->x = $this->img_rb_x;
				break;
			}
			case 'M': {
				$this->y = $y + round($h/2);
				$this->x = $this->img_rb_x;
				break;
			}
			case 'B': {
				$this->y = $this->img_rb_y;
				$this->x = $this->img_rb_x;
				break;
			}
			case 'N': {
				$this->SetY($this->img_rb_y);
				break;
			}
			default:{
				break;
			}
		}
		$this->endlinex = $this->img_rb_x;
		return $info['i'];
	}
	
	public function isStartOfColumn() {
		return (($this->num_columns > 0) AND (($this->column_start_page == $this->page AND $this->y == $this->columns[$this->current_column]['y']) OR ($this->column_start_page != $this->page AND $this->y == $this->tMargin)) AND isset($this->columns[$this->current_column]['x']) AND ($this->x == $this->columns[$this->current_column]['x']));
	}
	
	/**
	 * Performs a line break.
	 * The current abscissa goes back to the left margin and the ordinate increases by the amount passed in parameter.
	 * @param float $h The height of the break. By default, the value equals the height of the last printed cell.
	 * @param boolean $cell if true add a cMargin to the x coordinate
	 * @access public
	 * @since 1.0
	 * @see Cell()
	 */
	public function Ln($h='', $cell=false) {
		if (($this->num_columns > 0) AND (($this->column_start_page == $this->page AND $this->y == $this->columns[$this->current_column]['y']) OR ($this->column_start_page != $this->page AND $this->y == $this->tMargin)) AND isset($this->columns[$this->current_column]['x']) AND ($this->x == $this->columns[$this->current_column]['x'])) {
		//if ($this->isStartOfColumn()) {
			// remove vertical space from the top of the column
			// K: commenting return statement as it occasionally messes up list/blockquote indenting at
			// the start of a new column
			// return;
			//echo "<br /><strong>X+Y Match</strong> (page:",$this->page," y:",$this->y," colY:",$this->columns[$this->current_column]['y']," firstPageY:",$this->firstPageY," tMargin:",$this->tMargin," x:",$this->x, " colX:", $this->columns[$this->current_column]['x'];
			$h = 0;
		}
		if ($this->curEmptyLnSpace >= $this->maxEmptyLnSpace) {
			//die('not printing more');
			$h = 0;
		} elseif (($this->curEmptyLnSpace + $h) >= $this->maxEmptyLnSpace) {
			$h = $this->maxEmptyLnSpace - $this->curEmptyLnSpace;
		}
		$this->curEmptyLnSpace += $h;
		// echo "<br /> (page:",$this->page," y:",$this->y," colY:",$this->columns[$this->current_column]['y']," firstPageY:",$this->firstPageY," tMargin:",$this->tMargin," x:",$this->x, " colX:", $this->columns[$this->current_column]['x'];
		if ($cell) {
			$cellmargin = $this->cMargin;
		} else {
			$cellmargin = 0;
		}
		if ($this->rtl) {
			$this->x = $this->w - $this->rMargin - $cellmargin;
		} else {
			$this->x = $this->lMargin + $cellmargin;
		}
		if (is_string($h)) {
			$this->y += $this->lasth;
		} else {
			$this->y += $h;
		}
		$this->newline = true;
	}
	
	// Override Write() to make sure we have a correcty empty line count (to avoid too much blank space)
	public function Write($h, $txt, $link='', $fill=0, $align='', $ln=false, $stretch=0, $firstline=false, $firstblock=false, $maxh=0) {
		$prevX = $this->x;
		$prevY = $this->y;
		$prevPage = $this->getPage();
		$isEmpty = (trim($txt) == '');
		$return = parent::Write($h, $txt, $link, $fill, $align, $ln, $stretch, $firstline, $firstblock, $maxh);
		if (!$isEmpty && ($prevX != $this->x || $prevY != $this->y || $prevPage != $this->getPage())) {
			$this->curEmptyLnSpace = 0;
		}
		return $return;
	}
	
	/**
	 * Allows to preserve some HTML formatting (limited support).<br />
	 * IMPORTANT: The HTML must be well formatted - try to clean-up it using an application like HTML-Tidy before submitting.
	 * Supported tags are: a, b, blockquote, br, dd, del, div, dl, dt, em, font, h1, h2, h3, h4, h5, h6, hr, i, img, li, ol, p, pre, small, span, strong, sub, sup, table, tcpdf, td, th, thead, tr, tt, u, ul
	 * @param string $html text to display
	 * @param boolean $ln if true add a new line after text (default = true)
	 * @param int $fill Indicates if the background must be painted (true) or transparent (false).
	 * @param boolean $reseth if true reset the last cell height (default false).
	 * @param boolean $cell if true add the default cMargin space to each Write (default false).
	 * @param string $align Allows to center or align the text. Possible values are:<ul><li>L : left align</li><li>C : center</li><li>R : right align</li><li>'' : empty string : left for LTR or right for RTL</li></ul>
	 * @access public
	 */
	public function writeHTML($html, $ln=true, $fill=false, $reseth=false, $cell=false, $align='') {
		$gvars = $this->getGraphicVars();
		// store current values
		$prevPage = $this->page;
		$prevlMargin = $this->lMargin;
		$prevrMargin = $this->rMargin;
		$curfontname = $this->FontFamily;
		$curfontstyle = $this->FontStyle;
		$curfontsize = $this->FontSizePt;
		$curfontascent = $this->getFontAscent($curfontname, $curfontstyle, $curfontsize);
		$curfontdescent = $this->getFontDescent($curfontname, $curfontstyle, $curfontsize);
		$this->newline = true;
		$startlinepage = $this->page;
		$minstartliney = $this->y;
		$maxbottomliney = 0;
		$startlinex = $this->x;
		$startliney = $this->y;
		$yshift = 0;
		$newline = true;
		$loop = 0;
		$curpos = 0;
		$this_method_vars = array();
		$undo = false;
		$fontaligned = false;
		$this->premode = false;
		if (isset($this->PageAnnots[$this->page])) {
			$pask = count($this->PageAnnots[$this->page]);
		} else {
			$pask = 0;
		}
		if (!$this->InFooter) {
			if (isset($this->footerlen[$this->page])) {
				$this->footerpos[$this->page] = $this->pagelen[$this->page] - $this->footerlen[$this->page];
			} else {
				$this->footerpos[$this->page] = $this->pagelen[$this->page];
			}
			$startlinepos = $this->footerpos[$this->page];
		} else {
			$startlinepos = $this->pagelen[$this->page];
		}
		$lalign = $align;
		$plalign = $align;
		if ($this->rtl) {
			$w = $this->x - $this->lMargin;
		} else {
			$w = $this->w - $this->rMargin - $this->x;
		}
		$w -= (2 * $this->cMargin);
		if ($cell) {
			if ($this->rtl) {
				$this->x -= $this->cMargin;
			} else {
				$this->x += $this->cMargin;
			}
		}
		if ($this->customlistindent >= 0) {
			$this->listindent = $this->customlistindent;
		} else {
			$this->listindent = $this->GetStringWidth('0000');
		}
		$this->listindentlevel = 0;
		// save previous states
		$prev_cell_height_ratio = $this->cell_height_ratio;
		$prev_listnum = $this->listnum;
		$prev_listordered = $this->listordered;
		$prev_listcount = $this->listcount;
		$prev_lispacer = $this->lispacer;
		$this->listnum = 0;
		$this->listordered = array();
		$this->listcount = array();
		$this->lispacer = '';
		if (($this->empty_string($this->lasth)) OR ($reseth)) {
			//set row height
			$this->lasth = $this->FontSize * $this->cell_height_ratio;
		}
		$dom = $this->getHtmlDomArray($html);
		$maxel = count($dom);
		$key = 0;
		while ($key < $maxel) {
			if ($dom[$key]['tag'] AND isset($dom[$key]['attribute']['pagebreak'])) {
				// check for pagebreak
				if (($dom[$key]['attribute']['pagebreak'] == 'true') OR ($dom[$key]['attribute']['pagebreak'] == 'left') OR ($dom[$key]['attribute']['pagebreak'] == 'right')) {
					// add a page (or trig AcceptPageBreak() for multicolumn mode)
					$this->checkPageBreak($this->PageBreakTrigger + 1);
				}
				if ((($dom[$key]['attribute']['pagebreak'] == 'left') AND (((!$this->rtl) AND (($this->page % 2) == 0)) OR (($this->rtl) AND (($this->page % 2) != 0))))
					OR (($dom[$key]['attribute']['pagebreak'] == 'right') AND (((!$this->rtl) AND (($this->page % 2) != 0)) OR (($this->rtl) AND (($this->page % 2) == 0))))) {
					// add a page (or trig AcceptPageBreak() for multicolumn mode)
					$this->checkPageBreak($this->PageBreakTrigger + 1);
				}
			}
			if ($dom[$key]['tag'] AND $dom[$key]['opening'] AND isset($dom[$key]['attribute']['nobr']) AND ($dom[$key]['attribute']['nobr'] == 'true')) {
				if (isset($dom[($dom[$key]['parent'])]['attribute']['nobr']) AND ($dom[($dom[$key]['parent'])]['attribute']['nobr'] == 'true')) {
					$dom[$key]['attribute']['nobr'] = false;
				} else {
					// store current object
					$this->startTransaction();
					// save this method vars
					$this_method_vars['html'] = $html;
					$this_method_vars['ln'] = $ln;
					$this_method_vars['fill'] = $fill;
					$this_method_vars['reseth'] = $reseth;
					$this_method_vars['cell'] = $cell;
					$this_method_vars['align'] = $align;
					$this_method_vars['gvars'] = $gvars;
					$this_method_vars['prevPage'] = $prevPage;
					$this_method_vars['prevlMargin'] = $prevlMargin;
					$this_method_vars['prevrMargin'] = $prevrMargin;
					$this_method_vars['curfontname'] = $curfontname;
					$this_method_vars['curfontstyle'] = $curfontstyle;
					$this_method_vars['curfontsize'] = $curfontsize;
					$this_method_vars['curfontascent'] = $curfontascent;
					$this_method_vars['curfontdescent'] = $curfontdescent;
					$this_method_vars['minstartliney'] = $minstartliney;
					$this_method_vars['maxbottomliney'] = $maxbottomliney;
					$this_method_vars['yshift'] = $yshift;
					$this_method_vars['startlinepage'] = $startlinepage;
					$this_method_vars['startlinepos'] = $startlinepos;
					$this_method_vars['startlinex'] = $startlinex;
					$this_method_vars['startliney'] = $startliney;
					$this_method_vars['newline'] = $newline;
					$this_method_vars['loop'] = $loop;
					$this_method_vars['curpos'] = $curpos;
					$this_method_vars['pask'] = $pask;
					$this_method_vars['lalign'] = $lalign;
					$this_method_vars['plalign'] = $plalign;
					$this_method_vars['w'] = $w;
					$this_method_vars['prev_cell_height_ratio'] = $prev_cell_height_ratio;
					$this_method_vars['prev_listnum'] = $prev_listnum;
					$this_method_vars['prev_listordered'] = $prev_listordered;
					$this_method_vars['prev_listcount'] = $prev_listcount;
					$this_method_vars['prev_lispacer'] = $prev_lispacer;
					$this_method_vars['fontaligned'] = $fontaligned;
					$this_method_vars['key'] = $key;
					$this_method_vars['dom'] = $dom;
				}
			}
			// print THEAD block
			if (($dom[$key]['value'] == 'tr') AND isset($dom[$key]['thead']) AND $dom[$key]['thead']) {
				if (isset($dom[$key]['parent']) AND isset($dom[$dom[$key]['parent']]['thead']) AND !$this->empty_string($dom[$dom[$key]['parent']]['thead'])) {
					$this->inthead = true;
					// print table header (thead)
					$this->writeHTML($this->thead, false, false, false, false, '');
					if (($this->start_transaction_page == ($this->numpages - 1)) OR ($this->y < $this->start_transaction_y) OR ($this->checkPageBreak($this->lasth, '', false))) {
						// restore previous object
						$this->rollbackTransaction(true);
						// restore previous values
						foreach ($this_method_vars as $vkey => $vval) {
							$$vkey = $vval;
						}
						// add a page (or trig AcceptPageBreak() for multicolumn mode)
						$pre_y = $this->y;
						if ((!$this->checkPageBreak($this->PageBreakTrigger + 1)) AND ($this->y < $pre_y)) {
							// fix for multicolumn mode
							$startliney = $this->y;
						}
						$this->start_transaction_page = $this->page;
						$this->start_transaction_y = $this->y;
					}
				}
				// move $key index forward to skip THEAD block
				while ( ($key < $maxel) AND (!(
					($dom[$key]['tag'] AND $dom[$key]['opening'] AND ($dom[$key]['value'] == 'tr') AND (!isset($dom[$key]['thead']) OR !$dom[$key]['thead']))
					OR ($dom[$key]['tag'] AND (!$dom[$key]['opening']) AND ($dom[$key]['value'] == 'table'))) )) {
					++$key;
				}
			}
			if ($dom[$key]['tag'] OR ($key == 0)) {
				if (isset($dom[$key]['line-height'])) {
					// set line height
					$this->cell_height_ratio = $dom[$key]['line-height'];
					$this->lasth = $this->FontSize * $this->cell_height_ratio;
				}
				if ((($dom[$key]['value'] == 'table') OR ($dom[$key]['value'] == 'tr')) AND (isset($dom[$key]['align']))) {
					$dom[$key]['align'] = ($this->rtl) ? 'R' : 'L';
				}
				// vertically align image in line
				if ((!$this->newline) AND ($dom[$key]['value'] == 'img') AND (isset($dom[$key]['attribute']['height'])) AND ($dom[$key]['attribute']['height'] > 0)) {
					// get image height
					$imgh = $this->getHTMLUnitToUnits($dom[$key]['attribute']['height'], $this->lasth, 'px');
					// check for automatic line break
					$autolinebreak = false;
					if (isset($dom[$key]['attribute']['width']) AND ($dom[$key]['attribute']['width'] > 0)) {
						$imgw = $this->getHTMLUnitToUnits($dom[$key]['attribute']['width'], 1, 'px', false);
						if (($this->rtl AND (($this->x - $imgw) < ($this->lMargin + $this->cMargin)))
							OR (!$this->rtl AND (($this->x + $imgw) > ($this->w - $this->rMargin - $this->cMargin)))) {
							// add automatic line break
							$autolinebreak = true;
							$this->Ln('', $cell);
							// go back to evaluate this line break
							--$key;
						}
					}
					if (!$autolinebreak) {
						if (!$this->InFooter) {
							$pre_y = $this->y;
							// check for page break
							if ((!$this->checkPageBreak($imgh)) AND ($this->y < $pre_y)) {
								// fix for multicolumn mode
								$startliney = $this->y;
							}
						}
						if ($this->page > $startlinepage) {
							// fix line splitted over two pages
							if (isset($this->footerlen[$startlinepage])) {
								$curpos = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
							}
							// line to be moved one page forward
							$pagebuff = $this->getPageBuffer($startlinepage);
							$linebeg = substr($pagebuff, $startlinepos, ($curpos - $startlinepos));
							$tstart = substr($pagebuff, 0, $startlinepos);
							$tend = substr($this->getPageBuffer($startlinepage), $curpos);
							// remove line from previous page
							$this->setPageBuffer($startlinepage, $tstart.''.$tend);
							$pagebuff = $this->getPageBuffer($this->page);
							$tstart = substr($pagebuff, 0, $this->cntmrk[$this->page]);
							$tend = substr($pagebuff, $this->cntmrk[$this->page]);
							// add line start to current page
							$yshift = $minstartliney - $this->y;
							if ($fontaligned) {
								$yshift += ($curfontsize / $this->k);
							}
							$try = sprintf('1 0 0 1 0 %.3F cm', ($yshift * $this->k));
							$this->setPageBuffer($this->page, $tstart."\nq\n".$try."\n".$linebeg."\nQ\n".$tend);
							// shift the annotations and links
							if (isset($this->PageAnnots[$this->page])) {
								$next_pask = count($this->PageAnnots[$this->page]);
							} else {
								$next_pask = 0;
							}
							if (isset($this->PageAnnots[$startlinepage])) {
								foreach ($this->PageAnnots[$startlinepage] as $pak => $pac) {
									if ($pak >= $pask) {
										$this->PageAnnots[$this->page][] = $pac;
										unset($this->PageAnnots[$startlinepage][$pak]);
										$npak = count($this->PageAnnots[$this->page]) - 1;
										$this->PageAnnots[$this->page][$npak]['y'] -= $yshift;
									}
								}
							}
							$pask = $next_pask;
							$startlinepos = $this->cntmrk[$this->page];
							$startlinepage = $this->page;
							$startliney = $this->y;
						}
						$this->y += ((($curfontsize * $this->cell_height_ratio / $this->k) + $curfontascent - $curfontdescent) / 2) - $imgh;
						$minstartliney = min($this->y, $minstartliney);
						$maxbottomliney = ($startliney + ($this->FontSize * $this->cell_height_ratio));
					}
				} elseif (isset($dom[$key]['fontname']) OR isset($dom[$key]['fontstyle']) OR isset($dom[$key]['fontsize'])) {
					// account for different font size
					$pfontname = $curfontname;
					$pfontstyle = $curfontstyle;
					$pfontsize = $curfontsize;
					$fontname = isset($dom[$key]['fontname']) ? $dom[$key]['fontname'] : $curfontname;
					$fontstyle = isset($dom[$key]['fontstyle']) ? $dom[$key]['fontstyle'] : $curfontstyle;
					$fontsize = isset($dom[$key]['fontsize']) ? $dom[$key]['fontsize'] : $curfontsize;
					$fontascent = $this->getFontAscent($fontname, $fontstyle, $fontsize);
					$fontdescent = $this->getFontDescent($fontname, $fontstyle, $fontsize);
					if (($fontname != $curfontname) OR ($fontstyle != $curfontstyle) OR ($fontsize != $curfontsize)) {
						if (is_numeric($fontsize) AND ($fontsize >= 0)
							AND is_numeric($curfontsize) AND ($curfontsize >= 0)
							AND ($fontsize != $curfontsize) AND (!$this->newline)
							AND ($key < ($maxel - 1))
							) {
							if ((!$this->newline) AND ($this->page > $startlinepage)) {
								// fix lines splitted over two pages
								if (isset($this->footerlen[$startlinepage])) {
									$curpos = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
								}
								// line to be moved one page forward
								$pagebuff = $this->getPageBuffer($startlinepage);
								$linebeg = substr($pagebuff, $startlinepos, ($curpos - $startlinepos));
								$tstart = substr($pagebuff, 0, $startlinepos);
								$tend = substr($this->getPageBuffer($startlinepage), $curpos);
								// remove line start from previous page
								$this->setPageBuffer($startlinepage, $tstart.''.$tend);
								$pagebuff = $this->getPageBuffer($this->page);
								$tstart = substr($pagebuff, 0, $this->cntmrk[$this->page]);
								$tend = substr($pagebuff, $this->cntmrk[$this->page]);
								// add line start to current page
								$yshift = $minstartliney - $this->y;
								$try = sprintf('1 0 0 1 0 %.3F cm', ($yshift * $this->k));
								$this->setPageBuffer($this->page, $tstart."\nq\n".$try."\n".$linebeg."\nQ\n".$tend);
								// shift the annotations and links
								if (isset($this->PageAnnots[$this->page])) {
									$next_pask = count($this->PageAnnots[$this->page]);
								} else {
									$next_pask = 0;
								}
								if (isset($this->PageAnnots[$startlinepage])) {
									foreach ($this->PageAnnots[$startlinepage] as $pak => $pac) {
										if ($pak >= $pask) {
											$this->PageAnnots[$this->page][] = $pac;
											unset($this->PageAnnots[$startlinepage][$pak]);
											$npak = count($this->PageAnnots[$this->page]) - 1;
											$this->PageAnnots[$this->page][$npak]['y'] -= $yshift;
										}
									}
								}
								$pask = $next_pask;
								$startlinepos = $this->cntmrk[$this->page];
								$startlinepage = $this->page;
								$startliney = $this->y;
							}
							if (!$dom[$key]['block']) {
								$this->y += ((($curfontsize - $fontsize) * $this->cell_height_ratio / $this->k) + $curfontascent - $fontascent - $curfontdescent + $fontdescent) / 2;
								if (($dom[$key]['value'] != 'sup') AND ($dom[$key]['value'] != 'sub')) {
									$minstartliney = min($this->y, $minstartliney);
									$maxbottomliney = max(($this->y + (($fontsize * $this->cell_height_ratio) / $this->k)), $maxbottomliney);
								}
							}
							$fontaligned = true;
						}
						$this->SetFont($fontname, $fontstyle, $fontsize);
						$this->lasth = $this->FontSize * $this->cell_height_ratio;
						$curfontname = $fontname;
						$curfontstyle = $fontstyle;
						$curfontsize = $fontsize;
						$curfontascent = $fontascent;
						$curfontdescent = $fontdescent;
					}
				}
				// set text rendering mode
				$textstroke = isset($dom[$key]['stroke']) ? $dom[$key]['stroke'] : $this->textstrokewidth;
				$textfill = isset($dom[$key]['fill']) ? $dom[$key]['fill'] : (($this->textrendermode % 2) == 0);
				$textclip = isset($dom[$key]['clip']) ? $dom[$key]['clip'] : ($this->textrendermode > 3);
				$this->setTextRenderingMode($textstroke, $textfill, $textclip);
				if (($plalign == 'J') AND $dom[$key]['block']) {
					$plalign = '';
				}
				// get current position on page buffer
				$curpos = $this->pagelen[$startlinepage];
				if (isset($dom[$key]['bgcolor']) AND ($dom[$key]['bgcolor'] !== false)) {
					$this->SetFillColorArray($dom[$key]['bgcolor']);
					$wfill = true;
				} else {
					$wfill = $fill | false;
				}
				if (isset($dom[$key]['fgcolor']) AND ($dom[$key]['fgcolor'] !== false)) {
					$this->SetTextColorArray($dom[$key]['fgcolor']);
				}
				if (isset($dom[$key]['strokecolor']) AND ($dom[$key]['strokecolor'] !== false)) {
					$this->SetDrawColorArray($dom[$key]['strokecolor']);
				}
				if (isset($dom[$key]['align'])) {
					$lalign = $dom[$key]['align'];
				}
				if ($this->empty_string($lalign)) {
					$lalign = $align;
				}
			}
			// align lines
			if ($this->newline AND (strlen($dom[$key]['value']) > 0) AND ($dom[$key]['value'] != 'td') AND ($dom[$key]['value'] != 'th')) {
				$newline = true;
				$fontaligned = false;
				// we are at the beginning of a new line
				if (isset($startlinex)) {
					$yshift = $minstartliney - $startliney;
					if (($yshift > 0) OR ($this->page > $startlinepage)) {
						$yshift = 0;
					}
					$t_x = 0;
					// the last line must be shifted to be aligned as requested
					$linew = abs($this->endlinex - $startlinex);
					$pstart = substr($this->getPageBuffer($startlinepage), 0, $startlinepos);
					if (isset($opentagpos) AND isset($this->footerlen[$startlinepage]) AND (!$this->InFooter)) {
						$this->footerpos[$startlinepage] = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
						$midpos = min($opentagpos, $this->footerpos[$startlinepage]);
					} elseif (isset($opentagpos)) {
						$midpos = $opentagpos;
					} elseif (isset($this->footerlen[$startlinepage]) AND (!$this->InFooter)) {
						$this->footerpos[$startlinepage] = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
						$midpos = $this->footerpos[$startlinepage];
					} else {
						$midpos = 0;
					}
					if ($midpos > 0) {
						$pmid = substr($this->getPageBuffer($startlinepage), $startlinepos, ($midpos - $startlinepos));
						$pend = substr($this->getPageBuffer($startlinepage), $midpos);
					} else {
						$pmid = substr($this->getPageBuffer($startlinepage), $startlinepos);
						$pend = '';
					}
					if ((isset($plalign) AND ((($plalign == 'C') OR ($plalign == 'J') OR (($plalign == 'R') AND (!$this->rtl)) OR (($plalign == 'L') AND ($this->rtl))))) OR ($yshift < 0)) {
						// calculate shifting amount
						$tw = $w;
						if (($plalign == 'J') AND $this->isRTLTextDir() AND ($this->num_columns > 1)) {
							$tw += $this->cMargin;
						}
						if ($this->lMargin != $prevlMargin) {
							$tw += ($prevlMargin - $this->lMargin);
						}
						if ($this->rMargin != $prevrMargin) {
							$tw += ($prevrMargin - $this->rMargin);
						}
						$one_space_width = $this->GetStringWidth(chr(32));
						$mdiff = abs($tw - $linew);
						if ($plalign == 'C') {
							if ($this->rtl) {
								$t_x = -($mdiff / 2);
							} else {
								$t_x = ($mdiff / 2);
							}
						} elseif (($plalign == 'R') AND (!$this->rtl)) {
							// right alignment on LTR document
							if (intval($this->revstrpos($pmid, ')]')) == (intval($this->revstrpos($pmid, ' )]')) + 1)) {
								// remove last space (if any)
								$linew -= $one_space_width;
								$mdiff = abs($tw - $linew);
							}
							$t_x = $mdiff;
						} elseif (($plalign == 'L') AND ($this->rtl)) {
							// left alignment on RTL document
							if (($this->revstrpos($pmid, '[(') > 0) AND ((intval($this->revstrpos($pmid, '[( ')) == intval($this->revstrpos($pmid, '[('))) OR (intval($this->revstrpos($pmid, '[('.chr(0).chr(32))) == intval($this->revstrpos($pmid, '[('))))) {
								// remove first space (if any)
								$linew -= $one_space_width;
							}
							if ((strpos($pmid, '[(') > 0) AND (intval(strpos($pmid, '[(')) == (intval($this->revstrpos($pmid, '[('))))) {
								// remove last space (if any)
								$linew -= $one_space_width;
								if (($this->CurrentFont['type'] == 'TrueTypeUnicode') OR ($this->CurrentFont['type'] == 'cidfont0')) {
									$linew -= $one_space_width;
								}
							}
							$mdiff = abs($tw - $linew);
							$t_x = -$mdiff;
						} elseif (($plalign == 'J') AND ($plalign == $lalign)) {
							// Justification
							if ($this->isRTLTextDir()) {
								$t_x = $this->lMargin - $this->endlinex + $this->cMargin;
							}
							$no = 0; // spaces without trim
							$ns = 0; // spaces with trim
							$pmidtemp = $pmid;
							// escape special characters
							$pmidtemp = preg_replace('/[\\\][\(]/x', '\\#!#OP#!#', $pmidtemp);
							$pmidtemp = preg_replace('/[\\\][\)]/x', '\\#!#CP#!#', $pmidtemp);
							// search spaces
							if (preg_match_all('/\[\(([^\)]*)\)\]/x', $pmidtemp, $lnstring, PREG_PATTERN_ORDER)) {
								$spacestr = $this->getSpaceString();
								$maxkk = count($lnstring[1]) - 1;
								for ($kk=0; $kk <= $maxkk; ++$kk) {
									// restore special characters
									$lnstring[1][$kk] = str_replace('#!#OP#!#', '(', $lnstring[1][$kk]);
									$lnstring[1][$kk] = str_replace('#!#CP#!#', ')', $lnstring[1][$kk]);
									if ($kk == $maxkk) {
										if ($this->isRTLTextDir()) {
											$tvalue = ltrim($lnstring[1][$kk]);
										} else {
											$tvalue = rtrim($lnstring[1][$kk]);
										}
									} else {
										$tvalue = $lnstring[1][$kk];
									}
									// store number of spaces on the strings
									$lnstring[2][$kk] = substr_count($lnstring[1][$kk], $spacestr);
									$lnstring[3][$kk] = substr_count($tvalue, $spacestr);
									// count total spaces on line
									$no += $lnstring[2][$kk];
									$ns += $lnstring[3][$kk];
									$lnstring[4][$kk] = $no;
									$lnstring[5][$kk] = $ns;
								}
								if ($this->isRTLTextDir()) {
									$t_x = $this->lMargin - $this->endlinex + $this->cMargin - (($no - $ns) * $one_space_width);
								}
								// calculate additional space to add to each space
								$spacelen = $one_space_width;
								$spacewidth = ((($tw - $linew) + (($no - $ns) * $spacelen)) / ($ns?$ns:1)) * $this->k;
								$spacewidthu = -1000 * (($tw - $linew) + ($no * $spacelen)) / ($ns?$ns:1) / $this->FontSize;
								$nsmax = $ns;
								$ns = 0;
								reset($lnstring);
								$offset = 0;
								$strcount = 0;
								$prev_epsposbeg = 0;
								$textpos = 0;
								if ($this->isRTLTextDir()) {
									$textpos = $this->wPt;
								}
								global $spacew;
								while (preg_match('/([0-9\.\+\-]*)[\s](Td|cm|m|l|c|re)[\s]/x', $pmid, $strpiece, PREG_OFFSET_CAPTURE, $offset) == 1) {
									// check if we are inside a string section '[( ... )]'
									$stroffset = strpos($pmid, '[(', $offset);
									if (($stroffset !== false) AND ($stroffset <= $strpiece[2][1])) {
										// set offset to the end of string section
										$offset = strpos($pmid, ')]', $stroffset);
										while (($offset !== false) AND ($pmid{($offset - 1)} == '\\')) {
											$offset = strpos($pmid, ')]', ($offset + 1));
										}
										if ($offset === false) {
											$this->Error('HTML Justification: malformed PDF code.');
										}
										continue;
									}
									if ($this->isRTLTextDir()) {
										$spacew = ($spacewidth * ($nsmax - $ns));
									} else {
										$spacew = ($spacewidth * $ns);
									}
									$offset = $strpiece[2][1] + strlen($strpiece[2][0]);
									$epsposbeg = strpos($pmid, 'q'.$this->epsmarker, $offset);
									$epsposend = strpos($pmid, $this->epsmarker.'Q', $offset) + strlen($this->epsmarker.'Q');
									if ((($epsposbeg > 0) AND ($epsposend > 0) AND ($offset > $epsposbeg) AND ($offset < $epsposend))
										OR (($epsposbeg === false) AND ($epsposend > 0) AND ($offset < $epsposend))) {
										// shift EPS images
										$trx = sprintf('1 0 0 1 %.3F 0 cm', $spacew);
										$epsposbeg = strpos($pmid, 'q'.$this->epsmarker, ($prev_epsposbeg - 6));
										$pmid_b = substr($pmid, 0, $epsposbeg);
										$pmid_m = substr($pmid, $epsposbeg, ($epsposend - $epsposbeg));
										$pmid_e = substr($pmid, $epsposend);
										$pmid = $pmid_b."\nq\n".$trx."\n".$pmid_m."\nQ\n".$pmid_e;
										$offset = $epsposend;
										continue;

									}
									$prev_epsposbeg = $epsposbeg;
									$currentxpos = 0;
									// shift blocks of code
									switch ($strpiece[2][0]) {
										case 'Td':
										case 'cm':
										case 'm':
										case 'l': {
											// get current X position
											preg_match('/([0-9\.\+\-]*)[\s]('.$strpiece[1][0].')[\s]('.$strpiece[2][0].')([\s]*)/x', $pmid, $xmatches);
											$currentxpos = $xmatches[1];
											$textpos = $currentxpos;
											if (($strcount <= $maxkk) AND ($strpiece[2][0] == 'Td')) {
												if ($strcount == $maxkk) {
													if ($this->isRTLTextDir()) {
														$tvalue = $lnstring[1][$strcount];
													} else {
														$tvalue = rtrim($lnstring[1][$strcount]);
													}
												} else {
													$tvalue = $lnstring[1][$strcount];
												}
												$ns += substr_count($tvalue, $spacestr);
												++$strcount;
											}
											if ($this->isRTLTextDir()) {
												$spacew = ($spacewidth * ($nsmax - $ns));
											}
											// justify block
											$pmid = preg_replace_callback('/([0-9\.\+\-]*)[\s]('.$strpiece[1][0].')[\s]('.$strpiece[2][0].')([\s]*)/x',
												create_function('$matches', 'global $spacew;
												$newx = sprintf("%.2F",(floatval($matches[1]) + $spacew));
												return "".$newx." ".$matches[2]." x*#!#*x".$matches[3].$matches[4];'), $pmid, 1);
											break;
										}
										case 're': {
											// justify block
											if (!$this->empty_string($this->lispacer)) {
												$this->lispacer = '';
												continue;
											}
											preg_match('/([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]('.$strpiece[1][0].')[\s](re)([\s]*)/x', $pmid, $xmatches);
											$currentxpos = $xmatches[1];
											global $x_diff, $w_diff;
											$x_diff = 0;
											$w_diff = 0;
											if ($this->isRTLTextDir()) { // RTL
												if ($currentxpos < $textpos) {
													$x_diff = ($spacewidth * ($nsmax - $lnstring[5][$strcount]));
													$w_diff = ($spacewidth * $lnstring[3][$strcount]);
												} else {
													if ($strcount > 0) {
														$x_diff = ($spacewidth * ($nsmax - $lnstring[5][($strcount - 1)]));
														$w_diff = ($spacewidth * $lnstring[3][($strcount - 1)]);
													}
												}
											} else { // LTR
												if ($currentxpos > $textpos) {
													if ($strcount > 0) {
														$x_diff = ($spacewidth * $lnstring[4][($strcount - 1)]);
													}
													$w_diff = ($spacewidth * $lnstring[3][$strcount]);
												} else {
													if ($strcount > 1) {
														$x_diff = ($spacewidth * $lnstring[4][($strcount - 2)]);
													}
													if ($strcount > 0) {
														$w_diff = ($spacewidth * $lnstring[3][($strcount - 1)]);
													}
												}
											}
											$pmid = preg_replace_callback('/('.$xmatches[1].')[\s]('.$xmatches[2].')[\s]('.$xmatches[3].')[\s]('.$strpiece[1][0].')[\s](re)([\s]*)/x',
												create_function('$matches', 'global $x_diff, $w_diff;
												$newx = sprintf("%.2F",(floatval($matches[1]) + $x_diff));
												$neww = sprintf("%.2F",(floatval($matches[3]) + $w_diff));
												return "".$newx." ".$matches[2]." ".$neww." ".$matches[4]." x*#!#*x".$matches[5].$matches[6];'), $pmid, 1);
											break;
										}
										case 'c': {
											// get current X position
											preg_match('/([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]([0-9\.\+\-]*)[\s]('.$strpiece[1][0].')[\s](c)([\s]*)/x', $pmid, $xmatches);
											$currentxpos = $xmatches[1];
											// justify block
											$pmid = preg_replace_callback('/('.$xmatches[1].')[\s]('.$xmatches[2].')[\s]('.$xmatches[3].')[\s]('.$xmatches[4].')[\s]('.$xmatches[5].')[\s]('.$strpiece[1][0].')[\s](c)([\s]*)/x',
												create_function('$matches', 'global $spacew;
												$newx1 = sprintf("%.3F",(floatval($matches[1]) + $spacew));
												$newx2 = sprintf("%.3F",(floatval($matches[3]) + $spacew));
												$newx3 = sprintf("%.3F",(floatval($matches[5]) + $spacew));
												return "".$newx1." ".$matches[2]." ".$newx2." ".$matches[4]." ".$newx3." ".$matches[6]." x*#!#*x".$matches[7].$matches[8];'), $pmid, 1);
											break;
										}
									}
									// shift the annotations and links
									if (isset($this->PageAnnots[$this->page])) {
										$cxpos = ($currentxpos / $this->k);
										$lmpos = ($this->lMargin + $this->cMargin + $this->feps);
										foreach ($this->PageAnnots[$this->page] as $pak => $pac) {
											if (($pac['y'] >= $minstartliney) AND (($pac['x'] * $this->k) >= ($currentxpos - $this->feps)) AND (($pac['x'] * $this->k) <= ($currentxpos + $this->feps))) {
												if ($cxpos > $lmpos) {
													$this->PageAnnots[$this->page][$pak]['x'] += (($spacew - $one_space_width) / $this->k);
													$this->PageAnnots[$this->page][$pak]['w'] += (($spacewidth * $pac['numspaces']) / $this->k);
												} else {
													$this->PageAnnots[$this->page][$pak]['w'] += ((($spacewidth * $pac['numspaces']) - $one_space_width) / $this->k);
												}
												break;
											}
										}
									}
								} // end of while
								// remove markers
								$pmid = str_replace('x*#!#*x', '', $pmid);
								if (($this->CurrentFont['type'] == 'TrueTypeUnicode') OR ($this->CurrentFont['type'] == 'cidfont0')) {
									// multibyte characters
									$spacew = $spacewidthu;
									$pmidtemp = $pmid;
									// escape special characters
									$pmidtemp = preg_replace('/[\\\][\(]/x', '\\#!#OP#!#', $pmidtemp);
									$pmidtemp = preg_replace('/[\\\][\)]/x', '\\#!#CP#!#', $pmidtemp);
									$pmid = preg_replace_callback("/\[\(([^\)]*)\)\]/x",
												create_function('$matches', 'global $spacew;
												$matches[1] = str_replace("#!#OP#!#", "(", $matches[1]);
												$matches[1] = str_replace("#!#CP#!#", ")", $matches[1]);
												return "[(".str_replace(chr(0).chr(32), ") ".sprintf("%.3F", $spacew)." (", $matches[1]).")]";'), $pmidtemp);
									$this->setPageBuffer($startlinepage, $pstart."\n".$pmid."\n".$pend);
									$endlinepos = strlen($pstart."\n".$pmid."\n");
								} else {
									// non-unicode (single-byte characters)
									$rs = sprintf('%.3F Tw', $spacewidth);
									$pmid = preg_replace("/\[\(/x", $rs.' [(', $pmid);
									$this->setPageBuffer($startlinepage, $pstart."\n".$pmid."\nBT 0 Tw ET\n".$pend);
									$endlinepos = strlen($pstart."\n".$pmid."\nBT 0 Tw ET\n");
								}
							}
						} // end of J
					} // end if $startlinex
					if (($t_x != 0) OR ($yshift < 0)) {
						// shift the line
						$trx = sprintf('1 0 0 1 %.3F %.3F cm', ($t_x * $this->k), ($yshift * $this->k));
						$this->setPageBuffer($startlinepage, $pstart."\nq\n".$trx."\n".$pmid."\nQ\n".$pend);
						$endlinepos = strlen($pstart."\nq\n".$trx."\n".$pmid."\nQ\n");
						// shift the annotations and links
						if (isset($this->PageAnnots[$this->page])) {
							foreach ($this->PageAnnots[$this->page] as $pak => $pac) {
								if ($pak >= $pask) {
									$this->PageAnnots[$this->page][$pak]['x'] += $t_x;
									$this->PageAnnots[$this->page][$pak]['y'] -= $yshift;
								}
							}
						}
						$this->y -= $yshift;
					}
				}
				$pbrk = $this->checkPageBreak($this->lasth);
				$this->newline = false;
				$startlinex = $this->x;
				$startliney = $this->y;
				if ($dom[$dom[$key]['parent']]['value'] == 'sup') {
					$startliney -= ((0.3 * $this->FontSizePt) / $this->k);
				} elseif ($dom[$dom[$key]['parent']]['value'] == 'sub') {
					$startliney -= (($this->FontSizePt / 0.7) / $this->k);
				} else {
					$minstartliney = $startliney;
					$maxbottomliney = ($this->y + (($fontsize * $this->cell_height_ratio) / $this->k));
				}
				$startlinepage = $this->page;
				if (isset($endlinepos) AND (!$pbrk)) {
					$startlinepos = $endlinepos;
				} else {
					if (!$this->InFooter) {
						if (isset($this->footerlen[$this->page])) {
							$this->footerpos[$this->page] = $this->pagelen[$this->page] - $this->footerlen[$this->page];
						} else {
							$this->footerpos[$this->page] = $this->pagelen[$this->page];
						}
						$startlinepos = $this->footerpos[$this->page];
					} else {
						$startlinepos = $this->pagelen[$this->page];
					}
				}
				unset($endlinepos);
				$plalign = $lalign;
				if (isset($this->PageAnnots[$this->page])) {
					$pask = count($this->PageAnnots[$this->page]);
				} else {
					$pask = 0;
				}
				$this->SetFont($fontname, $fontstyle, $fontsize);
				if ($wfill) {
					$this->SetFillColorArray($this->bgcolor);
				}
			} // end newline
			if (isset($opentagpos)) {
				unset($opentagpos);
			}
			if ($dom[$key]['tag']) {
				if ($dom[$key]['opening']) {
					// get text indentation (if any)
					if (isset($dom[$key]['text-indent']) AND $dom[$key]['block']) {
						$this->textindent = $dom[$key]['text-indent'];
						$this->newline = true;
					}
					// table
					if ($dom[$key]['value'] == 'table') {
						// available page width
						if ($this->rtl) {
							$wtmp = $this->x - $this->lMargin;
						} else {
							$wtmp = $this->w - $this->rMargin - $this->x;
						}
						if (isset($dom[$key]['attribute']['nested']) AND ($dom[$key]['attribute']['nested'] == 'true')) {
							// add margin for nested tables
							$wtmp -= $this->cMargin;
						}
						// table width
						if (isset($dom[$key]['width'])) {
							$table_width = $this->getHTMLUnitToUnits($dom[$key]['width'], $wtmp, 'px');
						} else {
							$table_width = $wtmp;
						}
						if (isset($dom[$key]['attribute']['cellspacing'])) {
							$cellspacing = $this->getHTMLUnitToUnits($dom[$key]['attribute']['cellspacing'], 1, 'px');
						} else {
							$cellspacing = 0;
						}
						if ($this->rtl) {
							$cellspacingx = -$cellspacing;
						} else {
							$cellspacingx = $cellspacing;
						}
						// total table width without cellspaces
						$table_columns_width = ($table_width - ($cellspacing * ($dom[$key]['cols'] - 1)));
						// minimum column width
						$table_min_column_width = ($table_columns_width / $dom[$key]['cols']);
						// array of custom column widths
						$table_colwidths = array_fill(0, $dom[$key]['cols'], $table_min_column_width);
					}
					// table row
					if ($dom[$key]['value'] == 'tr') {
						// reset column counter
						$colid = 0;
					}
					// table cell
					if (($dom[$key]['value'] == 'td') OR ($dom[$key]['value'] == 'th')) {
						$trid = $dom[$key]['parent'];
						$table_el = $dom[$trid]['parent'];
						if (!isset($dom[$table_el]['cols'])) {
							$dom[$table_el]['cols'] = $dom[$trid]['cols'];
						}
						$colspan = $dom[$key]['attribute']['colspan'];
						$oldmargin = $this->cMargin;
						if (isset($dom[($dom[$trid]['parent'])]['attribute']['cellpadding'])) {
							$currentcmargin = $this->getHTMLUnitToUnits($dom[($dom[$trid]['parent'])]['attribute']['cellpadding'], 1, 'px');
						} else {
							$currentcmargin = 0;
						}
						$this->cMargin = $currentcmargin;
						if (isset($dom[$key]['width'])) {
							// user specified width
							$cellw = $this->getHTMLUnitToUnits($dom[$key]['width'], $table_columns_width, 'px');
							$tmpcw = ($cellw / $colspan);
							for ($i = 0; $i < $colspan; ++$i) {
								$table_colwidths[($colid + $i)] = $tmpcw;
							}
						} else {
							// inherit column width
							$cellw = 0;
							for ($i = 0; $i < $colspan; ++$i) {
								$cellw += $table_colwidths[($colid + $i)];
							}
						}
						$cellw += (($colspan - 1) * $cellspacing);
						// increment column indicator
						$colid += $colspan;
						if (isset($dom[$key]['height'])) {
							// minimum cell height
							$cellh = $this->getHTMLUnitToUnits($dom[$key]['height'], 0, 'px');
						} else {
							$cellh = 0;
						}
						if (isset($dom[$key]['content'])) {
							$cell_content = $dom[$key]['content'];
						} else {
							$cell_content = '&nbsp;';
						}
						$tagtype = $dom[$key]['value'];
						$parentid = $key;
						while (($key < $maxel) AND (!(($dom[$key]['tag']) AND (!$dom[$key]['opening']) AND ($dom[$key]['value'] == $tagtype) AND ($dom[$key]['parent'] == $parentid)))) {
							// move $key index forward
							++$key;
						}
						if (!isset($dom[$trid]['startpage'])) {
							$dom[$trid]['startpage'] = $this->page;
						} else {
							$this->setPage($dom[$trid]['startpage']);
						}
						if (!isset($dom[$trid]['starty'])) {
							$dom[$trid]['starty'] = $this->y;
						} else {
							$this->y = $dom[$trid]['starty'];
						}
						if (!isset($dom[$trid]['startx'])) {
							$dom[$trid]['startx'] = $this->x;
						} else {
							$this->x += ($cellspacingx / 2);
						}
						if (isset($dom[$parentid]['attribute']['rowspan'])) {
							$rowspan = intval($dom[$parentid]['attribute']['rowspan']);
						} else {
							$rowspan = 1;
						}
						// skip row-spanned cells started on the previous rows
						if (isset($dom[$table_el]['rowspans'])) {
							$rsk = 0;
							$rskmax = count($dom[$table_el]['rowspans']);
							while ($rsk < $rskmax) {
								$trwsp = $dom[$table_el]['rowspans'][$rsk];
								$rsstartx = $trwsp['startx'];
								$rsendx = $trwsp['endx'];
								// account for margin changes
								if ($trwsp['startpage'] < $this->page) {
									if (($this->rtl) AND ($this->pagedim[$this->page]['orm'] != $this->pagedim[$trwsp['startpage']]['orm'])) {
										$dl = ($this->pagedim[$this->page]['orm'] - $this->pagedim[$trwsp['startpage']]['orm']);
										$rsstartx -= $dl;
										$rsendx -= $dl;
									} elseif ((!$this->rtl) AND ($this->pagedim[$this->page]['olm'] != $this->pagedim[$trwsp['startpage']]['olm'])) {
										$dl = ($this->pagedim[$this->page]['olm'] - $this->pagedim[$trwsp['startpage']]['olm']);
										$rsstartx += $dl;
										$rsendx += $dl;
									}
								}
								if  (($trwsp['rowspan'] > 0)
									AND ($rsstartx > ($this->x - $cellspacing - $currentcmargin - $this->feps))
									AND ($rsstartx < ($this->x + $cellspacing + $currentcmargin + $this->feps))
									AND (($trwsp['starty'] < ($this->y - $this->feps)) OR ($trwsp['startpage'] < $this->page))) {
									// set the starting X position of the current cell
									$this->x = $rsendx + $cellspacingx;
									if (($trwsp['rowspan'] == 1)
										AND (isset($dom[$trid]['endy']))
										AND (isset($dom[$trid]['endpage']))
										AND ($trwsp['endpage'] == $dom[$trid]['endpage'])) {
										// set ending Y position for row
										$dom[$table_el]['rowspans'][$rsk]['endy'] = max($dom[$trid]['endy'], $trwsp['endy']);
										$dom[$trid]['endy'] = $dom[$table_el]['rowspans'][$rsk]['endy'];
									}
									$rsk = 0;
								} else {
									++$rsk;
								}
							}
						}
						// add rowspan information to table element
						if ($rowspan > 1) {
							$trsid = array_push($dom[$table_el]['rowspans'], array('trid' => $trid, 'rowspan' => $rowspan, 'mrowspan' => $rowspan, 'colspan' => $colspan, 'startpage' => $this->page, 'startx' => $this->x, 'starty' => $this->y));
						}
						$cellid = array_push($dom[$trid]['cellpos'], array('startx' => $this->x));
						if ($rowspan > 1) {
							$dom[$trid]['cellpos'][($cellid - 1)]['rowspanid'] = ($trsid - 1);
						}
						// push background colors
						if (isset($dom[$parentid]['bgcolor']) AND ($dom[$parentid]['bgcolor'] !== false)) {
							$dom[$trid]['cellpos'][($cellid - 1)]['bgcolor'] = $dom[$parentid]['bgcolor'];
						}
						$prevLastH = $this->lasth;
						// ****** write the cell content ******
						$this->MultiCell($cellw, $cellh, $cell_content, false, $lalign, false, 2, '', '', true, 0, true);
						$this->lasth = $prevLastH;
						$this->cMargin = $oldmargin;
						$dom[$trid]['cellpos'][($cellid - 1)]['endx'] = $this->x;
						// update the end of row position
						if ($rowspan <= 1) {
							if (isset($dom[$trid]['endy'])) {
								if ($this->page == $dom[$trid]['endpage']) {
									$dom[$trid]['endy'] = max($this->y, $dom[$trid]['endy']);
								} elseif ($this->page > $dom[$trid]['endpage']) {
									$dom[$trid]['endy'] = $this->y;
								}
							} else {
								$dom[$trid]['endy'] = $this->y;
							}
							if (isset($dom[$trid]['endpage'])) {
								$dom[$trid]['endpage'] = max($this->page, $dom[$trid]['endpage']);
							} else {
								$dom[$trid]['endpage'] = $this->page;
							}
						} else {
							// account for row-spanned cells
							$dom[$table_el]['rowspans'][($trsid - 1)]['endx'] = $this->x;
							$dom[$table_el]['rowspans'][($trsid - 1)]['endy'] = $this->y;
							$dom[$table_el]['rowspans'][($trsid - 1)]['endpage'] = $this->page;
						}
						if (isset($dom[$table_el]['rowspans'])) {
							// update endy and endpage on rowspanned cells
							foreach ($dom[$table_el]['rowspans'] as $k => $trwsp) {
								if ($trwsp['rowspan'] > 0) {
									if (isset($dom[$trid]['endpage'])) {
										if ($trwsp['endpage'] == $dom[$trid]['endpage']) {
											$dom[$table_el]['rowspans'][$k]['endy'] = max($dom[$trid]['endy'], $trwsp['endy']);
										} elseif ($trwsp['endpage'] < $dom[$trid]['endpage']) {
											$dom[$table_el]['rowspans'][$k]['endy'] = $dom[$trid]['endy'];
											$dom[$table_el]['rowspans'][$k]['endpage'] = $dom[$trid]['endpage'];
										} else {
											$dom[$trid]['endy'] = $this->pagedim[$dom[$trid]['endpage']]['hk'] - $this->pagedim[$dom[$trid]['endpage']]['bm'];
										}
									}
								}
							}
						}
						$this->x += ($cellspacingx / 2);
					} else {
						// opening tag (or self-closing tag)
						if (!isset($opentagpos)) {
							if (!$this->InFooter) {
								if (isset($this->footerlen[$this->page])) {
									$this->footerpos[$this->page] = $this->pagelen[$this->page] - $this->footerlen[$this->page];
								} else {
									$this->footerpos[$this->page] = $this->pagelen[$this->page];
								}
								$opentagpos = $this->footerpos[$this->page];
							}
						}
						$this->openHTMLTagHandler($dom, $key, $cell);
					}
				} else {
					// closing tag
					$prev_numpages = $this->numpages;
					$this->closeHTMLTagHandler($dom, $key, $cell, $maxbottomliney);
					if ($prev_numpages > $this->numpages) {
						$startlinepage = $this->page;
					}
				}
			} elseif (strlen($dom[$key]['value']) > 0) {
				// print list-item
				if (!$this->empty_string($this->lispacer) AND ($this->lispacer != '^')) {
					$this->SetFont($pfontname, $pfontstyle, $pfontsize);
					$this->lasth = $this->FontSize * $this->cell_height_ratio;
					$minstartliney = $this->y;
					$maxbottomliney = ($startliney + ($this->FontSize * $this->cell_height_ratio));
					$this->putHtmlListBullet($this->listnum, $this->lispacer, $pfontsize);
					$this->SetFont($curfontname, $curfontstyle, $curfontsize);
					$this->lasth = $this->FontSize * $this->cell_height_ratio;
					if (is_numeric($pfontsize) AND ($pfontsize > 0) AND is_numeric($curfontsize) AND ($curfontsize > 0) AND ($pfontsize != $curfontsize)) {
						$pfontascent = $this->getFontAscent($pfontname, $pfontstyle, $pfontsize);
						$pfontdescent = $this->getFontDescent($pfontname, $pfontstyle, $pfontsize);
						$this->y += ((($pfontsize - $curfontsize) * $this->cell_height_ratio / $this->k) + $pfontascent - $curfontascent - $pfontdescent + $curfontdescent) / 2;
						$minstartliney = min($this->y, $minstartliney);
						$maxbottomliney = max(($this->y + (($pfontsize * $this->cell_height_ratio) / $this->k)), $maxbottomliney);
					}
				}
				// text
				$this->htmlvspace = 0;
				if ((!$this->premode) AND $this->isRTLTextDir()) {
					// reverse spaces order
					$len1 = strlen($dom[$key]['value']);
					$lsp = $len1 - strlen(ltrim($dom[$key]['value']));
					$rsp = $len1 - strlen(rtrim($dom[$key]['value']));
					$tmpstr = '';
					if ($rsp > 0) {
						$tmpstr .= substr($dom[$key]['value'], -$rsp);
					}
					$tmpstr .= trim($dom[$key]['value']);
					if ($lsp > 0) {
						$tmpstr .= substr($dom[$key]['value'], 0, $lsp);
					}
					$dom[$key]['value'] = $tmpstr;
				}
				if ($newline) {
					if (!$this->premode) {
						$prelen = strlen($dom[$key]['value']);
						if ($this->isRTLTextDir()) {
							$dom[$key]['value'] = rtrim($dom[$key]['value']).chr(0);
						} else {
							$dom[$key]['value'] = ltrim($dom[$key]['value']);
						}
						$postlen = strlen($dom[$key]['value']);
						if (($postlen == 0) AND ($prelen > 0)) {
							$dom[$key]['trimmed_space'] = true;
						}
					}
					$newline = false;
					$firstblock = true;
				} else {
					$firstblock = false;
				}
				$strrest = '';
				if ($this->rtl) {
					$this->x -= $this->textindent;
				} else {
					$this->x += $this->textindent;
				}
				if (!empty($this->HREF) AND (isset($this->HREF['url']))) {
					// HTML <a> Link
					$hrefcolor = '';
					if (isset($dom[($dom[$key]['parent'])]['fgcolor']) AND ($dom[($dom[$key]['parent'])]['fgcolor'] !== false)) {
						$hrefcolor = $dom[($dom[$key]['parent'])]['fgcolor'];
					}
					$hrefstyle = -1;
					if (isset($dom[($dom[$key]['parent'])]['fontstyle']) AND ($dom[($dom[$key]['parent'])]['fontstyle'] !== false)) {
						$hrefstyle = $dom[($dom[$key]['parent'])]['fontstyle'];
					}
					$strrest = $this->addHtmlLink($this->HREF['url'], $dom[$key]['value'], $wfill, true, $hrefcolor, $hrefstyle, true);
				} else {
					// ****** write only until the end of the line and get the rest ******
					$strrest = $this->Write($this->lasth, $dom[$key]['value'], '', $wfill, '', false, 0, true, $firstblock, 0);
				}
				$this->textindent = 0;
				if (strlen($strrest) > 0) {
					// store the remaining string on the previous $key position
					$this->newline = true;
					if ($cell) {
						if ($this->rtl) {
							$this->x -= $this->cMargin;
						} else {
							$this->x += $this->cMargin;
						}
					}
					if ($strrest == $dom[$key]['value']) {
						// used to avoid infinite loop
						++$loop;
					} else {
						$loop = 0;
					}
					if (!empty($this->HREF) AND (isset($this->HREF['url']))) {
						$dom[$key]['value'] = trim($strrest);
					} elseif ($this->premode) {
						$dom[$key]['value'] = $strrest;
					} elseif ($this->isRTLTextDir()) {
						$dom[$key]['value'] = rtrim($strrest);
					} else {
						$dom[$key]['value'] = ltrim($strrest);
					}
					if ($loop < 3) {
						--$key;
					}
				} else {
					$loop = 0;
				}
			}
			++$key;
			if (isset($dom[$key]['tag']) AND $dom[$key]['tag'] AND (!isset($dom[$key]['opening']) OR !$dom[$key]['opening']) AND isset($dom[($dom[$key]['parent'])]['attribute']['nobr']) AND ($dom[($dom[$key]['parent'])]['attribute']['nobr'] == 'true')) {
				if ( (!$undo) AND (($this->start_transaction_page == ($this->numpages - 1)) OR ($this->y < $this->start_transaction_y)) AND ($this->start_transaction_y > 210)) {
					// restore previous object
					$this->rollbackTransaction(true);
					// restore previous values
					foreach ($this_method_vars as $vkey => $vval) {
						$$vkey = $vval;
					}
					// add a page (or trig AcceptPageBreak() for multicolumn mode)
					$pre_y = $this->y;
					if ((!$this->checkPageBreak($this->PageBreakTrigger + 1)) AND ($this->y < $pre_y)) {
						$startliney = $this->y;
					}
					$undo = true; // avoid infinite loop
				} else {
					$undo = false;
				}
			}
		} // end for each $key
		// align the last line
		if (isset($startlinex)) {
			$yshift = $minstartliney - $startliney;
			if (($yshift > 0) OR ($this->page > $startlinepage)) {
				$yshift = 0;
			}
			$t_x = 0;
			// the last line must be shifted to be aligned as requested
			$linew = abs($this->endlinex - $startlinex);
			$pstart = substr($this->getPageBuffer($startlinepage), 0, $startlinepos);
			if (isset($opentagpos) AND isset($this->footerlen[$startlinepage]) AND (!$this->InFooter)) {
				$this->footerpos[$startlinepage] = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
				$midpos = min($opentagpos, $this->footerpos[$startlinepage]);
			} elseif (isset($opentagpos)) {
				$midpos = $opentagpos;
			} elseif (isset($this->footerlen[$startlinepage]) AND (!$this->InFooter)) {
				$this->footerpos[$startlinepage] = $this->pagelen[$startlinepage] - $this->footerlen[$startlinepage];
				$midpos = $this->footerpos[$startlinepage];
			} else {
				$midpos = 0;
			}
			if ($midpos > 0) {
				$pmid = substr($this->getPageBuffer($startlinepage), $startlinepos, ($midpos - $startlinepos));
				$pend = substr($this->getPageBuffer($startlinepage), $midpos);
			} else {
				$pmid = substr($this->getPageBuffer($startlinepage), $startlinepos);
				$pend = '';
			}
			if ((isset($plalign) AND ((($plalign == 'C') OR (($plalign == 'R') AND (!$this->rtl)) OR (($plalign == 'L') AND ($this->rtl))))) OR ($yshift < 0)) {
				// calculate shifting amount
				$tw = $w;
				if ($this->lMargin != $prevlMargin) {
					$tw += ($prevlMargin - $this->lMargin);
				}
				if ($this->rMargin != $prevrMargin) {
					$tw += ($prevrMargin - $this->rMargin);
				}
				$one_space_width = $this->GetStringWidth(chr(32));
				$mdiff = abs($tw - $linew);
				if ($plalign == 'C') {
					if ($this->rtl) {
						$t_x = -($mdiff / 2);
					} else {
						$t_x = ($mdiff / 2);
					}
				} elseif (($plalign == 'R') AND (!$this->rtl)) {
					// right alignment on LTR document
					if (intval($this->revstrpos($pmid, ')]')) == (intval($this->revstrpos($pmid, ' )]')) + 1)) {
						// remove last space (if any)
						$linew -= $one_space_width;
						$mdiff = abs($tw - $linew);
					}
					$t_x = $mdiff;
				} elseif (($plalign == 'L') AND ($this->rtl)) {
					// left alignment on RTL document
					if (($this->revstrpos($pmid, '[(') > 0) AND ((intval($this->revstrpos($pmid, '[( ')) == intval($this->revstrpos($pmid, '[('))) OR (intval($this->revstrpos($pmid, '[('.chr(0).chr(32))) == intval($this->revstrpos($pmid, '[('))))) {
						// remove first space (if any)
						$linew -= $one_space_width;
					}
					if ((strpos($pmid, '[(') > 0) AND (intval(strpos($pmid, '[(')) == (intval($this->revstrpos($pmid, '[('))))) {
						// remove last space (if any)
						$linew -= $one_space_width;
						if (($this->CurrentFont['type'] == 'TrueTypeUnicode') OR ($this->CurrentFont['type'] == 'cidfont0')) {
							$linew -= $one_space_width;
						}
					}
					$mdiff = abs($tw - $linew);
					$t_x = -$mdiff;
				}
			} // end if startlinex
			if (($t_x != 0) OR ($yshift < 0)) {
				// shift the line
				$trx = sprintf('1 0 0 1 %.3F %.3F cm', ($t_x * $this->k), ($yshift * $this->k));
				$this->setPageBuffer($startlinepage, $pstart."\nq\n".$trx."\n".$pmid."\nQ\n".$pend);
				$endlinepos = strlen($pstart."\nq\n".$trx."\n".$pmid."\nQ\n");
				// shift the annotations and links
				if (isset($this->PageAnnots[$this->page])) {
					foreach ($this->PageAnnots[$this->page] as $pak => $pac) {
						if ($pak >= $pask) {
							$this->PageAnnots[$this->page][$pak]['x'] += $t_x;
							$this->PageAnnots[$this->page][$pak]['y'] -= $yshift;
						}
					}
				}
				$this->y -= $yshift;
			}
		}
		// restore previous values
		$this->setGraphicVars($gvars);
		if ($this->page > $prevPage) {
			$this->lMargin = $this->pagedim[$this->page]['olm'];
			$this->rMargin = $this->pagedim[$this->page]['orm'];
		}
		// restore previous list state
		$this->cell_height_ratio = $prev_cell_height_ratio;
		$this->listnum = $prev_listnum;
		$this->listordered = $prev_listordered;
		$this->listcount = $prev_listcount;
		$this->lispacer = $prev_lispacer;
		if ($ln AND (!($cell AND ($dom[$key-1]['value'] == 'table')))) {
			$this->Ln($this->lasth);
			if ($this->y < $maxbottomliney) {
				$this->y = $maxbottomliney;
			}
		}
		unset($dom);
	}	
}
?>
