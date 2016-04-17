module CV
{
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