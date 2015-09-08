
module.exports = function(grunt){

	require("load-grunt-tasks")(grunt);

	var banner = grunt.template.process(
		grunt.file.read("src/banner.js"),
		{data: grunt.file.readJSON("package.json")}
	);

	grunt.initConfig({
		uglify: {
			dist: {
				options: {banner: banner},
				files: { "dist/bricks.min.js": ["src/bricks.js"] }
			}
		},
		concat: {
			dist: {
				options: {banner: banner},
				files: { "dist/bricks.js": ["src/bricks.js"] }
			}
		}
	});

	grunt.registerTask("default", []);
	grunt.registerTask("build", ["uglify:dist", "concat:dist"]);

};