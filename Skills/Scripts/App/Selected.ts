/// <reference path='_references.ts' />

module App
{
	export class Selected
	{
		constructor(public skill:number, public setting:number, public metadata:number)
		{
			this.allSelected = skill == null && setting == null && metadata == null;
			this.skillSelected = skill != null;
			this.settingSelected = setting != null;
			this.metadataSelected = metadata != null;
		}
		
		public allSelected:boolean;
		public skillSelected:boolean;
		public settingSelected:boolean;
		public metadataSelected:boolean;
	}
}