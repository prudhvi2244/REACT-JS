# Binding Event Handlers

# Example-1

        import React, { Component } from 'react'

        export class EventBind extends Component {

            constructor(props) {
                super(props)
            
                this.state = {
                    message:'Welcome, Guest'
                }
            }

            clickHandler()
            {
                this.setState({
                    message:'Thank Your Subscribing'
                })
            }
            
            render() {
                return (
                    <div>
                        <h4>{this.state.message}</h4>
                        <button onClick={this.clickHandler}>Subscribe</button>
                    </div>
                )
            }
        }

        export default EventBind



* this keyword is undefined in event handler ,this is the reason why event binding is necessary in react class components
* There are lot of ways to bind event handlers in react

        * Using bind keyword in render() method
        * Using arrowfunctions in render() method
        * Binding the event handler in constructor using bind keyword
     

# Example-2 [ using bind keyword in render() method ]

        import React, { Component } from 'react'

        export class EventBind extends Component {

            constructor(props) {
                super(props)
            
                this.state = {
                    message:'Welcome, Guest'
                }
            }

            clickHandler()
            {
                this.setState({
                    message:'Thank Your Subscribing'
                })
            }
            
            render() {
                return (
                    <div>
                        <h4>{this.state.message}</h4>
                        <button onClick={this.clickHandler.bind(this)}>Subscribe</button>
                    </div>
                )
            }
        }

        export default EventBind


# Example-3 [  using arrowfunctions in render() method ]

        import React, { Component } from 'react'

        export class EventBind extends Component {

            constructor(props) {
                super(props)
            
                this.state = {
                    message:'Welcome, Guest'
                }
            }

            clickHandler()
            {
                this.setState({
                    message:'Thank Your Subscribing'
                })
            }
            
            render() {
                return (
                    <div>
                        <h4>{this.state.message}</h4>
                        <button onClick={()=>this.clickHandler()}>Subscribe</button>
                    </div>
                )
            }
        }

        export default EventBind

# Example-4 [ Binding the event handler in constructor using bind keyword ]

        import React, { Component } from 'react'

        export class EventBind extends Component {

            constructor(props) {
                super(props)
            
                this.state = {
                    message:'Welcome, Guest'
                }

                this.clickHandler=this.clickHandler.bind(this)
            }

            clickHandler()
            {
                this.setState({
                    message:'Thank Your Subscribing'
                })
            }
            
            render() {
                return (
                    <div>
                        <h4>{this.state.message}</h4>
                        <button onClick={this.clickHandler}>Subscribe</button>
                    </div>
                )
            }
        }

        export default EventBind



