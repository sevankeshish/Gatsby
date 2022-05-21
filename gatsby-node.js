exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

//for absolute imports
// exports.onCreateWebpackConfig = ({ stage, actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//     },
//   })
// }
