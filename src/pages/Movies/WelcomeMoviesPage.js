import React from 'react'
import { useAuth } from '../../utils/hooks/useLogContext'

import { Alert, AlertTitle } from '@material-ui/lab'


const MoviesPage = () => {

    const { user } = useAuth()

    return (
        <div>
            
            user ? <h1>WELCOME {user.username}</h1> :
                <Alert severity="error">
                    <AlertTitle>Please, log in ^^</AlertTitle>
                        And please, be careful to your<strong> email and password</strong>
                </Alert>
            
        </div>
    )
}

export default MoviesPage