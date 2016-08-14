$( document ).ready(function() {
	$('.home-product').each(function(index, value){
		
		var percent = Math.round(Math.random() * 25)
		var chance = Math.round(Math.random() * 2 )
		
		if (chance == 1) {
			percent = percent + 50
			$(value).css("flex-direction","row-reverse")
			$(value).css("text-align","right")
		}
		$(value).css("padding-left",percent + "%")

		var position = Math.round(Math.random() * 3 )

		if (position == 0){
			$(value).find(".product-item").css("top","10px")
			$(value).find(".product-item").css("right","-5px")
		} else if (position == 1){
			$(value).find(".product-item").css("top","200px")
			$(value).find(".product-item").css("left","-5px")
		} else if (position == 2){
			$(value).find(".product-item").css("top","10px")
			$(value).find(".product-item").css("right","80px")
			$(value).find(".product-item").css("transform","rotate(90deg)")
		} else if (position == 3){
			$(value).find(".product-item").css("bottom","15px")
			$(value).find(".product-item").css("right","150px")
		}
	})
});   
