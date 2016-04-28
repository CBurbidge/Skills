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
					"Skills/Scripts/CV/*.js",
					"Skills/Scripts/App/*.js",
				],
				options: {
					specs: "Skills/Tests/**/*.js",
					keepRunner: true
				}
			}
		},
		
		concat: {
			skillsJs: {
				src: [
				"Skills/Scripts/CV/CvClasses.js",

				"Skills/Scripts/CV/Collections/Metadatas.js",
				"Skills/Scripts/CV/Collections/Settings.js",
				"Skills/Scripts/CV/Collections/Skills.js",
				"Skills/Scripts/CV/Collections/SkillUsages.js",

				"Skills/Scripts/CV/CvData.js",

				"Skills/Scripts/App/IdAndActive.js",
				"Skills/Scripts/App/LengthScaler.js",
				"Skills/Scripts/App/Colours.js",
				"Skills/Scripts/App/Skills.js"
				],
				dest: "Skills.js"
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
	grunt.registerTask("tests", ["ts", "jasmine"]);
};
