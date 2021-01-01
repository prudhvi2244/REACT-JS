
# ParentComponent.js

        import React, { Component } from 'react'
        import ChildComponent from './ChildComponent'

        class ParentComponent extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    message:'From Parent Component'
                }
                this.greetParent=this.greetParent.bind(this)
            }

            greetParent=()=>
            {
                alert(`Hello , ${this.state.message}`)
            }
            
            render() {
                return (
                    <div>
                        <ChildComponent greetHandler={this.greetParent}/>
                    </div>
                )
            }
        }

        export default ParentComponent

# ChildComponent.js

        import React from 'react'

        function ChildComponent(props) {
            return (
                <div>
                    <button onClick={props.greetHandler}>Greet Parent</button>
                </div>
            )
        }

        export default ChildComponent

# 

# ParentComponent.js

        import React, { Component } from 'react'
        import ChildComponent from './ChildComponent'

        class ParentComponent extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    message:'From Parent Component'
                }
                this.greetParent=this.greetParent.bind(this)
            }

            greetParent=(childName,name)=>
            {
                alert(`Hello , ${this.state.message} from ${childName} , Your Name : ${name}`)
            }
            
            render() {
                return (
                    <div>
                        <ChildComponent greetHandler={this.greetParent}/>
                    </div>
                )
            }
        }

        export default ParentComponent


# ChildComponent.js

        import React from 'react'

        function ChildComponent(props) {
            return (
                <div>
                    <button onClick={()=>props.greetHandler('Child','Raj')}>Greet Parent</button>
                </div>
            )
        }

        export default ChildComponent
