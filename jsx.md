# JSX
* JSX is the word which we will hear a lot in the world of React JS
* It is very important to understand what is jsx and why it is used
* JSX ( Java Script XML ) : Extension to java script language syntax
* Write XML - like code for elements and components
* JSX tags have tag name,attributes and children
* JSX is not necessary to write React Applications
* JSX makes your react code simple and elegant
* JSX ultimately transpiles to pure java script which is understood by browsers

# JSX Differences

* class -> className
* for ->htmlFor

# camelCase propery naming convention
    * onclick  -> onClick
    * tabindex -> tabIndex

# Example - 1

        import React from 'react'

        const SimpleComponent=()=>
        {
            // return(
            //     <div>
            //         <h1>Welcome Prudhvi</h1>
            //     </div>
            // )

        return React.createElement('div',
                {id:'hello',className:'dummyClass'},
                React.createElement('h1',null,'Welcome Prudhvi'))

        }

        export default SimpleComponent