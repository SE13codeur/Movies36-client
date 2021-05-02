import React from 'react'
import UserContext from '../../context/User/UserContext'

import HomePage from '../../pages/Start/HomePage'
import * as auth from '../../functions/authentication'
import useAsync from './useAsync'

import { Alert, AlertTitle } from '@material-ui/lab'

export default function UseUser (props)  {
        
    const {
        user,
        isConnecting,
        isIdle,
        isError,
        isSuccess,
        setData,
    } = useAsync()

    
    
    const login = React.useCallback(
        form => auth.login(form).then(user => setData(user)),
        [setData],
    )
    const register = React.useCallback(
        form => auth.register(form).then(user => setData(user)),
        [setData],
    )
    const logout = React.useCallback(() => {
        auth.logout()
        setData(null)
    }, [setData])

    const value = React.useMemo(() => ({ user, login, logout, register }), [
        login,
        logout,
        register,
        user
    ])

    if (isConnecting || isIdle) {
        return <HomePage />
    }

    if (isError) {
        return <Alert severity="error">
            <AlertTitle>Connection error</AlertTitle>
                Be careful with your id -<strong>please check it !!</strong>
        </Alert>
    }

    if (isSuccess) {
        return <UserContext.Provider value={value} {...props} />
    }

}
