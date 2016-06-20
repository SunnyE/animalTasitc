var animals = [];
function displaygifs() {
	$('#gifArea').empty();

	var word = $(this).attr('value');
	console.log(word);
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=10&api_key=dc6zaTOxFJmzC'  
	$.ajax({url: queryURL, method:'GET'})
		.done(function(response){
		console.log(response);

	});	
	return false;
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

