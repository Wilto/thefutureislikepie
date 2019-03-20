module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-contrib-imagemin" );

	const mozjpeg = require( "imagemin-mozjpeg" );
	const webp = require( "imagemin-webp" );

	grunt.config( "imagemin", {
		default: {
			options: {
				optimizationLevel: 3,
				use: [mozjpeg()]
			},
			files: [{
				expand: true,
				progressive: true,
				cwd: '_site/blog/img',
				src: ['headers/*.{png,jpg,gif}'],
				dest: '_site/blog/img'
			}]
		},
		webp: {
			options: {
				use: [webp({
					quality: 70
				})]
			},
			files: [{
				expand: true,
				cwd: '_site/blog/img',
				src: ["**/*.jpg"],
				dest: "_site/blog/img",
				ext: ".webp"
			}]
		},
		originals: {
			options: {
				optimizationLevel: 3,
				use: [mozjpeg()]
			},
			files: [{
				expand: true,
				progressive: true,
				cwd: '_src/blog/img/',
				src: ['*.{png,jpg,gif}'],
				dest: './_site/blog/img/'
			}]
		},
	});
};