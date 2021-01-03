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
