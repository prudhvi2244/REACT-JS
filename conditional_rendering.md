# Conditional Rendering

* if/else
* Element Variables
* Ternary Conditional Operator
* Short Circuit Operator


# If/else statements

# UserGreeting.js

        import React, { Component } from 'react'

        class UserGreeting extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    isLoggedIn:false
                }
            }
            
            render() {
                if(this.state.isLoggedIn)
                {
                return <h2>Welcome ,Prudhvi</h2> 
                }
                else
                {
                    return <h2>Welcome, Guest</h2>
                }
                
            }
        }

        export default UserGreeting


# Element Variables

# UserGreeting.js

        import React, { Component } from 'react'

        class UserGreeting extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    isLoggedIn:true
                }
            }
            
            render() 
            {
            let message

            if(this.state.isLoggedIn)
            {
                message='Welcome, Prudhvi'
            }
            else
            {
                message='Welcome, Guest'
            }

            return <h2>{message}</h2>
                
            }
        }

        export default UserGreeting

# Ternary Conditional Operator

# UserGreeting.js

        import React, { Component } from 'react'

        class UserGreeting extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    isLoggedIn:false
                }
            }
            
            render() 
            {
            return  this.state.isLoggedIn?<h4>Welcome, Prudhvi</h4>:<h4>Welcome, Guest</h4>
            }
        }

        export default UserGreeting


# Short Circuit Operator

# UserGreeting.js

        import React, { Component } from 'react'

        class UserGreeting extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    isLoggedIn:true
                }
            }
            
            render() 
            {
            return  this.state.isLoggedIn && <h4>Welcome, Prudhvi</h4>
            }
        }

        export default UserGreeting

