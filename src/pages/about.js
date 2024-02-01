// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define Your Component 
const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <Link to="/">Back to home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

// Step 3: Export Your Component
export default AboutPage
