var animals = [];

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

$('.gifsearch').on('click', function(){
	
	$.ajax({url: queryURL, method:'GET'})
		.done(function(response){
		console.log(response);
		
	});	

});
