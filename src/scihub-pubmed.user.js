// ==UserScript==
// @name        Sci-Hub Full Text Link for PubMed
// @namespace   http://github.com/althonos/scihub-pubmed-userscript
// @match       *://pubmed.ncbi.nlm.nih.gov/*/
// @version     0.1.0
// @author      althonos
// @description A simple userscript to add a Full Text Link button redirecting to Sci-Hub on PubMed article pages.
//
// @grant       none
// @run-at       document-end
//
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

var base = `https://sci-hub.st/`;
var pmid = $("meta[name=uid]").attr("content");
var link = `${base}https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;

$("div.full-text-links-list")
  .prepend(`
    <a class="link-item" target="_blank" data-ga-category="full_text" href="${link}">
      <img class="full-text provider logo" src="https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/static/badge.png?token=ACCCNJ4F2WI4M4BQSN5S64C7LDRA4">
      <span class="text>
        Sci-Hub Full Text
      </span>
    </a>
  `);
