# sanch941:meteor-esbuild-minifier

Fast JavaScript minifier for Meteor apps

Features:

- Improves build time (30-40%)
- Switches minifier plugin from Terser (Node.js) to Esbuild (Go)

Motivation:

This package is intended to replace the default Meteor minifier. Currently, Meteor uses the `terser` package for minification, which is known to be slower compared to alternatives like `esbuild`, `swc`, and `tdewolff-minify`.

See: [minification benchmarks](https://github.com/privatenumber/minification-benchmarks) 

First, you need to remove `standard-minifier-js` from your app

```shell
meteor remove standard-minifier-js
```

Then add this package with:

```shell
meteor add sanch941:meteor-esbuild-minifier
```

## Attention

This package is a modified version of the standard-minifier-js. I've altered a few lines of code and integrated esbuild for minification purposes. So it's safe to use and tested. Let me know if you have further questions or need additional clarification!



