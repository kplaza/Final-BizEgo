var query = 0;


$(document).ready(function(){


	$("#search_form").submit(function(event) {
		event.preventDefault();
		var query = $("#search").val();
		console.log (query);
		request(query);

	});



});

function request(company) {

	$.ajax({     
		type: "POST",
		url:`https://access.alchemyapi.com/calls/data/GetNews?apikey=1f0e0d237af3bc98e08d50eca5dcff16a9f452b2&return=enriched.url.title,enriched.url.url,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1480118400&end=${Date.now().toString().slice(0,10)}&q.enriched.url.enrichedTitle.entities.entity=|text=${company},type=company|&count=10&outputMode=json`,    
		data: {q: ""},
		dataType: "json", 
		success: function(response) { 
			$("#results").html("<tr><th>Top Ten Articles of this week!</th><th>Score</th><th>Type</th></tr>");
			response.result.docs.map( c => ({
				title: c.source.enriched.url.title,
				url: c.source.enriched.url.url,
				score: c.source.enriched.url.enrichedTitle.docSentiment.score,
				type: c.source.enriched.url.enrichedTitle.docSentiment.type
			})).forEach( c => {
				$("#results").append(`<tr>
					<td><a href="${c.url}">${c.title}</a></td>
					<td>${c.score}</td>
					<td>${c.type}</td>
					</tr>`);
			});
		} 
	});

	$.ajax({     
		type: "POST",
		url:`https://access.alchemyapi.com/calls/data/GetNews?apikey=1f0e0d237af3bc98e08d50eca5dcff16a9f452b2&return=enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1480118400&end=1480546800&q.enriched.url.enrichedTitle.entities.entity=|text=${company},type=company|&count=10&outputMode=json&timeSlice=1d`,    
		data: {q: ""},
		dataType: "json", 
		success: function(response) { 
			console.log(response);
			var margin = {top: 20, right: 20, bottom: 70, left: 40},
			width = window.innerWidth - margin.left - margin.right,
			height = (width/4) - margin.top - margin.bottom;

			

			var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

			var y = d3.scale.linear().range([height, 0]);

			var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

			var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.ticks(4);


			var data = response.result.slices.map((c,i)=>({
				day: i+1,
				number: c
			}));

			console.log(data);

			var svg = d3.select("#graph").append("svg")
			.data(data)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", 
				"translate(" + margin.left + "," + margin.top + ")");



			x.domain(data.map(function(d) { return d.day; }));
			y.domain([0, d3.max(data, function(d) { return d.number; })]);

			svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

			svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text");

			svg.selectAll("bar")
			.data(data)
			.enter().append("rect")
			.style("fill", "#FF3B3F")
			.attr("x", function(d) { return x(d.day); })
			.attr("width", x.rangeBand())
			.attr("y", function(d) { return y(d.number); })
			.attr("height", function(d) { return height - y(d.number); });





		} 
	});

}



