module CV
{
	export interface ICVData
	{
		skills: Skill[];
		settings: Setting[];
		skillUsages: SkillUsage[];
		metadatas: Metadata[];
	}

	export class CVData
	{
		static getData(): ICVData
		{
			return {
				skills: Skills.all,
				settings: Settings.all,
				skillUsages: SkillUsages.all,
				metadatas: Metadatas.all
			};
		}
	}
}