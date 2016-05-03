/// <reference path='_references.ts' />

module App
{
	export interface IRandomiser
	{
		mix():string;
	}
	
	export class ColourRandomiser implements IRandomiser
	{
		constructor(public colours:string[]){}
		
		mix(){
			var index = Math.floor(Math.random() * this.colours.length); 
			return this.colours[index];
		}
	}
	
	export class Colours 
	{
		private settings:IdAndColour[];
		private skills:IdAndColour[];
		private metadatas:IdAndColour[];
		
		constructor(public cVData:CV.ICVData, public mixer:IRandomiser)
		{
			this.settings = cVData.settings.map(s => new IdAndColour(s.id, mixer.mix()));
			this.skills = cVData.skills.map(s => new IdAndColour(s.id, mixer.mix()));
			this.metadatas = cVData.metadatas.map(s => new IdAndColour(s.id, mixer.mix()));
		}
		
		getMetadata(id:number, selected:Selected, idsAndActives:IdAndActiveCvData):string{
			if(selected.allSelected || selected.settingSelected || selected.metadataSelected){
				return this.getOriginalMetadata(id);
			}
			
			if(idsAndActives.metadataActive(id)){
				return this.getOriginalSkill(selected.skill);
			}
			
			return this.getOriginalMetadata(id);
		}
		
		getSetting(id:number, selected:Selected, idsAndActives:IdAndActiveCvData):string{
			if(selected.allSelected || selected.metadataSelected || selected.settingSelected){
				return this.getOriginalSetting(id);
			}
			
			if(idsAndActives.settingActive(id)){
				return this.getOriginalSkill(selected.skill);
			}
			
			this.getOriginalSkill(selected.skill);
		}
		
		getSkill(id:number, selected:Selected, idsAndActives:IdAndActiveCvData):string{
			if(selected.allSelected || selected.skillSelected){
				return this.getOriginalSkill(id);
			}
			
			if(selected.metadataSelected && idsAndActives.skillActive(id)){
				return this.getOriginalMetadata(selected.metadata);
			}
			
			if(selected.settingSelected && idsAndActives.skillActive(id)){
				return this.getOriginalSetting(selected.setting);
			}
			
			return this.getOriginalSkill(id); 
		}
		
		getOriginalMetadata(id:number):string{
			return this.metadatas.filter(m => m.id === id)[0].colour;
		}
		
		getOriginalSetting(id:number):string{
			return this.settings.filter(m => m.id === id)[0].colour;
		}
		
		getOriginalSkill(id:number):string{
			return this.skills.filter(m => m.id === id)[0].colour;
		}
	}
	
	export class IdAndColour 
	{
		constructor(public id: number, public colour:string){}
	}
}