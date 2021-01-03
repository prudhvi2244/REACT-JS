# Error Handling Phase Methods
* static getDerivedStateFromError(error)
* componentDidCatch(error,info)

# Error Boundary
* A class that implements either one or both of the life cycle methods getDerivedStateFromError() or componentDidCatch() becomes an error boundary

* The static method getDerivedStateFromError() is used to render a fallbackUI after an error is thrown and the componentDidCatch() is used to log error information


# Trainer.js

        import React from "react";

        function Trainer({ name }) {
        if (name == "Praveen") {
            throw new Error("Not Expert Trainer");
        }
        return (
            <div>
            <h3>{name}</h3>
            </div>
        );
        }

        export default Trainer;

# ErrorBoundary.js

        import React, { Component } from "react";

        class ErrorBoundary extends Component {
        constructor(props) {
            super(props);

            this.state = {
            isError: false,
            };
        }

        static getDerivedStateFromError(error) {
            return { isError: true };
        }
        render() {
            if (this.state.isError) {
            return <h4 className="text-danger">Something is Wrong</h4>;
            } else {
            return this.props.children;
            }
        }
        }

        export default ErrorBoundary;

# App.js

        import "./App.css";
        import "bootstrap/dist/css/bootstrap.css";
        import ErrorBoundary from "./components/ErrorBoundary";

        function App() {
        return (
            <div className="container text-center">
            <hr />

            <ErrorBoundary>
                <Trainer name="Raj" />
            </ErrorBoundary>
            <ErrorBoundary>
                <Trainer name="Prudhvi" />
            </ErrorBoundary>
            <ErrorBoundary>
                <Trainer name="Praveen" />
            </ErrorBoundary>
            </div>
        );
        }

        export default App;


# Summary
* Error Boundaries are React Components that catch JavaScript error in their child component tree ,log those errors , and display a fall-back UI
* A class that implements either one or both of the life cycle methods getDerivedStateFromError() or componentDidCatch() becomes an error boundary
* The placement of the Error Boundary also matters as it controls ,wheather entire app should have the fall-back UI or just the component causing problem
* Provide a way to gracefully handle error in application code 
