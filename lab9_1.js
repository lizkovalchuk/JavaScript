//LAB 9 - 1 FAQ PAGE
//alert("1 - connected");

jQuery(document).ready(function() {
	$('.contentBox').hide();
	$('h2').click(function(){
		$('.contentBox').hide();
		$(this).next('p').toggle(3000);
	}) // onclick function ends

	$('.contentBox').hover(
		function(){
			$(this).css({'background':'#FFE5C3', 'color': '#524737'})
		},
		function(){
			$(this).css({'background':'#524737', 'color': '#FFE5C3'})}
		);

}) // end of jQuery on page load function
