/// <reference path='_external_references.ts' />

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
    
    export class DateRange
	{
		constructor(public startDate: Date, public endDate: Date)
		{ }
	}
	
    export interface ICvDataInfo
	{
		id: number;
		name: string;
		description: string;
	}

	export class Metadata implements ICvDataInfo
	{
		constructor(
			public id: number,
			public name: string,
			public description: string)
		{}
	}

	export class Setting implements ICvDataInfo
	{
		constructor(
			public id: number,
			public name: string,
			public description: string,
			public dateRange: DateRange)
		{ }
	}

	export class Skill implements ICvDataInfo
	{
		constructor(
			public id: number,
			public name: string,
			public description: string,
			public metadatas?: Metadata[],
			public imageUrl?: string)
		{}
	}

	export class SkillUsage
	{
		constructor(
			public skillUsageId: number,
			public description: string,
			public skillId: number,
			public settingId: number)
		{ }
	}
} 