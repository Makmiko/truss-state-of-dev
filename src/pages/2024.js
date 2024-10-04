import React from "react"
import Results from "../components/Results/index"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___position, order: ASC }
      filter: { fileAbsolutePath: { regex: "/2024/" } }
    ) {
      edges {
        node {
          body
          id
          frontmatter {
            position
            title
          }
        }
      }
    }
  }
`

const Results2024 = ({ data }) => {
  console.log(data.allMdx);
  return <Results data={data} year={2024} />
}

export default Results2024
