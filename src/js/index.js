require(["config"], function(){
	require(["jquery", "load", "carousel"], function($){
		$.ajax({
			type : "get",
			url : "../mock/carouselData.json",
			dataType : "json",
			success : function(data){
				var c = new Carousel({
					imgs: data.res_body.imgs,
					container : $(".container"),
					width : "100%",
					height : 500,
					type: "fade", // 轮播方式 "fade"  "slide"
					duration: 3000,
				})
				c.autoPlay();
			}
		});
	});
});