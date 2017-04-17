var CV;
(function (CV) {
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
var CV;
(function (CV) {
    var Metadatas = (function () {
        function Metadatas() {
        }
        Metadatas.counter = 0;
        Metadatas.asynchronousProgramming = new CV.Metadata(Metadatas.counter++, "Asynchronous", "The practice of writing asynchronous code.");
        Metadatas.backEnd = new CV.Metadata(Metadatas.counter++, "'Back end'", "'Back end' development concerns server side technologies like C#.");
        Metadatas.cloud = new CV.Metadata(Metadatas.counter++, "Cloud", "cloud development skills, mostly AWS");
        Metadatas.devops = new CV.Metadata(Metadatas.counter++, "Devops", "devops, automation and continuous delivery practices");
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
            Metadatas.cloud,
            Metadatas.devops,
            Metadatas.frontEnd,
            Metadatas.functionalProgramming,
            Metadatas.hobby,
            Metadatas.objectOrientedProgramming,
            Metadatas.professional,
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
        Settings.abideFinancial = new CV.Setting(Settings.counter++, "Abide Financial", "Regulatory reporting for financial markets", new CV.DateRange(new Date(2015, 3), new Date()));
        Settings.chesterBurbidgeDotCom = new CV.Setting(Settings.counter++, "Personal website", "My own personal website", new CV.DateRange(new Date(2015, 2), new Date(2015, 4)));
        Settings.codeclub = new CV.Setting(Settings.counter++, "Code club", "Teaching a 'code club' to a local school", new CV.DateRange(new Date(2013, 9), new Date(2014, 4)));
        Settings.fundslibrary = new CV.Setting(Settings.counter++, "Fundslibrary", "Fundslibrary - Junior Developer", new CV.DateRange(new Date(2014, 3), new Date(2015, 2)));
        Settings.hobby = new CV.Setting(-1, "Hobby", "Hobby programming", new CV.DateRange(new Date(2012, 11), new Date(2015, 4)));
        Settings.toplevelComputing = new CV.Setting(Settings.counter++, "Toplevel computing", "Toplevel computing - Graduate Developer", new CV.DateRange(new Date(2013, 3), new Date(2014, 3)));
        Settings.all = [
            Settings.abideFinancial,
            Settings.chesterBurbidgeDotCom,
            Settings.codeclub,
            Settings.fundslibrary,
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
            CV.Metadatas.professional,
            CV.Metadatas.hobby
        ]);
        Skills.akkaDotNet = new CV.Skill(Skills.counter++, "AKKA.NET", ".NET actor system implementation framework, port of the popular scala framework.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional,
            CV.Metadatas.asynchronousProgramming,
            CV.Metadatas.hobby
        ]);
        Skills.aspDotNetMvc = new CV.Skill(Skills.counter++, "ASP.NET MVC", "A varied web development framework that ephasises the Model View Controller pattern.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.aspDotNetWebforms = new CV.Skill(Skills.counter++, "ASP.NET WebForms", "Webforms.", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.awsCloudformation = new CV.Skill(Skills.counter++, "AWS Cloudformation", "Infrastructure automation", [
            CV.Metadatas.cloud,
            CV.Metadatas.professional
        ]);
        Skills.awsDynamoDB = new CV.Skill(Skills.counter++, "AWS DynamoDB", "AWS DynamoDB for data storage", [
            CV.Metadatas.cloud,
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.awsEC2 = new CV.Skill(Skills.counter++, "AWS EC2", "AWS EC2 for virtual machines", [
            CV.Metadatas.cloud,
            CV.Metadatas.professional
        ]);
        Skills.awsLambda = new CV.Skill(Skills.counter++, "AWS Lambda", "AWS Lambda for data processing and other automation tasks", [
            CV.Metadatas.cloud,
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.awsKinesis = new CV.Skill(Skills.counter++, "AWS Kinesis", "AWS Kinesis for data streaming", [
            CV.Metadatas.cloud,
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.awsOpsworks = new CV.Skill(Skills.counter++, "AWS Opsworks", "AWS Opsworks for chef provisioning", [
            CV.Metadatas.cloud,
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.awsRedshift = new CV.Skill(Skills.counter++, "AWS Redshift", "AWS Redshift for data storage", [
            CV.Metadatas.backEnd,
            CV.Metadatas.cloud,
            CV.Metadatas.professional
        ]);
        Skills.awsSqs = new CV.Skill(Skills.counter++, "AWS SQS", "AWS SQS for queueing applications", [
            CV.Metadatas.backEnd,
            CV.Metadatas.cloud,
            CV.Metadatas.professional
        ]);
        Skills.awsS3 = new CV.Skill(Skills.counter++, "AWS S3", "AWS S3 for data storage", [
            CV.Metadatas.backEnd,
            CV.Metadatas.cloud,
            CV.Metadatas.professional
        ]);
        Skills.bashScripting = new CV.Skill(Skills.counter++, "bash scripting", "Writing scripts to be run on bash terminals", [
            CV.Metadatas.devops,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.bootstrap = new CV.Skill(Skills.counter++, "Bootstrap", "An open source responsive design library.", [
            CV.Metadatas.responsiveDesign,
            CV.Metadatas.professional,
            CV.Metadatas.hobby,
            CV.Metadatas.frontEnd
        ]);
        Skills.cake = new CV.Skill(Skills.counter++, "Cake", "C# DSL for build automation", [
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.chef = new CV.Skill(Skills.counter++, "Chef", "Server configuration automation", [
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.continuousIntegration = new CV.Skill(Skills.counter++, "Continuous integration", "A style of software deployment that uses automated tests and short feedback loops.", [
            CV.Metadatas.devops,
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
        Skills.fSharp = new CV.Skill(Skills.counter++, "F#", "A functional programming language", [
            CV.Metadatas.functionalProgramming,
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.git = new CV.Skill(Skills.counter++, "git", "An open source source code control system", [
            CV.Metadatas.hobby,
            CV.Metadatas.professional
        ]);
        Skills.grunt = new CV.Skill(Skills.counter++, "grunt", "A javascript task runner.", [
            CV.Metadatas.devops,
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
        Skills.octopusDeploy = new CV.Skill(Skills.counter++, "Octopus Deploy", "A deployment technology", [
            CV.Metadatas.backEnd,
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.packer = new CV.Skill(Skills.counter++, "Packer", "Server provisioning", [
            CV.Metadatas.devops,
            CV.Metadatas.professional
        ]);
        Skills.powershell = new CV.Skill(Skills.counter++, "Powershell", "Microsoft's scripting language", [
            CV.Metadatas.cloud,
            CV.Metadatas.devops,
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
        Skills.teamcity = new CV.Skill(Skills.counter++, "Teamcity", "Continuous integration software", [
            CV.Metadatas.devops,
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
        Skills.xml = new CV.Skill(Skills.counter++, "XML", "A heavily used markup language", [
            CV.Metadatas.backEnd,
            CV.Metadatas.professional
        ]);
        Skills.all = [
            Skills.akkaDotNet,
            Skills.angularJs,
            Skills.aspDotNetMvc,
            Skills.aspDotNetWebforms,
            Skills.awsCloudformation,
            Skills.awsDynamoDB,
            Skills.awsEC2,
            Skills.awsLambda,
            Skills.awsKinesis,
            Skills.awsOpsworks,
            Skills.awsRedshift,
            Skills.awsSqs,
            Skills.awsS3,
            Skills.bashScripting,
            Skills.bootstrap,
            Skills.cake,
            Skills.chef,
            Skills.cPlusPlus,
            Skills.cordova,
            Skills.cSharp,
            Skills.css,
            Skills.continuousIntegration,
            Skills.d3,
            Skills.dotNetFramework,
            Skills.esSixPromises,
            Skills.fSharp,
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
            Skills.packer,
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
        SkillUsages.angularJsAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.angularJs.id, CV.Settings.abideFinancial.id);
        SkillUsages.akkaDotNetAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.akkaDotNet.id, CV.Settings.abideFinancial.id);
        SkillUsages.aspDotNetMvcFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Built websites with MVC pattern", CV.Skills.aspDotNetMvc.id, CV.Settings.fundslibrary.id);
        SkillUsages.aspDotNetMvcAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "Built websites with MVC pattern", CV.Skills.aspDotNetMvc.id, CV.Settings.abideFinancial.id);
        SkillUsages.aspDotNetWebFormsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Built websites with ASP.NET Webforms", CV.Skills.aspDotNetWebforms.id, CV.Settings.fundslibrary.id);
        SkillUsages.awsCloudformationAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsCloudformation.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsDynamoDBAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsDynamoDB.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsEC2AbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsEC2.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsLambdaAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsLambda.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsKinesisAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsKinesis.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsOpsworksAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsOpsworks.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsRedshiftAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsRedshift.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsSqsAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsSqs.id, CV.Settings.abideFinancial.id);
        SkillUsages.awsS3AbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.awsS3.id, CV.Settings.abideFinancial.id);
        SkillUsages.bashscriptingHome = new CV.SkillUsage(SkillUsages.counter++, "Using bash terminal", CV.Skills.bashScripting.id, CV.Settings.hobby.id);
        SkillUsages.bashscriptingGitBash = new CV.SkillUsage(SkillUsages.counter++, "Using git bash", CV.Skills.bashScripting.id, CV.Settings.fundslibrary.id);
        SkillUsages.bootstrapFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Made responsive websites", CV.Skills.bootstrap.id, CV.Settings.fundslibrary.id);
        SkillUsages.bootstrapChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Personal website CV page", CV.Skills.bootstrap.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.bootstrapAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.bootstrap.id, CV.Settings.abideFinancial.id);
        SkillUsages.cakeAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.cake.id, CV.Settings.abideFinancial.id);
        SkillUsages.chefAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.chef.id, CV.Settings.abideFinancial.id);
        SkillUsages.continuousIntegrationFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used Cruise control dot net to make builds, run tests.", CV.Skills.continuousIntegration.id, CV.Settings.fundslibrary.id);
        SkillUsages.continuousIntegrationAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.continuousIntegration.id, CV.Settings.abideFinancial.id);
        SkillUsages.cordovaHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.cordova.id, CV.Settings.hobby.id);
        SkillUsages.cPlusPlusToplevel = new CV.SkillUsage(SkillUsages.counter++, "Made modifications to existing C++ code.", CV.Skills.cPlusPlus.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cSharpToplevel = new CV.SkillUsage(SkillUsages.counter++, "Did some cSharp at toplevel", CV.Skills.cSharp.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cSharpFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "Did some cSharp at fundslibrary", CV.Skills.cSharp.id, CV.Settings.fundslibrary.id);
        SkillUsages.cSharpAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.cSharp.id, CV.Settings.abideFinancial.id);
        SkillUsages.cssToplevel = new CV.SkillUsage(SkillUsages.counter++, "Css", CV.Skills.css.id, CV.Settings.toplevelComputing.id);
        SkillUsages.cssFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "Css", CV.Skills.css.id, CV.Settings.fundslibrary.id);
        SkillUsages.cssChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.css.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.cssCodeclub = new CV.SkillUsage(SkillUsages.counter++, "Taught CSS at a codeclub", CV.Skills.css.id, CV.Settings.codeclub.id);
        SkillUsages.cssAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.css.id, CV.Settings.abideFinancial.id);
        SkillUsages.d3Fundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used D3 for charts and graphs.", CV.Skills.d3.id, CV.Settings.fundslibrary.id);
        SkillUsages.d3ChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Used D3 for this skills chart", CV.Skills.d3.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.dotNetFrameworkFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used .Net framework 4", CV.Skills.dotNetFramework.id, CV.Settings.fundslibrary.id);
        SkillUsages.dotNetFrameworkToplevel = new CV.SkillUsage(SkillUsages.counter++, "Used .Net framework 2 and 4", CV.Skills.dotNetFramework.id, CV.Settings.toplevelComputing.id);
        SkillUsages.dotNetFrameworkAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.dotNetFramework.id, CV.Settings.abideFinancial.id);
        SkillUsages.es6PromisesFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used Promise paradigm for asynchronous programming", CV.Skills.esSixPromises.id, CV.Settings.fundslibrary.id);
        SkillUsages.es6PromisesIonicApp = new CV.SkillUsage(SkillUsages.counter++, "Used Promise paradigm for asynchronous programming", CV.Skills.esSixPromises.id, CV.Settings.hobby.id);
        SkillUsages.fSharpHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.fSharp.id, CV.Settings.hobby.id);
        SkillUsages.fSharpAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.fSharp.id, CV.Settings.abideFinancial.id);
        SkillUsages.gitFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used git through git bash.", CV.Skills.git.id, CV.Settings.fundslibrary.id);
        SkillUsages.gitHobby = new CV.SkillUsage(SkillUsages.counter++, "Used git at home, have many remote repositories.", CV.Skills.git.id, CV.Settings.hobby.id);
        SkillUsages.gitAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.git.id, CV.Settings.abideFinancial.id);
        SkillUsages.gruntFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used grunt to compile less and typescript.", CV.Skills.grunt.id, CV.Settings.fundslibrary.id);
        SkillUsages.gruntChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "grunt compiles less, typescript, runs jasmine tests.", CV.Skills.grunt.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.htmlToplevel = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.toplevelComputing.id);
        SkillUsages.htmlFundsLibrary = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.fundslibrary.id);
        SkillUsages.htmlChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "HTML", CV.Skills.html.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.htmlCodeclub = new CV.SkillUsage(SkillUsages.counter++, "Taught HTML to kids at a codeclub", CV.Skills.html.id, CV.Settings.codeclub.id);
        SkillUsages.htmlAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.html.id, CV.Settings.abideFinancial.id);
        SkillUsages.ionicFrameworkHobby = new CV.SkillUsage(SkillUsages.counter++, "Used ionic framework to try and create cross platform app", CV.Skills.ionicFramework.id, CV.Settings.hobby.id);
        SkillUsages.jasmineFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.fundslibrary.id);
        SkillUsages.jasmineHobby = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.hobby.id);
        SkillUsages.jasmineChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "Used jasmine to run tests", CV.Skills.jasmine.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.javascriptFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Wrote javascript client side code", CV.Skills.javascript.id, CV.Settings.fundslibrary.id);
        SkillUsages.javascriptHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.javascript.id, CV.Settings.hobby.id);
        SkillUsages.jiraFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used JIRA to pick up tasks", CV.Skills.jira.id, CV.Settings.fundslibrary.id);
        SkillUsages.jiraAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.jira.id, CV.Settings.abideFinancial.id);
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
        SkillUsages.linqAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.linq.id, CV.Settings.abideFinancial.id);
        SkillUsages.linqToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.linq.id, CV.Settings.toplevelComputing.id);
        SkillUsages.moqFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used the mocking library to write C# tests", CV.Skills.moq.id, CV.Settings.fundslibrary.id);
        SkillUsages.moqAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.moq.id, CV.Settings.abideFinancial.id);
        SkillUsages.nunitFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used to run C# tests", CV.Skills.nunit.id, CV.Settings.fundslibrary.id);
        SkillUsages.nunitAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.nunit.id, CV.Settings.abideFinancial.id);
        SkillUsages.packerAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.packer.id, CV.Settings.abideFinancial.id);
        SkillUsages.powershellFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Automating tasks", CV.Skills.powershell.id, CV.Settings.fundslibrary.id);
        SkillUsages.octopusDeployAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.octopusDeploy.id, CV.Settings.abideFinancial.id);
        SkillUsages.powershellAbide = new CV.SkillUsage(SkillUsages.counter++, "Automating tasks", CV.Skills.powershell.id, CV.Settings.abideFinancial.id);
        SkillUsages.pythonHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.python.id, CV.Settings.hobby.id);
        SkillUsages.pythonAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.python.id, CV.Settings.abideFinancial.id);
        SkillUsages.pythonCodeclub = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.python.id, CV.Settings.codeclub.id);
        SkillUsages.resharperFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Used resharper", CV.Skills.resharper.id, CV.Settings.fundslibrary.id);
        SkillUsages.resharperAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.resharper.id, CV.Settings.abideFinancial.id);
        SkillUsages.resharperHobby = new CV.SkillUsage(SkillUsages.counter++, "Used resharper", CV.Skills.resharper.id, CV.Settings.hobby.id);
        SkillUsages.restWebservicesFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "Setup and maintained RESTFul webvices.", CV.Skills.restfulWebservices.id, CV.Settings.fundslibrary.id);
        SkillUsages.restWebservicesAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.restfulWebservices.id, CV.Settings.abideFinancial.id);
        SkillUsages.rlanguageHobby = new CV.SkillUsage(SkillUsages.counter++, "Used R for statistical analysis", CV.Skills.rlanguage.id, CV.Settings.hobby.id);
        SkillUsages.sourcesafeToplevel = new CV.SkillUsage(SkillUsages.counter++, "Used sourcesafe for source control", CV.Skills.sourceSafe.id, CV.Settings.toplevelComputing.id);
        SkillUsages.ssmsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.sqlServerManagementStudio.id, CV.Settings.toplevelComputing.id);
        SkillUsages.ssmsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.sqlServerManagementStudio.id, CV.Settings.fundslibrary.id);
        SkillUsages.ssmsAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.sqlServerManagementStudio.id, CV.Settings.abideFinancial.id);
        SkillUsages.tfsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tfs.id, CV.Settings.toplevelComputing.id);
        SkillUsages.teamcityAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.teamcity.id, CV.Settings.abideFinancial.id);
        SkillUsages.tSqlToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tSql.id, CV.Settings.toplevelComputing.id);
        SkillUsages.tSqlFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tSql.id, CV.Settings.fundslibrary.id);
        SkillUsages.tSqlAbideFinancial = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.tSql.id, CV.Settings.abideFinancial.id);
        SkillUsages.typescriptFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.fundslibrary.id);
        SkillUsages.typescriptHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.hobby.id);
        SkillUsages.typescriptChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.typescript.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.vsToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.toplevelComputing.id);
        SkillUsages.vsAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.abideFinancial.id);
        SkillUsages.vsFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.fundslibrary.id);
        SkillUsages.vsHobby = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.hobby.id);
        SkillUsages.vsChesterBurbidgeDotCom = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.visualStudio.id, CV.Settings.chesterBurbidgeDotCom.id);
        SkillUsages.vbDotNetToplevel = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.vbDotNet.id, CV.Settings.toplevelComputing.id);
        SkillUsages.xsltFundslibrary = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.xslt.id, CV.Settings.fundslibrary.id);
        SkillUsages.xmlAbide = new CV.SkillUsage(SkillUsages.counter++, "", CV.Skills.xml.id, CV.Settings.abideFinancial.id);
        SkillUsages.all = [
            SkillUsages.angularJsIonicApp,
            SkillUsages.angularJsAbideFinancial,
            SkillUsages.akkaDotNetAbideFinancial,
            SkillUsages.aspDotNetMvcFundslibrary,
            SkillUsages.aspDotNetMvcAbideFinancial,
            SkillUsages.aspDotNetWebFormsFundslibrary,
            SkillUsages.awsCloudformationAbideFinancial,
            SkillUsages.awsDynamoDBAbideFinancial,
            SkillUsages.awsEC2AbideFinancial,
            SkillUsages.awsLambdaAbideFinancial,
            SkillUsages.awsKinesisAbideFinancial,
            SkillUsages.awsOpsworksAbideFinancial,
            SkillUsages.awsRedshiftAbideFinancial,
            SkillUsages.awsSqsAbideFinancial,
            SkillUsages.awsS3AbideFinancial,
            SkillUsages.bashscriptingGitBash,
            SkillUsages.bashscriptingHome,
            SkillUsages.bootstrapChesterBurbidgeDotCom,
            SkillUsages.bootstrapFundslibrary,
            SkillUsages.bootstrapAbideFinancial,
            SkillUsages.cakeAbideFinancial,
            SkillUsages.chefAbideFinancial,
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
            SkillUsages.fSharpAbideFinancial,
            SkillUsages.fSharpHobby,
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
            SkillUsages.octopusDeployAbide,
            SkillUsages.packerAbideFinancial,
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
})(CV || (CV = {}));
//# sourceMappingURL=CvData.js.map
var App;
(function (App) {
    var IdAndActiveSorter = (function () {
        function IdAndActiveSorter(cVData) {
            this.cVData = cVData;
        }
        IdAndActiveSorter.prototype.forInitial = function () {
            return new IdAndActiveCvData(this.cVData.skills.map(function (s) { return new IdAndActive(s.id, true); }), this.cVData.skillUsages.map(function (su) { return new IdAndActive(su.skillUsageId, true); }), this.cVData.settings.map(function (s) { return new IdAndActive(s.id, true); }), this.cVData.metadatas.map(function (m) { return new IdAndActive(m.id, true); }));
        };
        IdAndActiveSorter.prototype.forSkill = function (skillId) {
            var skills = this.cVData.skills.map(function (s) {
                return new IdAndActive(s.id, s.id === skillId);
            });
            var skillUsagesWithSkill = this.cVData.skillUsages.filter(function (su) { return su.skillId === skillId; });
            var settingIdsSkillsUsedIn = skillUsagesWithSkill.map(function (su) { return su.settingId; });
            var settings = this.cVData.settings.map(function (s) {
                var exists = settingIdsSkillsUsedIn.indexOf(s.id) > -1;
                return new IdAndActive(s.id, exists);
            });
            var skill = this.cVData.skills.filter(function (s) { return s.id === skillId; })[0];
            var metadataIds = skill.metadatas.map(function (m) { return m.id; });
            var metadatas = this.cVData.metadatas.map(function (m) {
                var exists = metadataIds.indexOf(m.id) > -1;
                return new IdAndActive(m.id, exists);
            });
            return new IdAndActiveCvData(skills, [], settings, metadatas);
        };
        IdAndActiveSorter.prototype.forSetting = function (settingId) {
            var settings = this.cVData.settings.map(function (s) {
                return new IdAndActive(s.id, s.id === settingId);
            });
            var skillIdsUsedInSetting = this.cVData.skillUsages
                .filter(function (su) { return su.settingId === settingId; })
                .map(function (su) { return su.skillId; });
            var skills = this.cVData.skills.map(function (s) {
                var used = skillIdsUsedInSetting.indexOf(s.id) > -1;
                return new IdAndActive(s.id, used);
            });
            var metadatas = this.cVData.metadatas.map(function (m) { return new IdAndActive(m.id, false); });
            return new IdAndActiveCvData(skills, [], settings, metadatas);
        };
        IdAndActiveSorter.prototype.forMetadata = function (metadataId) {
            var skills = this.cVData.skills.map(function (s) {
                var skillContainsMetadata = s.metadatas.some(function (m) { return m.id === metadataId; });
                return new IdAndActive(s.id, skillContainsMetadata);
            });
            var settings = this.cVData.settings.map(function (s) { return new IdAndActive(s.id, false); });
            var metadatas = this.cVData.metadatas.map(function (m) { return new IdAndActive(m.id, m.id === metadataId); });
            return new IdAndActiveCvData(skills, [], settings, metadatas);
        };
        IdAndActiveSorter.prototype.forSelected = function (selected) {
            if (selected.allSelected)
                return this.forInitial();
            if (selected.metadataSelected)
                return this.forMetadata(selected.metadata);
            if (selected.skillSelected)
                return this.forSkill(selected.skill);
            if (selected.settingSelected)
                return this.forSetting(selected.setting);
            throw "Aww shiz";
        };
        return IdAndActiveSorter;
    }());
    App.IdAndActiveSorter = IdAndActiveSorter;
    var IdAndActive = (function () {
        function IdAndActive(id, isActive) {
            this.id = id;
            this.isActive = isActive;
        }
        return IdAndActive;
    }());
    App.IdAndActive = IdAndActive;
    var IdAndActiveCvData = (function () {
        function IdAndActiveCvData(skills, skillUsages, settings, metadatas) {
            this.skills = skills;
            this.skillUsages = skillUsages;
            this.settings = settings;
            this.metadatas = metadatas;
        }
        IdAndActiveCvData.prototype.skillActive = function (id) {
            return this.skills.filter(function (s) { return s.id === id; })[0].isActive;
        };
        IdAndActiveCvData.prototype.settingActive = function (id) {
            return this.settings.filter(function (s) { return s.id === id; })[0].isActive;
        };
        IdAndActiveCvData.prototype.metadataActive = function (id) {
            return this.metadatas.filter(function (s) { return s.id === id; })[0].isActive;
        };
        return IdAndActiveCvData;
    }());
    App.IdAndActiveCvData = IdAndActiveCvData;
})(App || (App = {}));
//# sourceMappingURL=IdAndActive.js.map
var App;
(function (App) {
    var Information = (function () {
        function Information(cvData) {
            this.cvData = cvData;
        }
        Information.prototype.forSelected = function (selected) {
            if (selected.allSelected)
                return new TitleAndDescription("", []);
            if (selected.metadataSelected) {
                var metadata = this.cvData.metadatas.filter(function (m) { return m.id === selected.metadata; })[0];
                var title = metadata.name + ":";
                return new TitleAndDescription(title, [metadata.description]);
            }
            if (selected.settingSelected) {
                var setting = this.cvData.settings.filter(function (m) { return m.id === selected.setting; })[0];
                var startDate = setting.dateRange.startDate.getFullYear() + "/" + setting.dateRange.startDate.getMonth();
                var endDate = setting.dateRange.endDate.getFullYear() + "/" + setting.dateRange.endDate.getMonth();
                var title = setting.name + ":";
                var description = startDate + " -> " + endDate + " - " + setting.description;
                return new TitleAndDescription(title, [description]);
            }
            var skill = this.cvData.skills.filter(function (m) { return m.id === selected.skill; })[0];
            var title = skill.name + ":";
            return new TitleAndDescription(title, [skill.description]);
        };
        return Information;
    }());
    App.Information = Information;
    var TitleAndDescription = (function () {
        function TitleAndDescription(title, description) {
            this.title = title;
            this.description = description;
        }
        return TitleAndDescription;
    }());
    App.TitleAndDescription = TitleAndDescription;
})(App || (App = {}));
//# sourceMappingURL=Information.js.map
var App;
(function (App) {
    var Scaled = (function () {
        function Scaled(scaled) {
            this.scaled = scaled;
        }
        Scaled.prototype.getForId = function (id) {
            var result = this.scaled.filter(function (s) { return s.id === id; });
            return result[0];
        };
        return Scaled;
    }());
    App.Scaled = Scaled;
    var LengthScaler = (function () {
        function LengthScaler(cVData) {
            this.cVData = cVData;
        }
        LengthScaler.getMinDate = function (settings) {
            return settings.reduce(function (acc, s) {
                if (acc < s.dateRange.startDate)
                    return acc;
                return s.dateRange.startDate;
            }, new Date());
        };
        LengthScaler.getMaxDate = function (settings) {
            return settings.reduce(function (acc, s) {
                if (acc > s.dateRange.endDate)
                    return acc;
                return s.dateRange.endDate;
            }, new Date(2000, 1));
        };
        LengthScaler.prototype.getSettings = function () {
            var minDate = LengthScaler.getMinDate(this.cVData.settings);
            var maxDate = LengthScaler.getMaxDate(this.cVData.settings);
            var diff = maxDate.valueOf() - minDate.valueOf();
            return new Scaled(this.cVData.settings.map(function (s) {
                var start = (s.dateRange.startDate.valueOf() - minDate.valueOf()) / diff;
                var end = (s.dateRange.endDate.valueOf() - minDate.valueOf()) / diff;
                return new ScaleAndLevel(s.id, start, end, 1);
            }));
        };
        LengthScaler.prototype.getMetadatas = function () {
            var numberOfMetadatas = this.cVData.metadatas.length;
            var scaleForEach = 1 / numberOfMetadatas;
            return new Scaled(this.cVData.metadatas.map(function (value, index, arr) {
                var start = index * scaleForEach;
                var end = start + scaleForEach;
                return new ScaleAndLevel(value.id, start, end, 1);
            }));
        };
        return LengthScaler;
    }());
    App.LengthScaler = LengthScaler;
    var ScaleAndLevel = (function () {
        function ScaleAndLevel(id, start, end, level) {
            this.id = id;
            this.start = start;
            this.end = end;
            this.level = level;
        }
        return ScaleAndLevel;
    }());
    App.ScaleAndLevel = ScaleAndLevel;
})(App || (App = {}));
//# sourceMappingURL=LengthScaler.js.map
var App;
(function (App) {
    var ColourRandomiser = (function () {
        function ColourRandomiser(colours) {
            this.colours = colours;
        }
        ColourRandomiser.prototype.mix = function () {
            var index = Math.floor(Math.random() * this.colours.length);
            return this.colours[index];
        };
        return ColourRandomiser;
    }());
    App.ColourRandomiser = ColourRandomiser;
    var Colours = (function () {
        function Colours(cVData, mixer) {
            this.cVData = cVData;
            this.mixer = mixer;
            this.settings = cVData.settings.map(function (s) { return new IdAndColour(s.id, mixer.mix()); });
            this.skills = cVData.skills.map(function (s) { return new IdAndColour(s.id, mixer.mix()); });
            this.metadatas = cVData.metadatas.map(function (s) { return new IdAndColour(s.id, mixer.mix()); });
        }
        Colours.prototype.getMetadata = function (id, selected, idsAndActives) {
            if (selected.allSelected || selected.settingSelected || selected.metadataSelected) {
                return this.getOriginalMetadata(id);
            }
            if (idsAndActives.metadataActive(id)) {
                return this.getOriginalSkill(selected.skill);
            }
            return this.getOriginalMetadata(id);
        };
        Colours.prototype.getSetting = function (id, selected, idsAndActives) {
            if (selected.allSelected || selected.metadataSelected || selected.settingSelected) {
                return this.getOriginalSetting(id);
            }
            if (idsAndActives.settingActive(id)) {
                return this.getOriginalSkill(selected.skill);
            }
            this.getOriginalSkill(selected.skill);
        };
        Colours.prototype.getSkill = function (id, selected, idsAndActives) {
            if (selected.allSelected || selected.skillSelected) {
                return this.getOriginalSkill(id);
            }
            if (selected.metadataSelected && idsAndActives.skillActive(id)) {
                return this.getOriginalMetadata(selected.metadata);
            }
            if (selected.settingSelected && idsAndActives.skillActive(id)) {
                return this.getOriginalSetting(selected.setting);
            }
            return this.getOriginalSkill(id);
        };
        Colours.prototype.getOriginalMetadata = function (id) {
            return this.metadatas.filter(function (m) { return m.id === id; })[0].colour;
        };
        Colours.prototype.getOriginalSetting = function (id) {
            return this.settings.filter(function (m) { return m.id === id; })[0].colour;
        };
        Colours.prototype.getOriginalSkill = function (id) {
            return this.skills.filter(function (m) { return m.id === id; })[0].colour;
        };
        return Colours;
    }());
    App.Colours = Colours;
    var IdAndColour = (function () {
        function IdAndColour(id, colour) {
            this.id = id;
            this.colour = colour;
        }
        return IdAndColour;
    }());
    App.IdAndColour = IdAndColour;
})(App || (App = {}));
//# sourceMappingURL=Colours.js.map
var App;
(function (App) {
    var SettingStartAndWidth = (function () {
        function SettingStartAndWidth(id, start, width) {
            this.id = id;
            this.start = start;
            this.width = width;
        }
        return SettingStartAndWidth;
    }());
    App.SettingStartAndWidth = SettingStartAndWidth;
    var SelectedLocation = (function () {
        function SelectedLocation(midMetadataAngle, settingScaleAndLevel, diameter, settingStartAndWidths) {
            this.midMetadataAngle = midMetadataAngle;
            this.settingScaleAndLevel = settingScaleAndLevel;
            this.diameter = diameter;
            this.settingStartAndWidths = settingStartAndWidths;
        }
        return SelectedLocation;
    }());
    App.SelectedLocation = SelectedLocation;
    var Selected = (function () {
        function Selected(skill, setting, metadata) {
            this.skill = skill;
            this.setting = setting;
            this.metadata = metadata;
            this.allSelected = skill == null && setting == null && metadata == null;
            this.skillSelected = skill != null;
            this.settingSelected = setting != null;
            this.metadataSelected = metadata != null;
        }
        Selected.fromMetadata = function (id) {
            return new Selected(null, null, id);
        };
        Selected.fromSkill = function (id) {
            return new Selected(id, null, null);
        };
        Selected.fromSetting = function (id) {
            return new Selected(null, id, null);
        };
        Selected.initial = function () {
            return new Selected(null, null, null);
        };
        return Selected;
    }());
    App.Selected = Selected;
})(App || (App = {}));
//# sourceMappingURL=Selected.js.map
var App;
(function (App) {
    var Center = (function () {
        function Center(cx, cy) {
            this.cx = cx;
            this.cy = cy;
        }
        return Center;
    }());
    App.Center = Center;
    var SelectedSkillInMiddleOfOthers = (function () {
        function SelectedSkillInMiddleOfOthers(cvData, offset) {
            this.cvData = cvData;
            this.offset = offset;
            this.circleNumberByRadiuses = {
                3: 7, 4: 10, 5: 13,
                6: 18, 7: 14, 8: 20
            };
        }
        SelectedSkillInMiddleOfOthers.prototype.getNumberOfRadiusAndRemainder = function (numberOfSkills) {
            var circles = 1;
            var currentIndex = 3;
            while (currentIndex < 100) {
                if (circles + this.circleNumberByRadiuses[currentIndex] > numberOfSkills) {
                    var remainder = numberOfSkills - circles;
                    return {
                        radii: currentIndex,
                        remainder: remainder
                    };
                }
                circles += this.circleNumberByRadiuses[currentIndex];
                currentIndex++;
            }
        };
        SelectedSkillInMiddleOfOthers.prototype.getPositionsForCircles = function (fullRadii, remainder, circleRadius) {
            var _this = this;
            var positions = [];
            for (var index = 3; index < fullRadii; index++) {
                var circlesInShell = this.circleNumberByRadiuses[index];
                var radsPerCircle = Math.PI * 2 / circlesInShell;
                for (var circleNum = 0; circleNum < circlesInShell; circleNum++) {
                    var rads = circleNum * radsPerCircle;
                    var cy = Math.sin(rads) * index * circleRadius * 2;
                    var cx = Math.cos(rads) * index * circleRadius * 2;
                    positions.push(new Center(cx, cy));
                }
            }
            var lastIndex = fullRadii + 1;
            var radsPerRemainder = Math.PI * 2 / remainder;
            for (var circleNum = 0; circleNum < remainder; circleNum++) {
                var rads = circleNum * radsPerRemainder;
                var cy = Math.sin(rads) * index * circleRadius * 2;
                var cx = Math.cos(rads) * index * circleRadius * 2;
                positions.push(new Center(cx, cy));
            }
            return positions.map(function (p) { return new Center(p.cx + _this.offset.cx, p.cy + _this.offset.cy); });
        };
        SelectedSkillInMiddleOfOthers.prototype.forSkill = function (idOfSelected, circleRadius) {
            var middleCircle = new SkillCircle(idOfSelected, this.offset.cx, this.offset.cy, circleRadius);
            var radiiAndRemainder = this.getNumberOfRadiusAndRemainder(this.cvData.skills.length);
            var positions = this.getPositionsForCircles(radiiAndRemainder.radii, radiiAndRemainder.remainder, circleRadius);
            var skillsOnOutside = this.cvData.skills.filter(function (s) { return s.id !== idOfSelected; });
            var skillsPositions = skillsOnOutside.map(function (s, i) { return new SkillCircle(s.id, positions[i].cx, positions[i].cy, circleRadius); });
            return new SkillCircles([middleCircle].concat(skillsPositions));
        };
        return SelectedSkillInMiddleOfOthers;
    }());
    App.SelectedSkillInMiddleOfOthers = SelectedSkillInMiddleOfOthers;
    var ScaledPosition = (function () {
        function ScaledPosition(id, scaled, lineNumber) {
            this.id = id;
            this.scaled = scaled;
            this.lineNumber = lineNumber;
        }
        return ScaledPosition;
    }());
    App.ScaledPosition = ScaledPosition;
    var ScaledPositions = (function () {
        function ScaledPositions(positions) {
            this.positions = positions;
        }
        ScaledPositions.prototype.getId = function (id) {
            return this.positions.filter(function (p) { return p.id === id; })[0];
        };
        return ScaledPositions;
    }());
    App.ScaledPositions = ScaledPositions;
    var MultipleLineScaler = (function () {
        function MultipleLineScaler(elementWidth, length) {
            this.elementWidth = elementWidth;
            this.length = length;
        }
        MultipleLineScaler.prototype.scale = function (idAndActives) {
            var activeSkills = idAndActives;
            var numberOfTimeCirclesFitOntoLine = Math.floor(this.length / this.elementWidth);
            var numberOfLines = Math.ceil(activeSkills.length / numberOfTimeCirclesFitOntoLine);
            var numberOfCirclesOnEachLine = Math.ceil(activeSkills.length / numberOfLines);
            var positions = idAndActives.map(function (value, index, arr) {
                var lineNum = Math.floor(index / numberOfCirclesOnEachLine);
                var linePercentage = (index % numberOfCirclesOnEachLine) / numberOfCirclesOnEachLine;
                return new ScaledPosition(value.id, linePercentage, lineNum);
            });
            return new ScaledPositions(positions);
        };
        return MultipleLineScaler;
    }());
    App.MultipleLineScaler = MultipleLineScaler;
    var SkillsInLineToMiddleOfMetaData = (function () {
        function SkillsInLineToMiddleOfMetaData() {
        }
        SkillsInLineToMiddleOfMetaData.prototype.forSkills = function (idsAndActiveCvData, selectedLocation, circleRadius) {
            var radius = selectedLocation.diameter / 2;
            var endX = radius * Math.cos(selectedLocation.midMetadataAngle);
            var endY = radius * Math.sin(selectedLocation.midMetadataAngle);
            var circleDiameter = circleRadius * 2;
            var activeSkills = idsAndActiveCvData.skills.filter(function (s) { return s.isActive; });
            var inactiveSkills = idsAndActiveCvData.skills.filter(function (s) { return s.isActive === false; });
            var activeSkillsLineScaler = new MultipleLineScaler(circleDiameter, radius);
            var positions = activeSkillsLineScaler.scale(activeSkills);
            var activeCircles = activeSkills.map(function (value, index, array) {
                var position = positions.getId(value.id);
                var cx = endX * position.scaled + (position.lineNumber * circleDiameter);
                var cy = endY * position.scaled;
                return new SkillCircle(value.id, cx, cy, circleRadius);
            });
            var random = new RandomlySpreadInSemiCircle();
            var inactiveCircles = random.forSkills(inactiveSkills, selectedLocation, circleRadius);
            return new SkillCircles(activeCircles.concat(inactiveCircles));
        };
        return SkillsInLineToMiddleOfMetaData;
    }());
    App.SkillsInLineToMiddleOfMetaData = SkillsInLineToMiddleOfMetaData;
    var SkillsAlongSettings = (function () {
        function SkillsAlongSettings() {
        }
        SkillsAlongSettings.prototype.forSkills = function (idsAndActive, selectedLocation, circleRadius, offset) {
            var selectedSettingId = idsAndActive.settings.filter(function (m) { return m.isActive; })[0].id;
            var startAndWidth = selectedLocation.settingStartAndWidths.filter(function (s) { return s.id === selectedSettingId; })[0];
            var width = startAndWidth.width;
            var scaler = new MultipleLineScaler(circleRadius, width);
            var activeSkills = idsAndActive.skills.filter(function (s) { return s.isActive; });
            var inactiveSkills = idsAndActive.skills.filter(function (s) { return s.isActive === false; });
            var scaledPositions = scaler.scale(activeSkills);
            var activeCircles = scaledPositions.positions.map(function (s) {
                var cx = startAndWidth.start + s.scaled * width + offset.cx;
                var cy = circleRadius * 2 * s.lineNumber + offset.cy;
                return new SkillCircle(s.id, cx, cy, circleRadius);
            });
            var randomSpread = new RandomlySpreadInSemiCircle();
            var inactiveCircles = randomSpread.forSkills(inactiveSkills, selectedLocation, circleRadius);
            return new SkillCircles(activeCircles.concat(inactiveCircles));
        };
        return SkillsAlongSettings;
    }());
    App.SkillsAlongSettings = SkillsAlongSettings;
    var RandomlySpreadInSemiCircle = (function () {
        function RandomlySpreadInSemiCircle() {
        }
        RandomlySpreadInSemiCircle.prototype.forSkills = function (idsAndActive, selectedLocation, circleRadius) {
            return idsAndActive.map(function (value, index, arr) {
                var randomAngle = Math.PI * Math.random() - (Math.PI);
                var randomDist = Math.random() * (selectedLocation.diameter / 2) * 0.7;
                var cx = Math.cos(randomAngle) * randomDist;
                var cy = Math.sin(randomAngle) * randomDist;
                return new SkillCircle(value.id, cx, cy, circleRadius);
            });
        };
        return RandomlySpreadInSemiCircle;
    }());
    App.RandomlySpreadInSemiCircle = RandomlySpreadInSemiCircle;
    var SkillCirclesCalculator = (function () {
        function SkillCirclesCalculator(cvData) {
            var _this = this;
            this.cvData = cvData;
            this.forSelected = function (selected, selectedLocation, idsAndActiveCvData) {
                var that = _this;
                var circleRadius = 10;
                var distanceBetweenCircles = circleRadius * 2 + 5;
                if (selected.skillSelected) {
                    var halfRadiusUp = -1 * (selectedLocation.diameter / 2 / 2);
                    var offset = new Center(0, halfRadiusUp);
                    var selectedSkillInMiddle = new SelectedSkillInMiddleOfOthers(_this.cvData, offset);
                    return selectedSkillInMiddle.forSkill(selected.skill, circleRadius);
                }
                if (selected.metadataSelected) {
                    var skillsInLineToMiddleOfMetaData = new SkillsInLineToMiddleOfMetaData();
                    return skillsInLineToMiddleOfMetaData.forSkills(idsAndActiveCvData, selectedLocation, circleRadius);
                }
                if (selected.settingSelected) {
                    var skillsAlongSettings = new SkillsAlongSettings();
                    var offset = new Center(-1 * selectedLocation.diameter / 2, 0);
                    return skillsAlongSettings.forSkills(idsAndActiveCvData, selectedLocation, circleRadius, offset);
                }
                return new SkillCircles(_this.cvData.skills.map(function (s) {
                    var sqRootModulus = Math.ceil(Math.sqrt(that.cvData.skills.length));
                    var sqrtMod = s.id % sqRootModulus;
                    var x = sqrtMod * distanceBetweenCircles - sqRootModulus * 0.5 * distanceBetweenCircles;
                    var propOfTotal = s.id / sqRootModulus;
                    var y = Math.floor(propOfTotal) * distanceBetweenCircles + distanceBetweenCircles;
                    return new SkillCircle(s.id, -x, -y, circleRadius);
                }));
            };
        }
        return SkillCirclesCalculator;
    }());
    App.SkillCirclesCalculator = SkillCirclesCalculator;
    var SkillCircles = (function () {
        function SkillCircles(circles) {
            this.circles = circles;
        }
        SkillCircles.prototype.forId = function (id) {
            return this.circles.filter(function (c) { return c.id === id; })[0];
        };
        return SkillCircles;
    }());
    App.SkillCircles = SkillCircles;
    var SkillCircle = (function () {
        function SkillCircle(id, cx, cy, radius) {
            this.id = id;
            this.cx = cx;
            this.cy = cy;
            this.radius = radius;
        }
        return SkillCircle;
    }());
    App.SkillCircle = SkillCircle;
})(App || (App = {}));
//# sourceMappingURL=SkillCircle.js.map
var App;
(function (App) {
    var ChartConfig = (function () {
        function ChartConfig(semiCircleRadius, semiCircleWidth, settingWidth, colours) {
            this.semiCircleRadius = semiCircleRadius;
            this.semiCircleWidth = semiCircleWidth;
            this.settingWidth = settingWidth;
            this.colours = colours;
            this.width = 2 * semiCircleRadius + 2 * semiCircleWidth;
            this.height = semiCircleRadius * 2.5 + semiCircleWidth;
            this.innerRadius = semiCircleRadius - semiCircleWidth;
        }
        ChartConfig.Standard = new ChartConfig(400, 25, 30, [
            "maroon", "red", "purple", "fuchsia",
            "green", "olive"]);
        return ChartConfig;
    }());
    var Skills = (function () {
        function Skills() {
        }
        Skills.go = function () {
            var divSvg = d3.select("#skills_svg");
            divSvg.select("svg").remove();
            var config = ChartConfig.Standard;
            var cvData = CV.CVData.getData();
            var skillUsedTextSize = 10;
            var height = config.height + cvData.skills.length * skillUsedTextSize;
            var svg = divSvg.append("svg")
                .attr("width", config.width)
                .attr("height", height);
            var rectBackground = svg
                .append("rect")
                .attr("width", config.width)
                .attr("height", config.height)
                .attr("opacity", 0);
            var idAndActiveSorter = new App.IdAndActiveSorter(cvData);
            var colours = new App.Colours(cvData, new App.ColourRandomiser(config.colours));
            var lengthScaler = new App.LengthScaler(cvData);
            var moveToMiddle = "translate(" + config.width / 2 + "," + (config.semiCircleRadius + config.semiCircleWidth) + ")";
            var settingsScaled = lengthScaler.getSettings();
            var settingsXStart = config.semiCircleWidth * 2;
            var settingsYStart = config.semiCircleRadius + (config.settingWidth * 3);
            var moveToLeftHandSideOfSemiCircle = "translate(" + settingsXStart + "," + settingsYStart + ")";
            var settingsLength = config.innerRadius * 2;
            var gapBetweenSettings = 2;
            function getSettingStart(id) {
                var scaled = settingsScaled;
                var setting = scaled.getForId(id);
                return setting.start * settingsLength;
            }
            function getSettingWidth(id) {
                var scaled = settingsScaled;
                var setting = scaled.getForId(id);
                var width = (setting.end - setting.start) * settingsLength;
                return width;
            }
            var settingsGroup = svg
                .append("g")
                .attr("transform", moveToLeftHandSideOfSemiCircle)
                .attr("class", "settings");
            settingsGroup
                .selectAll("g")
                .data(cvData.settings)
                .enter()
                .append("g")
                .attr("class", "setting");
            settingsGroup
                .selectAll("g.setting")
                .append("rect")
                .attr("height", function (d) { return config.settingWidth - gapBetweenSettings; })
                .attr("width", function (d) { return getSettingWidth(d.id); })
                .attr("x", function (d) { return getSettingStart(d.id); })
                .attr("y", function (d) {
                var setting = settingsScaled.getForId(d.id);
                return setting.id * config.settingWidth;
            })
                .attr("fill", function (d) { return colours.getSetting(d.id, App.Selected.initial(), idAndActiveSorter.forInitial()); });
            var settingsAndStartWidth = cvData.settings.map(function (s) { return new App.SettingStartAndWidth(s.id, getSettingStart(s.id), getSettingWidth(s.id)); });
            settingsGroup
                .selectAll("g.setting")
                .append("text")
                .text(function (d) { return d.name; })
                .attr("y", function (d) { return (d.id + 0.5) * config.settingWidth; });
            var minDate = App.LengthScaler.getMinDate(cvData.settings);
            var maxDate = App.LengthScaler.getMaxDate(cvData.settings);
            var x = d3.time.scale()
                .domain([minDate, d3.time.month.offset(maxDate, 1)])
                .rangeRound([0, settingsLength]);
            var showTickEveryMonths = 4;
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(d3.time.month, showTickEveryMonths)
                .tickFormat(d3.time.format('%m/%Y'))
                .tickSize(3)
                .tickPadding(5);
            var timeScaleTranslate = 'translate(' + settingsXStart + ', ' + (settingsYStart - config.settingWidth) + ')';
            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', timeScaleTranslate)
                .call(xAxis);
            var textOffset = config.semiCircleWidth * 0.7;
            function inThenOutInner(d, i) {
                var multiplyBy = i % 2 === 0 ? 1 : -1;
                return config.innerRadius + multiplyBy * config.semiCircleWidth - textOffset;
            }
            function inThenOutOuter(d, i) {
                var multiplyBy = i % 2 === 0 ? 1 : -1;
                return config.innerRadius + config.semiCircleWidth + multiplyBy * config.semiCircleWidth - textOffset;
            }
            function radialBitsStartAngle(id, scaled, radialOffset) {
                var scaledValue = scaled.getForId(id);
                return Math.PI * scaledValue.start + radialOffset;
            }
            function radialBitsEndAngle(id, scaled, radialOffset) {
                var scaledValue = scaled.getForId(id);
                return Math.PI * scaledValue.end + radialOffset;
            }
            var halfRadialGap = 0.005;
            function slightlyShrunkRadialBitsStartAngle(id, scaled, radialOffset) {
                return radialBitsStartAngle(id, scaled, radialOffset) + halfRadialGap;
            }
            function slightlyShrunkRadialBitsEndAngle(id, scaled, radialOffset) {
                return radialBitsEndAngle(id, scaled, radialOffset) - halfRadialGap;
            }
            function twiceLongRadialEndAngle(id, scaled, radialOffset) {
                var end = radialBitsEndAngle(id, scaled, radialOffset);
                var start = radialBitsStartAngle(id, scaled, radialOffset);
                return (end - start) * 2 + start;
            }
            var metadatasScaled = lengthScaler.getMetadatas();
            function getMetadataStartAngle(id) {
                var scaled = metadatasScaled;
                return slightlyShrunkRadialBitsStartAngle(id, scaled, -Math.PI / 2);
            }
            function getMetadataEndAngle(id) {
                var scaled = metadatasScaled;
                return slightlyShrunkRadialBitsEndAngle(id, scaled, -Math.PI / 2);
            }
            function getDoubleMetadataEndAngle(id) {
                var scaled = metadatasScaled;
                return twiceLongRadialEndAngle(id, scaled, -Math.PI / 2);
            }
            var metadatasArc = d3.svg.arc()
                .innerRadius(function (d, i) { return config.innerRadius; })
                .outerRadius(function (d, i) { return config.innerRadius + config.semiCircleWidth; })
                .startAngle(function (d) { return getMetadataStartAngle(d.id); })
                .endAngle(function (d) { return getMetadataEndAngle(d.id); });
            var metadatasTextArc = d3.svg.arc()
                .innerRadius(function (d, i) { return inThenOutInner(d, i); })
                .outerRadius(function (d, i) { return inThenOutOuter(d, i); })
                .startAngle(function (d) { return getMetadataStartAngle(d.id); })
                .endAngle(function (d) { return getDoubleMetadataEndAngle(d.id); });
            var metadatasGroup = svg
                .append("g")
                .attr("transform", moveToMiddle)
                .attr("class", "metadatas");
            metadatasGroup
                .selectAll("g")
                .data(cvData.metadatas)
                .enter()
                .append("g")
                .attr("class", "metadata");
            metadatasGroup
                .selectAll("g.metadata")
                .append("path")
                .attr("class", "metadata-path")
                .attr("d", metadatasArc)
                .attr("fill", function (d) { return colours.getMetadata(d.id, App.Selected.initial(), idAndActiveSorter.forInitial()); });
            metadatasGroup
                .selectAll("g.metadata")
                .append("path")
                .attr("d", metadatasTextArc)
                .attr("fill", "none")
                .attr("id", function (d) { return "met" + d.id; });
            metadatasGroup
                .selectAll("g.metadata")
                .append("text")
                .append("textPath")
                .attr("xlink:href", function (d) { return "#met" + d.id; })
                .text(function (d) { return d.name; });
            var skillCirclesCalculator = new App.SkillCirclesCalculator(cvData);
            var initialLocation = skillCirclesCalculator.forSelected(App.Selected.initial(), null, null);
            var skillsGroup = svg
                .append("g")
                .attr("transform", moveToMiddle)
                .attr("class", "circles");
            var skillCircleXValues = {};
            var skillIds = cvData.skills.map(function (s) { return s.id; });
            function mousemove() {
                var mouse = d3.mouse(skillsGroup.node());
                var mouseX = mouse[0];
                if (!skillCircleXValues[0]) {
                    skillGroups[0].map(function (elem) {
                        var attributes = elem.attributes;
                        var skillX = detranslateX(attributes.getNamedItem("transform").value);
                        var id = elem.__data__.id;
                        skillCircleXValues[id] = skillX;
                    });
                }
                var skillIdsToShow = skillIds.filter(function (s) {
                    var skillX = skillCircleXValues[s];
                    var diff = Math.abs(mouseX - skillX);
                    var proximity = circleDiameter / 1.5;
                    if (diff < proximity) {
                        return true;
                    }
                    return false;
                });
                skillLabels.attr("opacity", function (d) {
                    if (skillIdsToShow.indexOf(d.id) === -1) {
                        return 0;
                    }
                    return 1;
                });
            }
            rectBackground.on("mousemove", mousemove);
            function translate(x, y) {
                return "translate(" + x + " , " + y + " )";
            }
            function detranslateX(translateString) {
                var minusWordANdBrackets = translateString
                    .replace("translate(", "")
                    .replace(")", "");
                var split = minusWordANdBrackets.split(",");
                return parseFloat(split[0]);
            }
            var skillGroups = skillsGroup
                .selectAll("g")
                .data(cvData.skills)
                .enter()
                .append("g")
                .attr("class", "skill")
                .attr("transform", function (d) {
                var x = initialLocation.forId(d.id).cx;
                var y = initialLocation.forId(d.id).cy;
                return translate(x, y);
            });
            var skillGroupCircles = skillGroups
                .append("circle")
                .attr("r", function (d, i) { return initialLocation.forId(d.id).radius; })
                .attr("fill", function (d, i) { return colours.getSkill(d.id, App.Selected.initial(), idAndActiveSorter.forInitial()); });
            var circleDiameter = 20;
            var skillLabels = skillGroups
                .append("text")
                .text(function (d) { return d.name; })
                .attr("opacity", 0)
                .attr("y", circleDiameter * 1.2);
            var information = new App.Information(cvData);
            var settingsHeight = (cvData.settings.length + 2) * config.settingWidth;
            var informationTranslation = translate(settingsXStart, (settingsYStart + settingsHeight));
            var informationGroup = svg
                .append("g")
                .attr("class", "information")
                .attr("transform", informationTranslation);
            var titleTextSize = 30;
            var informationTitle = informationGroup
                .append("text")
                .attr("class", "information-title")
                .attr("font-size", titleTextSize)
                .text("Click on things");
            var informationDescription = informationGroup
                .append("text")
                .attr("class", "information-description")
                .attr("y", titleTextSize);
            function updateSettingAndMetadataInfos(selected, idsAndSelected) {
                var activeSettingIds = idsAndSelected.settings
                    .filter(function (s) { return s.isActive; })
                    .map(function (s) { return s.id; });
                var settingsActive = cvData.settings.filter(function (s) { return activeSettingIds.indexOf(s.id) !== -1; });
                var activeMetadataIds = idsAndSelected.metadatas
                    .filter(function (s) { return s.isActive; })
                    .map(function (s) { return s.id; });
                var metadatasActive = cvData.metadatas.filter(function (s) { return activeMetadataIds.indexOf(s.id) !== -1; });
                informationGroup.selectAll("g.settings-used").remove();
                if (selected.skillSelected) {
                    var settingsUsedGroup = informationGroup
                        .append("g")
                        .attr("transform", translate(0, skillsEtcDistanceBelowInformation))
                        .attr("class", "settings-used");
                    settingsUsedGroup.append("text").text("Skills used at:");
                    var settingsGroups = settingsUsedGroup
                        .selectAll("g")
                        .data(settingsActive)
                        .enter()
                        .append("g")
                        .append("text")
                        .attr("fill", function (d) { return colours.getOriginalSetting(d.id); })
                        .attr("y", function (d) {
                        var ind = activeSettingIds.indexOf(d.id);
                        return scaleListedItem(ind);
                    })
                        .text(function (d) { return d.name; })
                        .on("click", function (d) { return refresh(App.Selected.fromSetting(d.id)); });
                }
                informationGroup.selectAll("g.metadatas-used").remove();
                if (selected.skillSelected) {
                    var metadatasUsedGroup = informationGroup
                        .append("g")
                        .attr("transform", translate(config.width / 2, skillsEtcDistanceBelowInformation))
                        .attr("class", "metadatas-used");
                    metadatasUsedGroup.append("text").text("Types of skill:");
                    var metadatasGroups = metadatasUsedGroup
                        .selectAll("g")
                        .data(metadatasActive)
                        .enter()
                        .append("g")
                        .append("text")
                        .attr("fill", function (d) { return colours.getOriginalMetadata(d.id); })
                        .attr("y", function (d) {
                        var ind = activeMetadataIds.indexOf(d.id);
                        return scaleListedItem(ind);
                    })
                        .text(function (d) { return d.name; })
                        .on("click", function (d) { return refresh(App.Selected.fromMetadata(d.id)); });
                }
            }
            var skillsEtcDistanceBelowInformation = titleTextSize * 3;
            function scaleListedItem(ind) {
                return (ind + 1) * 2 * skillUsedTextSize;
            }
            function updateSkillInfos(skillsUsedIds) {
                var skillsUsedData = cvData.skills.filter(function (s) { return skillsUsedIds.indexOf(s.id) !== -1; });
                informationGroup.selectAll("g.skills-used").remove();
                var skillsUsedGroup = informationGroup
                    .append("g")
                    .attr("transform", translate(0, skillsEtcDistanceBelowInformation))
                    .attr("class", "skills-used");
                skillsUsedGroup.append("text").text("Skills used:");
                var groups = skillsUsedGroup
                    .selectAll("g")
                    .data(skillsUsedData);
                var newText = groups.enter()
                    .append("g")
                    .attr("class", "skill-info")
                    .append("text")
                    .attr("fill", function (d) { return colours.getOriginalSkill(d.id); })
                    .attr("y", function (d) {
                    var ind = skillsUsedIds.indexOf(d.id);
                    return scaleListedItem(ind);
                })
                    .text(function (d) { return d.name; })
                    .on("click", function (d) { return refresh(App.Selected.fromSkill(d.id)); });
            }
            var transitionLength = 500;
            function refresh(selected) {
                var idAndActiveCv = idAndActiveSorter.forSelected(selected);
                var lessOpaque = 0.2;
                var metaDataMidAngle = null;
                if (selected.metadataSelected) {
                    var start = getMetadataStartAngle(selected.metadata);
                    var end = getMetadataEndAngle(selected.metadata);
                    var diff = end - start;
                    metaDataMidAngle = start + (diff / 2);
                    metaDataMidAngle -= Math.PI / 2;
                }
                var settingRange = null;
                if (selected.settingSelected) {
                    var scaled = settingsScaled.getForId(selected.setting);
                    settingRange = new App.ScaleAndLevel(selected.setting, settingsLength * scaled.start, settingsLength * scaled.end, null);
                }
                var selectedLocation = new App.SelectedLocation(metaDataMidAngle, settingRange, config.innerRadius * 2, settingsAndStartWidth);
                skillGroups
                    .transition()
                    .duration(transitionLength)
                    .attr("transform", function (d) {
                    var x = skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).cx;
                    var y = skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).cy;
                    return translate(x, y);
                });
                skillGroupCircles
                    .transition()
                    .duration(transitionLength)
                    .attr("fill", function (d, i) { return colours.getSkill(d.id, selected, idAndActiveCv); })
                    .attr("opacity", function (d, i) { return idAndActiveCv.skillActive(d.id) ? 1.0 : lessOpaque; })
                    .attr("r", function (d, i) { return skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).radius; });
                settingsGroup
                    .selectAll("rect")
                    .transition()
                    .duration(transitionLength)
                    .attr("fill", function (d, i) { return colours.getSetting(d.id, selected, idAndActiveCv); })
                    .attr("opacity", function (d, i) { return idAndActiveCv.settingActive(d.id) ? 1.0 : lessOpaque; });
                metadatasGroup
                    .selectAll("path.metadata-path")
                    .transition()
                    .duration(transitionLength)
                    .attr("fill", function (d, i) { return colours.getMetadata(d.id, selected, idAndActiveCv); })
                    .attr("opacity", function (d, i) { return idAndActiveCv.metadataActive(d.id) ? 1.0 : lessOpaque; });
                var titleAndDescription = information.forSelected(selected);
                informationTitle.text(titleAndDescription.title);
                informationDescription.text(titleAndDescription.description[0]);
                var skillsUsedIds = idAndActiveCv.skills
                    .filter(function (s) { return s.isActive; })
                    .map(function (s) { return s.id; });
                if (selected.skillSelected) {
                    updateSkillInfos([]);
                }
                else {
                    updateSkillInfos(skillsUsedIds);
                }
                updateSettingAndMetadataInfos(selected, idAndActiveCv);
                setTimeout(function () {
                    skillCircleXValues = {};
                }, transitionLength);
            }
            metadatasGroup
                .selectAll("path")
                .on("click", function (d, i) {
                refresh(App.Selected.fromMetadata(d.id));
            });
            skillsGroup
                .selectAll("circle")
                .on("click", function (d, i) {
                refresh(App.Selected.fromSkill(d.id));
            });
            settingsGroup
                .selectAll("rect")
                .on("click", function (d, i) {
                refresh(App.Selected.fromSetting(d.id));
            });
        };
        return Skills;
    }());
    App.Skills = Skills;
})(App || (App = {}));
//# sourceMappingURL=Skills.js.map