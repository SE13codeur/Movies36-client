import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
 
const connection = time => new Promise(resolve => setTimeout(resolve, time))

const UserProvider = (props) => {
  
  const getUser = () => connection(1000).then(() => (
  { username: "CinéPhil" }
))
 
  const [state, setState] = useState({
      username: "CinéPhil",
      email: "cine-phil@gmail.com",
      status: 'pending',
      error: null,
      user: null
    })
    useEffect(() => {
        getUser().then(
            user => setState({ status: 'Success', error: null, user }),
            error => setState({ status: 'Error', error, user: null })
        )
    }, [])

  const signInClick = user => {
        setState({ user })
    }

    return (
        <UserContext.Provider
            value={{
                state,
                signInClick: user => signInClick(user)
            }}
        >
            
            {props.children}
            
      </UserContext.Provider>
      
    )
}

export default UserProvider