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
			this.height = semiCircleRadius * 2.5 + semiCircleWidth;
			this.innerRadius = semiCircleRadius - semiCircleWidth;	
		}
		
		static Standard = new ChartConfig(400, 25, 30,
			[//"black", "silver", "gray", "white",
			"maroon", "red", "purple", "fuchsia",
			"green", "olive"]
			);
	}
	
	export class Skills
	{
		static go(){            
            var divSvg = d3.select("#skills_svg");
			divSvg.select("svg").remove();
			
            var config = ChartConfig.Standard;
			
			var cvData = CV.CVData.getData();
			
			var skillUsedTextSize = 10;
			
			var height = config.height + cvData.skills.length * skillUsedTextSize;
			
            var svg = divSvg.append("svg")
				.attr("width", config.width)
				.attr("height", height);
			
			var rectBackground = svg
				.append("rect")
				.attr("width", config.width)
				.attr("height", config.height)
				.attr("opacity", 0);
			
			var idAndActiveSorter = new IdAndActiveSorter(cvData);
			
			var colours = new App.Colours(cvData, new ColourRandomiser(config.colours));
						
			var lengthScaler = new App.LengthScaler(cvData);
			
			var moveToMiddle = "translate(" + config.width / 2 + "," + (config.semiCircleRadius + config.semiCircleWidth) + ")"
			
			// Settings
			
			var settingsScaled = lengthScaler.getSettings();
			
			var settingsXStart = config.semiCircleWidth * 2;
			var settingsYStart = config.semiCircleRadius + (config.settingWidth * 3);
			var moveToLeftHandSideOfSemiCircle = "translate(" + settingsXStart + "," + settingsYStart + ")";
			
			var settingsLength = config.innerRadius * 2;
			
			var gapBetweenSettings = 2;
			
			function getSettingStart(id:number){
				var scaled = settingsScaled;
				var setting = scaled.getForId(id);
				return setting.start * settingsLength;
			}
			
			function getSettingWidth(id:number){
				var scaled = settingsScaled;
				var setting = scaled.getForId(id);
				var width = (setting.end - setting.start) * settingsLength;
				return width;
			}
			
			var settingsGroup = svg
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
				.attr("width", d =>  getSettingWidth(d.id))
				.attr("x", (d:any) => getSettingStart(d.id))
				.attr("y", (d:any) => {
					var setting = settingsScaled.getForId(d.id);
					return setting.id * config.settingWidth;
				})
				.attr("fill", d => colours.getSetting(d.id, Selected.initial(), idAndActiveSorter.forInitial()));
			
			var settingsAndStartWidth:SettingStartAndWidth[] = cvData.settings.map(
				s => new SettingStartAndWidth(s.id, getSettingStart(s.id), getSettingWidth(s.id))
			);
			
			settingsGroup
				.selectAll("g.setting")
				.append("text")
				.text(d => d.name)
				.attr("y", (d:any) => (d.id + 0.5) * config.settingWidth);
			
			var minDate = LengthScaler.getMinDate(cvData.settings);
			var maxDate = LengthScaler.getMaxDate(cvData.settings);
			
			var x = d3.time.scale()
				.domain([minDate, d3.time.month.offset(maxDate, 1)])
    			.rangeRound([0, settingsLength]);
				
			var showTickEveryMonths = 4;
			var xAxis = d3.svg.axis()
				.scale(x)
				.orient('bottom')
				.ticks(d3.time.month, showTickEveryMonths)
				.tickFormat(d3.time.format('%m/%Y'))
				.tickSize(3)
				.tickPadding(5); 
			
			var timeScaleTranslate = 'translate(' + settingsXStart + ', ' + (settingsYStart - config.settingWidth)  + ')'
			svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', timeScaleTranslate)
				.call(xAxis);
			
			
			
			// Metadatas functions
			
			var textOffset = config.semiCircleWidth * 0.7;
			function inThenOutInner(d, i){
				var multiplyBy = i % 2 === 0 ? 1 : -1;
				return config.innerRadius + multiplyBy * config.semiCircleWidth - textOffset;
			}
			
			function inThenOutOuter(d, i){
				var multiplyBy = i % 2 === 0 ? 1 : -1;
				return config.innerRadius + config.semiCircleWidth + multiplyBy * config.semiCircleWidth - textOffset;
			}
			
			function radialBitsStartAngle(id:number, scaled:Scaled, radialOffset){
				var scaledValue = scaled.getForId(id);
				return Math.PI * scaledValue.start + radialOffset;
			}
			
			function radialBitsEndAngle(id:number, scaled:Scaled, radialOffset){
				var scaledValue = scaled.getForId(id);
				return Math.PI * scaledValue.end + radialOffset;
			}
			
			var halfRadialGap = 0.005;
			function slightlyShrunkRadialBitsStartAngle(id:number, scaled:Scaled, radialOffset){
				return radialBitsStartAngle(id, scaled, radialOffset) + halfRadialGap;
			}
			
			function slightlyShrunkRadialBitsEndAngle(id:number, scaled:Scaled, radialOffset){
				return radialBitsEndAngle(id, scaled, radialOffset) - halfRadialGap;
			}
			
			function twiceLongRadialEndAngle(id:number, scaled:Scaled, radialOffset){
				var end = radialBitsEndAngle(id, scaled, radialOffset)
				var start = radialBitsStartAngle(id, scaled, radialOffset)
				return (end - start) * 2 + start;
			}
			
			// Metadatas
			
			var metadatasScaled = lengthScaler.getMetadatas();
			
			function getMetadataStartAngle(id:number){
				var scaled = metadatasScaled;
				return slightlyShrunkRadialBitsStartAngle(id, scaled, -Math.PI / 2);
			}
			
			function getMetadataEndAngle(id:number){
				var scaled = metadatasScaled;
				return slightlyShrunkRadialBitsEndAngle(id, scaled, -Math.PI / 2);
			}
			
			function getDoubleMetadataEndAngle(id:number){
				var scaled = metadatasScaled;
				return twiceLongRadialEndAngle(id, scaled, -Math.PI / 2);
			}
			
			var metadatasArc = d3.svg.arc()
				.innerRadius((d, i) => config.innerRadius)
				.outerRadius((d, i) => { return config.innerRadius + config.semiCircleWidth; })
				.startAngle((d:any) => { return getMetadataStartAngle(d.id); })
				.endAngle((d:any) => { return getMetadataEndAngle(d.id); });
			
			var metadatasTextArc = d3.svg.arc()
				.innerRadius((d, i) => { return inThenOutInner(d, i); })
				.outerRadius((d, i) => { return inThenOutOuter(d, i); })
				.startAngle((d:any) => { return getMetadataStartAngle(d.id); })
				.endAngle((d:any) => { return getDoubleMetadataEndAngle(d.id); }); 
			
			var metadatasGroup = svg
				.append("g")
				.attr("transform", moveToMiddle)
				.attr("class", "metadatas");
			
			metadatasGroup
				.selectAll("g")
				.data(cvData.metadatas)
				.enter()
				.append("g")
				.attr("class", "metadata");
			
			metadatasGroup
				.selectAll("g.metadata")
				.append("path")
				.attr("class", "metadata-path")
				.attr("d", <any>metadatasArc)
				.attr("fill", d => colours.getMetadata(d.id, Selected.initial(), idAndActiveSorter.forInitial()));
				
				
			metadatasGroup
				.selectAll("g.metadata")
				.append("path")
				.attr("d", <any>metadatasTextArc)
				.attr("fill", "none")
				.attr("id", d => "met" + d.id);
				
			metadatasGroup
				.selectAll("g.metadata")
				.append("text")
				.append("textPath")
				.attr("xlink:href", d => "#met" + d.id)
				.text((d:any) => d.name);
				
			// skills 
			var skillCirclesCalculator = new SkillCirclesCalculator(cvData); 
			var initialLocation = skillCirclesCalculator.forSelected(Selected.initial(), null, null);
			
			var skillsGroup = svg
				.append("g")
				.attr("transform", moveToMiddle)
				.attr("class", "circles");
			
			var skillCircleXValues = {};
			var skillIds = cvData.skills.map(s => s.id); 
			
			function mousemove(){
				var mouse = d3.mouse(skillsGroup.node());
				var mouseX = mouse[0];
				
				// recalculate values if is falsey
				if(!skillCircleXValues[0]){
					skillGroups[0].map((elem:any) => {
						var attributes = <NamedNodeMap>elem.attributes;
						var skillX:number = detranslateX(attributes.getNamedItem("transform").value);
						var id = elem.__data__.id;
						skillCircleXValues[id] = skillX;
					})
				}
				
				var skillIdsToShow = skillIds.filter(s => {
					var skillX = skillCircleXValues[s];
					var diff = Math.abs(mouseX - skillX);
					var proximity = circleDiameter / 1.5; 
					if(diff < proximity){
						return true;
					}
					return false;
				});
				
				skillLabels.attr("opacity", d => {
					if(skillIdsToShow.indexOf(d.id) === -1){
						return 0
					}
					return 1;
				})
			}
			
			// setup the labels to change when the mouse is moved.
			rectBackground.on("mousemove", mousemove);
			
			function translate(x, y){
				return "translate(" + x + " , " + y + " )";
			}
			
			function detranslateX(translateString:string):number{
				var minusWordANdBrackets = translateString
					.replace("translate(", "")
					.replace(")", "");
				var split = minusWordANdBrackets.split(",");
				return parseFloat(split[0]);
			}
			
			var skillGroups = skillsGroup
				.selectAll("g")
				.data(cvData.skills)
				.enter()
				.append("g")
				.attr("class", "skill")
				.attr("transform", d => {
					var x = initialLocation.forId(d.id).cx;
					var y = initialLocation.forId(d.id).cy;
					return translate(x, y);
				});
			
			var skillGroupCircles = skillGroups
				.append("circle")
				.attr("r", (d, i) => initialLocation.forId(d.id).radius)
				.attr("fill", (d, i) => colours.getSkill(d.id, Selected.initial(), idAndActiveSorter.forInitial()));
			
			var circleDiameter = 20;
						
			var skillLabels = skillGroups
				.append("text")
				.text(d => d.name)
				.attr("opacity", 0)
				.attr("y", circleDiameter * 1.2)
				;
				
			var information = new Information(cvData);
			var settingsHeight = (cvData.settings.length + 2) * config.settingWidth;
			
			var informationTranslation = translate(settingsXStart, (settingsYStart + settingsHeight));
			var informationGroup = svg
				.append("g")
				.attr("class", "information")
				.attr("transform", informationTranslation);
			
			var titleTextSize = 30;
			var informationTitle = informationGroup
				.append("text")
				.attr("class", "information-title")
				.attr("font-size", titleTextSize)
				.text("Click on things");
			
			var informationDescription = informationGroup
				.append("text")
				.attr("class", "information-description")
				.attr("y", titleTextSize);
			
			
			function updateSettingAndMetadataInfos(selected:Selected, idsAndSelected:IdAndActiveCvData){
				
				var activeSettingIds = idsAndSelected.settings
					.filter(s => s.isActive)
					.map(s => s.id);
				var settingsActive = cvData.settings.filter(s => activeSettingIds.indexOf(s.id) !== -1);
				
				var activeMetadataIds = idsAndSelected.metadatas
					.filter(s => s.isActive)
					.map(s => s.id);
				var metadatasActive = cvData.metadatas.filter(s => activeMetadataIds.indexOf(s.id) !== -1);
				
				informationGroup.selectAll("g.settings-used").remove();
				
				if(selected.skillSelected){
					var settingsUsedGroup = informationGroup
						.append("g")
						.attr("transform", translate(0, skillsEtcDistanceBelowInformation))
						.attr("class", "settings-used");
					
					settingsUsedGroup.append("text").text("Skills used at:")
					
					var settingsGroups = settingsUsedGroup
						.selectAll("g")
						.data(settingsActive)
						.enter()
						.append("g")
						.append("text")
						.attr("fill", d => colours.getOriginalSetting(d.id))
						.attr("y", d => {
							var ind = activeSettingIds.indexOf(d.id)
							return scaleListedItem(ind);
						})
						.text(d => d.name)
						.on("click", d => refresh(Selected.fromSetting(d.id)))
				}	
					
				informationGroup.selectAll("g.metadatas-used").remove();
				
				if(selected.skillSelected){
					var metadatasUsedGroup = informationGroup
						.append("g")
						.attr("transform", translate(config.width / 2, skillsEtcDistanceBelowInformation))
						.attr("class", "metadatas-used");
						
					metadatasUsedGroup.append("text").text("Types of skill:")
					
					var metadatasGroups = metadatasUsedGroup
						.selectAll("g")
						.data(metadatasActive)
						.enter()
						.append("g")
						.append("text")
						.attr("fill", d => colours.getOriginalMetadata(d.id))
						.attr("y", d => {
							var ind = activeMetadataIds.indexOf(d.id)
							return scaleListedItem(ind);
						})
						.text(d => d.name)
						.on("click", d => refresh(Selected.fromMetadata(d.id)))
			
				}	
			}
			
			var skillsEtcDistanceBelowInformation = titleTextSize * 3;
			
			function scaleListedItem(ind:number){
				return (ind + 1) * 2 * skillUsedTextSize;
			}
			
			function updateSkillInfos(skillsUsedIds:number[]){
				var skillsUsedData = cvData.skills.filter(s => skillsUsedIds.indexOf(s.id) !== -1);
				
				informationGroup.selectAll("g.skills-used").remove();
				
				var skillsUsedGroup = informationGroup
					.append("g")
					.attr("transform", translate(0, skillsEtcDistanceBelowInformation))
					.attr("class", "skills-used");
			
				skillsUsedGroup.append("text").text("Skills used:")
			
				var groups = skillsUsedGroup
					.selectAll("g")
					.data(skillsUsedData);
				
				var newText = groups.enter()
					.append("g")
					.attr("class", "skill-info")
					.append("text")
					.attr("fill", d => colours.getOriginalSkill(d.id))
					.attr("y", d => {
						var ind = skillsUsedIds.indexOf(d.id)
						return scaleListedItem(ind);
					})
					.text(d => d.name)
					.on("click", d => refresh(Selected.fromSkill(d.id)))
			}
			
			var transitionLength = 500;
			
			function refresh(selected:Selected){
				var idAndActiveCv = idAndActiveSorter.forSelected(selected);
				var lessOpaque = 0.2 ;
				
				var metaDataMidAngle = null;
				if(selected.metadataSelected){
					var start = getMetadataStartAngle(selected.metadata);
					var end = getMetadataEndAngle(selected.metadata);
					var diff = end - start;
					metaDataMidAngle = start + (diff / 2);
					metaDataMidAngle -= Math.PI / 2;
				}
				
				var settingRange = null;
				if(selected.settingSelected){
					var scaled = settingsScaled.getForId(selected.setting);
					settingRange = new ScaleAndLevel(selected.setting, settingsLength * scaled.start, settingsLength * scaled.end, null);
				}
				
				var selectedLocation = new SelectedLocation(
					metaDataMidAngle,
					settingRange, 
					config.innerRadius * 2, 
					settingsAndStartWidth
				);
				
				skillGroups
					.transition()
					.duration(transitionLength)
					.attr("transform", d => {
						var x =  skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).cx;
						var y =  skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).cy;
						return translate(x, y);
					});
				
				skillGroupCircles
					.transition()
					.duration(transitionLength)
					.attr("fill", (d, i) => colours.getSkill(d.id, selected, idAndActiveCv))
					.attr("opacity", (d, i) => idAndActiveCv.skillActive(d.id) ? 1.0 : lessOpaque)
					.attr("r", (d, i) => skillCirclesCalculator.forSelected(selected, selectedLocation, idAndActiveCv).forId(d.id).radius)
					
				settingsGroup
					.selectAll("rect")
					.transition()
					.duration(transitionLength)
					.attr("fill", (d, i) => colours.getSetting(d.id, selected, idAndActiveCv))
					.attr("opacity", (d, i) => idAndActiveCv.settingActive(d.id) ? 1.0 : lessOpaque)
				
				metadatasGroup
					.selectAll("path.metadata-path")
					.transition()
					.duration(transitionLength)
					.attr("fill", (d, i) => colours.getMetadata(d.id, selected, idAndActiveCv))
					.attr("opacity", (d, i) => idAndActiveCv.metadataActive(d.id) ? 1.0 : lessOpaque)
				
				var titleAndDescription = information.forSelected(selected);
				
				informationTitle.text(titleAndDescription.title);
				informationDescription.text(titleAndDescription.description[0]);
				
				var skillsUsedIds = idAndActiveCv.skills
					.filter(s => s.isActive)
					.map(s => s.id);
				
				if(selected.skillSelected){
					updateSkillInfos([]);
				} else {
					updateSkillInfos(skillsUsedIds);
				}
				
				updateSettingAndMetadataInfos(selected, idAndActiveCv);
				
				
				setTimeout(() => {
					// need to reset this to an empty object to allow the labels to re-calculate when things are refreshed.
					// do it in a timeout because otherwise it gets confused when things are transitioning.
					skillCircleXValues = {}
				}, transitionLength)
				
			}
			
			
			metadatasGroup
				.selectAll("path")
				.on("click", (d, i) => {
					refresh(Selected.fromMetadata(d.id));
				});
				
			skillsGroup
				.selectAll("circle")
				.on("click", (d, i) => {
					refresh(Selected.fromSkill(d.id));
				});
				
			settingsGroup
				.selectAll("rect")
				.on("click", (d, i) => {
					refresh(Selected.fromSetting(d.id))
				});
        }
	}
}