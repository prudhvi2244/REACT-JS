# Pure Components
* React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

# Shallow comparision (SC)
* Primitive Types
 * a (SC) b returns true if a and b have the same value and are of the same type
        Ex : String "Raj" (SC) String "Raj" returns true

* Complex Types
 * a (SC) b returns true if a and b reference the exact same object

        let a=['raj','prudhvi']
        let b=['raj','prudhvi']
        let c=a
        
        let ab_eq=(a===b) //false
        let ac_eq=(a===c) //true

# 
        let e1={eid:1,ename:'Prudhvi'}
        let e2={eid:2,ename:'Raj'}
        let e3=e2

        let e1e2_eq=(e1===e2)//false
        let e2e3_eq=(e2===e3)//true

# RegComp.js

        import React, { Component } from 'react'

        class RegComp extends Component {
            render() {
                console.log('---Regular Component Render Method---')
                return (
                    <div>
                        <h3>Regular Component - {this.props.name}</h3>
                    </div>
                )
            }
        }

        export default RegComp

# PurComp.js

        import React, { PureComponent } from "react";

        class PurComp extends PureComponent {
        render() {
            console.log("---Pure Component Render Method---");
            return (
            <div>
                <h3>Pure Component - {this.props.name}</h3>
            </div>
            );
        }
        }

        export default PurComp;


# ParentComp.js

        import React, { Component } from "react";
        import PurComp from "./PurComp";
        import RegComp from "./RegComp";

        class ParentComp extends Component {
        constructor(props) {
            super(props);

            this.state = {
            name: "Raj",
            };
        }

        componentDidMount() {
            setInterval(() => {
            this.setState({ name: "Raj" });
            }, 3000);
        }

        render() {
            console.log(
            "***************Prent Component render method ****************"
            );
            return (
            <div>
                <h3>Parent Component- {this.state.name}</h3>
                <RegComp name={this.state.name} />
                <PurComp name={this.state.name} />
            </div>
            );
        }
        }

        export default ParentComp;
    


# Summary
* We can create  a component by extending the PureComponent class
* A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparision on the props and state of the component
* If there is no difference , the component is not re-rendered - Performance Boost
* It is a good idea to ensure that all the children components are also pure to avoid unexpected behavior
* Never mutate the state .Always return a new object that reflects the new state
