module CV
{
	export class Skills
	{
		static counter = 0;

		static angularJs = new Skill(
			Skills.counter++,
			"Angular Js",
			"Angular Js is a javascript MV* Single Page Application framework.",
			[
				Metadatas.frontEnd,
				Metadatas.professional,
				Metadatas.hobby
			]);

		static akkaDotNet = new Skill(
			Skills.counter++,
			"AKKA.NET",
			".NET actor system implementation framework, port of the popular scala framework.",
			[
				Metadatas.backEnd,
				Metadatas.professional,
				Metadatas.asynchronousProgramming,
				Metadatas.hobby
			]);

		static aspDotNetMvc = new Skill(
			Skills.counter++,
			"ASP.NET MVC",
			"A varied web development framework that ephasises the Model View Controller pattern.",
			[
				Metadatas.professional
			]);

		static aspDotNetWebforms = new Skill(
			Skills.counter++,
			"ASP.NET WebForms",
			"Webforms.",
			[
				Metadatas.professional
			]);

		static awsS3 = new Skill(
			Skills.counter++,
			"AWS S3",
			"Amazon storage",
			[
				Metadatas.professional
			]);
			
		static awsSQS = new Skill(
			Skills.counter++,
			"AWS SQS",
			"Amazon simple queue system",
			[
				Metadatas.professional
			]);

		static awsKinesis = new Skill(
			Skills.counter++,
			"AWS Kinesis",
			"Amazon Kinesis queue",
			[
				Metadatas.professional
			]);

		static awsRedshift = new Skill(
			Skills.counter++,
			"AWS Redshift",
			"Amazon Redshift",
			[
				Metadatas.professional
			]);

		static bashScripting = new Skill(
			Skills.counter++,
			"bash scripting",
			"Writing scripts to be run on bash terminals",
			[
				Metadatas.hobby,
				Metadatas.professional
			]);

		static bootstrap = new Skill(
			Skills.counter++,
			"Bootstrap",
			"An open source responsive design library.",
			[
				Metadatas.responsiveDesign,
				Metadatas.professional,
				Metadatas.hobby,
				Metadatas.frontEnd
			]);

		static continuousIntegration = new Skill(
			Skills.counter++,
			"Continuous integration",
			"A style of software deployment that uses automated tests and short feedback loops.",
			[
				Metadatas.professional
			]);

		static cordova = new Skill(
			Skills.counter++,
			"Apache Cordova (Phone Gap)",
			"An open source way of making cross platform mobile phone apps",
			[
				Metadatas.hobby
			]);

		static cPlusPlus = new Skill(
			Skills.counter++,
			"C++",
			"A common programming language.",
			[
				Metadatas.professional,
				Metadatas.objectOrientedProgramming,
				Metadatas.backEnd
			]);
		
		static cSharp = new Skill(
			Skills.counter++,
			"C#",
			"CSharp is a modern multi-paradigm programming language",
			[
				Metadatas.backEnd,
				Metadatas.functionalProgramming,
				Metadatas.hobby,
				Metadatas.objectOrientedProgramming,
				Metadatas.professional,
				Metadatas.refactoring,
				Metadatas.solidPrinciples,
				Metadatas.testDrivenDevelopment
			]);

		static css = new Skill(
			Skills.counter++,
			"CSS",
			"Styling of web pages",
			[
				Metadatas.frontEnd,
				Metadatas.hobby,
				Metadatas.responsiveDesign
			]);

		static d3 = new Skill(
			Skills.counter++,
			"D3",
			"A svg manipulation library",
			[
				Metadatas.professional,
				Metadatas.hobby,
				Metadatas.frontEnd
			]);

		static dotNetFramework = new Skill(
			Skills.counter++,
			".NET Framework",
			"The Microsoft software development framework.",
			[
				Metadatas.backEnd,
				Metadatas.hobby,
				Metadatas.professional
			]);

		static esSixPromises = new Skill(
			Skills.counter++,
			"ES6 Promises",
			"ECMAScript 6 promises",
			[
				Metadatas.asynchronousProgramming,
				Metadatas.frontEnd,
				Metadatas.hobby
			]);

