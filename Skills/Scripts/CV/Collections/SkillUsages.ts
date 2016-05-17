module CV
{
	export class SkillUsages
	{
		static counter = 0;

		static angularJsIonicApp = new SkillUsage(
			SkillUsages.counter++,
			"Angular js used in ionic app for cordova app.",
			Skills.angularJs.id,
			Settings.hobby.id);

		static angularJsAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.angularJs.id,
			Settings.abideFinancial.id);

		static akkaDotNetAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.akkaDotNet.id,
			Settings.abideFinancial.id);

		static aspDotNetMvcFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Built websites with MVC pattern",
			Skills.aspDotNetMvc.id,
			Settings.fundslibrary.id);

		static aspDotNetMvcAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"Built websites with MVC pattern",
			Skills.aspDotNetMvc.id,
			Settings.abideFinancial.id);

		static aspDotNetWebFormsFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Built websites with ASP.NET Webforms",
			Skills.aspDotNetWebforms.id,
			Settings.fundslibrary.id);

		static bashscriptingHome = new SkillUsage(
			SkillUsages.counter++,
			"Using bash terminal",
			Skills.bashScripting.id,
			Settings.hobby.id);

		static bashscriptingGitBash = new SkillUsage(
			SkillUsages.counter++,
			"Using git bash",
			Skills.bashScripting.id,
			Settings.fundslibrary.id);

		static bootstrapFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Made responsive websites",
			Skills.bootstrap.id,
			Settings.fundslibrary.id);

		static bootstrapChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"Personal website CV page",
			Skills.bootstrap.id,
			Settings.chesterBurbidgeDotCom.id);

		static bootstrapAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.bootstrap.id,
			Settings.abideFinancial.id);

		static continuousIntegrationFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used Cruise control dot net to make builds, run tests.",
			Skills.continuousIntegration.id,
			Settings.fundslibrary.id);

		static continuousIntegrationAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.continuousIntegration.id,
			Settings.abideFinancial.id);

		static cordovaHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.cordova.id,
			Settings.hobby.id);

		static cPlusPlusToplevel = new SkillUsage(
			SkillUsages.counter++,
			"Made modifications to existing C++ code.",
			Skills.cPlusPlus.id,
			Settings.toplevelComputing.id);

		static cSharpToplevel = new SkillUsage(
			SkillUsages.counter++,
			"Did some cSharp at toplevel",
			Skills.cSharp.id,
			Settings.toplevelComputing.id);

		static cSharpFundsLibrary = new SkillUsage(
			SkillUsages.counter++,
			"Did some cSharp at fundslibrary",
			Skills.cSharp.id,
			Settings.fundslibrary.id);

		static cSharpAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.cSharp.id,
			Settings.abideFinancial.id);

		static cssToplevel = new SkillUsage(
			SkillUsages.counter++,
			"Css",
			Skills.css.id,
			Settings.toplevelComputing.id);

		static cssFundsLibrary = new SkillUsage(
			SkillUsages.counter++,
			"Css",
			Skills.css.id,
			Settings.fundslibrary.id);

		static cssChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.css.id,
			Settings.chesterBurbidgeDotCom.id);

		static cssCodeclub = new SkillUsage(
			SkillUsages.counter++,
			"Taught CSS at a codeclub",
			Skills.css.id,
			Settings.codeclub.id);

		static cssAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.css.id,
			Settings.abideFinancial.id);

		static d3Fundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used D3 for charts and graphs.",
			Skills.d3.id,
			Settings.fundslibrary.id);

		static d3ChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"Used D3 for this skills chart",
			Skills.d3.id,
			Settings.chesterBurbidgeDotCom.id);

		static dotNetFrameworkFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used .Net framework 4",
			Skills.dotNetFramework.id,
			Settings.fundslibrary.id);

		static dotNetFrameworkToplevel = new SkillUsage(
			SkillUsages.counter++,
			"Used .Net framework 2 and 4",
			Skills.dotNetFramework.id,
			Settings.toplevelComputing.id);

		static dotNetFrameworkAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.dotNetFramework.id,
			Settings.abideFinancial.id);

		static es6PromisesFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used Promise paradigm for asynchronous programming",
			Skills.esSixPromises.id,
			Settings.fundslibrary.id);

		static es6PromisesIonicApp = new SkillUsage(
			SkillUsages.counter++,
			"Used Promise paradigm for asynchronous programming",
			Skills.esSixPromises.id,
			Settings.hobby.id);

		static gitFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used git through git bash.",
			Skills.git.id,
			Settings.fundslibrary.id);

		static gitHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used git at home, have many remote repositories.",
			Skills.git.id,
			Settings.hobby.id);

		static gitAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.git.id,
			Settings.abideFinancial.id);

		static gruntFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used grunt to compile less and typescript.",
			Skills.grunt.id,
			Settings.fundslibrary.id);

		static gruntChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"grunt compiles less, typescript, runs jasmine tests.",
			Skills.grunt.id,
			Settings.chesterBurbidgeDotCom.id);

		static htmlToplevel = new SkillUsage(
			SkillUsages.counter++,
			"HTML",
			Skills.html.id,
			Settings.toplevelComputing.id);

		static htmlFundsLibrary = new SkillUsage(
			SkillUsages.counter++,
			"HTML",
			Skills.html.id,
			Settings.fundslibrary.id);

		static htmlChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"HTML",
			Skills.html.id,
			Settings.chesterBurbidgeDotCom.id);

		static htmlCodeclub = new SkillUsage(
			SkillUsages.counter++,
			"Taught HTML to kids at a codeclub",
			Skills.html.id,
			Settings.codeclub.id);

		static htmlAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.html.id,
			Settings.abideFinancial.id);

		static ionicFrameworkHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used ionic framework to try and create cross platform app",
			Skills.ionicFramework.id,
			Settings.hobby.id);

		static jasmineFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used jasmine to run tests",
			Skills.jasmine.id,
			Settings.fundslibrary.id);

		static jasmineHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used jasmine to run tests",
			Skills.jasmine.id,
			Settings.hobby.id);

		static jasmineChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"Used jasmine to run tests",
			Skills.jasmine.id,
			Settings.chesterBurbidgeDotCom.id);

		static javascriptFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Wrote javascript client side code",
			Skills.javascript.id,
			Settings.fundslibrary.id);

		static javascriptHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.javascript.id,
			Settings.hobby.id);

		static jiraFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used JIRA to pick up tasks",
			Skills.jira.id,
			Settings.fundslibrary.id);

		static jiraAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.jira.id,
			Settings.abideFinancial.id);

		static jqueryFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.jquery.id,
			Settings.fundslibrary.id);

		static jqueryHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.jquery.id,
			Settings.hobby.id);

		static jqueryCodeclub = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.jquery.id,
			Settings.codeclub.id);

		static karmaHobby = new SkillUsage(
			SkillUsages.counter++,
			"Tried out karma to run typescript tests",
			Skills.karma.id,
			Settings.hobby.id);

		static knockoutJsFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used the MVVM javascript library to create Single Page Applications",
			Skills.knockoutJs.id,
			Settings.fundslibrary.id);

		static latexHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used LaTeX to create documents",
			Skills.latex.id,
			Settings.hobby.id);
		
		static lessFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used less to style website",
			Skills.less.id,
			Settings.fundslibrary.id);

		static lessHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.less.id,
			Settings.hobby.id);

		static lessChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.less.id,
			Settings.chesterBurbidgeDotCom.id);

		static linqFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.linq.id,
			Settings.fundslibrary.id);

		static linqAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.linq.id,
			Settings.abideFinancial.id);

		static linqToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.linq.id,
			Settings.toplevelComputing.id);

		static moqFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used the mocking library to write C# tests",
			Skills.moq.id,
			Settings.fundslibrary.id);

		static moqAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.moq.id,
			Settings.abideFinancial.id);

		static nunitFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used to run C# tests",
			Skills.nunit.id,
			Settings.fundslibrary.id);

		static nunitAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.nunit.id,
			Settings.abideFinancial.id);

		static powershellFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Automating tasks",
			Skills.powershell.id,
			Settings.fundslibrary.id);

		static octopusDeployAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.octopusDeploy.id,
			Settings.abideFinancial.id);

		static powershellAbide = new SkillUsage(
			SkillUsages.counter++,
			"Automating tasks",
			Skills.powershell.id,
			Settings.abideFinancial.id);

		static pythonHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.python.id,
			Settings.hobby.id);

		static pythonAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.python.id,
			Settings.abideFinancial.id);

		static pythonCodeclub = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.python.id,
			Settings.codeclub.id);

		static resharperFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Used resharper",
			Skills.resharper.id,
			Settings.fundslibrary.id);

		static resharperAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.resharper.id,
			Settings.abideFinancial.id);

		static resharperHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used resharper",
			Skills.resharper.id,
			Settings.hobby.id);

		static restWebservicesFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"Setup and maintained RESTFul webvices.",
			Skills.restfulWebservices.id,
			Settings.fundslibrary.id);

		static restWebservicesAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.restfulWebservices.id,
			Settings.abideFinancial.id);

		static rlanguageHobby = new SkillUsage(
			SkillUsages.counter++,
			"Used R for statistical analysis",
			Skills.rlanguage.id,
			Settings.hobby.id);

		static sourcesafeToplevel = new SkillUsage(
			SkillUsages.counter++,
			"Used sourcesafe for source control",
			Skills.sourceSafe.id,
			Settings.toplevelComputing.id);

		static ssmsToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.sqlServerManagementStudio.id,
			Settings.toplevelComputing.id);

		static ssmsFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.sqlServerManagementStudio.id,
			Settings.fundslibrary.id);

		static ssmsAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.sqlServerManagementStudio.id,
			Settings.abideFinancial.id);

		static tfsToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.tfs.id,
			Settings.toplevelComputing.id);

		static teamcityAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.teamcity.id,
			Settings.abideFinancial.id);

		static tSqlToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.tSql.id,
			Settings.toplevelComputing.id);

		static tSqlFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.tSql.id,
			Settings.fundslibrary.id);

		static tSqlAbideFinancial = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.tSql.id,
			Settings.abideFinancial.id);

		static typescriptFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.typescript.id,
			Settings.fundslibrary.id);

		static typescriptHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.typescript.id,
			Settings.hobby.id);

		static typescriptChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.typescript.id,
			Settings.chesterBurbidgeDotCom.id);

		static vsToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.visualStudio.id,
			Settings.toplevelComputing.id);

		static vsAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.visualStudio.id,
			Settings.abideFinancial.id);

		static vsFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.visualStudio.id,
			Settings.fundslibrary.id);

		static vsHobby = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.visualStudio.id,
			Settings.hobby.id);

		static vsChesterBurbidgeDotCom = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.visualStudio.id,
			Settings.chesterBurbidgeDotCom.id);

		static vbDotNetToplevel = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.vbDotNet.id,
			Settings.toplevelComputing.id);

		static xsltFundslibrary = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.xslt.id,
			Settings.fundslibrary.id);

		static xmlAbide = new SkillUsage(
			SkillUsages.counter++,
			"",
			Skills.xml.id,
			Settings.abideFinancial.id);


		static all = [
			SkillUsages.angularJsIonicApp,
			SkillUsages.angularJsAbideFinancial,
			SkillUsages.akkaDotNetAbideFinancial,
			SkillUsages.aspDotNetMvcFundslibrary,
			SkillUsages.aspDotNetMvcAbideFinancial,
			SkillUsages.aspDotNetWebFormsFundslibrary,
			SkillUsages.bashscriptingGitBash,
			SkillUsages.bashscriptingHome,
			SkillUsages.bootstrapChesterBurbidgeDotCom,
			SkillUsages.bootstrapFundslibrary,
			SkillUsages.bootstrapAbideFinancial,
			SkillUsages.cordovaHobby,
			SkillUsages.cPlusPlusToplevel,
			SkillUsages.cSharpFundsLibrary,
			SkillUsages.cSharpToplevel,
			SkillUsages.cSharpAbide,
			SkillUsages.continuousIntegrationFundslibrary,
			SkillUsages.continuousIntegrationAbideFinancial,
			SkillUsages.cssChesterBurbidgeDotCom,
			SkillUsages.cssCodeclub,
			SkillUsages.cssFundsLibrary,
			SkillUsages.cssToplevel,
			SkillUsages.cssAbide,
			SkillUsages.d3ChesterBurbidgeDotCom,
			SkillUsages.d3Fundslibrary,
			SkillUsages.dotNetFrameworkFundslibrary,
			SkillUsages.dotNetFrameworkToplevel,
			SkillUsages.dotNetFrameworkAbide,
			SkillUsages.es6PromisesFundslibrary,
			SkillUsages.es6PromisesIonicApp,
			SkillUsages.gitFundslibrary,
			SkillUsages.gitHobby,
			SkillUsages.gitAbide,
			SkillUsages.gruntChesterBurbidgeDotCom,
			SkillUsages.gruntFundslibrary,
			SkillUsages.htmlChesterBurbidgeDotCom,
			SkillUsages.htmlCodeclub,
			SkillUsages.htmlFundsLibrary,
			SkillUsages.htmlToplevel,
			SkillUsages.htmlAbide,
			SkillUsages.ionicFrameworkHobby,
			SkillUsages.jasmineChesterBurbidgeDotCom,
			SkillUsages.jasmineFundslibrary,
			SkillUsages.jasmineHobby,
			SkillUsages.javascriptFundslibrary,
			SkillUsages.javascriptHobby,
			SkillUsages.jiraFundslibrary,
			SkillUsages.jiraAbideFinancial,
			SkillUsages.jqueryCodeclub,
			SkillUsages.jqueryFundslibrary,
			SkillUsages.jqueryHobby,
			SkillUsages.karmaHobby,
			SkillUsages.knockoutJsFundslibrary,
			SkillUsages.latexHobby,
			SkillUsages.lessChesterBurbidgeDotCom,
			SkillUsages.lessFundslibrary,
			SkillUsages.lessHobby,
			SkillUsages.linqFundslibrary,
			SkillUsages.linqToplevel,
			SkillUsages.linqAbide,
			SkillUsages.moqFundslibrary,
			SkillUsages.moqAbide,
			SkillUsages.nunitFundslibrary,
			SkillUsages.nunitAbide,
			SkillUsages.powershellFundslibrary,
			SkillUsages.powershellAbide,
			SkillUsages.pythonCodeclub,
			SkillUsages.pythonHobby,
			SkillUsages.pythonAbide,
			SkillUsages.resharperFundslibrary,
			SkillUsages.resharperHobby,
			SkillUsages.resharperAbide,
			SkillUsages.restWebservicesFundslibrary,
			SkillUsages.restWebservicesAbide,
			SkillUsages.rlanguageHobby,
			SkillUsages.sourcesafeToplevel,
			SkillUsages.ssmsFundslibrary,
			SkillUsages.ssmsToplevel,
			SkillUsages.ssmsAbide,
			SkillUsages.tSqlFundslibrary,
			SkillUsages.tSqlAbideFinancial,
			SkillUsages.tSqlToplevel,
			SkillUsages.tfsToplevel,
			SkillUsages.teamcityAbideFinancial,
			SkillUsages.typescriptChesterBurbidgeDotCom,
			SkillUsages.typescriptFundslibrary,
			SkillUsages.typescriptHobby,
			SkillUsages.vbDotNetToplevel,
			SkillUsages.vsChesterBurbidgeDotCom,
			SkillUsages.vsFundslibrary,
			SkillUsages.vsHobby,
			SkillUsages.vsAbide,
			SkillUsages.vsToplevel,
			SkillUsages.xsltFundslibrary,
			SkillUsages.xmlAbide
		];
	}
}