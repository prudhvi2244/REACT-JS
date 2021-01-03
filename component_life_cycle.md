# The Component Lifecycle
* Whenever we create any component the component goes through several “lifecycle methods” that you can override to run code at particular times in the process

* We can mainly classify the methods into 4 phases

    * Mounting : When an instance of a component is being created and inserted into the DOM
    * Updating : When a component is being re-rendered as a result of changes to either its props or state
    * Unmounting : When a Component is being removed from DOM
    * Error Handling : When there is an error during rendering , in a lifecycle method ,or in the
    constructor of any child component

* In Mounting Phase we have 4 methods 
    * constructor
    * static getDerivedStateFromProps
    * render
    * componentDidMount

* In Updating Phase we have 5 methods
    * static getDerivedStateFromProps
    * shouldComponentUpdate
    * render
    * getSnapShotBeforeUpdate
    * componentDidUpdate

* In Unmounting Phase we have 1 method
    * componentWillUnmount

* Error Handling
    * static getDerivedStateFromError and componentDidCatch


* Mounting Lifecycle Methods
    * constructor(props) 
        * A special function that will get called whenever a new component is created
        * constructor is best suitable for intializing state or Binding event handler for class instance
        * we should not cause side effects in constructor : Ex: HTTP requests
        * First statement should be " super(props) " and we can directly overwrite this.state

    * static getDerivedStateFromProps(props,state)
        * When the state of the component depends on changes in props over time
        * this keyword will not work inside static methods
        * Do not cause side effects : Ex : HTTP Requests
    * render() 
        * Only required method in class component
        * Read props & state and return JSX
        * Do not change stat or interact with DOM or make ajax calls
        * Child components lifecycle methods are also executed
    * componentDidMount()
        * Invoked Immediately after a component and all its children components havce been rendered to the dom
        * Cause side effects .Ex : Interact with DOM orr perform any ajax calls to load data
         


