import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

const Recipee = ({ data }) => {
  const recipee = data.allRecipes.nodes;
  console.log(recipee);
  return (
    <Layout>
      <div className={styles.header}>
        <h3>Recipe</h3>
        {recipee.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Recipee.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    allRecipes {
      nodes {
        id
        title
      }
    }
  }
`;

export default Recipee;
