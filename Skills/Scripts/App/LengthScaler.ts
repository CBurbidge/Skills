/// <reference path='_references.ts' />

module App
{
	export class LengthScaler
	{
		constructor(public cVData:CV.ICVData){}
		
		getSettings():ScaleAndLevel[]{
			var minDate = this.cVData.settings.reduce((acc:Date, s:CV.Setting) => {
				if(acc < s.dateRange.startDate) return acc;
				return s.dateRange.startDate
			}, new Date());
			
			var maxDate = this.cVData.settings.reduce((acc:Date, s:CV.Setting) => {
				if(acc > s.dateRange.endDate) return acc;
				return s.dateRange.endDate
			}, new Date(2000, 1));
			
			var diff = maxDate.valueOf() - minDate.valueOf();
			
			return this.cVData.settings.map(s => {
				var start = (s.dateRange.startDate.valueOf() - minDate.valueOf()) / diff;
				var end = (s.dateRange.endDate.valueOf() - minDate.valueOf()) / diff;
				return new ScaleAndLevel(s.id, start, end, 1);
			});
		}
		
		getMetadatas():ScaleAndLevel[]{
			var numberOfMetadatas = this.cVData.metadatas.length;
			var scaleForEach = 1 / numberOfMetadatas;
			return this.cVData.metadatas.map((value, index, arr) => {
				var start = index * scaleForEach;
				var end = start + scaleForEach;
				return new ScaleAndLevel(value.id, start, end, 1);
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