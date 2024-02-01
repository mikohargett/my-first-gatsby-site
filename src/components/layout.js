import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({  pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <link><Link to="/">Home</Link></link>
                    <link><Link to="/about">About</Link></link>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout 

/* 
Syntax hint: You may have noticed that the Layout component uses a slightly different syntax for its props. 

Instead of ...

JS
const Layout = (props) => {
    ...
}

...it looks like:

JS
const Layout = ({ pageTitle, children }) => {
    ...
}

This is a JS technique called destructuring, a shortcut for defining variables based on an object's properties. "Take the object that gets passed into this function, and unpack its pageTitle and children properties into their own variables."

*/