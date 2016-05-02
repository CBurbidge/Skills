﻿/// <reference path='_references.ts' />

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
		
		static fromMetadata(id:number){
			return new Selected(null, null, id);
		}
		
		static fromSkill(id:number){
			return new Selected(id, null, null);
		}
		
		static fromSetting(id:number){
			return new Selected(null, id, null);
		}
	}
}