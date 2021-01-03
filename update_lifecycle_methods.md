# Updating Lifecycle Methods

* staticGetDerivedStateFromProps(props,state):
    * This method is called everytime a component is re-rendered
    * set the state
    * Do not cause side effects : Ex: HTTP Requests

* shouldComponentUpdate(nextProps,nextState)
    * Dictates if the component should re-render or not
    * Performance optimization
    * Do not cause side effects : Ex: HTTP Requests

* render()
    * Only Required Method
    * Read props & state and return JSX
    * Do not change state or interact with DOM or make ajax calls

* getSnapShotBeforeUpdate(prevProps,prevState)
    * Called right before the changes from the virual DOM are to be reflected in the DOM
    * Capture some information from the DOM
    * Method will either return a null or return a value.Returned value will be passed as third parameter to the next method

* componentDidUpdate(prevProps , prevState , snapshot) 
    * Called after the render is finished in the re-render cycles
    * cause side effects

# LifeCycleA.js

        import React, { Component } from 'react'
        import LifeCycleB from './LifeCycleB'

        class LifeCycleA extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    name:'Raj'
                }
                console.log('LifeCycleA Constructor ')
            }
            
            static getDerivedStateFromProps(props,state)
            {
                console.log('LifeCycleA getDerivedStateFromProps')
                return null
            }

            shouldComponentUpdate()
            {
                console.log('LifeCycleA shouldComponentUpdate')
                return true
            }

            getSnapshotBeforeUpdate(prevProps,prevState)
            {
                console.log('LifeCycleA getSnaphotBeforeUpdate')
                return null
            }

            componentDidUpdate()
            {
                console.log('LifeCycleA componentDidUpdate')
            }

            componentDidMount()
            {
                console.log('LifeCycleA ComponentDidMount')
            }

            changeState=()=>
            {
                this.setState({
                    name:'Prudhvi'}
                    )
            }

            render() {
                console.log('LifeCycleA render method')
                return (
                    <div>
                        <h3>LifeCycleA - {this.state.name}</h3>
                        <hr/>
                        <button className="btn btn-outline-primary" onClick={this.changeState}>Change State</button> 
                        <hr/>
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

            shouldComponentUpdate()
            {
                console.log('LifeCycleB shouldComponentUpdate')
                return true
            }

            getSnapshotBeforeUpdate(prevProps,prevState)
            {
                console.log('LifeCycleB getSnaphotBeforeUpdate')
                return null
            }

            componentDidUpdate()
            {
                console.log('LifeCycleB componentDidUpdate')
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

