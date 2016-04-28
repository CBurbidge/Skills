﻿/// <reference path='_references.ts' />

module App
{
	class ChartConfig
	{
		public width:number;
		public height:number;
		public innerRadius;
		
		constructor(
			public semiCircleRadius:number,
			public semiCircleWidth:number,
			public settingWidth:number,
			public colours: string[]
		){
			this.width = 2 * semiCircleRadius + 2 * semiCircleWidth;
			this.height = semiCircleRadius * 1.5 + semiCircleWidth;
			this.innerRadius = semiCircleRadius - semiCircleWidth;	
		}
		
		static Standard = new ChartConfig(400, 25, 30,
			[//"black", "silver", "gray", "white",
			"maroon", "red", "purple", "fuchsia",
			"green", "lime", "olive", "yellow"]
			);
	}
	
	export class Skills
	{
		static go(){            
            var divSvg = d3.select("#skills_svg");
			divSvg.select("svg").remove();
			
            var config = ChartConfig.Standard;
						
            var svg = divSvg.append("svg")
				.attr("width", config.width)
				.attr("height", config.height)
				//.style("background-color", "green")
				;
			
			var cvData = CV.CVData.getData();
			
			var colours = new App.Colours(cvData, new ColourRandomiser(config.colours));
						
			var lengthScaler = new App.LengthScaler(cvData);
			
			var moveToMiddle = "translate(" + config.width / 2 + "," + config.semiCircleRadius + ")"
			
			
			var layersOfMetadatas = 5
			var layersDownStarting = 2;
			
			function steppingInnerRadius(d, i){
				return config.innerRadius + i % layersOfMetadatas * config.semiCircleWidth - layersDownStarting * config.semiCircleWidth;
			}
			
			function steppingOuterRadius(d, i){
				return config.innerRadius + config.semiCircleWidth + i % layersOfMetadatas * config.semiCircleWidth - layersDownStarting * config.semiCircleWidth;
			}
			
			function fanningOutInnerRadius(d, i){
				return config.innerRadius + i * config.semiCircleWidth;
			}
			
			function fanningOutOuterRadius(d, i){
				return config.innerRadius + config.semiCircleWidth + i * config.semiCircleWidth;
			}
			
			function circleInnerRadius(d, i){
				return config.innerRadius;
			}
			
			function circleOuterRadius(d, i){
				return config.innerRadius + config.semiCircleWidth;
			}
			
			function radialBitsStartAngle(d:any, scaled:Scaled, radialOffset){
				var scaledValue = scaled.getForId(d.id);
				return Math.PI * scaledValue.start + radialOffset;
			}
			
			function radialBitsEndAngle(d:any, scaled:Scaled, radialOffset){
				var scaledValue = scaled.getForId(d.id);
				return Math.PI * scaledValue.end + radialOffset;
			}
			var halfRadialGap = 0.005;
			function slightlyShrunkRadialBitsStartAngle(d:any, scaled:Scaled, radialOffset){
				return radialBitsStartAngle(d, scaled, radialOffset) + halfRadialGap;
			}
			
			function slightlyShrunkRadialBitsEndAngle(d:any, scaled:Scaled, radialOffset){
				return radialBitsEndAngle(d, scaled, radialOffset) - halfRadialGap;
			}
			
			var chosenInnerFunction = circleInnerRadius;
			var chosenOuterFunction = circleOuterRadius;
			
			var chosenStartFunction = slightlyShrunkRadialBitsStartAngle;
			var chosenEndFunction = slightlyShrunkRadialBitsEndAngle;
			
			
			
			
			var settingsScaled = lengthScaler.getSettings();
			
			var settingsArc = d3.svg.arc()
				.innerRadius((d, i) => fanningOutInnerRadius(d, i))
				.outerRadius((d, i) => fanningOutOuterRadius(d, i))
				.startAngle((d:any) => radialBitsStartAngle(d, settingsScaled, Math.PI / 2))
				.endAngle((d:any) => radialBitsEndAngle(d, settingsScaled , Math.PI / 2 ));
			
			var moveToLeftHandSideOfSemiCircle = "translate(" + 
				((config.width / 2) - config.innerRadius - config.semiCircleWidth).toString() + 
				"," + config.semiCircleRadius + ")"
			
			var diameter = config.innerRadius * 2 + config.semiCircleWidth * 2;
			var settingsGroup = svg
				.append("g")
				.attr("fill", "blue")
				.attr("transform", moveToLeftHandSideOfSemiCircle)
				.attr("class", "settings");
			var heightOfSettings = 30;
			settingsGroup
				.selectAll("rect")
				.data(cvData.settings)
				.enter()
				.append("rect")
				.attr("height", (d:any) => {return heightOfSettings;})
				.attr("width", d => {
					var setting = settingsScaled.getForId(d.id);
					var width = (setting.end - setting.start) * diameter;
					return width;
				})
				.attr("x", (d:any) => {
					var setting = settingsScaled.getForId(d.id);
					return setting.start * diameter;
				})
				.attr("y", (d:any) => {
					var setting = settingsScaled.getForId(d.id);
					return setting.id * heightOfSettings;
				})
				//.attr("d", <any>settingsArc)
				.attr("fill", d => colours.getSetting(d.id))
				.on("click", (d, i) => {
					alert( "the setting is " + d.name)
				});
			
			
			
			
			// Metadatas
			
			var metadatasScaled = lengthScaler.getMetadatas();
			
			var metadatasArc = d3.svg.arc()
				.innerRadius((d, i) => { return chosenInnerFunction(d, i); })
				.outerRadius((d, i) => { return chosenOuterFunction(d, i); })
				.startAngle((d:any) => { return chosenStartFunction(d, metadatasScaled, -Math.PI / 2); })
				.endAngle((d:any) => { return chosenEndFunction(d, metadatasScaled, -Math.PI / 2); });
			
			var metadatasGroup = svg
				.append("g")
				.attr("transform", moveToMiddle)
				.attr("class", "metadatas");
			
			metadatasGroup
				.selectAll("path")
				.data(cvData.metadatas)
				.enter()
				.append("path")
				.attr("d", <any>metadatasArc)
				.attr("fill", d => colours.getMetadata(d.id))
				.on("click", (d, i) => {
					alert( "the metadata is " + d.name)
				});
			
			// skills 
			
			var skillsGroup = svg
				.append("g")
				.attr("transform", moveToMiddle)
				.attr("class", "circles");
			
        }
	}
}