/// <reference path='_references.ts' />

module App
{
	class ChartConfig
	{
		constructor(
			public width:number,
			public height: number,
			public innerRadius:number,
			public radiusWidth:number,
			public colours: string[]
		){}
		
		static Standard = new ChartConfig(600, 600, 250, 25,
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
			
			var moveToMiddle = "translate(" + config.width / 2 + "," + config.height / 2 + ")"
			
			var settingsScaled = lengthScaler.getSettings();
			
			var settingsArc = d3.svg.arc()
				.innerRadius(config.innerRadius)
				.outerRadius(config.innerRadius + config.radiusWidth)
				.startAngle(
					(d:any) => {
					var scaledSetting = settingsScaled.getForId(d.id);
					var value = Math.PI * scaledSetting.start + Math.PI / 2;
					return value;
				})
				.endAngle(
					(d:any) => {
					var scaledSetting = settingsScaled.getForId(d.id);
					var value = Math.PI * scaledSetting.end + Math.PI / 2
					return value;
				});
			
			var settingsGroup = svg
				.append("g")
				.attr("transform", moveToMiddle)
				.attr("class", "settings");
			
			settingsGroup
				.selectAll("path")
				.data(cvData.settings)
				.enter()
				.append("path")
				.attr("d", <any>settingsArc)
				.attr("fill", d => colours.getSetting(d.id))
				.on("click", (d, i) => {
					alert( "the setting is " + d.name)
				});
			
			// Metadatas
			
			var metadatasScaled = lengthScaler.getMetadatas();
			
			var metadatasArc = d3.svg.arc()
				.innerRadius(config.innerRadius)
				.outerRadius(config.innerRadius + config.radiusWidth)
				.startAngle(
					(d:any) => {
					var scaledMetadata = metadatasScaled.getForId(d.id);
					var value = Math.PI * scaledMetadata.start - Math.PI / 2;
					return value;
				})
				.endAngle(
					(d:any) => {
					var scaledMetadata = metadatasScaled.getForId(d.id);
					var value = Math.PI * scaledMetadata.end - Math.PI / 2
					return value;
				});
			
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