import React from 'react'
import UserContext from './UserContext'


const WithUser = Component => props => (
    <UserContext.Consumer>
        
        {context => <Component {...props} context={context} />}
        
    </UserContext.Consumer>
)

export default WithUser