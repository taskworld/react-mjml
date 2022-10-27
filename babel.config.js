module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        targets: {
          node: true,
          browsers: "defaults", // See https://browsersl.ist/#q=defaults
        }
      }
    ],
    "@babel/preset-react"
  ]
}
