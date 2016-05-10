/// <reference path='_references.ts' />

module App
{	
	export class Center {
		constructor(public cx:number, public cy:number) {}
	}
	
	export class SelectedSkillInMiddleOfOthers {
		constructor(public cvData:CV.ICVData, public offset:Center) {}
		
		private circleNumberByRadiuses = {
			3:7, 4:10, 5:13,
			6:18, 7:14, 8:20
		}
		
		private getNumberOfRadiusAndRemainder(numberOfSkills:number){
			var circles = 1;
			var currentIndex = 3;
			
			while (currentIndex < 100) {
				if(circles + this.circleNumberByRadiuses[currentIndex] > numberOfSkills){
					var remainder = numberOfSkills - circles;
					return {
						radii: currentIndex,
						remainder: remainder
					}
				}
				circles += this.circleNumberByRadiuses[currentIndex];
				currentIndex++
			}
		}
		
		private getPositionsForCircles(fullRadii:number, remainder:number, circleRadius:number):Center[]{
			var positions = [];
			for (var index = 3; index < fullRadii; index++) {
				var circlesInShell = this.circleNumberByRadiuses[index];
				var radsPerCircle = Math.PI * 2 / circlesInShell;
				
				for (var circleNum = 0; circleNum < circlesInShell; circleNum++) {
					var rads = circleNum * radsPerCircle;
					var cy = Math.sin(rads) * index * circleRadius * 2;
					var cx = Math.cos(rads) * index * circleRadius * 2;
					positions.push(new Center(cx, cy)); 
				}
			}
			
			var lastIndex = fullRadii + 1;
			var radsPerRemainder = Math.PI * 2 / remainder;
			for (var circleNum = 0; circleNum < remainder; circleNum++) {
				var rads = circleNum * radsPerRemainder;
				var cy = Math.sin(rads) * index * circleRadius * 2;
				var cx = Math.cos(rads) * index * circleRadius * 2;
				positions.push(new Center(cx, cy)); 
			}
			return positions.map(p => new Center(
				p.cx + this.offset.cx,
				p.cy + this.offset.cy));
		}
		
		forSkill(idOfSelected:number, circleRadius:number):SkillCircles{
			var middleCircle = new SkillCircle(idOfSelected, this.offset.cx, this.offset.cy, circleRadius);
			var radiiAndRemainder = this.getNumberOfRadiusAndRemainder(this.cvData.skills.length);
			var positions = this.getPositionsForCircles(radiiAndRemainder.radii, radiiAndRemainder.remainder, circleRadius);
			var skillsOnOutside = this.cvData.skills.filter(s => s.id !== idOfSelected);
			var skillsPositions = skillsOnOutside.map((s, i) => new SkillCircle(s.id, positions[i].cx, positions[i].cy, circleRadius));
			return new SkillCircles([middleCircle].concat(skillsPositions));
		}
	}
	
	export class ScaledPosition
	{
		constructor(public id:number, public scaled:number, public lineNumber:number){}
	}
	
	export class ScaledPositions
	{
		constructor(public positions:ScaledPosition[]){}
		
		getId(id:number){
			return this.positions.filter(p => p.id === id)[0];
		}
	}
	
	export class MultipleLineScaler 
	{
		constructor(public elementWidth:number, public length:number){}
		
		scale(idAndActives:IdAndActive[]):ScaledPositions{
			var activeSkills = idAndActives;
			var numberOfTimeCirclesFitOntoLine = Math.floor(this.length / this.elementWidth);
			var numberOfLines = Math.ceil(activeSkills.length / numberOfTimeCirclesFitOntoLine);
			var numberOfCirclesOnEachLine = Math.ceil(activeSkills.length / numberOfLines);
			
			var positions = idAndActives.map((value, index, arr) => {
				var lineNum = Math.floor(index / numberOfCirclesOnEachLine);
				var linePercentage = (index % numberOfCirclesOnEachLine)/ numberOfCirclesOnEachLine;
				return new ScaledPosition(value.id, linePercentage, lineNum);
			});
			
			return new ScaledPositions(positions);
		}
	}
		
