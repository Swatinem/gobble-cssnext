# gobble-cssnext

Compile CSS files with gobble and cssnext

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-cssnext
```

## Usage

**gobblefile.js**

```js
const gobble = require("gobble")
const css = gobble("css")
  .transform("cssnext", {
    // The entry file for cssnext compilation
    entry: "index.css",
    // The output file, defaults to the same name as the entry file
    dest: "index.css",

    // other options will be passed to cssnext, for example:

    // to enable external source maps:
    map: {inline: false},

    // to inline small assets and copy larger assets with unique filenames:
    url: {
      url: "inline",
      useHash: true,
      maxSize: 10,
      fallback: "copy",
    },
  })

module.exports = css
```


## License

LGPL-3.0 Copyright 2015 Arpad Borsos

