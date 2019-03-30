exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-media/,
            use: loaders.null(),
          },
          {
            test: /react-responsive-carousel/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
