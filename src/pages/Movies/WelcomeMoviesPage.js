import React from 'react'
import useUser from '../../utils/hooks/useUser'

import { Alert, AlertTitle } from '@material-ui/lab'


const MoviesPage = () => {

    const user = useUser()

    return (
        <div>
            
            user ? <h1>`WELCOME ${user.username}`</h1> :
                <Alert severity="error">
                    <AlertTitle>Please, SIGN IN :)</AlertTitle>
                        And please, be careful to your<strong> email and password</strong>
                </Alert>
            
        </div>
    )
}

export default MoviesPage