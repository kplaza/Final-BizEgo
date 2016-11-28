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
      url:`https://access.alchemyapi.com/calls/data/GetNews?apikey=f2376b21eaf8e15607ef3ae97890c41ccbed5f9f&return=enriched.url.title,enriched.url.url,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1479427200&end=${Date.now().toString().slice(0,10)}&q.enriched.url.enrichedTitle.entities.entity=|text=${company},type=company|&count=10&outputMode=json`,    
      data: {q: ""},
	dataType: "json", 
  success: function(response) { 
  	console.log(response);
    $("#results").html("<tr><th>Title</th><th>Score</th><th>Type</th></tr>");
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
      url:`https://access.alchemyapi.com/calls/data/GetNews?apikey=f2376b21eaf8e15607ef3ae97890c41ccbed5f9f&return=enriched.url.title,enriched.url.publicationDate,enriched.url.enrichedTitle.docSentiment&start=1479427200&end=${Date.now().toString().slice(0,10)}&q.enriched.url.enrichedTitle.entities.entity=|text=${company},type=company|&count=25&outputMode=json&timeSlice=1d`,    
      data: {q: ""},
	dataType: "json", 
success: function(response) { 
	console.log(response);} 
 });
}



