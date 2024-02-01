// Step 1: Import React
import * as React from "react"
import Layout from '../components/layout'

// Step 2: Define component 
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
    </Layout>
  )
}

/* Gatsby's Head API lets you define a <title> and other document metadata
which you export to apply to the page */ 
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage