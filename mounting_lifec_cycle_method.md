# Mounting Lifecycle Methods
    * constructor(props) 
        * A special function that will get called whenever a new component is created
        * constructor is best suitable for intializing state or Binding event handler for class instance
        * we should not cause side effects in constructor : Ex: HTTP requests
        * First statement should be " super(props) " and we can directly overwrite this.state

    * static getDerivedStateFromProps(props,state)
        * When the state of the component depends on changes in props over time
        * this keyword will not work inside static methods
        * Do not cause side effects : Ex : HTTP Requests
    * render() 
        * Only required method in class component
        * Read props & state and return JSX
        * Do not change stat or interact with DOM or make ajax calls
        * Child components lifecycle methods are also executed
    * componentDidMount()
        * Invoked Immediately after a component and all its children components havce been rendered to the dom
        * Cause side effects .Ex : Interact with DOM orr perform any ajax calls to load data

# LifeCycleA.js

        import React, { Component } from 'react'
        import LifeCycleB from './LifeCycleB'

        class LifeCycleA extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    
                }
                console.log('LifeCycleA Constructor ')
            }
            
            static getDerivedStateFromProps(props,state)
            {
                console.log('LifeCycleA getDerivedStateFromProps')
                return null
            }


            componentDidMount()
            {
                console.log('LifeCycleA ComponentDidMount')
            }

            render() {
                console.log('LifeCycleA render method')
                return (
                    <div>
                        <h3>LifeCycleA</h3> 
                        <LifeCycleB/>           
                    </div>
                )
            }
        }

        export default LifeCycleA

# LifeCycleB.js

import React, { Component } from 'react'

        class LifeCycleB extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    
                }
                console.log('LifeCycleB Constructor ')
            }
            
            static getDerivedStateFromProps(props,state)
            {
                console.log('LifeCycleB getDerivedStateFromProps')
                return null
            }


            componentDidMount()
            {
                console.log('LifeCycleB ComponentDidMount')
            }

            render() {
                console.log('LifeCycleB render method')
                return (
                    <div>
                        <h3>LifeCycleB</h3>            
                    </div>
                )
            }
        }

        export default LifeCycleB
