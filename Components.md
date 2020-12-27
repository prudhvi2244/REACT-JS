# Trainer : Raj Prudhvi
# Components
* Components describes part of user interface
* They are re-usable and can be nested inside other components
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in 
  isolation and return HTML via a render() function.

# There are 2 types of components
* Stateless Components [ Functional Components ]
* Stateful Components  [ Class Components ]

# functional Components :
* Functional components are typically JavaScript functions that return HTML.They can be contained in a .JS OR JSX files.

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



