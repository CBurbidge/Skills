module CV
{
	export class Settings
	{
		static counter = 0;

		static chesterBurbidgeDotCom = new Setting(
			Settings.counter++,
			"Personal website",
			"My own personal website",
			Dates.chesterBurbidgeDotComDateRange);

		static codeclub = new Setting(
			Settings.counter++,
			"Code club",
			"Teaching a 'code club' to a local school",
			Dates.codeclub);

		static fundslibrary = new Setting(
			Settings.counter++,
			"Fundslibrary",
			"Fundslibrary - Junior Developer",
			Dates.fundsLibraryDateRange);

		static hobby = new Setting(
			Settings.counter++,
			"Hobby",
			"Hobby programming",
			Dates.hobbyProgramming);

		static toplevelComputing = new Setting(
			Settings.counter++,
			"Toplevel computing",
			"Toplevel computing - Grauate Developer",
			Dates.toplevelComputingDateRange);


		static all = [
			Settings.chesterBurbidgeDotCom,
			Settings.codeclub,
			Settings.fundslibrary,
			Settings.hobby,
			Settings.toplevelComputing
		];
	}
}