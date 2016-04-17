module.exports = function(grunt) {
	// Load Grunt tasks declared in the package.json file
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	// dont really know what this does but it is in the other grunt file.
	
	grunt.initConfig({
		ts: {
			code: {
				src: ["Skills/Scripts/**/*.ts"],
				options: {
					target: "es5", //or es3 
					sourceMap: true
				}
			},
			test: {
				src: ["Skills/Tests/**/*.ts"],
				options: {
					target: "es5", //or es3 
					sourceMap: true
				}
			}
		},
		
		jasmine: {
			pivotal: {
				src: [
					"Skills/Scripts/app/CV/*.js"
				],
				options: {
					specs: "Skills/Tests/app/**/*.js",
					keepRunner: true
				}
			}
		},
		
		concat: {
			skillsJs: {
				src: [
				"Skills/Scripts/app/CV/*.js"
				],
				dest: "SkillsConcated.js"
			}
		},

		less: {
			chesterBurbidge: {
				files: {
					"Skills/Skills.css":
					[
						"Skills/Skills.less"
					]
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("default", ["less", "ts", "concat", "jasmine"]);
};
