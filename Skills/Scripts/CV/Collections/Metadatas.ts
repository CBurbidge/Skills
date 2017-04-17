/// <references path='../_external_references.ts' />

module CV
{
	export class Metadatas
	{
		static counter = 0;

		static asynchronousProgramming = new Metadata(
			Metadatas.counter++,
			"Asynchronous",
			"The practice of writing asynchronous code.");

		static backEnd = new Metadata(
			Metadatas.counter++,
			"'Back end'",
			"'Back end' development concerns server side technologies like C#."
			);

		static cloud = new Metadata(
			Metadatas.counter++,
			"Cloud",
			"cloud development skills, mostly AWS"
			);

		static devops = new Metadata(
			Metadatas.counter++,
			"Devops",
			"devops, automation and continuous delivery practices"
			);

		static frontEnd = new Metadata(
			Metadatas.counter++,
			"'Front end'",
			"'Front end' development concerns client side technologies like javascript."
			);

		static functionalProgramming = new Metadata(
			Metadatas.counter++,
			"Functional",
			"A style of programming.");

		static hobby = new Metadata(
			Metadatas.counter++,
			"Hobby",
			"Skills that I have used in hobby projects."
			);

		static objectOrientedProgramming = new Metadata(
			Metadatas.counter++,
			"Object Oriented",
			"A style of programming that uses objects");

		static professional = new Metadata(
			Metadatas.counter++,
			"Professional",
			"Skills that I have professional experience in."
			);

		static refactoring = new Metadata(
			Metadatas.counter++,
			"Refactoring",
			"The process of producing code that is more 'factored'");

		static responsiveDesign = new Metadata(
			Metadatas.counter++,
			"Responsive design",
			"The practice of designing web pages for multiple screen sizes effectively.");

		static solidPrinciples = new Metadata(
			Metadatas.counter++,
			"SOLID Principles",
			"A set of principles");

		static testDrivenDevelopment = new Metadata(
			Metadatas.counter++,
			"TDD",
			"The practice of writing automated tests before writing code.");

		static all = [
			Metadatas.asynchronousProgramming,
			Metadatas.backEnd,
			Metadatas.cloud,
			Metadatas.devops,
			Metadatas.frontEnd,
			Metadatas.functionalProgramming,
			Metadatas.hobby,
			Metadatas.objectOrientedProgramming,
			Metadatas.professional,
			//Metadatas.refactoring,
			//Metadatas.responsiveDesign,
			//Metadatas.solidPrinciples,
			Metadatas.testDrivenDevelopment
		];
	}
}