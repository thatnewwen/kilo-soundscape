$( document ).ready(function() {
	$('.product-image').each(function(index, value){
		console.log(value)
		var percent = Math.round(Math.random() * 80) + "%"
		$(value).css("padding-left",percent)
	})
});