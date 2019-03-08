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

	// Blog posts
/*	eleventyConfig.addCollection("blogposts", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/blog\//) !== null;
		});
	});*/

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
