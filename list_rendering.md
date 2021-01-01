# List Rendering

# ListRenderingComponent.js

        import React from 'react'

        function ListRenderingComponent() {
        let names=['Raj','Rajeev','Prudhvi']
            return (
                <div>
                    <h4>{names[0]}</h4>
                    <h4>{names[1]}</h4>
                    <h4>{names[2]}</h4>
                </div>
            )
        }

        export default ListRenderingComponent

# ListRenderingComponent.js

import React from 'react'

        function ListRenderingComponent() {
        let names=['Raj','Rajeev','Prudhvi']
            return (
                <div>
                {
                    names.map(name=><h4>{name.toUpperCase()}</h4>)
                }
                </div>
            )
        }

        export default ListRenderingComponent

# ListRenderingComponent.js

        import React from 'react'

        function ListRenderingComponent() {
        let names=['Raj','Rajeev','Prudhvi']
        let nameList=names.map(name=><h4>{name.toUpperCase()}</h4>)
            return (
                <div>
                {
                    nameList  
                }
                </div>
            )
        }

        export default ListRenderingComponent


# ListRenderingComponent.js

        import React from 'react'

        function ListRenderingComponent() {
        let persons=[
            {
                pname:'Raj',
                pcity:'Bangalore'
            },
            {
                pname:'Rajeev',
                pcity:'Hyderabad'
            },
            {
                pname:'Praveen',
                pcity:'Chennai'
            }

            ]
        let personList=persons.map(person=><h4 style={{color:'green'}}>Person Name :{person.pcity} - City :{person.pcity}</h4>)
            return (
                <div>
                {
                    personList  
                }
                </div>
            )
        }

        export default ListRenderingComponent


