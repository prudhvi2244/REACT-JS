# Creating First React Application

# Steps To Create And Run React Application

      Step-1 : Generate Project using create-react-app
      Step-2 : Open Command Prompt and Change directory to Project Directory
      Step-3 : npm start
      Step-4 : open browser window and type http://localhost:3000
     
     
# Just Delete files under "src" folder and create new java script file with name index and write the following code

# index.js
  
          //Import React and React DOM Libraries

          import React from "react";
          import ReactDOM from "react-dom";

          //Create React Component

          const App = () => <h1>Welcome To React JS By Raj</h1>;

          //Take React Component and show it on screen

          ReactDOM.render(<App />, document.querySelector("#root"));
