module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-responsive-images" );

	grunt.config( "responsive_images", {
		banners: {
			options: {
				newFilesOnly: false,
				quality: 80,
				sizes: [
				{
					name: '1',
					width: 600
				},{
					name: '2',
					width: 800,
				},{
					name: '3',
					width: 1000
				},{
					name: '4',
					width: 1400
				},{
					name: '5',
					width: 2000
				},{
					name: '6',
					width: 2400
				}]
			},
			files: [{
				expand: true,
				cwd: '_src/blog/img',
				src: ['headers/**.{jpg,gif,png}'],
				dest: '_site/blog/img'
			}]
		},
		inline: {
			options: {
				newFilesOnly: false,
				quality: 80,
				sizes: [
				{
					name: '1',
					width: 400
				},{
					name: '2',
					width: 600,
				},{
					name: '3',
					width: 800
				},{
					name: '4',
					width: 1000
				}]
			},
			files: [{
				expand: true,
				upscale: false,
				createNoScaledImage: true,
				cwd: '_src/blog/img/',
				src: ['**.{jpg,gif,png}'],
				custom_dest: '_site/blog/img/{%= width %}'
			}]
		}
	});
};