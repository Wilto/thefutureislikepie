# Okay, so.

Clone this sucker.

`$ npm install -g grunt-cli`
`$ npm install -g @11ty/eleventy`

You’ll need to install GraphicsMagick for the automated responsive images:

`$ brew install GraphicsMagick`

Then run an  `npm install` and you should be in business.

For now: 
1. `grunt`/`grunt watch` for your CSS concat/minification and `sw.js` uglification.
2. `eleventy --serve` to run the site.

I’ll get these combined into a single script in a bit.
