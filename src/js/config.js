/*
 * 通过config.js中的require.config来配置加载模块的位置
 */
require.config({
	baseUrl : "/",
	// 通过paths给加载模块定义更短，更简洁的名字
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min", "lib/jquery/jquery-1.12.4.min"],
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom",
		"fly" : "lib/jquery_plugins/jquery.fly",
		"template" : "lib/arttemplate/template",
		"load" : "js/loadHeaderFooter",
		"carousel" : "js/xmCarousel"
	},
	// 将不支持AMD的插件垫一下
	shim : {
		"zoom" : {
			deps : ["jquery"]
		}
	}
});
