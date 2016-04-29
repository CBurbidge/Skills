/// <reference path='_references.ts' />

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
				"," + (config.semiCircleRadius + (config.settingWidth * 2)) + ")"
			
			var diameter = config.innerRadius * 2 + config.semiCircleWidth * 2;
			var gapBetweenSettings = 2;
			
			var settingsGroup = svg
				// .append("rect")
				// .attr("width", diameter)
				// .attr("height", cvData.settings.length * config.settingWidth)
				// .attr("fill", "silver")
				.append("g")  
				.attr("transform", moveToLeftHandSideOfSemiCircle)
				.attr("class", "settings");
			settingsGroup
				.selectAll("g")
				.data(cvData.settings)
				.enter()
				.append("g")
				.attr("class", "setting");
			
			settingsGroup
				.selectAll("g.setting")
				.append("rect")
				.attr("height", (d:any) => {return config.settingWidth - gapBetweenSettings;})
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
					return setting.id * config.settingWidth;
				})
				//.attr("d", <any>settingsArc)
				.attr("fill", d => colours.getSetting(d.id))
				//.attr("fill", "red")
				.on("click", (d, i) => {
					alert( "the setting is " + d.name)
				});
			settingsGroup
				.selectAll("g.setting")
				.append("text")
				.text(d => d.name)
				.attr("y", (d:any) => (d.id + 0.5) * config.settingWidth);
			
			var minDate = LengthScaler.getMinDate(cvData.settings);
			var maxDate = LengthScaler.getMaxDate(cvData.settings);
			
			var x = d3.time.scale()
				.domain([minDate, d3.time.month.offset(maxDate, 1)])
    			.rangeRound([0, diameter]);
				// .domain([new Date(data[0].date), d3.time.month.offset(new Date(data[data.length - 1].date), 1)])
    			// .rangeRound([0, width - margin.left - margin.right]);

			
			var showTickEveryMonths = 4;
			var xAxis = d3.svg.axis()
				.scale(x)
				.orient('bottom')
				.ticks(d3.time.month, showTickEveryMonths)
				.tickFormat(d3.time.format('%m/%Y'))
				.tickSize(3)
				.tickPadding(5); 
			
			svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate(' + config.semiCircleWidth + ', ' + (diameter / 2 + config.settingWidth) + ')')
				.call(xAxis);
			
			
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