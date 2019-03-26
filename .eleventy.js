const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	const CleanCSS = require('clean-css');

	eleventyConfig.addFilter("formatDate", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
	});

	eleventyConfig.addFilter("monthOnly", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("LLLL");
	});

	eleventyConfig.addFilter("yearOnly", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyy");
	});


	// Homepage Sections
	eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

	// Bio(s)
	eleventyConfig.addCollection("bios", function(collection) {
		return collection.getFilteredByGlob("**/bio.md");
 	});


	eleventyConfig.addShortcode("respimg", function( img ) {
		let id, rando,
			retimg = `<img 
				class="inline-img"
				src="/img/1000/${ img.src }" 
				alt="${ img.alt }"
				srcset="/blog/img/400/${ img.src } 400w,
						/blog/img/600/${ img.src } 600w,
						/blog/img/800/${ img.src } 800w,
						/blog/img/1000/${ img.src } 1000w"
				sizes="${ img.sizes || "(min-width: 777px) 40em, 95vw" }">
			`;

		if( img.caption ) {
			rando = Math.floor( Math.random() * 999 ) + 100;
			id = img.src.slice( 0, img.src.indexOf( '.' ) ) + "-" + rando;

			retimg = `<figure aria-labelledby="${ id }">${ retimg }<figcaption id="${ id }" class="inline-capt">${ img.caption }</figcaption></figure>`;
		}

		return retimg;
	});

	eleventyConfig.addPairedShortcode("pullquote", function( quote, data ) {
		let credit = '<cite>';

		if( data.authorhref ) {
			credit += '<a href="' + data.authorhref + '" class="author">' + data.author + '</a>';
		} else {
			credit += '<span class="author">' + data.author + '</span>';
		}

		if( data.cite ) {
			credit += '<span class="source">';
			if( data.citehref ) {
				credit += '<a href="' + data.citehref + '">' + data.cite + '</a>';
			} else {
				credit += data.cite;
			}
			credit += '</span>';
		}
		if( data.date ) {
			credit += '<span class="quotedate">' + data.date + '</span>';
		}

		credit += '</cite>';
		return `<blockquote>
${ quote }
${ credit }
</blockquote>`;
	});

	eleventyConfig.addCollection("blogposts",
		collection => collection
			.getAllSorted()
			.filter(item => item.url && item.inputPath.startsWith('./_src/blog/') )
		);

	eleventyConfig.addPassthroughCopy("_src/_assets");
	eleventyConfig.addPassthroughCopy("_src/sw.js");

	return {
		templateFormats: [
			"md",
			"njk",
			"html"
		],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: "/",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "_src",
			includes: "_templates",
			data: "_data",
			output: "_site"
		}
	};
};
