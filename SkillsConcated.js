//# sourceMappingURL=_external_references.js.map
var CV;
(function (CV) {
    var Metadatas = (function () {
        function Metadatas() {
        }
        Metadatas.counter = 0;
        Metadatas.asynchronousProgramming = new CV.Metadata(Metadatas.counter++, "Asynchronous", "The practice of writing asynchronous code.");
        Metadatas.backEnd = new CV.Metadata(Metadatas.counter++, "'Back end'", "'Back end' development concerns server side technologies like C#.");
        Metadatas.frontEnd = new CV.Metadata(Metadatas.counter++, "'Front end'", "'Front end' development concerns client side technologies like javascript.");
        Metadatas.functionalProgramming = new CV.Metadata(Metadatas.counter++, "Functional", "A style of programming.");
        Metadatas.hobby = new CV.Metadata(Metadatas.counter++, "Hobby", "Skills that I have used in hobby projects.");
        Metadatas.objectOrientedProgramming = new CV.Metadata(Metadatas.counter++, "Object Oriented", "A style of programming that uses objects");
        Metadatas.professional = new CV.Metadata(Metadatas.counter++, "Professional", "Skills that I have professional experience in.");
        Metadatas.refactoring = new CV.Metadata(Metadatas.counter++, "Refactoring", "The process of producing code that is more 'factored'");
        Metadatas.responsiveDesign = new CV.Metadata(Metadatas.counter++, "Responsive design", "The practice of designing web pages for multiple screen sizes effectively.");
        Metadatas.solidPrinciples = new CV.Metadata(Metadatas.counter++, "SOLID Principles", "A set of principles");
        Metadatas.testDrivenDevelopment = new CV.Metadata(Metadatas.counter++, "TDD", "The practice of writing automated tests before writing code.");
        Metadatas.all = [
            Metadatas.asynchronousProgramming,
            Metadatas.backEnd,
            Metadatas.frontEnd,
            Metadatas.functionalProgramming,
            Metadatas.hobby,
            Metadatas.objectOrientedProgramming,
            Metadatas.professional,
            Metadatas.refactoring,
            Metadatas.responsiveDesign,
            Metadatas.solidPrinciples,
            Metadatas.testDrivenDevelopment
        ];
        return Metadatas;
    }());
    CV.Metadatas = Metadatas;
})(CV || (CV = {}));
//# sourceMappingURL=Metadatas.js.map
var CV;
(function (CV) {
    var Settings = (function () {
        function Settings() {
        }
        Settings.counter = 0;
        Settings.chesterBurbidgeDotCom = new CV.Setting(Settings.counter++, "Personal website", "My own personal website", new CV.DateRange(new Date(2015, 2), new Date(2015, 4)));
        Settings.codeclub = new CV.Setting(Settings.counter++, "Code club", "Teaching a 'code club' to a local school", new CV.DateRange(new Date(2013, 9), new Date(2014, 4)));
        Settings.fundslibrary = new CV.Setting(Settings.counter++, "Fundslibrary", "Fundslibrary - Junior Developer", new CV.DateRange(new Date(2014, 3), new Date(2015, 2)));
        Settings.hobby = new CV.Setting(Settings.counter++, "Hobby", "Hobby programming", new CV.DateRange(new Date(2012, 11), new Date(2015, 4)));
        Settings.toplevelComputing = new CV.Setting(Settings.counter++, "Toplevel computing", "Toplevel computing - Graduate Developer", new CV.DateRange(new Date(2013, 3), new Date(2014, 3)));
        Settings.all = [
            Settings.chesterBurbidgeDotCom,
            Settings.codeclub,
            Settings.fundslibrary,
            Settings.hobby,
            Settings.toplevelComputing
        ];
        return Settings;
    }());
    CV.Settings = Settings;
})(CV || (CV = {}));
//# sourceMappingURL=Settings.js.map
var CV;
(function (CV) {
    var Skills = (function () {
        function Skills() {
        }
        Skills.counter = 0;
        Skills.angularJs = new CV.Skill(Skills.counter++, "Angular Js", "Angular Js is a javascript MV* Single Page Application framework.", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby
        ]);
        Skills.aspDotNetMvc = new CV.Skill(Skills.counter++, "ASP.NET MVC", "A varied web development framework that ephasises the Model View Controller pattern.", [
            CV.Metadatas.professional
        ]);
        Skills.aspDotNetWebforms = new CV.Skill(Skills.counter++, "ASP.NET WebForms", "Webforms.", [
            CV.Metadatas.professional
        ]);
        Skills.bashScripting = new CV.Skill(Skills.counter++, "bash scripting", "Writing scripts to be run on bash terminals", [
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.bootstrap = new CV.Skill(Skills.counter++, "Bootstrap", "An open source responsive design library.", [
            CV.Metadatas.responsiveDesign,
            CV.Metadatas.professional,
            CV.Metadatas.hobby,
            CV.Metadatas.frontEnd
        ]);
        Skills.continuousIntegration = new CV.Skill(Skills.counter++, "Continuous integration", "A style of software deployment that uses automated tests and short feedback loops.", [
            CV.Metadatas.professional
        ]);
        Skills.cordova = new CV.Skill(Skills.counter++, "Apache Cordova (Phone Gap)", "An open source way of making cross platform mobile phone apps", [
            CV.Metadatas.hobby
        ]);
        Skills.cPlusPlus = new CV.Skill(Skills.counter++, "C++", "A common programming language.", [
            CV.Metadatas.professional,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.backEnd
        ]);
        Skills.cSharp = new CV.Skill(Skills.counter++, "C#", "CSharp is a modern multi-paradigm programming language", [
            CV.Metadatas.backEnd,
            CV.Metadatas.functionalProgramming,
            CV.Metadatas.hobby,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.professional,
            CV.Metadatas.refactoring,
            CV.Metadatas.solidPrinciples,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.css = new CV.Skill(Skills.counter++, "CSS", "Styling of web pages", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.responsiveDesign
        ]);
        Skills.d3 = new CV.Skill(Skills.counter++, "D3", "A svg manipulation library", [
            CV.Metadatas.professional,
            CV.Metadatas.hobby,
            CV.Metadatas.frontEnd
        ]);
        Skills.dotNetFramework = new CV.Skill(Skills.counter++, ".NET Framework", "The Microsoft software development framework.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.esSixPromises = new CV.Skill(Skills.counter++, "ES6 Promises", "ECMAScript 6 promises", [
            CV.Metadatas.asynchronousProgramming,
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby
        ]);
        Skills.git = new CV.Skill(Skills.counter++, "git", "An open source source code control system", [
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.grunt = new CV.Skill(Skills.counter++, "grunt", "A javascript task runner.", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.professional,
            CV.Metadatas.hobby
        ]);
        Skills.html = new CV.Skill(Skills.counter++, "HTML", "The markup language of the internet.", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.professional,
            CV.Metadatas.responsiveDesign
        ]);
        Skills.ionicFramework = new CV.Skill(Skills.counter++, "Ionic framework", "An open source framework that uses AngularJs and Apache cordova to create cross platform mobile apps.", [
            CV.Metadatas.hobby,
            CV.Metadatas.frontEnd
        ]);
        Skills.jasmine = new CV.Skill(Skills.counter++, "jasmine", "A javascript test running/assertion library", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.professional,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.javascript = new CV.Skill(Skills.counter++, "javascript", "The language of the client side internet.", [
            CV.Metadatas.asynchronousProgramming,
            CV.Metadatas.frontEnd,
            CV.Metadatas.functionalProgramming,
            CV.Metadatas.hobby,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.professional,
            CV.Metadatas.refactoring,
            CV.Metadatas.responsiveDesign,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.jira = new CV.Skill(Skills.counter++, "JIRA", "Project management software from atlassian", [
            CV.Metadatas.professional
        ]);
        Skills.jquery = new CV.Skill(Skills.counter++, "jQuery", "A standard library for DOM manipulation", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.karma = new CV.Skill(Skills.counter++, "karma", "A javascript test runner.", [
            CV.Metadatas.hobby,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.knockoutJs = new CV.Skill(Skills.counter++, "KnockoutJs", "A javascript binding library", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.professional
        ]);
        Skills.latex = new CV.Skill(Skills.counter++, "LaTeX", "A quality typesetting software package", [
            CV.Metadatas.hobby
        ]);
        Skills.less = new CV.Skill(Skills.counter++, "LESS", "A CSS preprocessor", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.linq = new CV.Skill(Skills.counter++, "LINQ", "A library for manipulating data in C# and VB.NET", [
            CV.Metadatas.backEnd,
            CV.Metadatas.functionalProgramming,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.moq = new CV.Skill(Skills.counter++, "MoQ", "A C# mocking library", [
            CV.Metadatas.hobby,
            CV.Metadatas.professional,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.nunit = new CV.Skill(Skills.counter++, "NUnit", "A C# assertion library", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.powershell = new CV.Skill(Skills.counter++, "Powershell", "Microsoft's scripting language", [
            CV.Metadatas.professional
        ]);
        Skills.python = new CV.Skill(Skills.counter++, "python", "A general purpose programming language", [
            CV.Metadatas.hobby,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.resharper = new CV.Skill(Skills.counter++, "Resharper", "A code productivity tool.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.frontEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.professional,
            CV.Metadatas.refactoring,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.restfulWebservices = new CV.Skill(Skills.counter++, "RESTFul webservices", "A stateless webservice architectural style.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.rlanguage = new CV.Skill(Skills.counter++, "R", "A statistical programming language package", [
            CV.Metadatas.hobby
        ]);
        Skills.sourceSafe = new CV.Skill(Skills.counter++, "Source safe", "A version control system", [
            CV.Metadatas.professional
        ]);
        Skills.sqlServerManagementStudio = new CV.Skill(Skills.counter++, "SQL Server Management Studio", "Software to control SQL Server", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.tfs = new CV.Skill(Skills.counter++, "TFS", "Project management and source control software.", [
            CV.Metadatas.professional
        ]);
        Skills.tSql = new CV.Skill(Skills.counter++, "T-SQL", "Microsoft's flavour of SQL.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.typescript = new CV.Skill(Skills.counter++, "Typescript", "A types superset of javascript", [
            CV.Metadatas.asynchronousProgramming,
            CV.Metadatas.frontEnd,
            CV.Metadatas.functionalProgramming,
            CV.Metadatas.hobby,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.professional,
            CV.Metadatas.refactoring,
            CV.Metadatas.solidPrinciples,
            CV.Metadatas.testDrivenDevelopment
        ]);
        Skills.visualStudio = new CV.Skill(Skills.counter++, "Visual studio", "Software development software.", [
            CV.Metadatas.frontEnd,
            CV.Metadatas.backEnd,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.vbDotNet = new CV.Skill(Skills.counter++, "VB.NET", "Visual Basic DotNet", [
            CV.Metadatas.backEnd,
            CV.Metadatas.objectOrientedProgramming,
            CV.Metadatas.professional
        ]);
        Skills.xslt = new CV.Skill(Skills.counter++, "XSLT", "A language to transform XML into HTML", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.all = [
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
            Skills.powershell,
            Skills.python,
            Skills.resharper,
            Skills.restfulWebservices,
            Skills.rlanguage,
            Skills.sourceSafe,
            Skills.sqlServerManagementStudio,
            Skills.tSql,
            Skills.tfs,
            Skills.typescript,
            Skills.vbDotNet,
            Skills.visualStudio,
            Skills.xslt
        ];
        return Skills;
    }());
    CV.Skills = Skills;
})(CV || (CV = {}));
//# sourceMappingURL=Skills.js.map
var CV;
(function (CV) {
    var SkillUsages = (function () {
        function SkillUsages() {
        }
        SkillUsages.counter = 0;
        SkillUsages.angularJsIonicApp = new CV.SkillUsage(SkillUsages.counter++, "Angular js used in ionic app for cordova app.", CV.Skills.angularJs.id, CV.Settings.hobby.id);
        SkillUsages.aspDotNetMvcFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Built websites with MVC pattern", CV.Skills.aspDotNetMvc.id, CV.Settings.fundslibrary.id);
        SkillUsages.aspDotNetWebFormsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Built websites with ASP.NET Webforms", CV.Skills.aspDotNetWebforms.id, CV.Settings.fundslibrary.id);
        SkillUsages.bashscriptingHome = new CV.SkillUsage(SkillUsages.counter++, "Using bash terminal", CV.Skills.bashScripting.id, CV.Settings.hobby.id);
        SkillUsages.bashscriptingGitBash = new CV.SkillUsage(SkillUsages.counter++, "Using git bash", CV.Skills.bashScripting.id, CV.Settings.fundslibrary.id);
        SkillUsages.bootstrapFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Made responsive websites", CV.Skills.bootstrap.id, CV.Settings.fundslibrary.id);
        SkillUsages.bootstrapChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Personal website CV page", CV.Skills.bootstrap.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.continuousIntegrationFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used Cruise control dot net to make builds, run tests.", CV.Skills.continuousIntegration.id, CV.Settings.fundslibrary.id);
        SkillUsages.cordovaHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.cordova.id, CV.Settings.hobby.id);
        SkillUsages.cPlusPlusToplevel = new CV.SkillUsage(SkillUsages.counter++, "Made modifications to existing C++ code.", CV.Skills.cPlusPlus.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cSharpToplevel = new CV.SkillUsage(SkillUsages.counter++, "Did some cSharp at toplevel", CV.Skills.cSharp.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cSharpFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "Did some cSharp at fundslibrary", CV.Skills.cSharp.id, CV.Settings.fundslibrary.id);
        SkillUsages.cssToplevel = new CV.SkillUsage(SkillUsages.counter++, "Css", CV.Skills.css.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cssFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "Css", CV.Skills.css.id, CV.Settings.fundslibrary.id);
        SkillUsages.cssChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.css.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.cssCodeclub = new CV.SkillUsage(SkillUsages.counter++, "Taught CSS at a codeclub", CV.Skills.css.id, CV.Settings.codeclub.id);
        SkillUsages.d3Fundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used D3 for charts and graphs.", CV.Skills.d3.id, CV.Settings.fundslibrary.id);
        SkillUsages.d3ChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Used D3 for this skills chart", CV.Skills.d3.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.dotNetFrameworkFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used .Net framework 4", CV.Skills.dotNetFramework.id, CV.Settings.fundslibrary.id);
        SkillUsages.dotNetFrameworkToplevel = new CV.SkillUsage(SkillUsages.counter++, "Used .Net framework 2 and 4", CV.Skills.dotNetFramework.id, CV.Settings.toplevelComputing.id);
        SkillUsages.es6PromisesFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used Promise paradigm for asynchronous programming", CV.Skills.esSixPromises.id, CV.Settings.fundslibrary.id);
        SkillUsages.es6PromisesIonicApp = new CV.SkillUsage(SkillUsages.counter++, "Used Promise paradigm for asynchronous programming", CV.Skills.esSixPromises.id, CV.Settings.hobby.id);
        SkillUsages.gitFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used git through git bash.", CV.Skills.git.id, CV.Settings.fundslibrary.id);
        SkillUsages.gitHobby = new CV.SkillUsage(SkillUsages.counter++, "Used git at home, have many remote repositories.", CV.Skills.git.id, CV.Settings.hobby.id);
        SkillUsages.gruntFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used grunt to compile less and typescript.", CV.Skills.grunt.id, CV.Settings.fundslibrary.id);
        SkillUsages.gruntChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "grunt compiles less, typescript, runs jasmine tests.", CV.Skills.grunt.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.htmlToplevel = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.toplevelComputing.id);
        SkillUsages.htmlFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.fundslibrary.id);
        SkillUsages.htmlChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.htmlCodeclub = new CV.SkillUsage(SkillUsages.counter++, "Taught HTML to kids at a codeclub", CV.Skills.html.id, CV.Settings.codeclub.id);
        SkillUsages.ionicFrameworkHobby = new CV.SkillUsage(SkillUsages.counter++, "Used ionic framework to try and create cross platform app", CV.Skills.ionicFramework.id, CV.Settings.hobby.id);
        SkillUsages.jasmineFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.fundslibrary.id);
        SkillUsages.jasmineHobby = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.hobby.id);
        SkillUsages.jasmineChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.javascriptFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Wrote javascript client side code", CV.Skills.javascript.id, CV.Settings.fundslibrary.id);
        SkillUsages.javascriptHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.javascript.id, CV.Settings.hobby.id);
        SkillUsages.jiraFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used JIRA to pick up tasks", CV.Skills.jira.id, CV.Settings.fundslibrary.id);
        SkillUsages.jqueryFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.jquery.id, CV.Settings.fundslibrary.id);
        SkillUsages.jqueryHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.jquery.id, CV.Settings.hobby.id);
        SkillUsages.jqueryCodeclub = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.jquery.id, CV.Settings.codeclub.id);
        SkillUsages.karmaHobby = new CV.SkillUsage(SkillUsages.counter++, "Tried out karma to run typescript tests", CV.Skills.karma.id, CV.Settings.hobby.id);
        SkillUsages.knockoutJsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used the MVVM javascript library to create Single Page Applications", CV.Skills.knockoutJs.id, CV.Settings.fundslibrary.id);
        SkillUsages.latexHobby = new CV.SkillUsage(SkillUsages.counter++, "Used LaTeX to create documents", CV.Skills.latex.id, CV.Settings.hobby.id);
        SkillUsages.lessFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used less to style website", CV.Skills.less.id, CV.Settings.fundslibrary.id);
        SkillUsages.lessHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.less.id, CV.Settings.hobby.id);
        SkillUsages.lessChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.less.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.linqFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.linq.id, CV.Settings.fundslibrary.id);
        SkillUsages.linqToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.linq.id, CV.Settings.toplevelComputing.id);
        SkillUsages.moqFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used the mocking library to write C# tests", CV.Skills.moq.id, CV.Settings.fundslibrary.id);
        SkillUsages.nunitFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used to run C# tests", CV.Skills.nunit.id, CV.Settings.fundslibrary.id);
        SkillUsages.powershellFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Automating tasks", CV.Skills.powershell.id, CV.Settings.fundslibrary.id);
        SkillUsages.pythonHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.python.id, CV.Settings.hobby.id);
        SkillUsages.pythonCodeclub = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.python.id, CV.Settings.codeclub.id);
        SkillUsages.resharperFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used resharper", CV.Skills.resharper.id, CV.Settings.fundslibrary.id);
        SkillUsages.resharperHobby = new CV.SkillUsage(SkillUsages.counter++, "Used resharper", CV.Skills.resharper.id, CV.Settings.hobby.id);
        SkillUsages.restWebservicesFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Setup and maintained RESTFul webvices.", CV.Skills.restfulWebservices.id, CV.Settings.fundslibrary.id);
        SkillUsages.rlanguageHobby = new CV.SkillUsage(SkillUsages.counter++, "Used R for statistical analysis", CV.Skills.rlanguage.id, CV.Settings.hobby.id);
        SkillUsages.sourcesafeToplevel = new CV.SkillUsage(SkillUsages.counter++, "Used sourcesafe for source control", CV.Skills.sourceSafe.id, CV.Settings.toplevelComputing.id);
        SkillUsages.ssmsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.sqlServerManagementStudio.id, CV.Settings.toplevelComputing.id);
        SkillUsages.ssmsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.sqlServerManagementStudio.id, CV.Settings.fundslibrary.id);
        SkillUsages.tfsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tfs.id, CV.Settings.toplevelComputing.id);
        SkillUsages.tSqlToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tSql.id, CV.Settings.toplevelComputing.id);
        SkillUsages.tSqlFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tSql.id, CV.Settings.fundslibrary.id);
        SkillUsages.typescriptFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.fundslibrary.id);
        SkillUsages.typescriptHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.hobby.id);
        SkillUsages.typescriptChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.vsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.toplevelComputing.id);
        SkillUsages.vsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.fundslibrary.id);
        SkillUsages.vsHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.hobby.id);
        SkillUsages.vsChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.vbDotNetToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.vbDotNet.id, CV.Settings.toplevelComputing.id);
        SkillUsages.xsltFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.xslt.id, CV.Settings.fundslibrary.id);
        SkillUsages.all = [
            SkillUsages.angularJsIonicApp,
            SkillUsages.aspDotNetMvcFundslibrary,
            SkillUsages.aspDotNetWebFormsFundslibrary,
            SkillUsages.bashscriptingGitBash,
            SkillUsages.bashscriptingHome,
            SkillUsages.bootstrapChesterBurbidgeDotCom,
            SkillUsages.bootstrapFundslibrary,
            SkillUsages.cordovaHobby,
            SkillUsages.cPlusPlusToplevel,
            SkillUsages.cSharpFundsLibrary,
            SkillUsages.cSharpToplevel,
            SkillUsages.continuousIntegrationFundslibrary,
            SkillUsages.cssChesterBurbidgeDotCom,
            SkillUsages.cssCodeclub,
            SkillUsages.cssFundsLibrary,
            SkillUsages.cssToplevel,
            SkillUsages.d3ChesterBurbidgeDotCom,
            SkillUsages.d3Fundslibrary,
            SkillUsages.dotNetFrameworkFundslibrary,
            SkillUsages.dotNetFrameworkToplevel,
            SkillUsages.es6PromisesFundslibrary,
            SkillUsages.es6PromisesIonicApp,
            SkillUsages.gitFundslibrary,
            SkillUsages.gitHobby,
            SkillUsages.gruntChesterBurbidgeDotCom,
            SkillUsages.gruntFundslibrary,
            SkillUsages.htmlChesterBurbidgeDotCom,
            SkillUsages.htmlCodeclub,
            SkillUsages.htmlFundsLibrary,
            SkillUsages.htmlToplevel,
            SkillUsages.ionicFrameworkHobby,
            SkillUsages.jasmineChesterBurbidgeDotCom,
            SkillUsages.jasmineFundslibrary,
            SkillUsages.jasmineHobby,
            SkillUsages.javascriptFundslibrary,
            SkillUsages.javascriptHobby,
            SkillUsages.jiraFundslibrary,
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
            SkillUsages.moqFundslibrary,
            SkillUsages.nunitFundslibrary,
            SkillUsages.powershellFundslibrary,
            SkillUsages.pythonCodeclub,
            SkillUsages.pythonHobby,
            SkillUsages.resharperFundslibrary,
            SkillUsages.resharperHobby,
            SkillUsages.restWebservicesFundslibrary,
            SkillUsages.rlanguageHobby,
            SkillUsages.sourcesafeToplevel,
            SkillUsages.ssmsFundslibrary,
            SkillUsages.ssmsToplevel,
            SkillUsages.tSqlFundslibrary,
            SkillUsages.tSqlToplevel,
            SkillUsages.tfsToplevel,
            SkillUsages.typescriptChesterBurbidgeDotCom,
            SkillUsages.typescriptFundslibrary,
            SkillUsages.typescriptHobby,
            SkillUsages.vbDotNetToplevel,
            SkillUsages.vsChesterBurbidgeDotCom,
            SkillUsages.vsFundslibrary,
            SkillUsages.vsHobby,
            SkillUsages.vsToplevel,
            SkillUsages.xsltFundslibrary
        ];
        return SkillUsages;
    }());
    CV.SkillUsages = SkillUsages;
})(CV || (CV = {}));
//# sourceMappingURL=SkillUsages.js.map
var CV;
(function (CV) {
    var CVData = (function () {
        function CVData() {
        }
        CVData.getData = function () {
            return {
                skills: CV.Skills.all,
                settings: CV.Settings.all,
                skillUsages: CV.SkillUsages.all,
                metadatas: CV.Metadatas.all
            };
        };
        return CVData;
    }());
    CV.CVData = CVData;
    var DateRange = (function () {
        function DateRange(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
        return DateRange;
    }());
    CV.DateRange = DateRange;
    var Metadata = (function () {
        function Metadata(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
        }
        return Metadata;
    }());
    CV.Metadata = Metadata;
    var Setting = (function () {
        function Setting(id, name, description, dateRange) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.dateRange = dateRange;
        }
        return Setting;
    }());
    CV.Setting = Setting;
    var Skill = (function () {
        function Skill(id, name, description, metadatas, imageUrl) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.metadatas = metadatas;
            this.imageUrl = imageUrl;
        }
        return Skill;
    }());
    CV.Skill = Skill;
    var SkillUsage = (function () {
        function SkillUsage(skillUsageId, description, skillId, settingId) {
            this.skillUsageId = skillUsageId;
            this.description = description;
            this.skillId = skillId;
            this.settingId = settingId;
        }
        return SkillUsage;
    }());
    CV.SkillUsage = SkillUsage;
})(CV || (CV = {}));
//# sourceMappingURL=CvClasses.js.map