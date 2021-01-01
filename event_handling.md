# Event Handling
* Any webapplication we create typically tends to have user interactions
* When user interacts with your application events are fired like click , mouseover,change event etc
* Application must handle necessary events and execute necessary code
* Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

        * React events are named using camelCase, rather than lowercase.
        * With JSX you pass a function as the event handler, rather than a string.

# Example-1 [ Event Handling In Functional Component ]

        import React from 'react'

        function FunctionClick() {

            function clickHandler()
            {
                console.log('Button Clicked By RAJ')
            }

            return (
                <div>
                    <button onClick={clickHandler}>Click</button>
                </div>
            )
        }

        export default FunctionClick

# Example-2 [ Event Handling In Class Component ]


        import React, { Component } from 'react'

        export class ClassComponent extends Component {
        
            handleButtonClick()
            {
            console.log('Button Clicked By Prudhvi')
            }

            render() {
                return (
                    <div>
                        <button onClick={this.handleButtonClick}>Click</button>
                    </div>
                )
            }
        }

        export default ClassComponent
