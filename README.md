# Getting Started

If you don’t have them already, you’ll need the following:
`$ npm install -g grunt-cli`
`$ npm install -g @11ty/eleventy`

You’ll need to install GraphicsMagick for the automated responsive images. [Homebrew](https://brew.sh/) is your best bet:
`$ brew install GraphicsMagick`

Then a spry `npm install` and you should be in business.

`$ npm run dev` will run both `grunt watch` and `eleventy --serve`. By default, the local dev server will pop up at http://localhost:8080, but your milage may vary—the URL will be in the output of running `dev`.

![Screenshot of the `npm run dev` terminal output, with the server running at localhost:8080](https://matmarquis.com/_assets/img/filp-dev.jpg)