		static git = new Skill(
			Skills.counter++,
			"git",
			"An open source source code control system",
			[
				Metadatas.hobby,
				Metadatas.professional
			]);

		static grunt = new Skill(
			Skills.counter++,
			"grunt",
			"A javascript task runner.",
			[
				Metadatas.frontEnd,
				Metadatas.professional,
				Metadatas.hobby
			]);

		static html = new Skill(
			Skills.counter++,
			"HTML",
			"The markup language of the internet.",
			[
				Metadatas.frontEnd,
				Metadatas.professional,
				Metadatas.responsiveDesign
			]);

		static ionicFramework = new Skill(
			Skills.counter++,
			"Ionic framework",
			"An open source framework that uses AngularJs and Apache cordova to create cross platform mobile apps.",
			[
				Metadatas.hobby,
				Metadatas.frontEnd
			]);

		static jasmine = new Skill(
			Skills.counter++,
			"jasmine",
			"A javascript test running/assertion library",
			[
				Metadatas.frontEnd,
				Metadatas.professional,
				Metadatas.testDrivenDevelopment
			]);

		static javascript = new Skill(
			Skills.counter++,
			"javascript",
			"The language of the client side internet.",
			[
				Metadatas.asynchronousProgramming,
				Metadatas.frontEnd,
				Metadatas.functionalProgramming,
				Metadatas.hobby,
				Metadatas.objectOrientedProgramming,
				Metadatas.professional,
				Metadatas.refactoring,
				Metadatas.responsiveDesign,
				Metadatas.testDrivenDevelopment
			]);

		static jira = new Skill(
			Skills.counter++,
			"JIRA",
			"Project management software from atlassian",
			[
				Metadatas.professional
			]);

		static jquery = new Skill(
			Skills.counter++,
			"jQuery",
			"A standard library for DOM manipulation",
			[
				Metadatas.frontEnd,
				Metadatas.hobby,
				Metadatas.professional
			]);

		static karma = new Skill(
			Skills.counter++,
			"karma",
			"A javascript test runner.",
			[
				Metadatas.hobby,
				Metadatas.testDrivenDevelopment
			]);

		static knockoutJs = new Skill(
			Skills.counter++,
			"KnockoutJs",
			"A javascript binding library",
			[
				Metadatas.frontEnd,
				Metadatas.professional
			]);

		static latex = new Skill(
			Skills.counter++,
			"LaTeX",
			"A quality typesetting software package",
			[
				Metadatas.hobby
			]);

		static less = new Skill(
			Skills.counter++,
			"LESS",
			"A CSS preprocessor",
			[
				Metadatas.frontEnd,
				Metadatas.hobby,
				Metadatas.professional
			]);

		static linq = new Skill(
			Skills.counter++,
			"LINQ",
			"A library for manipulating data in C# and VB.NET",
			[
				Metadatas.backEnd,
				Metadatas.functionalProgramming,
				Metadatas.hobby,
				Metadatas.professional
			]);

		//static microsoftOffice = new Skill(
		//	Skills.counter++,
		//	"Microsoft Office",
		//	"Standard Office software");

		static moq = new Skill(
			Skills.counter++,
			"MoQ",
			"A C# mocking library",
			[
				Metadatas.hobby,
				Metadatas.professional,
				Metadatas.testDrivenDevelopment
			]);

		static nunit = new Skill(
			Skills.counter++,
			"NUnit",
			"A C# assertion library",
			[
				Metadatas.backEnd,
				Metadatas.professional,
				Metadatas.testDrivenDevelopment
			]);
		
		static octopusDeploy = new Skill(
			Skills.counter++,
			"Octopus Deploy",
			"A deployment technology",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);
		
		static powershell = new Skill(
			Skills.counter++,
			"Powershell",
			"Microsoft's scripting language",
			[
				Metadatas.professional
			]);

