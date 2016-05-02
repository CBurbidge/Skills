/// <reference path='_references.ts' />

module App
{
	export class SkillCirclesCalculator
	{
		constructor(public cvData: CV.ICVData){ }
		
		public forSelected = (selected:Selected) => {
			return new SkillCircles(
				this.cvData.skills.map(s => {
					var sqRootModulus = Math.ceil(this.cvData.skills.length ^ 0.5);
					var x = (s.id % sqRootModulus) * 10;
					var y = Math.floor(s.id / sqRootModulus) + (s.id % sqRootModulus) * 10;
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