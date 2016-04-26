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
		
		getMetadata(id:number):string{
			return this.metadatas.filter(m => m.id === id)[0].colour;
		}
		
		getSetting(id:number):string{
			return this.settings.filter(m => m.id === id)[0].colour;
		}
		
		getSkill(id:number):string{
			return this.skills.filter(m => m.id === id)[0].colour;
		}
	}
	
	export class IdAndColour 
	{
		constructor(public id: number, public colour:string){}
	}
}