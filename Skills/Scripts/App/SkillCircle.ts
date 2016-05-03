/// <reference path='_references.ts' />

module App
{
	export class SkillCirclesCalculator
	{
		constructor(public cvData: CV.ICVData){ }
		
		public forSelected = (selected:Selected) => {
			var that = this;
			return new SkillCircles(
				this.cvData.skills.map(s => {
					var sqRootModulus = Math.ceil(Math.sqrt(that.cvData.skills.length)); 
					var sqrtMod = s.id % sqRootModulus;
					var x = sqrtMod * 10;
					var propOfTotal = s.id / sqRootModulus;
					var y = Math.floor(propOfTotal) * 10 + sqrtMod * 10;
					return new SkillCircle(s.id, -x, -y, 5);
				})
			);
		}
	}
	export class SkillCircles
	{
		constructor(public circles:SkillCircle[]){ }
		
		forId(id:number):SkillCircle{
			return this.circles.filter(c => c.id === id)[0];
		}
	}
	export class SkillCircle {
		constructor(
			public id:number,
			public x:number, 
			public y:number, 
			public radius:number) {
			
		}
	}

}