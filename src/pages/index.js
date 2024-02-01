// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define component 
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby tutorial.</p>
    </main>
  )
}

/* Gatsby's Head API lets you define a <title> and other document metadata
which you export to apply to the page */ 
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage

/* Gatsby Concepts 

Head: You can use the Gatsby Head API by exporting a named function called Head in your pages and page templates (e.g. the ones used by createPage or the File System Route API). Head must be capitalized. Note that exporting this named function inside a component like Layout won't add the metadata to the <head>. The above works because you're exporting Head inside src/pages.

Routes: Pages created in the src/pages directory use the name of the file as the route for the page. E.g. src/pages/garden-gnomes.js can be accessed at localhost:8000/garden-gnomes.

Building-Block Components: In Gatsby, building-block components refer to the smaller components that represent a part of a the page's user interface. E.g. of building-block components are NavBar, SideBar, ProductGrid and ProductCard, which can be combined into a larger page component. Building-block components can be reused in multiple places across the site, useful for pieces of UI that share a similar structure but render different values. ProductCard components may have the same structure but the values can change. By making ProductCard dynamic, you can reuse the same code for all the products in the ProductGrid. 

Props: React's props (properties) is a built-in feature to help make components dynamic. 

Link: The Link component is an example of a pre-built component you can import to use in your components. It is defined by the (Gatsby) package. The Link component takes a prop called "to" which is similar to <a> tag's "href" attribute. The value is the URL path to the page you want to link to within your site (<a> tag is for external links). The Gatsby Link component offers a performance feature called "preloading" which means the linked page resources are requested when the link scrolls into view or the mouse hovers on it, letting the page load super quickly on the actual click. 

Reusable Layout Component: For repeated parts of the UI, like site title and navigation menu, it's more efficient to create one common Layout component that groups shared elements to reuse across multiple pages. Then you can make changes to the Layout component and it will be updated on all pages using that component. We'll create our first custom building-block component Layout using a special React prop called "children".

Components with children: In addition to the props you can add to your component, React automatically creates certain props for your component. E.g. the children prop. The children prop will automatically be passed whatever content comes between the opening and closing tags for that component, helpful for creating a component that wraps some generic content. The link component uses the children prop. We used it to pass in the text to be hyperlinked. Think of the wrapper component as a picture frame with its own shape and style, but you can swap out the contents with whatever you want. E.g. <Frame> <Painting src='statue.jpg' /> </Frame> where painting can be any picture you want that fits inside the Frame component. 

E.g. 

src/pages/gallery.js

JS

import React from 'react'
import Frame from '../components/frame'

const GalleryPage = () => {
  return (
    <Frame>
      <p>This will be passed in as children</p>
    </Frame>
  )
}

export default GalleryPage 

Then in the component definition, the children prop will get passed whatever elements came between the opening and closing tag. You can render the children prop in your JSX to insert the contents:

src/components/frame.js

JS

import React from 'react'

const Frame = ({ children }) => {
  return (
    <div>
      <h1>This is the page title</h1>
      { children }
    </div>
  )
}

export default Frame 

In the browser the actual DOM elements will look like ... 
<div>
  <h1>This is the page title</h1>
  <p>This will be passed in as children</p>
</div>

*/