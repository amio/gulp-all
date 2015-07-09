# gulp-all

Promise.all for gulp streams, so you can compose a bunch of "private" subtasks.

## Usage

For example:

```javascript
var all = require('gulp-all')

var styl_dir = 'path/to/styles/dir'
var js_dir   = 'path/to/scripts/dir'

function build() {
	return all(
		gulp.src(styl_dir + '/**/*')
			// build Styles
			.pipe(gulp.dest('dist_dir')),
		gulp.src(js_dir + '/**/*')
			// build Scripts
			.pipe(gulp.dest('dist_dir'))
	)
}

gulp.task('build', build)
```

also you can put subtasks in an array:
```javascript
var scriptBundles = [/*...*/]

function build(){
	var subtasks = scriptBundles.map(function(bundle){
		return gulp.src(bundle.src).pipe(/* concat to bundle.target */)
	})
	return all(subtasks)
}
```
