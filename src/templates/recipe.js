// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";

// const Recipe = ({ data }) => {
//   const post = data.nodeRecipes; 
//   console.log(post);

//   return (
//     <Layout>
//       <div>
//         <h1>{post.id}</h1>
//       </div>
//     </Layout>
//   );
// };

// Recipe.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query ($RecipeId: String!) {
//     nodeRecipes(id: { eq: $RecipeId }) {
//       id
//       title
//     }
//   }
// `;



// export default Recipe;
