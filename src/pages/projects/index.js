import React from 'react'
import * as styles from '../../styles/projects.module.css'
import Layout from '../../components/Layout'

const projects = () => {
  return (
    <Layout>
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've Created</h3>
    </div>
  </Layout>
  )
}

export default projects