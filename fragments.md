# Fragments

* A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

# FragmentDemo.js

        import React from 'react'

        function FragmentDemo() {
            return (
                <React.Fragment>
                    <h1>FragmentDemo Component</h1>
                    <p>This is paragraph</p>
                </React.Fragment>
            )
        }

        export default FragmentDemo


# Table.js

        import React from 'react'
        import Columns from './Columns'

        function Table() {
            return (
                <table>
                    <tbody>
                        <tr>
                            <Columns/>
                        </tr>
                    </tbody>
                </table>
            )
        }

        export default Table


# Columns.js

        import React from 'react'

        function Columns() {
            return (
                <React.Fragment>
                    <td>Name</td>
                    <td>Raj Prudhvi</td>
                </React.Fragment>
            )
        }

        export default Columns

# Short Syntax
* There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags

        import React from 'react'

        function Columns() {
            return (
                <>
                    <td>Name</td>
                    <td>Raj Prudhvi</td>
                </>
            )
        }

        export default Columns



# Note : You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes

# Keyed Fragments
* Fragments declared with the explicit <React.Fragment> syntax may have keys. A use case for this is mapping a collection to an array of fragments

# Columns.js

        import React from "react";

        function Columns() {
        const employees = [
            {eid:1,ename:'Raj',ecity:'Bangalore'},
            {eid:2,ename:'Rajeev',ecity:'Goa'},
            {eid:3,ename:'Raja',ecity:'Hyderabad'}
            ]
            

        return employees.map((employee) => (
            <React.Fragment key={employee.eid}>
            <td>{employee.ename}</td>
            <td>{employee.ecity}</td>
            </React.Fragment>
        ));
        }

        export default Columns;
