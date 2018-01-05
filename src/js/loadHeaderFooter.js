/*定义模块，加载头部和尾部8*/
define(["jquery", "cookie"], function($){
	// 加载头部
	$.ajax("/html/include/header.html").done(function(date){
		$("#header").html(date);
	});
	
	// 加载尾部
	$("#footer").load("/html/include/footer.html");
});