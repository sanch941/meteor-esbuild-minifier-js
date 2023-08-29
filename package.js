Package.describe({
  name: 'sanch941:esbuild-minifier-js',
  version: '1.0.3',
  summary: 'Fast esbuild minifier',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: "minifyEstdJS",
  use: [
    'ecmascript@0.16.7'
  ],
  npmDependencies: {
    "@babel/runtime": "7.18.9",
    "esbuild": "0.19.2"
  },
  sources: [
    'plugin/minify-js.js',
    'plugin/stats.js',
  ],
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
