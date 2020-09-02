# Full Text Link for Sci-Hub on Pubmed

*A simple userscript to add a Full Text Link button redirecting to Sci-Hub on PubMed article pages.*


## Overview

This repository provides a simple [ViolentMonkey](https://violentmonkey.github.io/) / [GreaseMonkey](https://en.wikipedia.org/wiki/Greasemonkey) / [TamperMonkey](https://www.tampermonkey.net/)
userscript to add a button to any NCBI PubMed article that redirects to that
article page in Sci-Hub.

![Example](https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/static/example.png)

You also get to see the badge in the Full Text Link dialog if the page is collapsed:

![Example (small)](https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/static/example-dialog.png)

The script is configured to use [sci-hub.st](https://sci-hub.st) since it is
the one that works for me, but you should be able to edit it to use another
mirror if needed.

## Installing

Open the [userscript page](https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/src/scihub-pubmed.user.js) with your webbrowser
and your userscript manager should prompt you about installing. If not, then
manually create a new script from the following URL:

```
https://raw.githubusercontent.com/althonos/scihub-pubmed-userscript/master/src/scihub-pubmed.user.js
```

## About

This script is provided under the [MIT License](https://choosealicense.com/licenses/mit/).
The Sci-Hub badge was built using assets from the Sci-Hub website, which are
believed to be in the public domain. *This work has no connexion to the Sci-Hub
developers*.