		static python = new Skill(
			Skills.counter++,
			"python",
			"A general purpose programming language",
			[
				Metadatas.hobby,
				Metadatas.objectOrientedProgramming,
				Metadatas.testDrivenDevelopment
			]);

		static resharper = new Skill(
			Skills.counter++,
			"Resharper",
			"A code productivity tool.",
			[
				Metadatas.backEnd,
				Metadatas.frontEnd,
				Metadatas.hobby,
				Metadatas.professional,
				Metadatas.refactoring,
				Metadatas.testDrivenDevelopment
			]);

		static restfulWebservices = new Skill(
			Skills.counter++,
			"RESTFul webservices",
			"A stateless webservice architectural style.",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);

		static rlanguage = new Skill(
			Skills.counter++,
			"R",
			"A statistical programming language package",
			[
				Metadatas.hobby
			]);

		static sourceSafe = new Skill(
			Skills.counter++,
			"Source safe",
			"A version control system",
			[
				Metadatas.professional
			]);

		static sqlServerManagementStudio = new Skill(
			Skills.counter++,
			"SQL Server Management Studio",
			"Software to control SQL Server",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);

		static tfs = new Skill(
			Skills.counter++,
			"TFS",
			"Project management and source control software.",
			[
				Metadatas.professional
			]);

		static teamcity = new Skill(
			Skills.counter++,
			"Teamcity",
			"Continuous integration software",
			[
				Metadatas.professional
			]);

		static tSql = new Skill(
			Skills.counter++,
			"T-SQL",
			"Microsoft's flavour of SQL.",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);

		static typescript = new Skill(
			Skills.counter++,
			"Typescript",
			"A types superset of javascript",
			[
				Metadatas.asynchronousProgramming,
				Metadatas.frontEnd,
				Metadatas.functionalProgramming,
				Metadatas.hobby,
				Metadatas.objectOrientedProgramming,
				Metadatas.professional,
				Metadatas.refactoring,
				Metadatas.solidPrinciples,
				Metadatas.testDrivenDevelopment
			]);

		static visualStudio = new Skill(
			Skills.counter++,
			"Visual studio",
			"Software development software.",
			[
				Metadatas.frontEnd,
				Metadatas.backEnd,
				Metadatas.hobby,
				Metadatas.professional
			]);

		static vbDotNet = new Skill(
			Skills.counter++,
			"VB.NET",
			"Visual Basic DotNet",
			[
				Metadatas.backEnd,
				Metadatas.objectOrientedProgramming,
				Metadatas.professional
			]);

		static xslt = new Skill(
			Skills.counter++,
			"XSLT",
			"A language to transform XML into HTML",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);
		
		static xml = new Skill(
			Skills.counter++,
			"XML",
			"A heavily used markup language",
			[
				Metadatas.backEnd,
				Metadatas.professional
			]);


		static all = [
			Skills.akkaDotNet,
			Skills.angularJs,
			Skills.aspDotNetMvc,
			Skills.aspDotNetWebforms,
			Skills.bashScripting,
			Skills.bootstrap,
			Skills.cPlusPlus,
			Skills.cordova,
			Skills.cSharp,
			Skills.css,
			Skills.continuousIntegration,
			Skills.d3,
			Skills.dotNetFramework,
			Skills.esSixPromises,
			Skills.git,
			Skills.grunt,
			Skills.html,
			Skills.ionicFramework,
			Skills.jasmine,
			Skills.javascript,
			Skills.jira,
			Skills.jquery,
			Skills.karma,
			Skills.knockoutJs,
			Skills.latex,
			Skills.less,
			Skills.linq,
			Skills.moq,
			Skills.nunit,
			Skills.octopusDeploy,
			Skills.powershell,
			Skills.python,
			Skills.resharper,
			Skills.restfulWebservices,
			Skills.rlanguage,
			Skills.sourceSafe,
			Skills.sqlServerManagementStudio,
			Skills.tSql,
			Skills.tfs,
			Skills.teamcity,
			Skills.typescript,
			Skills.vbDotNet,
			Skills.visualStudio,
			Skills.xslt,
			Skills.xml
		];
	}
}