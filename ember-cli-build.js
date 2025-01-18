'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')('./config/tailwind.config.js'),
          require('autoprefixer'),
        ],
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.config\.js$/],
      },
    },
  });
  app.import('vendor/styles/app.css');

  return app.toTree();
};
