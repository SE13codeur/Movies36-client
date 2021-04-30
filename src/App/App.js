import * as React from 'react'
import { useAuth } from '../utils/hooks/useLogContext'

import WelcomeMoviesPage from '../pages/Movies/WelcomeMoviesPage'

const HomePage = React.lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/Start/HomePage.js'),
)
const SignPage = React.lazy(() => import('../pages/Start/SignPage'))

const App = () => {

    const { user } = useAuth()
    
  return (
        <React.Suspense fallback={<WelcomeMoviesPage />}>
          
            {user ? <HomePage /> : <SignPage />}
          
        </React.Suspense>
   
  )
}

export default App