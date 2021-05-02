import * as React from 'react'
import useUser from '../utils/hooks/useUser'
import WithUser from '../context/WithUser'

import WelcomeMoviesPage from '../pages/Movies/WelcomeMoviesPage'

const HomePage = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/Start/HomePage.js'),
)
const SignPage = React.lazy(() => import('../pages/Start/SignPage'))

const App = () => {

    const { user } = useUser()
    
  return (
        <React.Suspense fallback={<WelcomeMoviesPage />}>
          
            {user ? <HomePage /> : <SignPage />}
          
        </React.Suspense>
   
  )
}

export default WithUser(App)