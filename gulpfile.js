/* gulp任务配置 */
let gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	htmlmin = require("gulp-htmlmin"),
	babel = require("gulp-babel"), // 解决压缩ES6 的问题
	sass = require("gulp-sass"),
	connect = require("gulp-connect"); // 解决本地服务器

// 启动服务器
gulp.task("connect", function(){
	connect.server({
		root : "dist", // 将dist设置为服务器根目录
		livereload : true,
		port : 8080 // 端口
	}); // 设置本地服务器
});

// 压缩html
gulp.task("html", function(){
	gulp.src("src/**/*.html") // 任务针对文件路径 ** 任意目录下的html
	    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS:true})) // 执行功能模块
	    .pipe(gulp.dest("dist")) // 输出路径
		.pipe(connect.reload()); // 
});

// 压缩JS
gulp.task("js", function(){
	gulp.src("src/js/*.js")
		.pipe(babel({
			presets : ["es2015"]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
});

// 复制lib资源，images资源，mock数据资源
gulp.task("lib", function(){
	gulp.src(["src/lib/**/*.*"])
		.pipe(gulp.dest("dist/lib"));
});
gulp.task("images", function(){
	gulp.src(["src/images/**/*.*"])
		.pipe(gulp.dest("dist/images"));
});
gulp.task("mock", function(){
	gulp.src(["src/mock/**/*.*"])
		.pipe(gulp.dest("dist/mock"));
});
// 创建copy任务来执行全部复制任务
gulp.task("copy", ["lib", "images", "mock"]);

// 编译SASS
gulp.task("sass", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle:"compressed"}))
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
});

// 监视文件修改
gulp.task("watch", function(){
	gulp.watch("src/sass/*.scss", ["sass"]);
	gulp.watch("src/js/*.js", ["js"]);
	gulp.watch("src/**/*.html", ["html"]);
});

// 默认任务
gulp.task("default", ["connect", "copy", "html", "js", "sass", "watch"]);