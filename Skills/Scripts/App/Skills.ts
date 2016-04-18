/// <reference path='_references.ts' />

module App
{
	export class Skills
	{
		static go(){            
            var divSvg = d3.select("#skills_svg");
			divSvg.select("svg").remove();
            
            var svg = divSvg.append("svg")
				.attr("width", 500)
				.attr("height", 400)
				.style("background-color", "green");

        }
	}
}