/// <reference path='_references.ts' />

module App
{
	export class IdAndActiveSorter
	{
		constructor(public cVData:CV.ICVData){}
		
		forInitial():IdAndActiveCvData{
			return new IdAndActiveCvData(
				this.cVData.skills.map(s => new IdAndActive(s.id, true)),
				this.cVData.skillUsages.map(su => new IdAndActive(su.skillUsageId, true)),
				this.cVData.settings.map(s => new IdAndActive(s.id, true)),
				this.cVData.metadatas.map(m => new IdAndActive(m.id, true))
			)
		}
		
		forSkill(skillId:number):IdAndActiveCvData{
			return null;
		}
		
		forSetting(settingId:number):IdAndActiveCvData{
			return null;
		}
		
		forMetadata(metadataId:number):IdAndActiveCvData{
			return null;
		}
	}
	
	export class IdAndActive
	{
		constructor(public id:number, public isActive:boolean){}
	}
	
	export class IdAndActiveCvData
	{
		constructor(
			public skills: IdAndActive[], 
			public skillUsages: IdAndActive[], 
			public settings: IdAndActive[], 
			public metadatas: IdAndActive[] ){}
	}
}