// .babelrc.js
module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        runtime: "automatic",
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  env: {
    modern: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true
            },
            modules: false,
            useBuiltIns: "entry",
            corejs: 3
          }
        ]
      ]
    },
    legacy: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
            useBuiltIns: "entry",
            corejs: 3
          }
        ]
      ]
    }
  }
}
