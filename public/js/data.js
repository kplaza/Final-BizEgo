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
      url:"https://access.alchemyapi.com/calls/data/GetNews?apikey=1f0e0d237af3bc98e08d50eca5dcff16a9f452b2&return=enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1479427200&end=1480114800&q.enriched.url.enrichedTitle.entities.entity=|text=" + company + ",type=company|&count=25&outputMode=json",    
      data: {q: ""},
	dataType: "json", 
success: function(response) { 
	console.log(response);} 
 });

 $.ajax({     
 		type: "POST",
      url:"https://access.alchemyapi.com/calls/data/GetNews?apikey=1f0e0d237af3bc98e08d50eca5dcff16a9f452b2&return=enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1479427200&end=1480114800&q.enriched.url.enrichedTitle.entities.entity=|text=" + company + ",type=company|&count=25&outputMode=json&timeSlice=1d",    
      data: {q: ""},
	dataType: "json", 
success: function(response) { 
	console.log(response);} 
 });
}

//  $.ajax({     
//  		type: "POST",
//       url: "https://access.alchemyapi.com/calls/data/GetNews?=&=&start=1479168000&end=1479855600&q.enriched.url.enrichedTitle.entities.entity=|text=apple,type=company|&q.enriched.url.enrichedTitle.docSentiment.type=positive&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=any&count=25&outputMode=json",     
//       data: {apikey: "30ffaa56731717a9f400a7ddf18758fdae57bc73",
//   			return: "enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment",
//   			// start: "1479168000",
//   			// end: "1479855600",
//   		}, 
//  success: function(response) { console.log(response);} 
// });

      // Calculate the count and sum per day
      // date:
        // score: (sum of all scores)
        // count: (number of reviews on that date)
