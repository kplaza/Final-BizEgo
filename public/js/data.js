 $.ajax({     
 		type: "POST",
      url: "https://access.alchemyapi.com/calls/data/GetNews?apikey=30ffaa56731717a9f400a7ddf18758fdae57bc73&return=enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1479168000&end=1479855600&q.enriched.url.enrichedTitle.entities.entity=|text=google,type=company|&q.enriched.url.enrichedTitle.docSentiment.type=positive&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=technology%20and%20computing&count=100&outputMode=json",     
      data: {q: ""}, 
 success: function(response) { console.log(response);} 
});

//  $.ajax({     
//  		type: "POST",
//       url: "https://access.alchemyapi.com/calls/data/GetNews?=&=&=&=&q.enriched.url.enrichedTitle.entities.entity=|text=google,type=company|&q.enriched.url.enrichedTitle.docSentiment.type=positive&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=technology%20and%20computing&count=25&outputMode=json",     
//       data: {apikey: "30ffaa56731717a9f400a7ddf18758fdae57bc73",
//   			return: "enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment",
//   			start: "1479168000",
//   			end: "1479855600",
//   		}, 
//  success: function(response) { console.log(response);} 
// });