#Trainer : Raj Prudhvi (Oracle Certified )

# Props Vs State

# props  

    * props get passed to component
    * Function parameters
    * props are immutable
    * Functional Components : props
    * Class Components : this.props

# state

    * state is managed within the component
    * variables declared within function body
    * state can be changed
    * Functional Components : useState Hook
    * Class Components : this.state

# Message.js

        import React, { Component } from 'react'

        export class Message extends Component {
            constructor(props)
            {
                super(props)
                this.state={
                    message:'Welcome Raj'
                }
            }

            changeMessage()
            {
                this.setState({
                    message:'Thank You Raj For Subscribing'
                })
            }

            render() {
                return (
                    <div>
                        <h1>{this.state.message}</h1>
                        <button  onClick={()=>this.changeMessage()} >Subscribe</button>
                    </div>
                )
            }
        }

        export default Message
        
# Important points on state

* Never Modify the state directly and always make use of setState

* Whenever you want some code to be executed after the state has been updated,place that code in call back function which is
  the second argument to setState() method

* When you want to update state based on previous state value , pass in function as an argument to setState() method instead of regular object

# Counter.js

         import React, { Component } from 'react'

          class Counter extends Component {

             constructor(props) {
                 super(props)

                 this.state = {
                      count:0
                 }
             }


             increment()
             {
                 //this.state.count=this.state.count+1

                 this.setState({
                     count:this.state.count+1
                 })

                 console.log(this.state.count)
             }

             render() {
                 return (
                     <div>
                        <h2>Count :{this.state.count}</h2> 
                        <button onClick={()=>this.increment()}>Increment</button>
                     </div>
                 )
             }
         }

         export default Counter


# Counter.js
  
  
         import React, { Component } from 'react'

          class Counter extends Component {

             constructor(props) {
                 super(props)

                 this.state = {
                      count:0
                 }
             }


             increment()
             {

                 this.setState({
                     count:this.state.count+1
                 },()=>{
                     console.log('Call Back Value :',this.state.count)
                 })

                 console.log(this.state.count)

             }

             render() {
                 return (
                     <div>
                        <h2>Count :{this.state.count}</h2> 
                        <button onClick={()=>this.increment()}>Increment</button>
                     </div>
                 )
             }
         }

         export default Counter

# Counter.js
 
 
       import React, { Component } from 'react'

       class Counter extends Component {

          constructor(props) {
              super(props)

              this.state = {
                   count:0
              }
          }


          increment()
          {

              /*
              this.setState({
                  count:this.state.count+1
              },()=>{
                  console.log('Call Back Value :',this.state.count)
              })
              */

              this.setState((prevState)=>({
                  count:prevState.count+1
              }),()=>{
                  console.log('Call Back Value :',this.state.count)
              })

             console.log(this.state.count)
          }

          incrementFour()
          {
              this.increment()
              this.increment()
              this.increment()
              this.increment()
          }

          render() {
              return (
                  <div>
                     <h2>Count :{this.state.count}</h2> 
                     <button onClick={()=>this.incrementFour()}>Increment</button>
                  </div>
              )
          }
      }

      export default Counter

        
        
        
        
        
        
        
        
        
        
        
        
        
        
