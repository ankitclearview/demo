const path = require("path");


// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const articles = await graphql(`
//     query MyQuery {
//       allRecipes {
//         nodes {
//           title
//         }
//       }
//     }
//   `);
// };

// articles.data.allRecipes.nodes.map((articlesData) => {
//   createPage({
//     path: articlesData.path.alias,
//     component: path.resolve(`src/templates/article.js`),
//     context: {
//       ArticlesId: articlesData.id,
//     },
//   });
// });

// const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const recipes = await graphql(`
    query MyQuery {
      allRecipes {
        nodes {
          id
          title
        }
      }
    }
  `);

  recipes.data.allRecipes.nodes.map((recipeData) => {
    createPage({
      path: `${recipeData.id}`,
      component: path.resolve(`src/templates/recipe.js`),
      context: {
        title: recipeData.title,
      },
    });
  });
};





// const path = require(`path`);
// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`);
// };
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const recipe = path.resolve(`src/templates/recipe.js`);
//   const result = await graphql(`
//     // query {
//     //   allSamplePages {
//     //     edges {
//     //       node {
//     //         slug
//     //         title
//     //       }
//     //     }
//     //   }
//     // }

//     query MyQuery {
//         allRecipes {
//           edges {
//             node {
//               id
//               title
//             }
//           }
//         }
//       }
//   `);
//   result.data.allRecipes.edges.forEach((edge) => {
//     createPage({
//       path: `${edge.node.id}`,
//       component: recipe,
//       context: {
//         title: edge.node.title,
//       },
//     });
//   });
// };

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const recipeTemplate = path.resolve(`src/templates/recipe.js`);
//     const result = await graphql(`
//       query {
//         allRecipes {
//           edges {
//             node {
//               id
//               title
//             }
//           }
//         }
//       }
//     `);
//     result.data.allRecipes.edges.forEach((edge) => {
//       createPage({
//         path: `${edge.node.id}`,
//         component: recipeTemplate,
//         context: {
//           RecipeId: edge.node.id,
//         },
//       });
//     });
//   };
