var Metalsmith    = require('metalsmith');
var templates     = require('metalsmith-templates');
var collections   = require('metalsmith-collections');
var permalinks    = require('metalsmith-permalinks');
var markdown      = require('metalsmith-markdown');
var navigation    = require('metalsmith-navigation');
var metallic      = require('metalsmith-metallic');
var beautify      = require('metalsmith-beautify');
var serve         = require('metalsmith-serve');
var sass          = require('metalsmith-sass');
var watch         = require('metalsmith-watch');
// var htmlMinifier  = require('metalsmith-html-minifier');


// Metalsmith(__dirname)
Metalsmith(__dirname)

  // Specify source and destination directories
  .source('source/')
  .destination('./public')

  // Run a simple HTTP server, watch for file changes, and use livereload
  // This server runs by default at: http://localhost:8080
  .use(serve())
  .use(watch({
    pattern : '**/*',
    livereload: true
  }))

  // Use Sass
  .use(sass({
    outputDir: 'css/'
  }))

  // Add syntax highlighting to code snippets
  .use(metallic())

  // Convert markdown files to HTML
  .use(markdown())

  // .use(collections({
  //   pages: {
  //     pattern: 'docs/*/*.md'
  //   },
  //   home: {
  //     pattern: 'docs/*.md'
  //   }
  // }))
  // .use(permalinks({
  //   pattern: ':collection/:title'
  // }))

  // Use mustache template and partial(s)
  .use(templates({
    engine: 'mustache',
    partials: {
      menu: 'partials/menu'
    }
  }))

  // For production use we would minify (note: uncomment require() at the top)
  // .use(htmlMinifier())

  // For development use, we ensure pretty output and simple 2-space tabs
  .use(beautify({
    "indent_size": 2,
    "indent_char": " "
  }))

  // Build it!
  .build(function(err) {
    if (err) throw err;
    console.log(err);
  })
