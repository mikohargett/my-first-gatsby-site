// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define Your Component 
const AboutPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

// Step 3: Export Your Component
export default AboutPage
