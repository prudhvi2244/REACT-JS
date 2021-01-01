# props

* props are inputs passed to a function
* props are immutable ,it means value cannot be changed

# Example-1

        import React from 'react'

        function DemoComponent(props) {
            return (
                <div>
                    <h1 style={{color:"green"}}>Welcome To Demo Component</h1>
                    <h2 style={{color:"blue"}}>Welcome :{props.name}</h2>
                    <h2>City :{props.city}</h2>
                    {props.children}
                    <hr/>
                </div>
            )
        }

        export default DemoComponent

# Example-2

import React, { Component } from 'react'

        export class ClassComponent extends Component {
            render() {
                return (
                    <div>
                        <h1 style={{color:"green"}}>Welcome To Demo Component</h1>
                        <h2 style={{color:"blue"}}>Welcome: {this.props.name}</h2>
                        <h2>City : {this.props.city}</h2>
                        {this.props.children}
                        <hr/>
                    </div>
                )
            }
        }

        export default ClassComponent
