import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

export default function Projects({ data }) {
const projects = data.projects.nodes
const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Project & Websites I have Created</h3>
        <div className={styles.projects}>
          {projects.map(project=>(
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Contact me at {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
{
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date
      }
      id
    }
  }
  contact: site{
    siteMetadata{
      contact
    }
  }
}
`