import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({data}) => {

    return (
        <Layout pageTitle='Our Blog Posts'>
            {
              data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                      <h2>
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                      </h2>
                      <h5> Posted: {node.frontmatter.date}</h5>
                  </article>
              ))
            }


        </Layout>
        
    )
}

export const query = graphql`
query  {
    allMdx(sort: {fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
  `

export const Head = () => <Seo title='Our Blog Posts'/>

export default BlogPage