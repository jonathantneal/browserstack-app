module.exports = function(grunt) {
	grunt.initConfig({
		nodewebkit: {
			options: {
				buildType: function () {
					return this.appVersion;
				},
				macIcns: './assets/icon.icns',
				winIco: './assets/icon.ico',
				platforms: ['linux64', 'osx64', 'win64'],
				version: '0.12.2',
			},
			src: './source/**/*',
		},
	});

	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.registerTask('default', ['nodewebkit']);
};
