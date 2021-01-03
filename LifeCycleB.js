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
