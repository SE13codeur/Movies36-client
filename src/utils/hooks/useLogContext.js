import React, { useContext, useEffect, useState } from 'react'

import HomePage from '../../pages/Start/HomePage'
import * as auth from '../../firebase/authProfider'
import useAsync from './useAsync'

import { Alert, AlertTitle } from '@material-ui/lab'

const connection = time => new Promise(resolve => setTimeout(resolve, time))

const getUser = () => connection(1110).then(() => ({username: "CinéPhil"}))

const LogContext = React.createContext()
LogContext.displayName = 'LogContext'

const LogProvider = (props) => {

  const setState = useState({
      status: 'connecting',
      error: null,
      user: null
  })
        
  const {
      user,
      status,
      isConnecting,
      isIdle,
      isError,
      isSuccess,
      run,
      setData,
  } = useAsync()
    

    useEffect(() => {
        getUser().then(
            user => setState({status: isSuccess, error: null, user}),
            error => setState({status: isError, error, user: null})
      )
      run(getUser)
    }, [isError, isSuccess, run, setState])
    
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

  const value = React.useMemo(() => ({user, login, logout, register}), [
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
    return <LogContext.Provider value={value} {...props} />
  }
  throw new Error(`Unhandled status: ${status}`)

}

const useAuth = () => {

    const context = useContext(LogContext)
  
    // if (context === undefined) {
    //   throw new Error(`useAuth must be used within a LogProvider`)
    // }

}

export { LogProvider, useAuth }