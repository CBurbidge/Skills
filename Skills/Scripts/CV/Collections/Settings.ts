module CV
{
	export class Settings
	{
		static counter = 0;

		static chesterBurbidgeDotCom = new Setting(
			Settings.counter++,
			"Personal website",
			"My own personal website",
			new DateRange(new Date(2015, 2), new Date(2015, 4)));

		static codeclub = new Setting(
			Settings.counter++,
			"Code club",
			"Teaching a 'code club' to a local school",
			new DateRange(new Date(2013, 9), new Date(2014, 4)));

		static fundslibrary = new Setting(
			Settings.counter++,
			"Fundslibrary",
			"Fundslibrary - Junior Developer",
			new DateRange(new Date(2014, 3), new Date(2015, 2)));

		static hobby = new Setting(
			Settings.counter++,
			"Hobby",
			"Hobby programming",
			new DateRange(new Date(2012, 11), new Date(2015, 4)));

		static toplevelComputing = new Setting(
			Settings.counter++,
			"Toplevel computing",
			"Toplevel computing - Graduate Developer",
			new DateRange(new Date(2013, 3), new Date(2014, 3)));


		static all = [
			Settings.chesterBurbidgeDotCom,
			Settings.codeclub,
			Settings.fundslibrary,
			Settings.hobby,
			Settings.toplevelComputing
		];
	}
}