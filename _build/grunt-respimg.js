module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-responsive-images" );

	grunt.config( "responsive_images", {
		standard: {
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
				cwd: '_src/blog',
				src: ['img/**.{jpg,gif,png}'],
				dest: '_site/blog'
			}]
		}
	});
};