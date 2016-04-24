/// <reference path='_references.ts' />

module App
{
	export class Skills
	{
		static go(){            
            var divSvg = d3.select("#skills_svg");
			divSvg.select("svg").remove();
            
            var svg = divSvg.append("svg")
				.attr("width", 600)
				.attr("height", 600)
				.style("background-color", "green");
			var cvData = CV.CVData.getData();
			
			var f = 10;
			var g = 5;
			
			var circles = svg.selectAll("circle")
				.data(cvData.skills)
				.enter()
				.append("circle");
				
			var attributes = circles
				.attr("cx", d => {
					return d.id * f;
				})
				.attr("cy", d => {
					return d.id * f;
				})
				.attr("r", d => {
					return g;
				});
				
				divSvg.on("click", (a, i) => {
					circles.transition()
						.attr("cx", d => {
							return (d.id * f) * 1.3;
						})
						.attr("cy", d => {
							return (d.id * f) / 2;
						}).duration(1000);
				});
				
				var arc1 = d3.svg.arc()
					.innerRadius(65)
					.outerRadius(70)
					.startAngle(0)
					.endAngle(0.4 * Math.PI);
				var arc2 = d3.svg.arc()
					.innerRadius(65)
					.outerRadius(70)
					.startAngle(0.5 * Math.PI)
					.endAngle(1.9 * Math.PI);
				var semiSvg = svg
					.append("g")
					.attr("transform", "translate(100,100)");
				semiSvg.append("path")
					.attr("class", "arc")
					.attr("d", arc1);
					
				semiSvg.append("path")
					.attr("class", "arc")
					.attr("d", arc2);
        }
	}
}