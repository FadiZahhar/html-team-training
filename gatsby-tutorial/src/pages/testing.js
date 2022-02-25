import React from 'react'
import { graphql } from 'gatsby'

function Testing({data}) {
  const author = data.site.siteMetadata.author
  return (
    <div>
  
    <h2>author : {author}</h2>
    </div>
  )
}

export const data = graphql`
query {
  site {
    siteMetadata {
      author
      description
      simpleData
      title
    }
  }
}
`

export default Testing