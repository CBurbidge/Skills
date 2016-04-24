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
				
				var arc = d3.svg.arc()
					.innerRadius(50)
					.outerRadius(70)
					.startAngle(0)
					.endAngle(2 * Math.PI);

				svg.append("path")
					.attr("class", "arc")
					.attr("d", arc);
        }
	}
}