/// <reference path='_references.ts' />

module App
{
	export class LengthScaler
	{
		constructor(public cVData:CV.ICVData){}
		
		getSettings():ScaleAndLevel[]{
			return null;
		}
		
		getMetadatas():ScaleAndLevel[]{
			var numberOfMetadatas = this.cVData.metadatas.length;
			var scaleForEach = 1 / numberOfMetadatas;
			var c = 0;
			return this.cVData.metadatas.map(m => {
				var start = c * scaleForEach;
				var end = start + scaleForEach;
				c++;
				return new ScaleAndLevel(m.id, start, end, 1);
			});
		}
	}
	
	export class ScaleAndLevel
	{
		constructor(
			// This is the id of either the setting or metadata
			public id:number,
			
			// this is the start and end values of what is being scaled.
			// things are scaled from 0 to 1.
			public start:number, 
			public end:number,
			
			// this is the level of the thing being scaled, 
			// this might only be used for setting time scales where they overlap
			public level:number 
		){}
	}
}