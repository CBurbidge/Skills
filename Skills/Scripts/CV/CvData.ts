/// <reference path='_external_references.ts' />

module CV
{
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