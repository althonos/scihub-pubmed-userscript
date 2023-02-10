// ==UserScript==
// @name        Sci-Hub Full Text Link for PubMed
// @namespace   http://github.com/althonos/scihub-pubmed-userscript
// @match       *://pubmed.ncbi.nlm.nih.gov/*/
// @version     0.2.1
// @author      althonos
// @license     MIT
// @homepageURL http://github.com/althonos/scihub-pubmed-userscript
// @description A simple userscript to add a Full Text Link button redirecting to Sci-Hub on PubMed article pages.
// @downloadURL https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/src/scihub-pubmed.user.js
//
// @grant       none
// @run-at       document-end
//
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

var base = `https://sci-hub.st/`;

var pmid = $("meta[name=uid]").attr("content");
var doi  = $("meta[name=citation_doi]").attr("content");

var link_pmid = `${base}https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
var link_doi  = `${base}${doi}/`;

if ($("div.full-text-links-list").length == 0) {
    $("aside.page-sidebar")
      .find("div.inner-wrap")
      .first()
      .prepend(`
        <div class="full-text-links">
          <div class="full-view">
            <h3 class="title">Full text links</h3>
            <div class="full-text-links-list"></div>
          </div>
        </div>
      `);
}

if (pmid !== null) { 
  $("div.full-text-links-list")
    .prepend(`
      <a class="link-item" target="_blank" data-ga-category="full_text" href="${link_pmid}">
        <img class="full-text provider logo" src="https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/static/badge-pmid.png">
        <span class="text>
          Sci-Hub Full Text (PMID)
        </span>
      </a>
    `);
}

if (doi !== null) {
    $("div.full-text-links-list")
    .prepend(`
      <a class="link-item" target="_blank" data-ga-category="full_text" href="${link_doi}">
        <img class="full-text provider logo" src="https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/static/badge-doi.png">
        <span class="text>
          Sci-Hub Full Text (DOI)
        </span>
      </a>
    `);
}
