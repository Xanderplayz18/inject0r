javascript: fetch("https://raw.githubusercontent.com/username-pass/bookmarklets/dev/all-bookmarklets.js").then(function(response){response.text().then(function(text) {eval(text);});});