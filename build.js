var Metalsmith  = require('metalsmith'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    markdown    = require('metalsmith-markdown');
    // templates  = require('mustache');

Metalsmith(__dirname)
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
  .use(templates({
    engine: 'mustache',
    partials: {
      menu: 'partials/menu'
    }
  }))
  .destination('./public')
  .build(function(err) {
    if (err) throw err;
  })
