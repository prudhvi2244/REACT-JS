# Trainer : Raj Prudhvi
# Components
* Components describes part of user interface
* They are re-usable and can be nested inside other components
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in 
  isolation and return HTML via a render() function.
* Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

# There are 2 types of components
* Stateless Components [ Functional Components ]
* Stateful Components  [ Class Components ]

# Note : User-Defined Components Must Be Capitalized

* React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.


# Functional Components :

* Functional components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
* They can be contained in a .JS OR JSX files.

# index.js

        //Import React and React DOM Libraries

        import React from "react";
        import ReactDOM from "react-dom";

        //Create React Component

        const App1 = () => <h1>Welcome To React JS By Raj1</h1>;
        const App2 = () => <h1>Welcome To React JS By Raj2</h1>;
        const App3 = () => <h1>Welcome To React JS By Raj3</h1>;
        const App4 = () => <h1>Welcome To React JS By Raj4</h1>;

        //Take React Component and show it on screen

        ReactDOM.render(<App1 />, document.querySelector("#root"));

# Class Components 

* Class Components are regular ES6 classes. However, it’s mandatory that they contain a render() method that return html. they can also be contained in .JS OR JSX File.

# index.js

        //Import React and React DOM Libraries

        import React,{Component} from "react";
        import ReactDOM from "react-dom";

        //Create React Component

        class App extends Component {
            render() {
                return (
                    <div>
                        <h1 style={{color:'green'}}>Welcome To React JS</h1>       
                    </div>
                )
            }
        }

        //Take React Component and show it on screen

        ReactDOM.render(<App />, document.querySelector("#root"));
        
# Note :
* Multiple HTML TAGS have to be enclosed within the div tag.
  
# Functional Components Vs Class Components
# Functionl Components
 * Simple functions
 * Use  Functional Components as much as possible
 * Absence of "this" keyword
 * Solution without using state
 * Mainly responsible for UI
 * Stateless/ Dump /Presentational
 
# Class Components

* More feature fich
* Maintain their own private data - state
* Complex UI logic
* Provide lifecycle hooks
* Stateful / Smart / Container
 
 
 
 
 
 
 
 
  
  



