// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'

/* Step 2: Define your component. Note that your component name should start with a capital letter. */
const MyComponent = () => {
    return (
        <div>
            <h1>Hi, welcome to my site!</h1>
            <p>This is a valid component, because there is only one top-level element.</p>
        </div>
    )
}

/* Step 3: Export your component so it can be used by other parts of your app. */
export default MyComponent

/* Your component must return a single React element, but you can put as many elements inside that top-level element as you want. If you try to add multiple top level elements you will get an error. */