	export class SkillsInLineToMiddleOfMetaData
	{
		forSkills(idsAndActiveCvData:IdAndActiveCvData, selectedLocation:SelectedLocation, circleRadius:number):SkillCircles
		{
			var radius = selectedLocation.diameter / 2
			var endX = radius * Math.cos(selectedLocation.midMetadataAngle);
			var endY = radius * Math.sin(selectedLocation.midMetadataAngle);
			var circleDiameter = circleRadius * 2;
			
			var activeSkills = idsAndActiveCvData.skills.filter(s => s.isActive);
			var inactiveSkills = idsAndActiveCvData.skills.filter(s => s.isActive === false);
			
			var activeSkillsLineScaler = new MultipleLineScaler(circleDiameter, radius);
			var positions = activeSkillsLineScaler.scale(activeSkills);
			
			var activeCircles = activeSkills.map(
				(value, index, array) => {
					var position = positions.getId(value.id);
					var cx = endX * position.scaled + (position.lineNumber * circleDiameter);
					var cy = endY * position.scaled;
					return new SkillCircle(value.id, cx, cy, circleRadius);
			});
			
			var random = new RandomlySpreadInSemiCircle()
			var inactiveCircles = random.forSkills(inactiveSkills, selectedLocation, circleRadius);
			
			return new SkillCircles(activeCircles.concat(inactiveCircles));
		}
	}
	
	export class SkillsAlongSettings
	{
		forSkills(idsAndActive:IdAndActiveCvData, selectedLocation:SelectedLocation, circleRadius:number, offset:Center): SkillCircles
		{
			var selectedSettingId = idsAndActive.settings.filter(m => m.isActive)[0].id;
			var startAndWidth = selectedLocation.settingStartAndWidths.filter(s => s.id === selectedSettingId)[0];
			var width = startAndWidth.width;
			var scaler = new MultipleLineScaler(circleRadius, width);
			var activeSkills = idsAndActive.skills.filter(s => s.isActive);
			var inactiveSkills = idsAndActive.skills.filter(s => s.isActive === false);
			var scaledPositions = scaler.scale(activeSkills);
			var activeCircles = scaledPositions.positions.map(
				s => {
					var cx = startAndWidth.start + s.scaled * width + offset.cx;
					var cy = circleRadius * 2 * s.lineNumber + offset.cy;
					return new SkillCircle(s.id, cx, cy, circleRadius);
				});
			var randomSpread = new RandomlySpreadInSemiCircle();
			var inactiveCircles =  randomSpread.forSkills(inactiveSkills, selectedLocation, circleRadius);
			return new SkillCircles(activeCircles.concat(inactiveCircles));
		}
	}
	
	export class RandomlySpreadInSemiCircle
	{
		forSkills(idsAndActive:IdAndActive[], selectedLocation:SelectedLocation, circleRadius:number)
		{
			return idsAndActive.map(
				(value, index, arr) => {
					var randomAngle = Math.PI * Math.random() - (Math.PI );
					var randomDist = Math.random() * (selectedLocation.diameter / 2) * 0.7;
					var cx = Math.cos(randomAngle) * randomDist;
					var cy = Math.sin(randomAngle) * randomDist;
					return new SkillCircle(value.id, cx, cy, circleRadius);
				});
		}
	}
	
	export class SkillCirclesCalculator
	{
		constructor(public cvData: CV.ICVData){ }
		
		public forSelected = (selected:Selected, selectedLocation:SelectedLocation, idsAndActiveCvData:IdAndActiveCvData):SkillCircles => {
			// todo, why do i have to do this in ts?
			var that = this;
			
			var circleRadius = 10;
			var distanceBetweenCircles = circleRadius * 2 + 5;
			
			if(selected.skillSelected){
				var halfRadiusUp = -1 * (selectedLocation.diameter / 2 / 2);
				var offset = new Center(0, halfRadiusUp); 
				var selectedSkillInMiddle = new SelectedSkillInMiddleOfOthers(this.cvData, offset);
				return selectedSkillInMiddle.forSkill(selected.skill, circleRadius);
			}
			
			if(selected.metadataSelected){
				var skillsInLineToMiddleOfMetaData = new SkillsInLineToMiddleOfMetaData();
				return skillsInLineToMiddleOfMetaData.forSkills(idsAndActiveCvData, selectedLocation, circleRadius);
			}
			
			if(selected.settingSelected){
				var skillsAlongSettings = new SkillsAlongSettings();
				var offset = new Center(-1 * selectedLocation.diameter / 2, 0)
				return skillsAlongSettings.forSkills(idsAndActiveCvData, selectedLocation, circleRadius, offset);
			}
			
			return new SkillCircles(
				this.cvData.skills.map(s => {
					var sqRootModulus = Math.ceil(Math.sqrt(that.cvData.skills.length)); 
					var sqrtMod = s.id % sqRootModulus;
					var x = sqrtMod * distanceBetweenCircles - sqRootModulus * 0.5 * distanceBetweenCircles;
					var propOfTotal = s.id / sqRootModulus;
					var y = Math.floor(propOfTotal) * distanceBetweenCircles + distanceBetweenCircles;
					return new SkillCircle(s.id, -x, -y, circleRadius);
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
			public cx:number, 
			public cy:number, 
			public radius:number) {
			
		}
	}

}