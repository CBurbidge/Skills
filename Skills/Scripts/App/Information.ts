/// <reference path='_references.ts' />

module App
{
	export class Information
	{
		constructor(public cvData:CV.ICVData){}
		
		forSelected(selected:Selected):TitleAndDescription
		{
			if(selected.allSelected) return new TitleAndDescription("", []);
			
			if(selected.metadataSelected){
				var metadata = this.cvData.metadatas.filter(m => m.id === selected.metadata)[0];
				var title = metadata.name + ":";
				return new TitleAndDescription(title, [metadata.description]);
			}
			
			if(selected.settingSelected){
				var setting = this.cvData.settings.filter(m => m.id === selected.setting)[0];
				var startDate = setting.dateRange.startDate.getFullYear() + "/" + setting.dateRange.startDate.getMonth()
				var endDate = setting.dateRange.endDate.getFullYear() + "/" + setting.dateRange.endDate.getMonth()
				var title = setting.name + ":";
				var description = startDate + " -> " + endDate + " - " + setting.description
				return new TitleAndDescription(title, [description]);
			}
			
			var skill = this.cvData.skills.filter(m => m.id === selected.skill)[0];
			var title = skill.name + ":";
			return new TitleAndDescription(title, [skill.description]);
		}
	}
	
	export class TitleAndDescription
	{
		constructor(public title:string, public description:string[]){}
	}
}