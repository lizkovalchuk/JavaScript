//LAB 9 - 2 INVENTORY PAGE
//alert("2 - connected");

//hide description

jQuery(document).ready(function() {
	$('.desc').hide();

//on hover, the row turns red


	$('tr').hover(
		function(){
			$(this).css('background','red')
		},
		function(){
			$(this).css('background','white')
		});

//use show method for descripton to appear

	$('tr').click(function(){
		$('.desc').hide();
		$(this).find('.desc').show();
		//$(this).find('.desc').(2000);
	}) // onclick function ends


});

