const path = require("path")
const sander = require("sander")
const _cssnext = require("cssnext")

module.exports = function cssnext(inputdir, outputdir, options, next) {
  if (!options.entry) {
    throw new Error("You must supply `options.entry`")
  }

  const entry = path.resolve(inputdir, options.entry)
  const dest = path.resolve(outputdir, options.dest || options.entry)
  options.from = entry
  options.to = dest

  const map = options.map && options.map.inline === false

  return sander.readFile(entry, {encoding: "utf8"}).then(function (src) {
    const output = _cssnext(src, options)

    if (map) {
      return sander.Promise.all([
        sander.writeFile(dest, output.css),
        sander.writeFile(dest + ".map", String(output.map)),
      ])
    } else {
      return sander.writeFile(dest, output)
    }
  })
}
