var animals = [];
function displaygifs() {
	$('#gifArea').empty();
	var word = $(this).attr('value');
	console.log(word);
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=10&api_key=dc6zaTOxFJmzC'  
	$.ajax({url: queryURL, method:'GET'})
		.done(function(response){
		console.log(response);
		var gifs = response.data;

		for (var i=0; i<gifs.length; i++){
			var gifDiv = $('<div>').attr('class', 'searchedDiv');
			gifDiv.append($('<img>',{
				class:'gifclick',
				state: 'still',
				src: gifs[i].images.original_still.url,
				datastill: gifs[i].images.original_still.url,
				dataAnimate: gifs[i].images.original.url,
			}))
			//gifDiv.append(img.attr('src', ))
			gifDiv.append($('<p>').html('Rating: '+ gifs[i].rating))
			$('#gifArea').append(gifDiv);
		}
		return false;
	});	
	
}	
function startStop () {
	var state = $(this).attr('state');
	if(state === 'still') {
		$(this).attr('state', 'animate');
		$(this).attr('src', $(this).attr('dataAnimate'));
	} else if(state === 'animate'){
		$(this).attr('state', 'still');
		$(this).attr('src', $(this).attr('datastill'));
	}
}

$("#smt").on('click', function() {
	$('#buttonPrint').empty();
	animals.push($('#search').val());
	$('#search').val("");
	for(var i=0; i<animals.length; i++){
		var button = $('<button>', {
			id: animals[i],
			val: animals[i],
			class: 'gifsearch',
		});
		$('#buttonPrint').append(button.html(animals[i]));
	}
	
});

$(document).on('click', '.gifsearch', displaygifs);

$(document).on('click', '.gifclick', startStop);
