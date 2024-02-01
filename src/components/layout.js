import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({  pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
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