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
		constructor(public cVData:CV.ICVData, public mixer:IRandomiser)
		{
			
		}
		
		
	}
}