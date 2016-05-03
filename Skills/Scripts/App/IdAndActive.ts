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
			var skills = this.cVData.skills.map(s => {
				return new IdAndActive(s.id, s.id === skillId)
			});
			
			var skillUsagesWithSkill = this.cVData.skillUsages.filter(su => su.skillId === skillId);
			var settingIdsSkillsUsedIn = skillUsagesWithSkill.map(su => su.settingId);
			var settings = this.cVData.settings.map(s => {
				var exists = settingIdsSkillsUsedIn.indexOf(s.id) > -1;
				return new IdAndActive(s.id, exists)
			});
			
			var skill = this.cVData.skills.filter(s => s.id === skillId)[0];
			var metadataIds = skill.metadatas.map(m => m.id);
			var metadatas = this.cVData.metadatas.map(m => {
				var exists = metadataIds.indexOf(m.id) > -1;
				return new IdAndActive(m.id, exists);
			});
			
			return new IdAndActiveCvData(skills, [], settings, metadatas);
		}
		
		forSetting(settingId:number):IdAndActiveCvData{
			var settings = this.cVData.settings.map(s => {
				return new IdAndActive(s.id, s.id === settingId)
			});
			var skillIdsUsedInSetting = this.cVData.skillUsages
				.filter(su => su.settingId === settingId)
				.map(su => su.skillId);
			var skills = this.cVData.skills.map(s => {
				var used = skillIdsUsedInSetting.indexOf(s.id) > -1;
				return new IdAndActive(s.id, used);
			});
			var metadatas = this.cVData.metadatas.map(m => new IdAndActive(m.id, false));
			return new IdAndActiveCvData(skills, [], settings, metadatas);
		}
		
		forMetadata(metadataId:number):IdAndActiveCvData{
			var skills = this.cVData.skills.map(s => {
				var skillContainsMetadata = s.metadatas.some(m => m.id === metadataId);
				return new IdAndActive(s.id, skillContainsMetadata);
			});
			var settings = this.cVData.settings.map(s => new IdAndActive(s.id, false));
			var metadatas = this.cVData.metadatas.map(m => new IdAndActive(m.id, m.id === metadataId));
			
			return new IdAndActiveCvData(skills, [], settings, metadatas);
		}
		
		forSelected(selected:Selected):IdAndActiveCvData{
			if(selected.allSelected) return this.forInitial();
			if(selected.metadataSelected) return this.forMetadata(selected.metadata);
			if(selected.skillSelected) return this.forSkill(selected.skill);
			if(selected.settingSelected) return this.forSetting(selected.setting);
			throw "Aww shiz";
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
		
		skillActive(id:number){
			return this.skills.filter(s => s.id === id)[0].isActive;
		}
		
		settingActive(id:number){
			return this.settings.filter(s => s.id === id)[0].isActive;
		}
		
		metadataActive(id:number){
			return this.metadatas.filter(s => s.id === id)[0].isActive;
		}
	}
}